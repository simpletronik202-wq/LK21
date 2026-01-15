import { useState, useEffect, useCallback, useRef } from 'react';
import { adsterraConfig, getRandomSmartLink, getPageType, shouldShowAd } from '../utils/adsterraConfig';

export const useAdsterra = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  const [deviceType, setDeviceType] = useState('desktop');
  const [pageType, setPageType] = useState('home');
  const [adsLoaded, setAdsLoaded] = useState(false);
  
  const adScriptsLoaded = useRef(new Set());

  // Deteksi device type
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDeviceType(width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Deteksi page type
  useEffect(() => {
    const updatePageType = () => {
      setPageType(getPageType(window.location.pathname));
    };
    
    updatePageType();
    window.addEventListener('popstate', updatePageType);
    return () => window.removeEventListener('popstate', updatePageType);
  }, []);

  // Deteksi AdBlock
  useEffect(() => {
    if (!adsterraConfig.settings.adBlockDetection) return;

    const detectAdBlock = () => {
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'ad-test';
      testAd.style.cssText = 'position: absolute; left: -9999px; top: -9999px; height: 1px; width: 1px;';
      document.body.appendChild(testAd);
      
      setTimeout(() => {
        const isBlocked = testAd.offsetHeight === 0;
        setAdBlockDetected(isBlocked);
        document.body.removeChild(testAd);
      }, 100);
    };

    detectAdBlock();
  }, []);

  // Load script helper
  const loadAdScript = useCallback((src, options = {}) => {
    return new Promise((resolve, reject) => {
      if (adBlockDetected) {
        reject(new Error('AdBlock detected'));
        return;
      }

      if (adScriptsLoaded.current.has(src)) {
        resolve();
        return;
      }

      // Cek apakah iklan ini boleh ditampilkan di halaman ini
      if (!shouldShowAd(options.adType, deviceType, pageType)) {
        reject(new Error(`Ad type ${options.adType} not allowed on ${pageType} page`));
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      
      if (src.includes('fundingfashioned.com')) {
        script.setAttribute('data-cfasync', 'false');
        script.setAttribute('data-adsterra', 'true');
      }

      if (options.config) {
        const configScript = document.createElement('script');
        configScript.textContent = `atOptions = ${JSON.stringify(options.config)}`;
        document.head.appendChild(configScript);
      }

      script.onload = () => {
        adScriptsLoaded.current.add(src);
        
        // Update ad count
        const currentCount = parseInt(sessionStorage.getItem(`ad_count_${pageType}`) || '0');
        sessionStorage.setItem(`ad_count_${pageType}`, (currentCount + 1).toString());
        
        resolve();
      };

      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        reject(new Error(`Script load failed: ${src}`));
      };

      setTimeout(() => {
        document.head.appendChild(script);
      }, options.delay || 0);
    });
  }, [adBlockDetected, deviceType, pageType]);

  // Load Native Banner
  const loadNativeBanner = useCallback(async (position = 'header') => {
    if (!adsterraConfig.nativeBanner.enabled) return false;

    try {
      await loadAdScript(adsterraConfig.nativeBanner.scriptSrc, {
        adType: `native-${position}`,
        delay: position === 'header' ? 500 : 3000
      });
      return true;
    } catch (error) {
      console.error(`Failed to load native banner at ${position}:`, error);
      return false;
    }
  }, [loadAdScript]);

  // Load Banner 728x90
  const loadBanner728x90 = useCallback(async (position = 'top') => {
    if (!adsterraConfig.banner728x90.enabled) return false;
    
    // Jangan tampilkan 728x90 di mobile
    if (deviceType === 'mobile') return false;

    try {
      await loadAdScript(adsterraConfig.banner728x90.scriptSrc, {
        adType: '728x90',
        config: adsterraConfig.banner728x90.config,
        delay: position === 'top' ? 1000 : 5000
      });
      return true;
    } catch (error) {
      console.error(`Failed to load 728x90 banner at ${position}:`, error);
      return false;
    }
  }, [loadAdScript, deviceType]);

  // Load Banner 300x250
  const loadBanner300x250 = useCallback(async (position = 'betweenContent') => {
    if (!adsterraConfig.banner300x250.enabled) return false;

    try {
      await loadAdScript(adsterraConfig.banner300x250.scriptSrc, {
        adType: '300x250',
        config: adsterraConfig.banner300x250.config,
        delay: 2000
      });
      return true;
    } catch (error) {
      console.error(`Failed to load 300x250 banner at ${position}:`, error);
      return false;
    }
  }, [loadAdScript]);

  // Load Social Bar
  const loadSocialBar = useCallback(async () => {
    if (!adsterraConfig.socialBar.enabled) return false;
    
    const currentPath = window.location.pathname;
    
    // Cek apakah di halaman yang diperbolehkan
    const isAllowed = adsterraConfig.socialBar.onlyOnPages.some(
      page => currentPath.startsWith(page)
    );
    
    if (!isAllowed) return false;
    
    // Cek apakah di halaman yang dikecualikan
    const isExcluded = adsterraConfig.socialBar.excludePages.some(
      page => currentPath.startsWith(page)
    );
    
    if (isExcluded) return false;

    try {
      await loadAdScript(adsterraConfig.socialBar.scriptSrc, {
        adType: 'social-bar',
        delay: adsterraConfig.socialBar.loadDelay
      });
      return true;
    } catch (error) {
      console.error('Failed to load social bar:', error);
      return false;
    }
  }, [loadAdScript]);

  // Redirect to SmartLink
  const redirectToSmartLink = useCallback(() => {
    if (adBlockDetected) {
      alert('Please disable AdBlock to download');
      return false;
    }

    const link = getRandomSmartLink();
    window.open(link, '_blank', 'noopener,noreferrer');
    return true;
  }, [adBlockDetected]);

  // Initialize all ads based on page type
  const initializeAds = useCallback(async () => {
    if (adBlockDetected) {
      console.log('Ads disabled due to AdBlock');
      return;
    }

    try {
      // Reset ad count untuk halaman ini
      sessionStorage.setItem(`ad_count_${pageType}`, '0');

      // Load ads berdasarkan page type
      switch (pageType) {
        case 'home':
          await loadNativeBanner('header');
          await loadBanner728x90('top');
          setTimeout(() => loadBanner300x250('betweenContent'), 2000);
          setTimeout(() => loadBanner728x90('bottom'), 4000);
          break;
          
        case 'detail':
          await loadNativeBanner('header');
          setTimeout(() => loadBanner300x250('sidebar'), 1500);
          setTimeout(() => loadNativeBanner('middle'), 3000);
          setTimeout(() => loadSocialBar(), 8000);
          setTimeout(() => loadNativeBanner('footer'), 10000);
          break;
          
        case 'search':
          await loadNativeBanner('header');
          setTimeout(() => loadBanner728x90('bottom'), 3000);
          break;
          
        default:
          await loadNativeBanner('header');
          setTimeout(() => loadNativeBanner('footer'), 3000);
      }

      setAdsLoaded(true);
    } catch (error) {
      console.error('Error initializing ads:', error);
    }
  }, [adBlockDetected, pageType, loadNativeBanner, loadBanner728x90, loadBanner300x250, loadSocialBar]);

  return {
    // State
    adBlockDetected,
    adsLoaded,
    deviceType,
    pageType,
    
    // Actions
    loadNativeBanner,
    loadBanner728x90,
    loadBanner300x250,
    loadSocialBar,
    redirectToSmartLink,
    initializeAds,
    
    // Helpers
    getRandomSmartLink
  };
};
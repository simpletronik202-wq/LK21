import { useState, useEffect, useCallback, useRef } from 'react';
import { adsterraConfig, getRandomSmartLink } from '../utils/adsterraConfig';

export const useAdsterra = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  const [smartLinkIndex, setSmartLinkIndex] = useState(0);
  const [adsLoaded, setAdsLoaded] = useState(false);
  const [userConsent, setUserConsent] = useState(null);
  const [impressionCount, setImpressionCount] = useState({
    banner: 0,
    smartlink: 0,
    lastReset: Date.now()
  });
  
  const adScriptsLoaded = useRef({
    nativeBanner: false,
    socialBar: false,
    popunder: false
  });

  // Deteksi AdBlock
  useEffect(() => {
    const detectAdBlock = () => {
      try {
        const ad = document.createElement('div');
        ad.innerHTML = '&nbsp;';
        ad.className = 'ad-box';
        ad.style.position = 'absolute';
        ad.style.left = '-9999px';
        ad.style.top = '-9999px';
        ad.style.height = '1px';
        document.body.appendChild(ad);
        
        setTimeout(() => {
          const isBlocked = ad.offsetHeight === 0;
          setAdBlockDetected(isBlocked);
          
          if (isBlocked) {
            console.warn('AdBlock terdeteksi, ads akan dimatikan.');
            // Berikan opsi kepada user
            localStorage.setItem('adblock_warning_shown', 'true');
          }
          
          document.body.removeChild(ad);
        }, 100);
      } catch (error) {
        console.error('Error detecting adblock:', error);
      }
    };

    // Cek apakah user sudah disable adblock warning
    const warningShown = localStorage.getItem('adblock_warning_shown');
    if (!warningShown) {
      detectAdBlock();
    }
  }, []);

  // Reset impression count setiap jam
  useEffect(() => {
    const interval = setInterval(() => {
      setImpressionCount({
        banner: 0,
        smartlink: 0,
        lastReset: Date.now()
      });
    }, 3600000); // 1 jam

    return () => clearInterval(interval);
  }, []);

  // Load script helper
  const loadAdScript = useCallback((src, options = {}) => {
    return new Promise((resolve, reject) => {
      // Cek frequency cap
      if (options.type === 'banner' && impressionCount.banner >= adsterraConfig.settings.frequencyCap.bannerPerHour) {
        console.log('Frequency cap reached for banners');
        reject(new Error('Frequency cap reached'));
        return;
      }

      // Cek apakah script sudah diload
      const scriptId = src.split('/').pop().split('.')[0];
      if (adScriptsLoaded.current[scriptId]) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = options.async !== false;
      script.defer = options.defer !== false;
      
      // Tambahkan atribut untuk menghindari deteksi adblock
      script.setAttribute('data-cfasync', 'false');
      script.setAttribute('data-adsterra', 'true');
      script.setAttribute('type', 'text/javascript');
      
      if (options.id) {
        script.id = options.id;
      }

      script.onload = () => {
        adScriptsLoaded.current[scriptId] = true;
        if (options.type === 'banner') {
          setImpressionCount(prev => ({
            ...prev,
            banner: prev.banner + 1
          }));
        }
        resolve();
      };

      script.onerror = (error) => {
        console.error(`Failed to load ad script: ${src}`, error);
        reject(error);
      };

      // Delay loading untuk UX
      setTimeout(() => {
        if (adBlockDetected) {
          reject(new Error('AdBlock detected'));
          return;
        }
        
        document.head.appendChild(script);
      }, options.delay || 0);
    });
  }, [adBlockDetected, impressionCount]);

  // Load Native Banner
  const loadNativeBanner = useCallback(async (position = 'middle') => {
    if (!adsterraConfig.nativeBanner.enabled || adBlockDetected) {
      return false;
    }

    try {
      const positionConfig = adsterraConfig.nativeBanner.positions[position];
      if (!positionConfig || !positionConfig.enabled) {
        return false;
      }

      // Tunggu elemen target tersedia
      await new Promise((resolve) => {
        const checkElement = () => {
          const target = document.querySelector(positionConfig.selector);
          if (target) {
            resolve(target);
          } else {
            setTimeout(checkElement, 100);
          }
        };
        checkElement();
      });

      // Load script
      await loadAdScript(adsterraConfig.nativeBanner.scriptSrc, {
        delay: 2000,
        type: 'banner'
      });

      return true;
    } catch (error) {
      console.error(`Error loading native banner at ${position}:`, error);
      return false;
    }
  }, [adBlockDetected, loadAdScript]);

  // Load Social Bar
  const loadSocialBar = useCallback(async () => {
    if (!adsterraConfig.socialBar.enabled || adBlockDetected) {
      return false;
    }

    // Cek halaman yang dikecualikan
    const currentPath = window.location.pathname;
    if (adsterraConfig.socialBar.excludePages.includes(currentPath)) {
      return false;
    }

    try {
      await loadAdScript(adsterraConfig.socialBar.scriptSrc, {
        delay: adsterraConfig.socialBar.loadDelay
      });
      return true;
    } catch (error) {
      console.error('Error loading social bar:', error);
      return false;
    }
  }, [adBlockDetected, loadAdScript]);

  // Redirect ke SmartLink
  const redirectToSmartLink = useCallback(() => {
    if (adBlockDetected) {
      alert('Please disable AdBlock to access premium content');
      return false;
    }

    // Cek frequency cap
    if (impressionCount.smartlink >= adsterraConfig.settings.frequencyCap.smartlinkPerSession) {
      alert('Maximum downloads reached for this session');
      return false;
    }

    const link = getRandomSmartLink();
    
    // Buka di tab baru
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
    
    // Fallback jika popup diblokir
    if (!newWindow || newWindow.closed) {
      window.location.href = link;
    }

    // Update impression count
    setImpressionCount(prev => ({
      ...prev,
      smartlink: prev.smartlink + 1
    }));

    return true;
  }, [adBlockDetected, impressionCount.smartlink]);

  // Initialize semua ads
  const initializeAds = useCallback(async () => {
    if (adBlockDetected) {
      console.log('Ads disabled due to AdBlock');
      return;
    }

    try {
      // Load banner di posisi berbeda dengan delay
      setTimeout(() => loadNativeBanner('header'), 1000);
      setTimeout(() => loadNativeBanner('middle'), 5000);
      setTimeout(() => loadNativeBanner('footer'), 10000);
      
      // Load social bar
      setTimeout(() => loadSocialBar(), 8000);

      setAdsLoaded(true);
    } catch (error) {
      console.error('Error initializing ads:', error);
    }
  }, [adBlockDetected, loadNativeBanner, loadSocialBar]);

  return {
    adBlockDetected,
    adsLoaded,
    userConsent,
    setUserConsent,
    impressionCount,
    loadNativeBanner,
    loadSocialBar,
    redirectToSmartLink,
    initializeAds,
    getRandomSmartLink
  };
};
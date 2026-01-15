// utils/adsterraConfig.js - VERSI UTUH TANPA PISAH FILE
// FIXED: Tidak ada circular dependency

// ================= KONFIGURASI UTAMA =================
const CONFIG = {
  // ================= NATIVE BANNER (Utama) =================
  nativeBanner: {
    scriptSrc: "https://fundingfashioned.com/ad1ee1816ddebc11a35ac98d10fb7142/invoke.js",
    containerId: "container-ad1ee1816ddebc11a35ac98d10fb7142",
    enabled: true,
    positions: {
      // Banner di HEADER (setelah navbar)
      header: {
        enabled: true,
        selector: "header",
        insert: "after",
        refreshInterval: 30 // menit
      },
      // Banner di ANTARA KONTEN (setelah movie cards)
      middle: {
        enabled: true,
        selector: ".movie-grid",
        insert: "after",
        maxPerPage: 2
      },
      // Banner sebelum FOOTER
      footer: {
        enabled: true,
        selector: "footer",
        insert: "before"
      }
    }
  },

  // ================= BANNER 728x90 =================
  banner728x90: {
    enabled: true,
    scriptSrc: "https://fundingfashioned.com/3969e67c81a228c49622cb8efea1dfa5/invoke.js",
    config: {
      key: '3969e67c81a228c49622cb8efea1dfa5',
      format: 'iframe',
      height: 90,
      width: 728
    },
    positions: {
      top: { enabled: true, afterElement: "nav" },
      bottom: { enabled: true, beforeElement: "footer" }
    }
  },

  // ================= BANNER 300x250 =================
  banner300x250: {
    enabled: true,
    scriptSrc: "https://fundingfashioned.com/281675f0b8e17085c091546568268954/invoke.js",
    config: {
      key: '281675f0b8e17085c091546568268954',
      format: 'iframe',
      height: 250,
      width: 300
    },
    positions: {
      sidebar: { enabled: true, selector: ".sidebar" }, // jika ada sidebar
      betweenContent: { enabled: true, afterEvery: 6 } // setelah setiap 6 movie cards
    }
  },

  // ================= SOCIAL BAR =================
  socialBar: {
    scriptSrc: "https://fundingfashioned.com/0e/dd/aa/0eddaacfb0675163e55b188fa496a91c.js",
    enabled: true,
    loadDelay: 10000, // 10 detik
    minScroll: 70, // muncul setelah scroll 70%
    
    // HANYA di halaman dengan engagement tinggi
    onlyOnPages: [
      '/movie/',    // Detail movie
      '/tv/',       // Detail TV show
      '/watch/'     // Player page
    ],
    
    // TIDAK di halaman ini
    excludePages: [
      '/',          // Homepage
      '/search',
      '/login',
      '/register',
      '/profile'
    ]
  },

  // ================= SMARTLINKS =================
  smartLinks: [
    'https://fundingfashioned.com/yed8kj7bvw?key=b7830767455354f8e097df2a9e0f040c',
    'https://fundingfashioned.com/wdhedf2wx?key=a2c98838af4390b59e8b7aaaea3f1660',
    'https://fundingfashioned.com/nu4ravi1cx?key=4d0556009c2d17968977e235d5de925a',
    'https://fundingfashioned.com/u1ipxidjif?key=bf544685cc418fde38d3de4391de6fee',
    'https://fundingfashioned.com/gh4tkda15?key=080742d09d4b5234a4fdaa773e48ebd4',
    'https://fundingfashioned.com/paij3re0by?key=fa60f72b73c05d987bd978f83a6deaa8',
    'https://fundingfashioned.com/gd8bwkyj?key=d2d35cf16f521bf5e9accfdd865dae8f',
    'https://fundingfashioned.com/x818nj48?key=db0a9d9fa9d81626b459383a7bdc33ee',
    'https://fundingfashioned.com/w2sw8zgx21?key=d34ca1378210247721e98e65d20b3693',
    'https://fundingfashioned.com/qn92sfcb?key=a8333f15c6bba15e367a5456f691547c'
  ],

  // ================= PENGATURAN UMUM =================
  settings: {
    adBlockDetection: true,
    lazyLoad: true,
    maxAdsPerPage: 5,
    
    frequencyCap: {
      nativePerHour: 3,
      bannerPerHour: 4,
      socialBarPerSession: 2
    },
    
    userFriendly: {
      delayBetweenAds: 15000, // 15 detik
      respectUserFocus: true,
      
      // Strategi per halaman
      pageStrategies: {
        home: {
          ads: ['native-header', '728x90-top', '300x250-middle', '728x90-bottom'],
          maxAds: 4
        },
        detail: {
          ads: ['native-header', '300x250-sidebar', 'native-middle', 'social-bar', 'native-footer'],
          maxAds: 5
        },
        search: {
          ads: ['native-header', '728x90-bottom'],
          maxAds: 2
        }
      }
    },
    
    deviceSettings: {
      mobile: {
        enabled: true,
        show728x90: false, // 728x90 terlalu besar untuk mobile
        show300x250: true,
        maxAds: 3
      },
      desktop: {
        enabled: true,
        show728x90: true,
        show300x250: true,
        maxAds: 5
      }
    }
  }
};

// ================= EKSPOR KONFIGURASI =================
export const adsterraConfig = CONFIG;

// ================= HELPER FUNCTIONS =================
export const getRandomSmartLink = () => {
  const links = CONFIG.smartLinks; // ✅ PAKAI CONSTANT CONFIG, BUKAN adsterraConfig
  return links[Math.floor(Math.random() * links.length)];
};

export const getPageType = (pathname) => {
  if (pathname.startsWith('/movie/') || pathname.startsWith('/tv/')) return 'detail';
  if (pathname.startsWith('/search')) return 'search';
  if (pathname.startsWith('/genre/') || pathname.startsWith('/category/')) return 'category';
  return 'home';
};

export const shouldShowAd = (adType, device = 'desktop', pageType = 'home') => {
  const deviceConfig = CONFIG.settings.deviceSettings[device]; // ✅ PAKAI CONFIG
  const pageConfig = CONFIG.settings.userFriendly.pageStrategies[pageType];
  
  if (!deviceConfig || !deviceConfig.enabled) return false;
  if (!pageConfig || !pageConfig.ads.includes(adType)) return false;
  
  // Cek jumlah ads yang sudah muncul
  const adCount = parseInt(sessionStorage.getItem(`ad_count_${pageType}`) || '0');
  return adCount < pageConfig.maxAds;
};

export const incrementAdCount = (pageType) => {
  const currentCount = parseInt(sessionStorage.getItem(`ad_count_${pageType}`) || '0');
  sessionStorage.setItem(`ad_count_${pageType}`, (currentCount + 1).toString());
  
  // Reset setiap jam untuk frequency cap
  setTimeout(() => {
    sessionStorage.setItem(`ad_count_${pageType}`, '0');
  }, 60 * 60 * 1000); // 1 jam
};

export const isSocialBarAllowed = (currentPath) => {
  // Cek apakah path termasuk yang dikecualikan
  for (const excludedPath of CONFIG.socialBar.excludePages) {
    if (currentPath === excludedPath) return false;
  }
  
  // Cek apakah path termasuk yang diizinkan
  for (const allowedPath of CONFIG.socialBar.onlyOnPages) {
    if (currentPath.startsWith(allowedPath)) return true;
  }
  
  return false;
};

export const getDeviceType = () => {
  if (typeof window === 'undefined') return 'desktop';
  
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Cek mobile
  if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())) {
    return 'mobile';
  }
  
  // Cek tablet
  if (/tablet|ipad|playbook|silk/i.test(userAgent.toLowerCase())) {
    return 'tablet';
  }
  
  return 'desktop';
};

export const getAdPositionConfig = (adType, position) => {
  switch (adType) {
    case 'native':
      return CONFIG.nativeBanner.positions[position];
    case '728x90':
      return CONFIG.banner728x90.positions[position];
    case '300x250':
      return CONFIG.banner300x250.positions[position];
    default:
      return null;
  }
};

// ================= UTILITY LAINNYA =================
export const formatAdKey = (adType) => {
  const keyMap = {
    'native-header': 'native_header_ads',
    'native-middle': 'native_middle_ads',
    'native-footer': 'native_footer_ads',
    '728x90-top': 'banner_728_top',
    '728x90-bottom': 'banner_728_bottom',
    '300x250-sidebar': 'banner_300_sidebar',
    '300x250-middle': 'banner_300_middle',
    'social-bar': 'social_bar_ads'
  };
  
  return keyMap[adType] || adType;
};

export const canLoadAd = (adType, position = null) => {
  const device = getDeviceType();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const pageType = getPageType(pathname);
  
  // Cek apakah ad type diizinkan untuk device
  if (adType === '728x90' && device === 'mobile') {
    return false;
  }
  
  // Cek apakah ad type diizinkan untuk page type
  const pageStrategy = CONFIG.settings.userFriendly.pageStrategies[pageType];
  if (!pageStrategy || !pageStrategy.ads.includes(adType)) {
    return false;
  }
  
  // Cek apakah position diizinkan
  if (position) {
    const positionConfig = getAdPositionConfig(adType, position);
    if (!positionConfig || !positionConfig.enabled) {
      return false;
    }
  }
  
  // Cek frequency cap
  return shouldShowAd(adType, device, pageType);
};

// ================= DEFAULT EXPORT =================
export default {
  config: CONFIG,
  getRandomSmartLink,
  getPageType,
  shouldShowAd,
  incrementAdCount,
  isSocialBarAllowed,
  getDeviceType,
  getAdPositionConfig,
  formatAdKey,
  canLoadAd
};
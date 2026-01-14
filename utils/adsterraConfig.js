export const adsterraConfig = {
  // Native Banner
  nativeBanner: {
    scriptSrc: "https://fundingfashioned.com/ad1ee1816ddebc11a35ac98d10fb7142/invoke.js",
    containerId: "container-ad1ee1816ddebc11a35ac98d10fb7142",
    enabled: true,
    positions: {
      header: {
        enabled: true,
        selector: "header",
        insert: "after",
        mobile: true,
        desktop: true
      },
      middle: {
        enabled: true,
        selector: ".container.mx-auto.px-4.py-12",
        insert: "prepend",
        mobile: true,
        desktop: true
      },
      footer: {
        enabled: true,
        selector: "footer",
        insert: "before",
        mobile: true,
        desktop: true
      }
    }
  },

  // Social Bar
  socialBar: {
    scriptSrc: "https://fundingfashioned.com/0e/dd/aa/0eddaacfb0675163e55b188fa496a91c.js",
    enabled: true,
    loadDelay: 5000, // 5 detik setelah page load
    excludePages: ["/", "/login", "/register"]
  },

  // Popunder (Gunakan dengan hati-hati)
  popunder: {
    scriptSrc: "https://fundingfashioned.com/63/c7/a0/63c7a0cc6ec7a01e41fd76f689d74a39.js",
    enabled: false, // Nonaktifkan default, aktifkan untuk traffic tinggi
    conditions: {
      minTimeOnPage: 60, // Detik
      requireInteraction: true,
      maxPerSession: 1
    }
  },

  // 17 Smartlinks untuk rotasi
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
    'https://fundingfashioned.com/qn92sfcb?key=a8333f15c6bba15e367a5456f691547c',
    'https://fundingfashioned.com/rz2xzbfm?key=8c4045c97068010d84c3f1002e82b1c9',
    'https://fundingfashioned.com/y5fc24f7?key=d6efa8068c5da148ed5cf346ffa62290',
    'https://fundingfashioned.com/vttzzi1n?key=bfc8d7d57de835830a0d72fbe7a47be1',
    'https://fundingfashioned.com/g77bpz0g?key=f1cc7147d1c59d932b6186896ab8854c',
    'https://fundingfashioned.com/a43vczjf1b?key=70467091cade36a7f916bfe58dc80cff',
    'https://fundingfashioned.com/vb5ixea83?key=c4e7438c85503eda026984db5e7aa3c4',
    'https://fundingfashioned.com/t71keggw?key=9c6906c82c8eb114e2baef9058f4c4e5'
  ],

  // Pengaturan Umum
  settings: {
    adBlockDetection: true,
    lazyLoad: true,
    sessionManagement: true,
    frequencyCap: {
      bannerPerHour: 3,
      smartlinkPerSession: 2
    },
    userFriendly: {
      delayBetweenAds: 30000, // 30 detik
      noAdsOnFirstVisit: false
    }
  }
};

// Helper untuk mendapatkan smartlink secara random
export const getRandomSmartLink = () => {
  const links = adsterraConfig.smartLinks;
  return links[Math.floor(Math.random() * links.length)];
};

// Helper untuk mendapatkan smartlink berdasarkan index (rotasi)
export const getSmartLinkByIndex = (index) => {
  return adsterraConfig.smartLinks[index % adsterraConfig.smartLinks.length];
};
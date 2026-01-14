"use client";

import { useEffect } from 'react';

export default function AdsterraScripts() {
  useEffect(() => {
    // Load Native Banner Script
    const loadNativeBanner = () => {
      // Cek apakah script sudah ada
      if (document.querySelector('script[src*="ad1ee1816ddebc11a35ac98d10fb7142"]')) {
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://fundingfashioned.com/ad1ee1816ddebc11a35ac98d10fb7142/invoke.js';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.head.appendChild(script);
    };

    // Load Social Bar Script dengan delay
    const loadSocialBar = () => {
      setTimeout(() => {
        if (document.querySelector('script[src*="0eddaacfb0675163e55b188fa496a91c"]')) {
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://fundingfashioned.com/0e/dd/aa/0eddaacfb0675163e55b188fa496a91c.js';
        script.async = true;
        document.head.appendChild(script);
      }, 5000); // 5 detik delay
    };

    // Load scripts
    setTimeout(loadNativeBanner, 1000);
    loadSocialBar();
    
    // Cleanup (optional)
    return () => {
      // Bisa tambahkan cleanup jika diperlukan
    };
  }, []);

  return null; // Komponen ini tidak render apa-apa
}
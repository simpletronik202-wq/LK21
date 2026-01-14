"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAdsterra } from '../../hooks/useAdsterra';
import AdsterraNativeBanner from './AdsterraNativeBanner';
import AdsterraSmartLink from './AdsterraSmartLink';
import AdPopupHandler from './AdPopupHandler';

export default function AdsterraLayoutWrapper({ children }) {
  const pathname = usePathname();
  const { 
    adBlockDetected, 
    initializeAds, 
    adsLoaded,
    redirectToSmartLink 
  } = useAdsterra();

  useEffect(() => {
    // Inisialisasi ads setelah komponen mount
    const timer = setTimeout(() => {
      initializeAds();
    }, 1000);

    return () => clearTimeout(timer);
  }, [initializeAds]);

  // Handle route changes
  useEffect(() => {
    if (adsLoaded) {
      // Reload ads pada navigasi (kecuali untuk halaman tertentu)
      const excludedPaths = ['/', '/login', '/register'];
      if (!excludedPaths.includes(pathname)) {
        setTimeout(() => {
          initializeAds();
        }, 500);
      }
    }
  }, [pathname, adsLoaded, initializeAds]);

  return (
    <>
      {/* Banner di Header */}
      <div className="w-full bg-gradient-to-r from-purple-900/20 to-blue-900/20 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <AdsterraNativeBanner position="header" />
        </div>
      </div>

      {/* Konten utama */}
      {children}

      {/* Banner di tengah konten */}
      <div className="my-8">
        <AdsterraNativeBanner position="middle" />
      </div>

      {/* CTA Section dengan SmartLink */}
      <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 py-8 my-8 rounded-xl">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⚡ Download Aplikasi Premium
          </h3>
          <p className="text-gray-300 mb-6">
            Akses semua film tanpa iklan dengan resolusi 4K
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AdsterraSmartLink
              variant="primary"
              onClick={() => redirectToSmartLink()}
            >
              🎬 Download Sekarang (GRATIS)
            </AdsterraSmartLink>
            <AdsterraSmartLink
              variant="secondary"
              onClick={() => redirectToSmartLink()}
            >
              📱 Versi Android
            </AdsterraSmartLink>
            <AdsterraSmartLink
              variant="success"
              onClick={() => redirectToSmartLink()}
            >
              🍎 Versi iOS
            </AdsterraSmartLink>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            📦 Size: 45MB • ⭐ Rating: 4.8 • 👥 1M+ Downloads
          </p>
        </div>
      </div>

      {/* Banner sebelum footer */}
      <div className="mt-8">
        <AdsterraNativeBanner position="footer" />
      </div>

      {/* Popup Handler */}
      <AdPopupHandler />

      {/* AdBlock Warning */}
      {adBlockDetected && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
          <div className="flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-bold">AdBlock Terdeteksi</p>
              <p className="text-sm mt-1">
                Dukung kami dengan menonaktifkan AdBlock untuk akses konten gratis
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 bg-white text-red-600 px-3 py-1 rounded text-sm font-semibold"
              >
                Refresh Halaman
              </button>
            </div>
            <button
              onClick={() => localStorage.setItem('adblock_warning_shown', 'true')}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
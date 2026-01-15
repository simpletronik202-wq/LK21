"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAdsterra } from '../../hooks/useAdsterra';
import AdsterraNativeBanner from './AdsterraNativeBanner';
import AdsterraBanner728x90 from './AdsterraBanner728x90';
import AdsterraBanner300x250 from './AdsterraBanner300x250';

export default function AdsterraLayoutWrapper({ children }) {
  const pathname = usePathname();
  const { adBlockDetected, initializeAds, deviceType } = useAdsterra();

  useEffect(() => {
    // Inisialisasi ads setelah 1 detik
    const timer = setTimeout(() => {
      initializeAds();
    }, 1000);

    return () => clearTimeout(timer);
  }, [initializeAds]);

  // Skip ads di halaman tertentu
  if (['/login', '/register', '/admin'].some(path => pathname.startsWith(path))) {
    return <>{children}</>;
  }

  const isDetailPage = pathname.startsWith('/movie/') || pathname.startsWith('/tv/');
  const isHomePage = pathname === '/';
  const isSearchPage = pathname.startsWith('/search');

  return (
    <>
      {/* Header Banner - 728x90 (Desktop only) */}
      {deviceType === 'desktop' && (isHomePage || isDetailPage) && (
        <div className="w-full bg-gradient-to-r from-blue-900/10 to-purple-900/10 py-2">
          <div className="max-w-7xl mx-auto px-4">
            <AdsterraBanner728x90 position="top" />
          </div>
        </div>
      )}

      {/* Native Banner Header */}
      <div className="w-full">
        <AdsterraNativeBanner position="header" />
      </div>

      {/* Main Content */}
      <div className="min-h-screen">
        {children}
      </div>

      {/* Banner 300x250 di antara konten (untuk detail pages) */}
      {isDetailPage && (
        <div className="my-8 flex justify-center">
          <AdsterraBanner300x250 position="sidebar" />
        </div>
      )}

      {/* Native Banner Middle (untuk detail pages) */}
      {isDetailPage && (
        <div className="my-8">
          <AdsterraNativeBanner position="middle" />
        </div>
      )}

      {/* Bottom Banner - 728x90 (Desktop only) */}
      {deviceType === 'desktop' && (isHomePage || isSearchPage) && (
        <div className="mt-8">
          <AdsterraBanner728x90 position="bottom" />
        </div>
      )}

      {/* Native Banner Footer */}
      <div className="mt-8">
        <AdsterraNativeBanner position="footer" />
      </div>

      {/* AdBlock Warning */}
      {adBlockDetected && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 rounded-lg shadow-xl max-w-sm z-50 border border-red-500/30">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-1">⚠️</span>
            <div>
              <p className="font-bold">AdBlock Detected</p>
              <p className="text-sm mt-1 opacity-90">
                We rely on ads to provide free movies. Please consider whitelisting us.
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-sm transition"
                >
                  Reload
                </button>
                <button
                  onClick={() => localStorage.setItem('hide_adblock_warning', 'true')}
                  className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-sm transition"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
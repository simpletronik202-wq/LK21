"use client";

import { useEffect, useRef } from 'react';
import { useAdsterra } from '../../hooks/useAdsterra';

export default function AdsterraNativeBanner({ position = 'middle' }) {
  const { loadNativeBanner, adBlockDetected } = useAdsterra();
  const containerRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || adBlockDetected) return;

    const loadAd = async () => {
      try {
        await loadNativeBanner(position);
        loadedRef.current = true;
      } catch (error) {
        console.error(`Failed to load banner at ${position}:`, error);
      }
    };

    // Delay loading berdasarkan posisi
    const delays = {
      header: 500,
      middle: 3000,
      footer: 7000
    };

    const timer = setTimeout(loadAd, delays[position] || 1000);
    return () => clearTimeout(timer);
  }, [position, loadNativeBanner, adBlockDetected]);

  // Fallback content jika adblock terdeteksi
  if (adBlockDetected) {
    return (
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 text-center my-4">
        <div className="inline-flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full mb-3">
          <span className="text-yellow-400">✨</span>
          <span className="text-gray-300 text-sm">Sponsored Content</span>
        </div>
        <h4 className="text-white font-semibold mb-2">
          Support Our Free Service
        </h4>
        <p className="text-gray-400 text-sm mb-3">
          Please consider disabling AdBlock to help us provide free content
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`adsterra-banner ad-position-${position} my-4`}
      data-ad-position={position}
      data-ad-type="native-banner"
    >
      {/* Container akan diisi oleh script Adsterra */}
      <div 
        id="container-ad1ee1816ddebc11a35ac98d10fb7142"
        className="min-h-[250px] flex items-center justify-center bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-lg animate-pulse"
      >
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full mb-3">
            <span className="text-purple-400">📢</span>
            <span className="text-purple-300 text-sm">Advertisement</span>
          </div>
          <p className="text-gray-400 text-sm">Loading advertisement...</p>
        </div>
      </div>
    </div>
  );
}
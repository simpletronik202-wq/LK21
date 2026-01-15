"use client";

import { useEffect } from 'react';
import { useAdsterra } from '../../hooks/useAdsterra';

export default function AdsterraBanner300x250({ position = 'sidebar' }) {
  const { loadBanner300x250, adBlockDetected } = useAdsterra();

  useEffect(() => {
    if (adBlockDetected) return;

    const timer = setTimeout(() => {
      loadBanner300x250(position);
    }, 2000);

    return () => clearTimeout(timer);
  }, [position, loadBanner300x250, adBlockDetected]);

  if (adBlockDetected) {
    return (
      <div className="ad-support-message bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-lg my-4 text-center border border-gray-700/30 max-w-[300px] mx-auto">
        <div className="inline-flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full mb-3">
          <span className="text-yellow-400">✨</span>
          <span className="text-gray-300 text-sm">Support Our Site</span>
        </div>
        <p className="text-gray-400 text-sm">
          Please disable AdBlock to see content
        </p>
      </div>
    );
  }

  return (
    <div 
      className={`adsterra-banner-300x250 ad-position-${position} my-4`}
      data-ad-position={position}
      data-ad-type="300x250"
    >
      <div 
        id={`container-300x250-${position}`}
        className="min-h-[250px] w-[300px] bg-gradient-to-r from-green-900/10 to-emerald-900/10 rounded-lg flex items-center justify-center mx-auto"
      >
        <div className="text-center p-4">
          <div className="inline-flex items-center gap-2 bg-green-600/20 px-3 py-1 rounded-full mb-3">
            <span className="text-green-400">📱</span>
            <span className="text-green-300 text-sm">Advertisement</span>
          </div>
          <p className="text-gray-400 text-sm">Loading 300x250 banner...</p>
        </div>
      </div>
    </div>
  );
}
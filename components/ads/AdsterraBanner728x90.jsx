"use client";

import { useEffect, useRef } from 'react';
import { useAdsterra } from '../../hooks/useAdsterra';

export default function AdsterraBanner728x90({ position = 'top' }) {
  const { loadBanner728x90, adBlockDetected, deviceType } = useAdsterra();
  const containerRef = useRef(null);

  useEffect(() => {
    if (adBlockDetected || deviceType === 'mobile') return;

    const delay = position === 'top' ? 1000 : 5000;
    
    const timer = setTimeout(() => {
      loadBanner728x90(position);
    }, delay);

    return () => clearTimeout(timer);
  }, [position, loadBanner728x90, adBlockDetected, deviceType]);

  if (adBlockDetected || deviceType === 'mobile') {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className={`adsterra-banner-728x90 ad-position-${position} my-4`}
      data-ad-position={position}
      data-ad-type="728x90"
    >
      {/* Container untuk iframe banner */}
      <div 
        id={`container-728x90-${position}`}
        className="min-h-[90px] w-full max-w-[728px] mx-auto bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-lg flex items-center justify-center"
      >
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 px-3 py-1 rounded-full mb-2">
            <span className="text-blue-400">📺</span>
            <span className="text-blue-300 text-sm">Banner Ad</span>
          </div>
          <p className="text-gray-400 text-sm">Loading 728x90 banner...</p>
        </div>
      </div>
    </div>
  );
}
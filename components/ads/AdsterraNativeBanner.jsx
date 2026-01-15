"use client";

import { useEffect } from 'react';
import { useAdsterra } from '../../hooks/useAdsterra';

export default function AdsterraNativeBanner({ position = 'header' }) {
  const { loadNativeBanner, adBlockDetected } = useAdsterra();

  useEffect(() => {
    if (adBlockDetected) return;

    const delays = {
      header: 500,
      middle: 3000,
      footer: 6000
    };

    const timer = setTimeout(() => {
      loadNativeBanner(position);
    }, delays[position] || 1000);

    return () => clearTimeout(timer);
  }, [position, loadNativeBanner, adBlockDetected]);

  if (adBlockDetected) {
    return (
      <div className="ad-support-message bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-lg my-4 text-center border border-gray-700/30">
        <div className="inline-flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full mb-2">
          <span className="text-yellow-400">✨</span>
          <span className="text-gray-300 text-sm">Support Us</span>
        </div>
        <p className="text-gray-400 text-sm">
          Please consider disabling AdBlock to help us provide free movies
        </p>
      </div>
    );
  }

  return (
    <div 
      className={`adsterra-native-banner ad-position-${position} my-4`}
      data-ad-position={position}
      data-ad-type="native-banner"
    >
      <div 
        id="container-ad1ee1816ddebc11a35ac98d10fb7142"
        className="min-h-[90px] md:min-h-[250px] flex items-center justify-center bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-lg"
      >
        <div className="text-center p-4">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 px-3 py-1 rounded-full mb-2">
            <span className="text-purple-400">📢</span>
            <span className="text-purple-300 text-xs md:text-sm">Advertisement</span>
          </div>
          <p className="text-gray-400 text-xs md:text-sm">Loading ad...</p>
        </div>
      </div>
    </div>
  );
}
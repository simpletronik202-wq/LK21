"use client";

import { useEffect, useState } from 'react';
import { adsterraConfig } from '../../utils/adsterraConfig';

export default function AdPopupHandler() {
  const [showPopupWarning, setShowPopupWarning] = useState(false);

  useEffect(() => {
    if (!adsterraConfig.popunder.enabled) return;

    const handleBeforeUnload = () => {
      // Cek kondisi sebelum load popunder
      const timeOnPage = (Date.now() - window.performance.timing.navigationStart) / 1000;
      const userInteracted = localStorage.getItem('user_interacted') === 'true';
      
      if (
        timeOnPage > adsterraConfig.popunder.conditions.minTimeOnPage &&
        userInteracted
      ) {
        try {
          const script = document.createElement('script');
          script.src = adsterraConfig.popunder.scriptSrc;
          script.async = true;
          document.head.appendChild(script);
        } catch (error) {
          console.error('Error loading popunder:', error);
        }
      }
    };

    // Deteksi interaksi user
    const interactionEvents = ['click', 'scroll', 'keydown', 'mousemove'];
    const handleUserInteraction = () => {
      localStorage.setItem('user_interacted', 'true');
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };

    interactionEvents.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    // Deteksi popup blocker
    const checkPopupBlocker = () => {
      const newWindow = window.open('', '_blank', 'width=100,height=100');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        setShowPopupWarning(true);
        setTimeout(() => setShowPopupWarning(false), 5000);
      } else {
        newWindow.close();
      }
    };

    // Check popup blocker setelah beberapa detik
    setTimeout(checkPopupBlocker, 3000);

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  if (!showPopupWarning) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-yellow-600 text-white p-3 rounded-lg shadow-lg max-w-xs z-50">
      <div className="flex items-start gap-2">
        <span className="text-xl">🛡️</span>
        <div>
          <p className="font-bold text-sm">Popup Blocker Detected</p>
          <p className="text-xs mt-1">
            Please allow popups for this site to access all features
          </p>
        </div>
        <button
          onClick={() => setShowPopupWarning(false)}
          className="text-white hover:text-gray-200 ml-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
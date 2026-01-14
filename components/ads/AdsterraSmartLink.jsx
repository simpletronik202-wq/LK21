"use client";

import { useState } from 'react';
import { useAdsterra } from '../../hooks/useAdsterra';

export default function AdsterraSmartLink({ 
  children, 
  variant = 'primary',
  className = '',
  onClick,
  showConfirmation = true,
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { redirectToSmartLink, adBlockDetected } = useAdsterra();

  const handleClick = async (e) => {
    e.preventDefault();
    
    if (adBlockDetected) {
      alert('Please disable AdBlock to download');
      return;
    }

    if (showConfirmation) {
      const confirmed = window.confirm(
        'You will be redirected to a secure download page. Continue?'
      );
      if (!confirmed) return;
    }

    setIsLoading(true);
    
    try {
      const success = redirectToSmartLink();
      if (success && onClick) {
        onClick();
      }
    } catch (error) {
      console.error('Redirect error:', error);
    } finally {
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  const variants = {
    primary: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700',
    secondary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
    warning: 'bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700'
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading || adBlockDetected}
      className={`
        ${variants[variant] || variants.primary}
        text-white font-semibold px-6 py-3 rounded-lg
        transition-all duration-300 transform hover:scale-105
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        shadow-lg hover:shadow-xl flex items-center justify-center gap-2
        ${className}
      `}
      data-ad-indicator="true"
      data-smartlink="true"
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
          Redirecting...
        </>
      ) : (
        <>
          {children}
          <span className="text-xs bg-white/20 px-2 py-1 rounded">
            🔒 Secure
          </span>
        </>
      )}
    </button>
  );
}
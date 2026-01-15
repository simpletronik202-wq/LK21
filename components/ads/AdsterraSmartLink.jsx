"use client";

import { useState } from 'react';
import { useAdsterra } from '../../hooks/useAdsterra';

export default function AdsterraSmartLink({ 
  children, 
  variant = 'primary',
  className = '',
  showConfirmation = true,
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { redirectToSmartLink, adBlockDetected } = useAdsterra();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (adBlockDetected) {
      alert('Please disable AdBlock to download this content');
      return;
    }

    if (showConfirmation) {
      const confirmed = window.confirm(
        'You will be redirected to download page. This helps support our free service. Continue?'
      );
      if (!confirmed) return;
    }

    setIsLoading(true);
    
    try {
      redirectToSmartLink();
    } catch (error) {
      console.error('Redirect error:', error);
    } finally {
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
    warning: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading || adBlockDetected}
      className={`
        ${variants[variant] || variants.primary}
        text-white font-semibold px-5 py-2.5 rounded-lg
        transition-all duration-200 hover:scale-105
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        shadow-lg hover:shadow-xl flex items-center justify-center gap-2
        text-sm md:text-base
        ${className}
      `}
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
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded">
            🔒 Secure
          </span>
        </>
      )}
    </button>
  );
}
"use client";

import { useState } from 'react';

const smartLinks = [
  'https://fundingfashioned.com/yed8kj7bvw?key=b7830767455354f8e097df2a9e0f040c',
  'https://fundingfashioned.com/wdhedf2wx?key=a2c98838af4390b59e8b7aaaea3f1660',
  'https://fundingfashioned.com/nu4ravi1cx?key=4d0556009c2d17968977e235d5de925a',
  'https://fundingfashioned.com/u1ipxidjif?key=bf544685cc418fde38d3de4391de6fee',
  'https://fundingfashioned.com/gh4tkda15?key=080742d09d4b5234a4fdaa773e48ebd4',
  'https://fundingfashioned.com/paij3re0by?key=fa60f72b73c05d987bd978f83a6deaa8',
  'https://fundingfashioned.com/gd8bwkyj?key=d2d35cf16f521bf5e9accfdd865dae8f',
  'https://fundingfashioned.com/x818nj48?key=db0a9d9fa9d81626b459383a7bdc33ee',
  'https://fundingfashioned.com/w2sw8zgx21?key=d34ca1378210247721e98e65d20b3693',
  'https://fundingfashioned.com/qn92sfcb?key=a8333f15c6bba15e367a5456f691547c',
  'https://fundingfashioned.com/rz2xzbfm?key=8c4045c97068010d84c3f1002e82b1c9',
  'https://fundingfashioned.com/y5fc24f7?key=d6efa8068c5da148ed5cf346ffa62290',
  'https://fundingfashioned.com/vttzzi1n?key=bfc8d7d57de835830a0d72fbe7a47be1',
  'https://fundingfashioned.com/g77bpz0g?key=f1cc7147d1c59d932b6186896ab8854c',
  'https://fundingfashioned.com/a43vczjf1b?key=70467091cade36a7f916bfe58dc80cff',
  'https://fundingfashioned.com/vb5ixea83?key=c4e7438c85503eda026984db5e7aa3c4',
  'https://fundingfashioned.com/t71keggw?key=9c6906c82c8eb114e2baef9058f4c4e5'
];

export default function SmartLinkWrapper({ 
  children, 
  variant = 'primary',
  className = '',
  onClick,
  showConfirmation = true,
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [linkIndex, setLinkIndex] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (showConfirmation) {
      const confirmed = window.confirm(
        'You will be redirected to a secure download page. Continue?'
      );
      if (!confirmed) return;
    }

    setIsLoading(true);
    
    try {
      // Gunakan link berdasarkan index (rotasi)
      const link = smartLinks[linkIndex % smartLinks.length];
      setLinkIndex(prev => prev + 1);
      
      // Buka di tab baru
      window.open(link, '_blank', 'noopener,noreferrer');
      
      if (onClick) onClick();
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
      disabled={isLoading}
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
import React from 'react';

export const PixenceLogo = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      
      {/* Main circle */}
      <circle cx="16" cy="16" r="14" fill="url(#logoGradient)" />
      
      {/* Play triangle */}
      <path 
        d="M12 10l8 6-8 6V10z" 
        fill="white" 
        stroke="white" 
        strokeWidth="1"
      />
      
      {/* Small accent dots */}
      <circle cx="6" cy="6" r="2" fill="#60A5FA" opacity="0.8" />
      <circle cx="26" cy="26" r="2" fill="#A78BFA" opacity="0.8" />
    </svg>
  );
};

export default PixenceLogo;

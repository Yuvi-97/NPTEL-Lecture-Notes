import React from 'react';
import logoImg from '../../assets/logo.png';

/**
 * BrandLogo Component
 * Renders the custom NPTEL Notes engineering hexagon & academic book crest.
 */
export default function BrandLogo({ size = 'md', className = '', alt = 'NPTEL Notes Logo' }) {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const dimensionClass = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-xl overflow-hidden shadow-2xs transition-transform duration-200 ${dimensionClass} ${className}`}
    >
      <img
        src={logoImg}
        alt={alt}
        className="w-full h-full object-contain filter drop-shadow-xs"
        loading="eager"
      />
    </div>
  );
}

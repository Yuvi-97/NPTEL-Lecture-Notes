import React from 'react';

/**
 * Reusable icon wrapper providing clean, academic styling with subtle contrast.
 */
export default function IconContainer({
  icon: Icon,
  className = '',
  size = 'md',
  variant = 'navy',
  'aria-hidden': ariaHidden = true,
}) {
  const sizeStyles = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2.5',
    lg: 'w-12 h-12 p-3',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const variantStyles = {
    navy: 'bg-blue-950 text-white border border-blue-900 shadow-sm',
    blue: 'bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-900',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
    subtle: 'bg-white text-slate-800 border border-slate-200/80 shadow-subtle dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
  };

  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg transition-colors ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.navy} ${className}`}
      aria-hidden={ariaHidden}
    >
      {Icon && <Icon size={iconSizes[size] || 20} strokeWidth={2} />}
    </div>
  );
}

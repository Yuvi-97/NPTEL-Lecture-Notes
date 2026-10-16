import React from 'react';

/**
 * Reusable section heading component for clean academic hierarchy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Component = 'h2',
  className = '',
}) {
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <div className={`space-y-1.5 ${alignmentStyles[align]} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      )}
      <Component className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </Component>
      {description && (
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

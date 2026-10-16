import React from 'react';
import CourseSearch from './CourseSearch';

/**
 * Hero section designed for calm, academic focus.
 * Presents clear value proposition and primary course search.
 */
export default function HeroSection({
  searchQuery,
  onSearchChange,
  onClearSearch,
  totalResults,
  isFiltered,
}) {
  return (
    <section className="pt-12 pb-14 sm:pt-20 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
          YOUR PERSONAL STUDY SPACE
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto leading-[1.15]">
          Learn the concepts.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 dark:from-blue-200 dark:via-blue-300 dark:to-blue-400">
            Revise with confidence.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Concise, lecture-wise NPTEL notes designed to help you understand key concepts and revise faster.
        </p>

        {/* Search Component */}
        <div className="mt-8 sm:mt-10">
          <CourseSearch
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            onClearSearch={onClearSearch}
            totalResults={totalResults}
            isFiltered={isFiltered}
          />
        </div>

        {/* Subtle Supporting Line */}
        <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
          Two courses <span className="mx-1.5 text-slate-300 dark:text-slate-700">·</span> Week-wise organization <span className="mx-1.5 text-slate-300 dark:text-slate-700">·</span> Quick revision
        </p>
      </div>
    </section>
  );
}

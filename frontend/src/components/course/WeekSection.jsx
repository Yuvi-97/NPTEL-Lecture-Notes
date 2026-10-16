import React from 'react';
import { ChevronDown } from 'lucide-react';
import LectureItem from './LectureItem';

/**
 * Collapsible week card displaying week metadata and lecture list.
 */
export default function WeekSection({
  courseSlug,
  week,
  isOpen = false,
  onToggle,
}) {
  const weekPadded = String(week.weekNumber).padStart(2, '0');
  const sectionId = `week-content-${week.weekNumber}`;
  const headerId = `week-header-${week.weekNumber}`;

  return (
    <div
      id={`week-${week.weekNumber}`}
      className={`rounded-2xl border transition-all duration-200 bg-white dark:bg-slate-900 ${
        isOpen
          ? 'border-blue-300 dark:border-blue-700/60 shadow-card'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-subtle'
      }`}
    >
      {/* Clickable Section Header */}
      <button
        id={headerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={sectionId}
        className="w-full p-4 sm:p-5 flex items-center justify-between text-left rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
          {/* Week Badge */}
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-colors flex-shrink-0 ${
              isOpen
                ? 'bg-blue-950 text-white border-blue-900 dark:bg-blue-600 dark:border-blue-500'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700'
            }`}
          >
            Week {weekPadded}
          </span>

          {/* Week Title & Subtitle */}
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 truncate">
              {week.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block truncate">
              {week.description || `Lecture notes for Week ${week.weekNumber}`}
            </p>
          </div>
        </div>

        {/* Right side: Lecture count badge & toggle chevron */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
            {week.lectures.length} {week.lectures.length === 1 ? 'Lecture' : 'Lectures'}
          </span>

          <div
            className={`p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180 text-blue-600 dark:text-blue-400' : ''
            }`}
          >
            <ChevronDown size={18} />
          </div>
        </div>
      </button>

      {/* Collapsible Lecture List */}
      {isOpen && (
        <div
          id={sectionId}
          role="region"
          aria-labelledby={headerId}
          className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/80"
        >
          <div className="space-y-2 mt-3">
            {week.lectures.map((lecture) => (
              <LectureItem
                key={lecture.lectureNumber}
                courseSlug={courseSlug}
                weekNumber={week.weekNumber}
                lecture={lecture}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

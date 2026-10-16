import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

/**
 * Bottom navigation for notes pages.
 * Supports smooth cross-week transitions and return to course overview.
 */
export default function LectureNavigation({
  courseSlug,
  currentWeekNumber,
  prevLecture,
  nextLecture,
}) {
  return (
    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
      {/* Top row: Back to Week/Course link */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <LayoutGrid size={15} />
          <span>All Courses</span>
        </Link>
        <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
          Week {currentWeekNumber}
        </span>
      </div>

      {/* Main Previous / Next buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Lecture */}
        {prevLecture ? (
          <Link
            to={`/courses/${courseSlug}/weeks/${prevLecture.weekNumber}/lectures/${prevLecture.lectureNumber}`}
            className="group flex flex-col p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-500/60 shadow-subtle hover:shadow-card transition-all text-left focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
              <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
              <span>Previous Lecture</span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Week {prevLecture.weekNumber} · Lecture {prevLecture.lectureNumber}
            </p>
            <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate mt-0.5">
              {prevLecture.title}
            </p>
          </Link>
        ) : (
          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/30 opacity-40 select-none">
            <span className="text-xs text-slate-400">First Lecture</span>
            <p className="text-sm font-medium text-slate-400">Beginning of course</p>
          </div>
        )}

        {/* Next Lecture */}
        {nextLecture ? (
          <Link
            to={`/courses/${courseSlug}/weeks/${nextLecture.weekNumber}/lectures/${nextLecture.lectureNumber}`}
            className="group flex flex-col p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-500/60 shadow-subtle hover:shadow-card transition-all text-right focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
              <span>Next Lecture</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Week {nextLecture.weekNumber} · Lecture {nextLecture.lectureNumber}
            </p>
            <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate mt-0.5">
              {nextLecture.title}
            </p>
          </Link>
        ) : (
          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/30 opacity-40 text-right select-none">
            <span className="text-xs text-slate-400">Final Lecture</span>
            <p className="text-sm font-medium text-slate-400">End of 12-week course</p>
          </div>
        )}
      </div>
    </div>
  );
}

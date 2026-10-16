import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

/**
 * Renders an individual lecture row inside a week section.
 * Labelled as "Lecture" strictly adhering to notes-only presentation.
 */
export default function LectureItem({
  courseSlug,
  weekNumber,
  lecture,
}) {
  const lectureUrl = `/courses/${courseSlug}/weeks/${weekNumber}/lectures/${lecture.lectureNumber}`;

  return (
    <Link
      to={lectureUrl}
      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-subtle transition-all duration-150 focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label={`Read revision notes for ${lecture.title}`}
    >
      <div className="flex items-center gap-3 min-w-0 pr-3">
        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
          <FileText size={16} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
            {lecture.title}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Lecture {lecture.lectureNumber} · Revision Notes
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 transition-colors">
        <span className="hidden sm:inline">Read notes</span>
        <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}

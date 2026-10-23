import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Layers,
  Zap,
  CheckCircle2,
} from 'lucide-react';

/**
 * ConsolidatedExamNotesCard
 * Clearly visible callout section placed at the end of each week's lectures,
 * allowing students to access combined theory, comparative matrices,
 * and high-yield quick revision sheets.
 * Styled in harmony with the application's blue/slate theme.
 */
export default function ConsolidatedExamNotesCard({
  courseSlug,
  weekNumber,
  isLastLecture = false,
  totalLecturesInWeek = 5,
}) {
  const weekPadded = String(weekNumber).padStart(2, '0');
  const examNotesUrl = `/courses/${courseSlug}/weeks/${weekNumber}/exam-notes`;

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-slate-50 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 shadow-sm">
      {/* Top Tag & Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <GraduationCap size={15} className="text-blue-600 dark:text-blue-400" />
          <span>Week {weekPadded} · Consolidated Exam Notes</span>
        </div>

        {isLastLecture ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 size={13} />
            <span>Completed Week {weekNumber} Lectures</span>
          </span>
        ) : (
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Synthesizes all {totalLecturesInWeek} lectures
          </span>
        )}
      </div>

      {/* Main Title & Subtitle */}
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
        {isLastLecture ? (
          <>Ready for Revision? Review Week {weekNumber} Exam Notes</>
        ) : (
          <>Week {weekNumber} Consolidated Exam-Oriented Notes</>
        )}
      </h3>

      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        Examine all core principles, taxonomies, comparative frameworks, and common exam pitfalls from this week combined into one unified, exam-ready study guide.
      </p>

      {/* 3 Core Conceptual Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {/* Highlight 1: Combined Theory */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-left transition-shadow hover:shadow-xs">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs mb-1.5">
            <BookOpen size={15} />
            <span>Combined Theory</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Integrated coverage of all lectures in this week without repetitive summaries.
          </p>
        </div>

        {/* Highlight 2: Comparisons & Frameworks */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-left transition-shadow hover:shadow-xs">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs mb-1.5">
            <Layers size={15} />
            <span>Comparisons & Taxonomies</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Side-by-side matrices, classifications, and definitions for quick conceptual clarity.
          </p>
        </div>

        {/* Highlight 3: Quick Revision Sheet */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-left transition-shadow hover:shadow-xs">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs mb-1.5">
            <Zap size={15} />
            <span>Quick Revision Sheet</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            High-priority exam facts and tricky concept alerts for rapid pre-exam review.
          </p>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200/70 dark:border-slate-800">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Curated for weekly assignments and final exam revision
        </span>

        <Link
          to={examNotesUrl}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span>Open Week {weekNumber} Consolidated Notes</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

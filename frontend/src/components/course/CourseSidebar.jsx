import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  FileText,
  Moon,
  Search,
  Sun,
  X,
  GraduationCap,
} from 'lucide-react';
import { hasWeekExamNotes } from '../../data/courses';


/**
 * Left Sidebar Navigation Panel for Course Workspace.
 * Displays all 12 collapsible weeks and their lecture notes,
 * plus weekly consolidated exam notes.
 */
export default function CourseSidebar({
  course,
  activeWeekNumber,
  activeLectureNumber,
  onCloseMobile,
  isDarkMode,
  onToggleTheme,
  isExamNotesView = false,
}) {

  // State for expanded weeks (auto-expands active week)
  const [expandedWeeks, setExpandedWeeks] = useState({ [activeWeekNumber || 1]: true });
  const [filterQuery, setFilterQuery] = useState('');

  // When active week changes, ensure it is expanded in sidebar
  useEffect(() => {
    if (activeWeekNumber) {
      setExpandedWeeks((prev) => ({
        ...prev,
        [activeWeekNumber]: true,
      }));
    }
  }, [activeWeekNumber]);

  const toggleWeek = (weekNumber) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekNumber]: !prev[weekNumber],
    }));
  };

  const handleExpandAll = () => {
    const all = {};
    course.weekList.forEach((w) => {
      all[w.weekNumber] = true;
    });
    setExpandedWeeks(all);
  };

  const handleCollapseAll = () => {
    setExpandedWeeks({});
  };

  // Optional quick search across lectures in this course
  const filteredWeeks = course.weekList.map((week) => {
    if (!filterQuery.trim()) {
      return { ...week, isMatching: true };
    }
    const q = filterQuery.toLowerCase().trim();
    const matchingLectures = week.lectures.filter((l) =>
      l.title.toLowerCase().includes(q)
    );
    const weekMatches = week.title.toLowerCase().includes(q) || matchingLectures.length > 0;
    return {
      ...week,
      lectures: weekMatches ? (matchingLectures.length > 0 ? matchingLectures : week.lectures) : [],
      isMatching: weekMatches,
    };
  }).filter((w) => w.isMatching);

  return (
    <aside className="w-full h-full flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 select-none">
      {/* Top Header: Course Back Link & Info */}
      <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1 -ml-1 rounded focus-visible:ring-2 focus-visible:ring-blue-500"
            title="Return to Homepage"
          >
            <ArrowLeft size={14} />
            <span>All Courses</span>
          </Link>

          <div className="flex items-center gap-1.5">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
              </button>
            )}

            {/* Close button for mobile drawer */}
            {onCloseMobile && (
              <button
                type="button"
                onClick={onCloseMobile}
                className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close sidebar"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60">
            {course.code}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
            12 Weeks · Notes
          </span>
        </div>

        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
          {course.title}
        </h2>

        {/* Quick Filter Input */}
        <div className="mt-3 relative">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
            <Search size={14} />
          </div>
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter lectures..."
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 transition-colors"
          />
          {filterQuery && (
            <button
              type="button"
              onClick={() => setFilterQuery('')}
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X size={12} />
            </button>
          )}
        </div>

        {/* Expand / Collapse Control */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>Course Curriculum</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExpandAll}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Expand all
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={handleCollapseAll}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Collapse
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Weeks & Lectures List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scrollbar">
        {filteredWeeks.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-400">
            No lectures match "{filterQuery}".
          </div>
        ) : (
          filteredWeeks.map((week) => {
            const isOpen = !!expandedWeeks[week.weekNumber] || !!filterQuery;
            const isWeekActive = Number(activeWeekNumber) === Number(week.weekNumber);
            const weekPad = String(week.weekNumber).padStart(2, '0');

            return (
              <div
                key={week.weekNumber}
                className={`rounded-xl border transition-colors ${
                  isWeekActive
                    ? 'border-blue-200 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/10'
                    : 'border-transparent hover:border-slate-200 dark:hover:border-slate-800'
                }`}
              >
                {/* Week Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleWeek(week.weekNumber)}
                  className="w-full px-3 py-2.5 flex items-center justify-between text-left rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-1">
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isWeekActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      W{weekPad}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {week.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      {week.lectures.length}
                    </span>
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </div>
                </button>

                {/* Collapsible Lecture Entries */}
                {isOpen && (
                  <div className="px-2 pb-2 pt-0.5 space-y-0.5">
                    {week.lectures.map((lecture) => {
                      const isLectureActive =
                        isWeekActive && Number(activeLectureNumber) === Number(lecture.lectureNumber);
                      const lectureUrl = `/courses/${course.slug}/weeks/${week.weekNumber}/lectures/${lecture.lectureNumber}`;

                      return (
                        <Link
                          key={lecture.lectureNumber}
                          to={lectureUrl}
                          onClick={() => {
                            if (onCloseMobile) onCloseMobile();
                          }}
                          className={`group flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-all ${
                            isLectureActive
                              ? 'bg-blue-600 text-white font-semibold shadow-sm'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0 pr-1">
                            <FileText
                              size={13}
                              className={
                                isLectureActive
                                  ? 'text-blue-100 flex-shrink-0'
                                  : 'text-slate-400 group-hover:text-blue-500 flex-shrink-0 transition-colors'
                              }
                            />
                            <span className="truncate">{lecture.title}</span>
                          </div>

                          <span
                            className={`text-[10px] flex-shrink-0 ${
                              isLectureActive ? 'text-blue-200' : 'text-slate-400'
                            }`}
                          >
                            L{lecture.lectureNumber}
                          </span>
                        </Link>
                      );
                    })}

                    {/* End of week: Consolidated Exam Notes Entry */}
                    {hasWeekExamNotes(course.slug, week.weekNumber) && (
                      <div className="pt-1 mt-1 border-t border-slate-200/60 dark:border-slate-800">
                        <Link
                          to={`/courses/${course.slug}/weeks/${week.weekNumber}/exam-notes`}
                          onClick={() => {
                            if (onCloseMobile) onCloseMobile();
                          }}
                          className={`group flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-all ${
                            isWeekActive && isExamNotesView
                              ? 'bg-blue-600 text-white font-semibold shadow-sm'
                              : 'text-slate-700 dark:text-slate-300 bg-blue-50/50 dark:bg-blue-950/20 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 border border-blue-200/60 dark:border-blue-900/40'
                          }`}
                          title={`Week ${week.weekNumber} Consolidated Exam Notes`}
                        >
                          <div className="flex items-center gap-2 min-w-0 pr-1">
                            <GraduationCap
                              size={14}
                              className={
                                isWeekActive && isExamNotesView
                                  ? 'text-white flex-shrink-0'
                                  : 'text-blue-600 dark:text-blue-400 group-hover:scale-105 flex-shrink-0 transition-transform'
                              }
                            />
                            <span className="truncate font-medium">Consolidated Exam Notes</span>
                          </div>
                          <span
                            className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${
                              isWeekActive && isExamNotesView
                                ? 'bg-white/20 text-white'
                                : 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300'
                            }`}
                          >
                            Exam Prep
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}

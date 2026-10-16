import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  FileText,
  Menu,
  Moon,
  PanelLeft,
  PanelLeftClose,
  Sun,
  MessageSquare,
} from 'lucide-react';
import {
  getCourseBySlug,
  getLectureData,
  getAdjacentLectures,
} from '../data/courses';
import { loadLectureNote } from '../services/notesLoader';
import CourseSidebar from '../components/course/CourseSidebar';
import Breadcrumbs from '../components/notes/Breadcrumbs';
import NotesRenderer from '../components/notes/NotesRenderer';
import LectureNavigation from '../components/notes/LectureNavigation';
import FeedbackModal from '../components/feedback/FeedbackModal';

/**
 * Split-Pane Course Workspace Page.
 * Left Panel: 12-week collapsible outline with lecture selection.
 * Right Panel: Dedicated distraction-free reading area rendering lecture revision notes.
 */
export default function CoursePage({ isDarkMode, onToggleTheme }) {
  const { courseSlug, weekNumber: paramWeek, lectureNumber: paramLecture } = useParams();

  // Find course
  const course = useMemo(() => getCourseBySlug(courseSlug), [courseSlug]);

  // Default to Week 1, Lecture 1 if route is /courses/:courseSlug
  const activeWeekNumber = paramWeek ? parseInt(paramWeek, 10) : 1;
  const activeLectureNumber = paramLecture ? parseInt(paramLecture, 10) : 1;

  // Retrieve active lecture and adjacent lecture metadata
  const lectureData = useMemo(() => {
    if (!course) return null;
    return getLectureData(course.slug, activeWeekNumber, activeLectureNumber);
  }, [course, activeWeekNumber, activeLectureNumber]);

  const adjacent = useMemo(() => {
    if (!course) return { prevLecture: null, nextLecture: null };
    return getAdjacentLectures(course.slug, activeWeekNumber, activeLectureNumber);
  }, [course, activeWeekNumber, activeLectureNumber]);

  // Notes content state
  const [noteContent, setNoteContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mobile drawer state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Desktop sidebar collapse toggle (for full-width focus mode)
  const [isDesktopSidebarVisible, setIsDesktopSidebarVisible] = useState(true);

  // Quick feedback modal state
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  // Fetch markdown notes when course or active lecture changes
  useEffect(() => {
    if (!course) return;

    let isCurrent = true;
    setIsLoading(true);
    setError(null);

    loadLectureNote(course.slug, activeWeekNumber, activeLectureNumber)
      .then((content) => {
        if (isCurrent) {
          setNoteContent(content);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isCurrent) {
          setError(`Unable to load lecture notes. (${err.message})`);
          setIsLoading(false);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [course, activeWeekNumber, activeLectureNumber]);

  // Scroll main reading area to top on lecture switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeWeekNumber, activeLectureNumber]);

  // Fallback for non-existent course
  if (!course) {
    return (
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle max-w-md mx-auto">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
            <BookOpen size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Course Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            The course "{courseSlug}" could not be located.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </main>
    );
  }

  // Fallback for non-existent lecture
  if (!lectureData) {
    return (
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle max-w-md mx-auto">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
            <BookOpen size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Lecture Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            We couldn't find notes for Week {activeWeekNumber}, Lecture {activeLectureNumber}.
          </p>
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
          >
            Return to Course Start
          </Link>
        </div>
      </main>
    );
  }

  const weekPadded = String(activeWeekNumber).padStart(2, '0');
  const lecturePadded = String(activeLectureNumber).padStart(2, '0');

  const breadcrumbItems = [
    { label: course.title, to: `/courses/${course.slug}` },
    { label: `Week ${activeWeekNumber}` },
    { label: `Lecture ${activeLectureNumber}` },
  ];

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen">
      {/* Mobile Top Bar with Outline Drawer Button */}
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setIsMobileDrawerOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <Menu size={16} />
          <span>Course Outline (12 Weeks)</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            W{weekPadded} · L{lecturePadded}
          </span>
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
        </div>
      </div>

      {/* Main Split-Screen Workspace */}
      <div className="flex-1 flex w-full relative">
        {/* Left Panel: Desktop Sticky Sidebar (Full Height from top-0) */}
        {isDesktopSidebarVisible && (
          <div className="hidden lg:block w-80 xl:w-84 flex-shrink-0 sticky top-0 h-screen">
            <CourseSidebar
              course={course}
              activeWeekNumber={activeWeekNumber}
              activeLectureNumber={activeLectureNumber}
              isDarkMode={isDarkMode}
              onToggleTheme={onToggleTheme}
            />
          </div>
        )}

        {/* Mobile Slide-over Drawer */}
        {isMobileDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMobileDrawerOpen(false)}
            />

            {/* Drawer Content */}
            <div className="relative w-80 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
              <CourseSidebar
                course={course}
                activeWeekNumber={activeWeekNumber}
                activeLectureNumber={activeLectureNumber}
                onCloseMobile={() => setIsMobileDrawerOpen(false)}
                isDarkMode={isDarkMode}
                onToggleTheme={onToggleTheme}
              />
            </div>
          </div>
        )}

        {/* Right Panel: Clean Notes Reading Area */}
        <main className="flex-1 min-w-0 bg-slate-50 dark:bg-slate-950 transition-colors pb-16">
          {/* Top Sleek Utility Bar */}
          <div className="sticky top-0 z-20 px-4 sm:px-8 lg:px-12 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="flex items-center gap-2">
              {/* Desktop toggle for full-width focus mode */}
              <button
                type="button"
                onClick={() => setIsDesktopSidebarVisible((prev) => !prev)}
                className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={isDesktopSidebarVisible ? 'Hide sidebar (Focus mode)' : 'Show sidebar'}
              >
                {isDesktopSidebarVisible ? (
                  <>
                    <PanelLeftClose size={15} />
                    <span>Focus mode</span>
                  </>
                ) : (
                  <>
                    <PanelLeft size={15} />
                    <span>Show outline</span>
                  </>
                )}
              </button>

              {/* Feedback trigger button */}
              <button
                type="button"
                onClick={() => setIsFeedbackOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Leave feedback or suggestion on this lecture"
              >
                <MessageSquare size={14} />
                <span className="hidden sm:inline">Feedback</span>
              </button>

              {/* Theme toggle in top reading bar */}
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
            </div>
          </div>

          {/* Reading Canvas: Notes Article */}
          <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8">
            {/* Quick reading metadata badge */}
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60">
                Week {weekPadded} · Lecture {lecturePadded}
              </span>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <Clock size={13} className="text-slate-400" />
                <span>~3-5 min revision read</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <FileText size={13} className="text-blue-500" />
                <span>Notes only</span>
              </div>
            </div>

            {/* Clean Notes Card */}
            <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-card">
              <NotesRenderer
                content={noteContent}
                isLoading={isLoading}
                error={error}
              />

              {/* Next / Previous Lecture Navigation */}
              <div className="mt-12">
                <LectureNavigation
                  courseSlug={course.slug}
                  courseTitle={course.title}
                  currentWeekNumber={activeWeekNumber}
                  prevLecture={adjacent.prevLecture}
                  nextLecture={adjacent.nextLecture}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Course Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </div>
  );
}

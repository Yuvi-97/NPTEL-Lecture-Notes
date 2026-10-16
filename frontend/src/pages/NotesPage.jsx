import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Clock, FileText } from 'lucide-react';
import { getLectureData, getAdjacentLectures } from '../data/courses';
import { loadLectureNote } from '../services/notesLoader';
import Breadcrumbs from '../components/notes/Breadcrumbs';
import NotesRenderer from '../components/notes/NotesRenderer';
import LectureNavigation from '../components/notes/LectureNavigation';

/**
 * Dedicated Notes Page optimized for distraction-free reading and study.
 * Loads individual Markdown notes with cross-lecture pagination and fallback handling.
 */
export default function NotesPage() {
  const { courseSlug, weekNumber, lectureNumber } = useParams();

  const lectureData = useMemo(
    () => getLectureData(courseSlug, weekNumber, lectureNumber),
    [courseSlug, weekNumber, lectureNumber]
  );

  const adjacent = useMemo(
    () => getAdjacentLectures(courseSlug, weekNumber, lectureNumber),
    [courseSlug, weekNumber, lectureNumber]
  );

  const [noteContent, setNoteContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch markdown content whenever params change
  useEffect(() => {
    let isCurrent = true;
    setIsLoading(true);
    setError(null);

    loadLectureNote(courseSlug, weekNumber, lectureNumber)
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
  }, [courseSlug, weekNumber, lectureNumber]);

  // Invalid lecture route fallback
  if (!lectureData) {
    return (
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
            <BookOpen size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Lecture Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            We couldn't find notes for Week {weekNumber}, Lecture {lectureNumber} in course "{courseSlug}".
          </p>
          <Link
            to={`/courses/${courseSlug}`}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
          >
            Return to Course Content
          </Link>
        </div>
      </main>
    );
  }

  const { course, week, lecture } = lectureData;
  const weekPadded = String(week.weekNumber).padStart(2, '0');
  const lecturePadded = String(lecture.lectureNumber).padStart(2, '0');

  const breadcrumbItems = [
    { label: course.title, to: `/courses/${course.slug}` },
    { label: `Week ${week.weekNumber}`, to: `/courses/${course.slug}#week-${week.weekNumber}` },
    { label: `Lecture ${lecture.lectureNumber}` },
  ];

  return (
    <main className="flex-1 w-full pb-20">
      {/* Header Container */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* Lecture Metadata Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60">
              Week {weekPadded} · Lecture {lecturePadded}
            </span>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {course.title}
            </span>
          </div>

          {/* Lecture Main Heading */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lecture.title}
          </h1>

          {/* Quick study metadata */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-slate-400" />
              <span>~3-5 min revision read</span>
            </div>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <FileText size={14} className="text-blue-500" />
              <span>Notes only · Distraction free</span>
            </div>
          </div>
        </div>
      </header>

      {/* Reading Article Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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
              currentWeekNumber={week.weekNumber}
              prevLecture={adjacent.prevLecture}
              nextLecture={adjacent.nextLecture}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

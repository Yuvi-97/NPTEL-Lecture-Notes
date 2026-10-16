import React from 'react';
import { BookOpen } from 'lucide-react';
import CourseCard from './CourseCard';
import SectionHeading from '../ui/SectionHeading';

/**
 * Course Section rendering the responsive course grid and empty search states.
 */
export default function CourseSection({ courses, onResetSearch }) {
  return (
    <section id="courses" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <SectionHeading
          eyebrow="REVISION MODULES"
          title="Your Courses"
          description="Pick up where you want to study."
        />
      </div>

      {/* Courses Grid or Empty State */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id || course.slug}
              course={course}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-8 sm:p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle max-w-lg mx-auto">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
            <BookOpen size={24} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
            No courses found
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            We couldn't find any courses matching your search. Try searching for "Logistics" or "Safety".
          </p>
          <button
            type="button"
            onClick={onResetSearch}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Clear search
          </button>
        </div>
      )}
    </section>
  );
}

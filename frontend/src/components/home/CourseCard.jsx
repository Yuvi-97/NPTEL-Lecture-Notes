import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ShieldCheck, Truck } from 'lucide-react';
import IconContainer from '../ui/IconContainer';

/**
 * Maps course iconType to Lucide icon components.
 */
const ICON_MAP = {
  truck: Truck,
  shield: ShieldCheck,
};

/**
 * Reusable CourseCard component.
 * Displays academic course details with equal visual weight, subtle hover transitions,
 * and accessible navigation to the course's 12-week curriculum page.
 */
export default function CourseCard({ course }) {
  const IconComponent = ICON_MAP[course.iconType] || ShieldCheck;
  const courseUrl = `/courses/${course.slug || course.id}`;

  return (
    <Link
      to={courseUrl}
      className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/60 shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
      aria-label={`Explore course: ${course.title}`}
    >
      <div>
        {/* Card Header: Icon container & Course Code */}
        <div className="flex items-center justify-between mb-4">
          <IconContainer
            icon={IconComponent}
            size="md"
            variant="navy"
            className="group-hover:scale-105 transition-transform duration-200"
          />
          {course.code && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 tracking-wide">
              {course.code}
            </span>
          )}
        </div>

        {/* Course Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {course.title}
        </h3>

        {/* Two-line Course Description */}
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Card Footer: Divider + Metadata & Action CTA */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        {/* Week count metadata */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Calendar size={14} className="text-slate-400 dark:text-slate-500" />
          <span>{course.weeks || `${course.weeksCount} Weeks`}</span>
        </div>

        {/* Explore Course CTA */}
        <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
          <span>Explore course</span>
          <ArrowRight
            size={16}
            className="transform group-hover:translate-x-1 transition-transform duration-200"
          />
        </div>
      </div>
    </Link>
  );
}

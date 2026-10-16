import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Moon, Sun } from 'lucide-react';
import IconContainer from '../ui/IconContainer';

/**
 * Compact, academic navigation bar.
 * Contains brand identity and minimal navigation links without clutter.
 */
export default function Navbar({ isDarkMode, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link
          to="/"
          className="flex items-center gap-3 group rounded-md p-1 -ml-1 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="NPTEL Notes - Homepage"
        >
          <IconContainer
            icon={BookOpen}
            size="sm"
            variant="navy"
            className="group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              NPTEL Notes
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
              Personal Revision Workspace
            </span>
          </div>
        </Link>

        {/* Right: Minimal Navigation & Theme Toggle */}
        <nav className="flex items-center gap-2 sm:gap-4" aria-label="Main Navigation">
          <Link
            to="/#courses"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            My Courses
          </Link>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

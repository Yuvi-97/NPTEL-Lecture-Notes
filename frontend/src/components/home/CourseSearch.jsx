import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

/**
 * Controlled search input component for filtering courses.
 * Provides accessible keyboard shortcuts and responsive sizing.
 */
export default function CourseSearch({
  searchQuery,
  onSearchChange,
  onClearSearch,
  totalResults,
  isFiltered,
}) {
  const inputRef = useRef(null);

  // Keyboard shortcut: '/' focuses the search input, 'Escape' clears it
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        if (searchQuery) {
          onClearSearch();
        } else {
          inputRef.current?.blur();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery, onClearSearch]);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative group">
        <label htmlFor="course-search-input" className="sr-only">
          Search courses or notes
        </label>

        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
          <Search size={18} strokeWidth={2} />
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          id="course-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search courses or notes..."
          className="w-full pl-10 pr-20 py-3 text-sm sm:text-base bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-subtle focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
        />

        {/* Right side controls: Clear button or shortcut indicator */}
        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center gap-1.5">
          {searchQuery ? (
            <button
              type="button"
              onClick={() => {
                onClearSearch();
                inputRef.current?.focus();
              }}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Clear search (Esc)"
              aria-label="Clear search query"
            >
              <X size={16} />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">
              /
            </kbd>
          )}
        </div>
      </div>

      {/* Filter status indicator */}
      {isFiltered && (
        <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span>
            Showing {totalResults} {totalResults === 1 ? 'course' : 'courses'} for "{searchQuery}"
          </span>
          <button
            type="button"
            onClick={onClearSearch}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

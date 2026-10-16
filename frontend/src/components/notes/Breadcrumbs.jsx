import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

/**
 * Reusable breadcrumb navigation for courses and lecture notes.
 * items: Array of { label: string, to?: string }
 */
export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full overflow-x-auto py-2">
      <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-blue-500"
            title="Go to Home"
          >
            <HomeIcon size={14} className="flex-shrink-0" />
            <span className="font-medium">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-slate-400 dark:text-slate-600 flex items-center">
                <ChevronRight size={14} />
              </li>
              <li className="flex items-center min-w-0">
                {isLast || !item.to ? (
                  <span
                    className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-xs"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    className="hover:text-slate-900 dark:hover:text-white transition-colors truncate max-w-[150px] sm:max-w-xs p-1 rounded focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

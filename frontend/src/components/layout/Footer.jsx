import React, { useState } from 'react';
import { BookOpen, Heart, MessageSquare, ExternalLink } from 'lucide-react';
import IconContainer from '../ui/IconContainer';
import FeedbackModal from '../feedback/FeedbackModal';

/**
 * Clean GitHub Mark SVG icon
 */
function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/**
 * Academic footer with "Made with ❤️", GitHub repository link, and interactive Feedback modal.
 */
export default function Footer() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const githubRepoUrl =
    process.env.REACT_APP_GITHUB_REPO_URL || 'https://github.com';

  return (
    <>
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand & Purpose */}
            <div className="flex items-center gap-3">
              <IconContainer
                icon={BookOpen}
                size="sm"
                variant="slate"
                className="dark:bg-slate-800 dark:border-slate-700"
              />
              <div>
                <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                  NPTEL Notes
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Built for focused learning and faster revision.
                </p>
              </div>
            </div>

            {/* Center: Made with Heart */}
            <div className="flex items-center justify-center text-xs text-slate-600 dark:text-slate-400">
              <span>Made with</span>
              <Heart
                size={14}
                className="mx-1.5 text-rose-500 fill-rose-500 inline-block animate-pulse"
                aria-label="love"
              />
              <span>for NPTEL Students</span>
            </div>

            {/* Actions: GitHub Repo & Feedback */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* GitHub Repo Link */}
              <a
                href={githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 transition-colors shadow-2xs"
                title="View project source code on GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
                <ExternalLink size={11} className="text-slate-400" />
              </a>

              {/* Feedback Button */}
              <button
                type="button"
                onClick={() => setIsFeedbackOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-200 dark:border-blue-800 transition-colors shadow-2xs"
              >
                <MessageSquare size={13} />
                <span>Feedback & Comments</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </>
  );
}

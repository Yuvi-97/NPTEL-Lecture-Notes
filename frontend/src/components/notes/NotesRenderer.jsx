import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

/**
 * Renders lecture notes Markdown content with clean, study-optimized academic typography.
 */
export default function NotesRenderer({ content, isLoading = false, error = null }) {
  if (isLoading) {
    return (
      <div className="space-y-4 py-8 animate-pulse">
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-md w-3/4" />
        <div className="h-20 bg-blue-50/60 dark:bg-blue-950/30 rounded-lg w-full" />
        <div className="space-y-2 pt-4">
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-200 my-4">
        <h3 className="font-bold text-sm mb-1">Notes Unavailable</h3>
        <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">
          {error}
        </p>
      </div>
    );
  }

  return (
    <article className="notes-prose max-w-none text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ node, children, ...props }) => (
            <h1
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight pb-3 mb-6 border-b border-slate-200 dark:border-slate-800"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ node, children, ...props }) => (
            <h2
              className="text-lg sm:text-xl font-bold text-blue-950 dark:text-blue-300 mt-8 mb-3 flex items-center gap-2"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: ({ node, children, ...props }) => (
            <h3
              className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mt-6 mb-2"
              {...props}
            >
              {children}
            </h3>
          ),
          p: ({ node, ...props }) => (
            <p className="my-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-5 my-3 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-5 my-3 space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="leading-relaxed" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="my-5 p-4 rounded-r-xl border-l-4 border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-slate-700 dark:text-slate-300 text-sm sm:text-base italic leading-relaxed"
              {...props}
            />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-slate-900 dark:text-white" {...props} />
          ),
          code: ({ node, inline, ...props }) => (
            inline ? (
              <code className="px-1.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-slate-200/60 dark:border-slate-700/60" {...props} />
            ) : (
              <pre className="p-4 rounded-xl bg-slate-900 text-slate-100 overflow-x-auto text-xs sm:text-sm font-mono my-4">
                <code {...props} />
              </pre>
            )
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-sm border border-slate-200 dark:border-slate-800 rounded-lg" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 font-semibold text-left text-slate-900 dark:text-slate-100" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-slate-200 dark:border-slate-800" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

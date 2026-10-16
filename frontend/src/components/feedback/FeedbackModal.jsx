import React, { useState, useEffect } from 'react';
import {
  X,
  MessageSquare,
  Star,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Users,
  Sparkles,
} from 'lucide-react';
import { submitFeedback, fetchFeedbacks } from '../../services/api';

const RATING_LABELS = {
  1: 'Needs Work',
  2: 'Fair',
  3: 'Helpful',
  4: 'Very Helpful',
  5: 'Excellent & Concise',
};

export default function FeedbackModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('write'); // 'write' | 'recent'
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' }); // { type: 'success'|'error', message: '' }

  // Recent feedbacks list
  const [recentFeedbacks, setRecentFeedbacks] = useState([]);
  const [isLoadingRecent, setIsLoadingRecent] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Load recent feedback when switching to 'recent' tab
  useEffect(() => {
    if (isOpen && activeTab === 'recent') {
      setIsLoadingRecent(true);
      fetchFeedbacks(15)
        .then((res) => {
          if (res?.data) {
            setRecentFeedbacks(res.data);
          }
        })
        .catch(() => {})
        .finally(() => {
          setIsLoadingRecent(false);
        });
    }
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comments.trim()) {
      setStatus({ type: 'error', message: 'Please enter your comments or feedback.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      await submitFeedback({
        name: name.trim() || 'Anonymous Student',
        comments: comments.trim(),
        rating,
      });

      setStatus({
        type: 'success',
        message: 'Feedback received successfully! Saved directly to the database.',
      });
      setComments('');
      setName('');
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Could not connect to the backend server. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetSuccess = () => {
    setStatus({ type: null, message: '' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs">
              <MessageSquare size={18} />
            </div>
            <div>
              <h2 id="feedback-modal-title" className="text-base font-bold text-slate-900 dark:text-slate-100">
                Feedback & Suggestions
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Help improve revision notes for all NPTEL students
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 bg-slate-50/30 dark:bg-slate-900/30">
          <button
            type="button"
            onClick={() => setActiveTab('write')}
            className={`flex items-center gap-1.5 py-3 text-xs font-semibold border-b-2 transition-colors mr-6 ${
              activeTab === 'write'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Sparkles size={14} />
            Leave Feedback
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('recent')}
            className={`flex items-center gap-1.5 py-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'recent'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Users size={14} />
            Recent Comments
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {activeTab === 'write' ? (
            <>
              {status.type === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      Thank You!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                      {status.message}
                    </p>
                  </div>
                  <div className="pt-3 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetSuccess}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Send Another
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.type === 'error' && (
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <p>{status.message}</p>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Alex Johnson or Anonymous"
                      maxLength={80}
                      className="w-full px-3.5 py-2 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Experience Rating
                      </label>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {RATING_LABELS[hoverRating || rating]}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 rounded-md text-amber-400 hover:scale-110 transition-transform focus:outline-none"
                          aria-label={`Rate ${star} star`}
                        >
                          <Star
                            size={22}
                            fill={(hoverRating || rating) >= star ? 'currentColor' : 'none'}
                            className={(hoverRating || rating) >= star ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comments Textarea */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Comments or Suggestion <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {comments.length} / 1000
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="What notes were helpful? Any lecture topic you would like summarized next or corrections to suggest?"
                      maxLength={1000}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !comments.trim()}
                      className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-sm shadow-blue-500/20 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Saving to DB...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Submit Feedback
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Recent Comments View */
            <div className="space-y-3">
              {isLoadingRecent ? (
                <div className="py-12 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
                  <Loader2 size={24} className="animate-spin text-blue-500" />
                  <p className="text-xs">Loading community feedback...</p>
                </div>
              ) : recentFeedbacks.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  <MessageSquare size={28} className="mx-auto mb-2 opacity-40" />
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    No comments yet
                  </p>
                  <p className="text-xs mt-1">Be the first to share your thoughts!</p>
                </div>
              ) : (
                recentFeedbacks.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-left space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {item.name || 'Anonymous Student'}
                        </span>
                      </div>
                      <div className="flex items-center text-amber-400">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <Star key={i} size={11} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {item.comments}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Recently'}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

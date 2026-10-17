import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import { BookOpen } from 'lucide-react';

/**
 * 404 Fallback component for unrecognized routes.
 */
function NotFound() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle max-w-md mx-auto">
        <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
          <BookOpen size={24} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          The requested page could not be found. Return to your revision dashboard to explore courses.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </main>
  );
}

/**
 * Internal layout wrapper that conditionally hides the site header/footer inside the course workspace.
 */
function AppContent({ isDarkMode, toggleTheme }) {
  const location = useLocation();
  const isInsideCourse = location.pathname.startsWith('/courses');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 font-sans transition-colors duration-200">
      {/* Hide the global header when inside the course workspace */}
      {!isInsideCourse && (
        <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses/:courseSlug"
          element={<CoursePage isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />}
        />
        <Route
          path="/courses/:courseSlug/weeks/:weekNumber/lectures/:lectureNumber"
          element={<CoursePage isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Hide the global footer when inside the course workspace */}
      {!isInsideCourse && <Footer />}
    </div>
  );
}

/**
 * Root Application component.
 * Provides client-side routing and dark/light theme state.
 */
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('nptel_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('nptel_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('nptel_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Analytics />
    </BrowserRouter>
  );
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Automatically scrolls window to top upon route transitions.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element && typeof element.scrollIntoView === 'function') {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (typeof window.scrollTo === 'function') {
      try {
        window.scrollTo(0, 0);
      } catch (e) {
        // Safe fallback in test environments
      }
    }
  }, [pathname, hash]);

  return null;
}

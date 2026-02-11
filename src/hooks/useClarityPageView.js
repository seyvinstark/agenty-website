// Calls Clarity on each route change to track SPA page views correctly
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useClarityPageView() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('set', 'current_url', location.pathname + location.search);
    }
  }, [location]);
}

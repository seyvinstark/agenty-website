import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './ui/Button';

const STORAGE_KEY = 'seyvin-analytics-consent';

function applyClarityConsent(analyticsGranted) {
  if (typeof window === 'undefined' || !window.clarity) return;
  window.clarity('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: analyticsGranted ? 'granted' : 'denied',
  });
}

export default function CookieConsentBanner() {
  const { theme } = useTheme();
  const [consent, setConsent] = useState(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    if (consent === 'granted') {
      applyClarityConsent(true);
    } else if (consent === 'denied') {
      applyClarityConsent(false);
    }
  }, [consent]);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'granted');
    applyClarityConsent(true);
    setConsent('granted');
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'denied');
    applyClarityConsent(false);
    setConsent('denied');
  };

  if (consent !== null) {
    return null;
  }

  const containerClasses =
    theme === 'dark'
      ? 'bg-[#0a0a0a] border-t border-white/10 text-white'
      : 'bg-white border-t border-slate-200 text-slate-900';

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 px-4 py-3 shadow-lg ${containerClasses}`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
        <p className="text-center text-sm sm:text-left">
          We use analytics to improve the site.
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button variant="primary" size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

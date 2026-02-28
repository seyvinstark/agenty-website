import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Terms() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div className="section-container py-24">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-sm font-medium mb-8 ${
            theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          ← Back to home
        </Link>
        <h1 className={`text-3xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Terms of Service
        </h1>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
          This page is under construction. Please contact us at hello@seyvin.com for terms-related inquiries.
        </p>
      </div>
    </div>
  );
}

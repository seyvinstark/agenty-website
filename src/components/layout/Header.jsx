import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Button from '../ui/Button';
import HashLink from '../HashLink';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#process' },
  { label: 'Use cases', href: '#clients' },
  { label: 'Beta partner program', href: '#pricing' },
];

const secondaryLinks = [
  // { label: 'Security', href: '#team' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? theme === 'dark' 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5' 
            : 'bg-white/90 backdrop-blur-lg border-b border-black/5 shadow-sm'
          : 'bg-transparent'
        }
      `}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              theme === 'dark' 
                ? 'bg-[#1a1a1a] border border-[#262626]' 
                : 'bg-slate-100 border border-slate-200'
            }`}>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill={theme === 'dark' ? 'white' : '#0f172a'}>
                <circle cx="12" cy="12" r="8" fill={theme === 'dark' ? 'white' : '#0f172a'}/>
                <path 
                  d="M12 4C7.582 4 4 7.582 4 12s3.582 8 8 8 8-3.582 8-8S16.418 4 12 4zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c1.386 0 2.663.477 3.681 1.265l-4.656 3.835c-.415.342-.525.902-.277 1.379.247.477.78.736 1.309.637l6.019-1.14C21.603 10.068 18.784 18 12 18z" 
                  fill={theme === 'dark' ? '#1a1a1a' : 'white'}
                />
              </svg>
            </div>
            <span className={`text-xl font-serif italic ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Seyvin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <HashLink
                key={link.label}
                to={link.href}
                className={`transition-colors duration-200 text-sm font-medium ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </HashLink>
            ))}
            
            {/* Secondary Links Divider */}
            <div className={`hidden 2xl:block h-4 w-px ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-300'}`} />
            
            {/* Secondary Links */}
            <div className="hidden 2xl:flex items-center gap-4">
              {secondaryLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-4">
                  <HashLink
                    to={link.href}
                    className={`transition-colors duration-200 text-xs ${
                      theme === 'dark' 
                        ? 'text-gray-500 hover:text-gray-300' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {link.label}
                  </HashLink>
                  {index < secondaryLinks.length - 1 && (
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-700' : 'text-slate-300'}`}>•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right side: CTA + Theme Toggle */}
          <div className="hidden xl:flex items-center gap-4">
            <Button 
              variant="glass" 
              size="sm"
              onClick={() => navigate('/book-demo')}
            >
              Book 15-min beta demo
            </Button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`
                relative w-14 h-8 rounded-full p-1 transition-all duration-300
                ${theme === 'dark' 
                  ? 'bg-[#1a1a1a] border border-[#262626]' 
                  : 'bg-slate-200 border border-slate-300'
                }
              `}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <motion.div
                layout
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center
                  ${theme === 'dark' 
                    ? 'bg-[#262626]' 
                    : 'bg-white shadow-sm'
                  }
                `}
                initial={false}
                animate={{ x: theme === 'dark' ? 0 : 22 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="xl:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-lg transition-colors
                ${theme === 'dark' 
                  ? 'bg-[#1a1a1a] border border-[#262626] text-white' 
                  : 'bg-slate-100 border border-slate-200 text-slate-900'
                }
              `}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Moon className="w-5 h-5 text-cyan-400" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`xl:hidden border-t ${
              theme === 'dark' 
                ? 'bg-[#0a0a0a] border-white/5' 
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="section-container py-6 space-y-4">
              {/* Primary Links */}
              {navLinks.map((link) => (
                <HashLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-colors duration-200 py-2 font-medium ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </HashLink>
              ))}
              
              {/* Divider */}
              <div className={`border-t my-4 ${theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'}`} />
              
              {/* Secondary Links */}
              <div className="flex flex-wrap gap-4">
                {secondaryLinks.map((link) => (
                  <HashLink
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm transition-colors duration-200 ${
                      theme === 'dark' 
                        ? 'text-gray-500 hover:text-gray-300' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {link.label}
                  </HashLink>
                ))}
              </div>
              
              <Button 
                variant="glass" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/book-demo');
                }}
              >
                Book 15-min beta demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

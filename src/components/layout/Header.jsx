import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import HashLink from '../HashLink';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#services' },
  { label: 'Use cases', href: '#clients' },
  { label: 'Our platform', href: '#services' },
  { label: 'Partnering with us', href: '#services-partners' },
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
  const { theme } = useTheme();

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
          {/* Logo / Brand */}
          <Link to="/" className={`text-xl font-serif italic ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Seyvin
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

          {/* Right side: CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <Button 
              variant="glass" 
              size="sm"
              onClick={() => navigate('/book-demo')}
            >
              Book a 15-min demo
            </Button>
          </div>

          {/* Mobile: Menu Button */}
          <div className="xl:hidden flex items-center gap-3">
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
                Book a 15-min demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

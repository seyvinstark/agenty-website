import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}
      `}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#262626] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                <circle cx="12" cy="12" r="8" fill="white"/>
                <path 
                  d="M12 4C7.582 4 4 7.582 4 12s3.582 8 8 8 8-3.582 8-8S16.418 4 12 4zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c1.386 0 2.663.477 3.681 1.265l-4.656 3.835c-.415.342-.525.902-.277 1.379.247.477.78.736 1.309.637l6.019-1.14C21.603 10.068 18.784 18 12 18z" 
                  fill="#1a1a1a"
                />
              </svg>
            </div>
            <span className="text-xl font-serif italic text-white">Landio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="secondary" size="sm">
              Get Template
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-white/5"
          >
            <div className="section-container py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="secondary" size="sm" className="w-full mt-4">
                Get Template
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


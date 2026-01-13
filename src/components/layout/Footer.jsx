import { Twitter, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#process' },
  { label: 'Use Cases', href: '#clients' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`border-t ${
      theme === 'dark' 
        ? 'bg-[#0a0a0a] border-[#1f1f1f]' 
        : 'bg-white border-slate-200'
    }`}>
      <div className="section-container py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          {/* Logo and Links */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2">
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
              <span className={`text-xl font-serif italic ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>Seyvin</span>
            </a>

            {/* Tagline */}
            <p className={`text-sm lg:border-l lg:pl-8 ${
              theme === 'dark' 
                ? 'text-gray-500 lg:border-[#262626]' 
                : 'text-slate-500 lg:border-slate-200'
            }`}>
              Your AI Analytics Team — Ready in Minutes
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-[#1a1a1a] border border-[#262626] text-gray-400 hover:text-white hover:border-white/20' 
                    : 'bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links Row */}
        <div className="flex flex-wrap gap-6 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors duration-200 text-sm ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className={`h-px mb-8 ${
          theme === 'dark' ? 'bg-[#1f1f1f]' : 'bg-slate-200'
        }`} />

        {/* Bottom Row */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-sm ${
          theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
        }`}>
          <p>© 2026 Seyvin. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className={`transition-colors ${
                  theme === 'dark' 
                    ? 'text-gray-500 hover:text-white' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a 
            href="mailto:hello@seyvin.com" 
            className={`flex items-center gap-2 transition-colors ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-white' 
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Mail className="w-4 h-4" />
            hello@seyvin.com
          </a>
        </div>
      </div>
    </footer>
  );
}

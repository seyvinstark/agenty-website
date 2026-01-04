import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="section-container py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          {/* Logo and Links */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
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

            {/* Nav Links */}
            <nav className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1f1f1f] mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2025 Landio Template</p>
          <p>
            Made by{' '}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Framebase
            </a>
          </p>
          <a 
            href="mailto:landio@support.com" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            landio@support.com
          </a>
        </div>
      </div>
    </footer>
  );
}


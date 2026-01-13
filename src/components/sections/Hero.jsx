import { motion } from 'framer-motion';
import { ChevronDown, Lock, Users, CreditCard } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]' 
          : 'bg-gradient-to-b from-white via-slate-50 to-white'
      }`} />
      
      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: theme === 'dark' 
            ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Accent glow */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[120px] rounded-full ${
        theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-400/10'
      }`} />

      <div className="relative z-10 section-container text-center pt-32 pb-20">
        {/* Animated Logo Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl ${
              theme === 'dark' 
                ? 'bg-[#1a1a1a] border border-[#262626]' 
                : 'bg-slate-100 border border-slate-200'
            }`}>
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill={theme === 'dark' ? 'white' : '#0f172a'}>
                <circle cx="12" cy="12" r="8" fill={theme === 'dark' ? 'white' : '#0f172a'}/>
                <path 
                  d="M12 4C7.582 4 4 7.582 4 12s3.582 8 8 8 8-3.582 8-8S16.418 4 12 4zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c1.386 0 2.663.477 3.681 1.265l-4.656 3.835c-.415.342-.525.902-.277 1.379.247.477.78.736 1.309.637l6.019-1.14C21.603 10.068 18.784 18 12 18z" 
                  fill={theme === 'dark' ? '#1a1a1a' : 'white'}
                />
              </svg>
            </div>
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl blur-xl -z-10 ${
              theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-400/30'
            }`} />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
            theme === 'dark' 
              ? 'bg-[#1a1a1a]/50 border border-[#262626] text-gray-400' 
              : 'bg-slate-100 border border-slate-200 text-slate-600'
          }`}>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            BETA ACCESS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Your AI Analytics Team —
          <br />
          <span className={`font-serif italic ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
          }`}>Ready in Minutes</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}
        >
          Stop spending 5-10 hours per week on manual reporting. Three specialized AI assistants analyze your data, create dashboards automatically, and generate board-ready reports
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a href="#demo">
          <Button variant="primary" size="lg" withArrow>
              Book a demo
            </Button>
          </a>
          <a href="/beta">
            <Button variant="secondary" size="lg">
              Apply for closed beta
          </Button>
          </a>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`flex items-center justify-center gap-4 text-sm ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4" />
            Secure OAuth
          </span>
          <div className={`w-px h-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-300'}`} />
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Limited beta spots
          </span>
          <div className={`w-px h-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-300'}`} />
          <span className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4" />
            No credit card
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#data-analysis"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

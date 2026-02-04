import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  ...props
}) {
  const { theme } = useTheme();
  
  const variants = {
    primary: theme === 'dark' 
      ? 'bg-white text-black hover:bg-gray-100' 
      : 'bg-slate-900 text-white hover:bg-slate-800',
    secondary: theme === 'dark'
      ? 'bg-transparent border border-white/20 text-white hover:bg-white/5'
      : 'bg-transparent border border-slate-300 text-slate-900 hover:bg-slate-50',
    ghost: theme === 'dark'
      ? 'bg-transparent text-white hover:bg-white/5'
      : 'bg-transparent text-slate-900 hover:bg-slate-100',
    accent: theme === 'dark'
      ? 'bg-cyan-500 text-black hover:bg-cyan-400'
      : 'bg-cyan-600 text-white hover:bg-cyan-500',
    glass: theme === 'dark'
      ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
      : 'bg-slate-900/10 text-slate-900 hover:bg-slate-900/20 border border-slate-300/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center justify-center gap-2
        font-medium rounded-full
        transition-colors duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
      {withArrow && <ArrowUpRight className="w-4 h-4" />}
    </motion.button>
  );
}

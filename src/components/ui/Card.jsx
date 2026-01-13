import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
  ...props
}) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      whileHover={hover ? { 
        y: -4, 
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)' 
      } : {}}
      transition={{ duration: 0.3 }}
      className={`
        rounded-2xl border transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-[#1a1a1a] border-[#262626]' 
          : 'bg-white border-slate-200 shadow-sm'
        }
        ${padding}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({ children, className = '', ...props }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`
        backdrop-blur-xl rounded-2xl
        ${theme === 'dark' 
          ? 'bg-[#1a1a1a]/80 border border-white/10' 
          : 'bg-white/80 border border-slate-200'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { SectionBadge } from './Badge';
import { useTheme } from '../../context/ThemeContext';

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  titleAccent,
  description,
  className = '',
}) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`text-center max-w-3xl mx-auto mb-12 ${className}`}
    >
      {badge && <SectionBadge icon={badgeIcon}>{badge}</SectionBadge>}
      
      <h2 className={`text-4xl md:text-5xl font-semibold mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-slate-900'
      }`}>
        {title}{' '}
        {titleAccent && (
          <span className={`font-serif italic ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
          }`}>{titleAccent}</span>
        )}
      </h2>
      
      {description && (
        <p className={`text-lg ${
          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
        }`}>{description}</p>
      )}
    </motion.div>
  );
}

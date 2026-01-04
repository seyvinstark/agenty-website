import { motion } from 'framer-motion';
import { SectionBadge } from './Badge';

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  titleAccent,
  description,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`text-center max-w-3xl mx-auto mb-12 ${className}`}
    >
      {badge && <SectionBadge icon={badgeIcon}>{badge}</SectionBadge>}
      
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
        {title}{' '}
        {titleAccent && (
          <span className="font-serif italic text-gray-400">{titleAccent}</span>
        )}
      </h2>
      
      {description && (
        <p className="text-gray-400 text-lg">{description}</p>
      )}
    </motion.div>
  );
}


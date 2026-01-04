import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, borderColor: 'rgba(255, 255, 255, 0.2)' } : {}}
      transition={{ duration: 0.3 }}
      className={`
        bg-[#1a1a1a] rounded-2xl border border-[#262626]
        transition-all duration-300
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
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`
        bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl
        border border-white/10
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}


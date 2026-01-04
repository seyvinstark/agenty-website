import { motion } from 'framer-motion';

export default function Toggle({ options, value, onChange, className = '' }) {
  return (
    <div
      className={`
        inline-flex items-center
        p-1 rounded-full
        bg-[#1a1a1a] border border-[#262626]
        ${className}
      `}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`
            relative px-6 py-2 rounded-full text-sm font-medium
            transition-colors duration-200
            ${value === option.value ? 'text-black' : 'text-gray-400 hover:text-white'}
          `}
        >
          {value === option.value && (
            <motion.div
              layoutId="toggle-bg"
              className="absolute inset-0 bg-white rounded-full"
              transition={{ type: 'spring', duration: 0.4 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {option.label}
            {option.badge && (
              <span className="px-2 py-0.5 text-xs bg-cyan-500 text-black rounded-full">
                {option.badge}
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}


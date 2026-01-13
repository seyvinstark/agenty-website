import { useTheme } from '../../context/ThemeContext';

export default function Badge({ children, icon: Icon, className = '' }) {
  const { theme } = useTheme();
  
  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        text-sm font-medium
        ${theme === 'dark' 
          ? 'bg-[#1a1a1a] border border-[#262626] text-gray-300' 
          : 'bg-slate-100 border border-slate-200 text-slate-600'
        }
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  );
}

export function SectionBadge({ children, icon: Icon }) {
  const { theme } = useTheme();
  
  return (
    <div className="flex justify-center mb-6">
      <span
        className={`
          inline-flex items-center gap-2
          px-4 py-2 rounded-full
          text-sm font-medium uppercase tracking-wider
          ${theme === 'dark' 
            ? 'bg-[#1a1a1a]/80 border border-[#262626] text-gray-400' 
            : 'bg-slate-100 border border-slate-200 text-slate-500'
          }
        `}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </span>
    </div>
  );
}

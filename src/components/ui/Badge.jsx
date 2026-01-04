export default function Badge({ children, icon: Icon, className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        bg-[#1a1a1a] border border-[#262626]
        text-sm text-gray-300 font-medium
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  );
}

export function SectionBadge({ children, icon: Icon }) {
  return (
    <div className="flex justify-center mb-6">
      <span
        className="
          inline-flex items-center gap-2
          px-4 py-2 rounded-full
          bg-[#1a1a1a]/80 border border-[#262626]
          text-sm text-gray-400 font-medium uppercase tracking-wider
        "
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </span>
    </div>
  );
}


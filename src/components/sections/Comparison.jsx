import { motion } from 'framer-motion';
import { GitCompare, Check, X } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';

const comparisonRows = [
  {
    capability: 'Get started',
    seyvin: 'Connect a source or upload a file — first dashboard in minutes',
    others: 'Weeks of setup, data modeling, and IT involvement before anything works',
  },
  {
    capability: 'Ask a question',
    seyvin: 'Type in plain English → get analysis + chart + driver explanation',
    others: 'Write SQL, build a query, or submit a request to the "data person"',
  },
  {
    capability: 'Trust the answer',
    seyvin: 'Every number linked to its source — traceable and reproducible',
    others: 'Black-box results, no audit trail, or confident-sounding hallucinations',
  },
  {
    capability: 'Share with leadership',
    seyvin: 'Auto-generated dashboards + narrative updates you can download or share',
    others: 'Screenshot charts into slides, copy numbers into docs, reformat every time',
  },
  {
    capability: 'Handle follow-ups',
    seyvin: '"Now show me by region" — instant drill-down on the same data',
    others: 'Rebuild the dataset, re-run the query, wait for the next reporting cycle',
  },
  {
    capability: 'Adapt to your business',
    seyvin: 'Multi-agent AI team shaped to your industry, KPIs, and workflows — not a generic template',
    others: 'One-size-fits-all dashboards that ignore your context, terminology, and priorities',
  },
  {
    capability: 'Maintain over time',
    seyvin: 'Sources stay synced, KPIs update automatically, definitions stay consistent',
    others: 'Formulas break, exports go stale, definitions drift across tools',
  },
];


export default function Comparison() {
  const { theme } = useTheme();
  
  return (
    <section id="comparison" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="COMPARISON"
          badgeIcon={GitCompare}
          title="One Platform"
          titleAccent="vs. Patchwork"
          description="Most teams cobble together spreadsheets, BI tools, and generic AI. Here's what changes when it's all in one place."
        />

        {/* Comparison Table — responsive card-based */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Card padding="p-0" className="overflow-hidden">
            {/* Header row */}
            <div className={`grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1.4fr] border-b ${
              theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'
            }`}>
              <div className={`p-4 md:p-5 hidden md:block ${
                theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
              }`}>
                <span className="text-xs uppercase tracking-wider font-medium">Capability</span>
              </div>
              <div className={`p-4 md:p-5 ${
                theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-50'
              }`}>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'
                  }`} />
                  <span className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
                  }`}>Seyvin</span>
                </div>
              </div>
              <div className={`p-4 md:p-5 hidden md:block`}>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-600' : 'bg-slate-400'
                  }`} />
                  <span className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>Typical alternatives</span>
                </div>
              </div>
            </div>

            {/* Data rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.capability}
                className={`grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1.4fr] border-b last:border-b-0 ${
                  theme === 'dark' ? 'border-[#1a1a1a]' : 'border-slate-100'
                }`}
              >
                {/* Capability label */}
                <div className={`p-4 md:p-5 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  <span className="text-sm font-medium">{row.capability}</span>
                </div>

                {/* Seyvin */}
                <div className={`px-4 pb-4 md:p-5 ${
                  theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-50/70'
                }`}>
                  <div className="flex items-start gap-2.5">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-100'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                      }`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                    }`}>{row.seyvin}</span>
                  </div>
                </div>

                {/* Others */}
                <div className={`px-4 pb-4 md:p-5`}>
                  {/* Mobile label */}
                  <div className={`md:hidden text-xs uppercase tracking-wider font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
                  }`}>Typical alternatives</div>
                  <div className="flex items-start gap-2.5">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50'
                    }`}>
                      <X className={`w-3 h-3 ${
                        theme === 'dark' ? 'text-red-400/70' : 'text-red-400'
                      }`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                    }`}>{row.others}</span>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { AlertTriangle, Database, Code2, ShieldQuestion, ArrowRight } from 'lucide-react';
import { SectionBadge } from '../ui/Badge';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const painPoints = [
  {
    id: 'scavenger',
    icon: Database,
    title: 'The Data Scavenger Hunt',
    bullets: [
      'The "truth" lives in Drive folders, Notion pages, exports, and attachments',
      'Too many versions: "final_v7" problems',
      'Answers require hunting across tools before analysis even starts',
    ],
    whatItCauses: 'Results: slow answers, duplicated work, and inconsistent decisions.',
  },
  {
    id: 'spaghetti',
    icon: Code2,
    title: 'Spreadsheet Spaghetti',
    bullets: [
      'Copy/paste between CSVs, tabs, and tools to make reports',
      'Formulas break, pivots drift, definitions change silently',
      'You re-check numbers instead of acting on them',
    ],
    whatItCauses: 'Results: "numbers fights" and lost trust in reporting.',
  },
  {
    id: 'ambush',
    icon: ShieldQuestion,
    title: 'One question turns into ten',
    bullets: [
      'Someone asks to see it by region, by product line, or "why did this change?"',
      'One simple question turns into days of digging through different files and tools.',
      'Showing the chart is the easy part — explaining  the why behind the numbers is hard.',
    ],
    whatItCauses: 'Result: decisions get delayed, or people decide without the full picture.',
  },
];

function PainPointCard({ painPoint, index }) {
  const { theme } = useTheme();
  const Icon = painPoint.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card padding="p-6" className="h-full flex flex-col">
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50'
          }`}>
            <Icon className={`w-5 h-5 ${
              theme === 'dark' ? 'text-red-400' : 'text-red-500'
            }`} />
          </div>
          <h3 className={`font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {painPoint.title}
          </h3>
        </div>
        
        {/* Bullets */}
        <ul className="space-y-2 mb-4 flex-grow">
          {painPoint.bullets.map((bullet, i) => (
            <li 
              key={i}
              className={`flex items-start gap-2 text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}
            >
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                theme === 'dark' ? 'bg-red-400/50' : 'bg-red-400'
              }`} />
              {bullet}
            </li>
          ))}
        </ul>
        
        {/* What it causes */}
        <div className={`pt-4 border-t ${
          theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'
        }`}>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
          }`}>
            {painPoint.whatItCauses}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function DataAnalysis() {
  const { theme } = useTheme();
  
  return (
    <section id="data-analysis" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <SectionBadge icon={AlertTriangle}>SOUND FAMILIAR?</SectionBadge>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
            }`}>
              Most teams spend more time finding, cleaning, and reconciling data than answering questions and making decisions.
            </p>
          </div>

          {/* Pain Point Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {painPoints.map((painPoint, index) => (
              <PainPointCard 
                key={painPoint.id} 
                painPoint={painPoint} 
                index={index} 
              />
            ))}
          </div>

          {/* Transition line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-center text-base max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            }`}
          >
            If this feels familiar, the real bottleneck isn't effort — it's analysis trapped behind manual prep, scattered sources, and brittle workflows.
          </motion.p>

          {/* CTA Footer */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-center p-6 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-[#0f0f0f] border-[#262626]' 
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            }`}>
              We'll show you full traceability live in the demo—every insight linked to source data.
            </p>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => window.open('https://cal.com/seyvin/15min', '_blank')}
            >
              Book 15-min beta demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}

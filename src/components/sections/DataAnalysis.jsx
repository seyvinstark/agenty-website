import { motion } from 'framer-motion';
import { AlertTriangle, Database, Code2, ShieldQuestion, ArrowRight } from 'lucide-react';
import { SectionBadge } from '../ui/Badge';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const painPoints = [
  {
    id: 'fragmented',
    icon: Database,
    title: 'Fragmented Insights',
    quote: '"10 sources, 10 different answers"',
    bullets: [
      'Data reconciliation drains hours weekly',
      'Critical insights buried in spreadsheets',
      'KPIs don\'t align across teams',
    ],
  },
  {
    id: 'technical',
    icon: Code2,
    title: 'Too Technical to Scale',
    quote: '"We need answers, not another BI project"',
    bullets: [
      'BI tools require weeks of setup',
      'Every question needs SQL or IT help',
      'Self-service analytics stays a dream',
    ],
  },
  {
    id: 'trust',
    icon: ShieldQuestion,
    title: 'AI You Can\'t Verify',
    quote: '"We can\'t present AI outputs to stakeholders"',
    bullets: [
      'No traceability to source data',
      'Hallucinations erode confidence',
      'Not audit-ready for leadership',
    ],
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
        
        {/* Quote */}
        <div className={`pt-4 border-t ${
          theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'
        }`}>
          <p className={`text-sm italic ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
          }`}>
            {painPoint.quote}
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
              You have data everywhere, but answers are{' '}
              <span className={`font-medium ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>slow</span>,{' '}
              <span className={`font-medium ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>fragile</span>, or{' '}
              <span className={`font-medium ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>untrusted</span>.
            </p>
          </div>

          {/* Pain Point Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {painPoints.map((painPoint, index) => (
              <PainPointCard 
                key={painPoint.id} 
                painPoint={painPoint} 
                index={index} 
              />
            ))}
          </div>

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

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';

const benefits = [
  {
    title: 'From Question → Analysis + Chart (in minutes)',
    description: 'Ask in plain English. Seyvin analyzes the relevant data, generates the right visualization, and explains the key drivers — with traceable numbers you can verify.',
    illustration: 'gauge',
  },
  {
    title: 'Always-Synced Data (No More Download/Reupload)',
    description: 'Connect to multiple data sources or upload files in multiple data formats —  Seyvin ingests and cleans them automatically, so you spend less time on prep and more on decision making.',
    illustration: 'connect',
  },
  {
    title: 'Decision-Ready Dashboards + Reports',
    description: 'Auto-create KPIs from your available sources and generate narrative reports with charts you can download or share — built for weekly ops reviews, month-end, and board updates.',
    illustration: 'chart',
  },
];

function GaugeIllustration() {
  const { theme } = useTheme();
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <svg viewBox="0 0 200 100" className="w-48 h-24">
        {/* Gauge arc background */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={theme === 'dark' ? '#262626' : '#e2e8f0'}
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Gauge arc fill */}
        <motion.path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={theme === 'dark' ? '#3b3b3b' : '#cbd5e1'}
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        {/* Needle */}
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke={theme === 'dark' ? '#ffffff' : '#0f172a'}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ rotate: -90 }}
          whileInView={{ rotate: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{ transformOrigin: '100px 100px' }}
        />
        {/* Center dot */}
        <circle cx="100" cy="100" r="6" fill={theme === 'dark' ? '#22d3ee' : '#0891b2'} />
      </svg>
    </div>
  );
}

function ChartIllustration() {
  const { theme } = useTheme();
  const bars = [60, 80, 45, 90, 70];
  return (
    <div className="relative w-full h-40 flex items-end justify-center gap-2 px-8">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className={`w-8 rounded-t ${
            theme === 'dark' 
              ? 'bg-gradient-to-t from-[#262626] to-[#3b3b3b]' 
              : 'bg-gradient-to-t from-slate-200 to-slate-300'
          }`}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

function ConnectIllustration() {
  const { theme } = useTheme();
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <div className="flex items-center gap-4">
        <motion.div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            theme === 'dark' ? 'bg-[#262626]' : 'bg-slate-200'
          }`}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={`w-6 h-6 rounded ${
            theme === 'dark' ? 'bg-[#3b3b3b]' : 'bg-slate-300'
          }`} />
        </motion.div>
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-600'
            }`} />
          ))}
        </motion.div>
        <motion.div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            theme === 'dark' ? 'bg-[#262626]' : 'bg-slate-200'
          }`}
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={`w-6 h-6 rounded ${
            theme === 'dark' ? 'bg-[#3b3b3b]' : 'bg-slate-300'
          }`} />
        </motion.div>
      </div>
    </div>
  );
}

const illustrations = {
  gauge: GaugeIllustration,
  chart: ChartIllustration,
  connect: ConnectIllustration,
};

export default function Benefits() {
  const { theme } = useTheme();
  
  return (
    <section id="benefits" className={`py-24 ${
      theme === 'dark' ? 'theme-bg-secondary' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="BENEFITS"
          badgeIcon={Sparkles}
          title="Why Choose"
          titleAccent="Seyvin?"
          description="Seyvin turns scattered operational data into decisions: automatic analysis → visualizations → dashboards → board-ready reports (with traceable numbers)."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Illustration = illustrations[benefit.illustration];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full" padding="p-8">
                  <Illustration />
                  <h3 className={`text-xl font-semibold text-center mt-6 mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-center text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Transition to next section */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-center text-base mt-10 ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}
        >
          Explore what the platform can do — and how we support beta partners every step of the way.
        </motion.p>
      </div>
    </section>
  );
}

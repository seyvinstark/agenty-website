import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { SectionBadge } from '../ui/Badge';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';

const stats = [
  {
    value: '95%',
    description: 'of GenAI pilots are failing',
    source: 'MIT NANDA Initiative, 2025',
  },
  {
    value: '88%',
    description: 'of AI pilots fail to reach production',
    source: 'IDC Research',
  },
  {
    value: '47%',
    description: 'cite integration complexity as #1 barrier',
    source: 'Industry Research',
  },
];

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
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <SectionBadge icon={AlertTriangle}>SOUND FAMILIAR?</SectionBadge>

          {/* Quote */}
          <blockquote className={`text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            If you're struggling with{' '}
            <span className={`font-serif italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
            }`}>data fragmentation</span>, technical complexity, or{' '}
            <span className={`font-serif italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
            }`}>slow insights</span>—you're not alone.
          </blockquote>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card padding="p-6" className="h-full flex flex-col">
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {stat.value}
                  </div>
                  <p className={`mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>{stat.description}</p>
                  <p className={`text-sm mt-auto ${
                    theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
                  }`}>{stat.source}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

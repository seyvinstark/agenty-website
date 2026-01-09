import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { SectionBadge } from '../ui/Badge';
import Card from '../ui/Card';

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
  return (
    <section id="data-analysis" className="py-24 bg-[#0a0a0a]">
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
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-12">
            If you're struggling with{' '}
            <span className="font-serif italic text-gray-400">data fragmentation</span>, technical complexity, or{' '}
            <span className="font-serif italic text-gray-400">slow insights</span>—you're not alone.
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
              >
                <Card padding="p-6">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
            </div>
                  <p className="text-gray-400 mb-2">{stat.description}</p>
                  <p className="text-gray-600 text-sm">{stat.source}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const benefits = [
  {
    title: 'Save 5-10 Hours Weekly',
    description: 'Stop manual reporting. Our AI assistants analyze your data automatically.',
    illustration: 'gauge',
  },
  {
    title: 'Board Prep: 8hrs → 15min',
    description: 'Generate investor reports and executive summaries in one command.',
    illustration: 'chart',
  },
  {
    title: 'Zero Technical Skills',
    description: 'No SQL, no dashboard design. Ask questions in plain English.',
    illustration: 'connect',
  },
];

function GaugeIllustration() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <svg viewBox="0 0 200 100" className="w-48 h-24">
        {/* Gauge arc background */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#262626"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Gauge arc fill */}
        <motion.path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#3b3b3b"
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
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ rotate: -90 }}
          whileInView={{ rotate: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{ transformOrigin: '100px 100px' }}
        />
        {/* Center dot */}
        <circle cx="100" cy="100" r="6" fill="#22d3ee" />
      </svg>
    </div>
  );
}

function ChartIllustration() {
  const bars = [60, 80, 45, 90, 70];
  return (
    <div className="relative w-full h-40 flex items-end justify-center gap-2 px-8">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-8 bg-gradient-to-t from-[#262626] to-[#3b3b3b] rounded-t"
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
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <div className="flex items-center gap-4">
        <motion.div
          className="w-12 h-12 rounded-xl bg-[#262626] flex items-center justify-center"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-6 rounded bg-[#3b3b3b]" />
        </motion.div>
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-cyan-500" />
          ))}
        </motion.div>
        <motion.div
          className="w-12 h-12 rounded-xl bg-[#262626] flex items-center justify-center"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-6 rounded bg-[#3b3b3b]" />
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
  return (
    <section id="benefits" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="BENEFITS"
          badgeIcon={Sparkles}
          title="Why Choose"
          titleAccent="Seyvin?"
          description="Enterprise-grade analytics at a fraction of the cost—without the complexity"
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
                  <h3 className="text-xl font-semibold text-white text-center mt-6 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-center text-sm">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


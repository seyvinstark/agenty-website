import { motion } from 'framer-motion';
import { Check, Clock, CreditCard, Database } from 'lucide-react';
import Button from '../ui/Button';

const trustPoints = [
  { icon: Clock, text: '15-minute personalized demo' },
  { icon: Database, text: 'See your data analyzed live' },
  { icon: CreditCard, text: 'No credit card required' },
  { icon: Check, text: 'Limited beta spots' },
];

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Pre-title */}
          <p className="text-gray-500 italic mb-4">
            — <span className="text-gray-400">See it in action</span> —
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            See Seyvin Analyze{' '}
            <span className="font-serif italic text-gray-400">Your Data</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            In 15 minutes, we'll connect to your QuickBooks (or any data source) and show you 
            how Seyvin generates dashboards and reports from your actual business data.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <point.icon className="w-4 h-4 text-cyan-400" />
                {point.text}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a href="#demo">
              <Button variant="primary" size="lg" withArrow>
                Book a demo
              </Button>
            </a>
            <a href="/beta">
              <Button variant="secondary" size="lg">
                Apply for closed beta
              </Button>
            </a>
          </motion.div>

          {/* Glow effect under button */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-cyan-500/10 blur-3xl" />
          </div>

          {/* Urgency */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-600 text-sm"
          >
            Limited beta spots available — apply early to secure founding member rates
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

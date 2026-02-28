import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, Clock, CreditCard, Database } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const trustPoints = [
  { icon: Clock, text: '15-minute personalized demo' },
  { icon: Database, text: 'See your data analyzed live' },
  { icon: CreditCard, text: 'No credit card required' },
  { icon: Check, text: 'Limited beta spots' },
];

export default function CTA() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  return (
    <section id="cta" className={`py-24 ${
      theme === 'dark' ? 'theme-bg-secondary' : 'bg-white'
    }`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Pre-title */}
          <p className={`italic mb-4 ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-400'
          }`}>
            — <span className={theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}>See it in action</span> —
          </p>

          {/* Title */}
          <h2 className={`text-4xl md:text-5xl font-semibold mb-4 leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            See Seyvin Analyze{' '}
            <span className={`font-serif italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
            }`}>Your Data</span>
          </h2>

          {/* Subtitle */}
          <p className={`text-lg mb-8 max-w-xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            In 15 minutes, we'll connect to your data source and show you 
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
                className={`flex items-center gap-2 text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                <point.icon className={`w-4 h-4 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                }`} />
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
            <Button variant="primary" size="lg" withArrow onClick={() => navigate('/book-demo')}>
              Book a 15-min demo
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/book-demo')}>
              Apply for closed beta
            </Button>
          </motion.div>

          {/* Glow effect under button */}
          <div className="relative">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 blur-3xl ${
              theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-400/20'
            }`} />
          </div>

          {/* Urgency */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`text-sm ${
              theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
            }`}
          >
            Limited beta spots available — apply early to secure founding member rates
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

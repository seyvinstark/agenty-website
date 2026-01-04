import { motion } from 'framer-motion';
import { GitCompare, Check, X, Layers } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const ourFeatures = [
  'Fast setup with ready AI workflows',
  'Built to grow and adapt with you',
  'Real-time, AI-powered analytics',
  'Automates tasks, reducing overhead',
  'Expert support + AI guidance',
];

const otherFeatures = [
  'Slower execution and manual setup',
  'Requires manual updates as you scale',
  'Limited or delayed reporting',
  'Higher labor costs, less automation',
  'Generic support or none at all',
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="COMPARISON"
          badgeIcon={GitCompare}
          title="Why Choose Us"
          titleAccent="Over Others"
          description="See how we compare against others in performance, growth"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#262626] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                  <circle cx="12" cy="12" r="8" fill="white"/>
                  <path 
                    d="M12 4C7.582 4 4 7.582 4 12s3.582 8 8 8 8-3.582 8-8S16.418 4 12 4zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c1.386 0 2.663.477 3.681 1.265l-4.656 3.835c-.415.342-.525.902-.277 1.379.247.477.78.736 1.309.637l6.019-1.14C21.603 10.068 18.784 18 12 18z" 
                    fill="#1a1a1a"
                  />
                </svg>
              </div>
              <span className="text-xl font-serif italic text-white">Landio</span>
            </div>

            <Card padding="p-6">
              <ul className="space-y-4">
                {ourFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Title */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-gray-500" />
              <span className="text-xl font-serif italic text-gray-500">Others</span>
            </div>

            <Card padding="p-6" className="bg-[#0f0f0f]">
              <ul className="space-y-4">
                {otherFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


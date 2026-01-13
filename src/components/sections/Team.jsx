import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, FileCheck, Key } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Enterprise-Grade Encryption',
    description: 'Your data is encrypted at rest and in transit using industry-standard AES-256 protocols.',
  },
  {
    icon: Key,
    title: 'Secure OAuth 2.0',
    description: "We never store your passwords. You authorize access through each platform's secure login.",
  },
  {
    icon: FileCheck,
    title: 'SOC 2 Type II',
    description: 'Compliance in progress. Regular security audits and penetration testing.',
  },
  {
    icon: Eye,
    title: 'Transparent & Traceable',
    description: 'Every insight is traceable to your source data. No black boxes. No mystery calculations.',
  },
  {
    icon: Server,
    title: 'GDPR Ready',
    description: 'GDPR-compliant data handling. Your data stays yours—disconnect or delete anytime.',
  },
  {
    icon: Shield,
    title: 'You Own Your Data',
    description: "We don't train AI models on your business data. Your information is never shared.",
  },
];

export default function Team() {
  return (
    <section id="security" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="SECURITY"
          badgeIcon={Shield}
          title="Your Data. Your Security."
          titleAccent="Your Control."
          description="Enterprise-grade security without the enterprise complexity"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card padding="p-6" className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card padding="p-6" className="max-w-xl mx-auto">
            <p className="text-gray-400 text-sm">
              Questions about security? We're happy to discuss your specific requirements.
            </p>
            <a 
              href="#demo" 
              className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mt-3 hover:text-cyan-300 transition-colors"
            >
              Book a security-focused demo →
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

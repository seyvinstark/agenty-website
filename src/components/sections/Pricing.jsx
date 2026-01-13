import { motion } from 'framer-motion';
import { Tag, Check, X, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const costComparison = {
  traditionalBI: {
    title: 'Traditional BI Tools',
    icon: '📊',
    costs: [
      { item: 'Tableau / ThoughtSpot', price: '$50,000+/year' },
      { item: 'Databricks', price: '$250,000+/year' },
      { item: 'Implementation', price: '3-6 months + consultants' },
    ],
  },
  inHouse: {
    title: 'Hiring In-House',
    icon: '👥',
    costs: [
      { item: 'Data Analyst salary', price: '$80,000+/year' },
      { item: 'Data Engineer salary', price: '$120,000+/year' },
      { item: 'Time-to-productivity', price: '5-7 months' },
    ],
  },
};

const seyvinDelivers = [
  'Enterprise-grade AI intelligence',
  'Setup in days, not months',
  'No technical expertise required',
  'Operations AND investor reporting',
  'Every insight traceable to source',
];

const betaBenefits = [
  { text: 'Early access to all features', icon: '🚀' },
  { text: 'Founding member rates (locked in)', icon: '🔒' },
  { text: 'Direct influence on roadmap', icon: '🎯' },
  { text: 'No commitment during beta', icon: '✨' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="PRICING"
          badgeIcon={Tag}
          title="The Math"
          titleAccent="Doesn't Work"
          description="Enterprise analytics shouldn't cost enterprise budgets"
        />

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Traditional BI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card padding="p-6" className="h-full border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{costComparison.traditionalBI.icon}</span>
                <div>
                  <h3 className="font-semibold text-white">{costComparison.traditionalBI.title}</h3>
                  <p className="text-xs text-gray-500">What others charge</p>
                </div>
              </div>
              <div className="space-y-3">
                {costComparison.traditionalBI.costs.map((cost, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a]">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      <span className="text-gray-400 text-sm">{cost.item}</span>
                    </div>
                    <span className="text-red-400 font-medium text-sm">{cost.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* In-House */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card padding="p-6" className="h-full border-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{costComparison.inHouse.icon}</span>
                <div>
                  <h3 className="font-semibold text-white">{costComparison.inHouse.title}</h3>
                  <p className="text-xs text-gray-500">Building it yourself</p>
                </div>
              </div>
              <div className="space-y-3">
                {costComparison.inHouse.costs.map((cost, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a]">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-400 text-sm">{cost.item}</span>
                    </div>
                    <span className="text-orange-400 font-medium text-sm">{cost.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Seyvin Delivers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card padding="p-8" className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Seyvin Delivers</h3>
                <p className="text-sm text-gray-400">At a fraction of the cost</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {seyvinDelivers.map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-[#0a0a0a]">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Beta Access Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card padding="p-8 md:p-12" className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Limited Beta Access
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Join the Founding Members
            </h3>

            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Pricing will be finalized based on beta participant feedback. Join now to lock in 
              preferential founding member rates before public launch.
            </p>

            {/* Beta Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto text-left">
              {betaBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{benefit.icon}</span>
                  <span className="text-gray-300 text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#demo">
                <Button variant="primary" size="lg" withArrow>
                  Book a demo
                </Button>
              </a>
              <a href="/beta">
                <Button variant="secondary" size="lg">
                  Apply for beta access
                </Button>
              </a>
            </div>

            <p className="text-gray-600 text-sm mt-6">
              No credit card required • 15-minute personalized demo
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

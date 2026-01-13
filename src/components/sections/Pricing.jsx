import { motion } from 'framer-motion';
import { Tag, Check, X, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

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
  const { theme } = useTheme();
  
  return (
    <section id="pricing" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
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
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>{costComparison.traditionalBI.title}</h3>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                  }`}>What others charge</p>
                </div>
              </div>
              <div className="space-y-3">
                {costComparison.traditionalBI.costs.map((cost, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-slate-50'
                  }`}>
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                      }`}>{cost.item}</span>
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
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>{costComparison.inHouse.title}</h3>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                  }`}>Building it yourself</p>
                </div>
              </div>
              <div className="space-y-3">
                {costComparison.inHouse.costs.map((cost, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-slate-50'
                  }`}>
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-orange-400" />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                      }`}>{cost.item}</span>
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
          <Card padding="p-8" className={`border-cyan-500/30 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-cyan-500/5 to-transparent' 
              : 'bg-gradient-to-br from-cyan-50 to-white'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-100'
              }`}>
                <Sparkles className={`w-6 h-6 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                }`} />
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>Seyvin Delivers</h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}>At a fraction of the cost</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {seyvinDelivers.map((item, i) => (
                <div key={i} className={`flex items-center gap-2 p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-slate-50'
                }`}>
                  <Check className={`w-4 h-4 flex-shrink-0 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  }`} />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                  }`}>{item}</span>
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
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-6 ${
              theme === 'dark' 
                ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                : 'bg-cyan-50 border-cyan-200 text-cyan-700'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${
                theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'
              }`} />
              Limited Beta Access
            </div>

            <h3 className={`text-2xl md:text-3xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Join the Founding Members
            </h3>

            <p className={`mb-8 max-w-xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Pricing will be finalized based on beta participant feedback. Join now to lock in 
              preferential founding member rates before public launch.
            </p>

            {/* Beta Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto text-left">
              {betaBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{benefit.icon}</span>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                  }`}>{benefit.text}</span>
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

            <p className={`text-sm mt-6 ${
              theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
            }`}>
              No credit card required • 15-minute personalized demo
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

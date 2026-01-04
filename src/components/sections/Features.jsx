import { motion } from 'framer-motion';
import { 
  Box, 
  Workflow, 
  Brain, 
  MessageSquare, 
  TrendingUp, 
  BarChart3, 
  Puzzle,
  Cog,
  Bot
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const features = [
  {
    icons: [Workflow, Cog],
    title: 'Workflow Automation',
    description: 'Automate complex business processes to boost speed, clarity, and efficiency.',
  },
  {
    icons: [Brain, Bot],
    title: 'Custom AI Solutions',
    description: 'Build tailored AI systems that align with your business goals and challenges.',
  },
  {
    icons: [MessageSquare, Bot],
    title: 'AI Assistant',
    description: 'Deploy intelligent virtual agents to streamline tasks.',
  },
  {
    icons: [TrendingUp, BarChart3],
    title: 'Sales & Marketing',
    description: 'Leverage AI to optimize campaigns, track leads, and personalize outreach.',
  },
  {
    icons: [BarChart3, TrendingUp],
    title: 'Performance Tracking',
    description: 'Track automation results in real time to improve and scale your workflows.',
  },
  {
    icons: [Puzzle, Cog],
    title: 'Seamless Integrations',
    description: 'Connect your tools and apps for smooth, unified AI-powered workflows.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="FEATURES"
          badgeIcon={Box}
          title="All features in"
          titleAccent="one place"
          description="Everything you need to automate operations, boost productivity"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon1 = feature.icons[0];
            const Icon2 = feature.icons[1];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card padding="p-8" className="h-full">
                  {/* Icon pair */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-3 rounded-xl bg-[#0f0f0f] border border-[#262626]">
                      <Icon1 className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="p-3 rounded-xl bg-[#0f0f0f] border border-[#262626]">
                      <Icon2 className="w-5 h-5 text-gray-400" />
                    </div>
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
      </div>
    </section>
  );
}


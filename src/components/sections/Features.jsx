import { motion } from 'framer-motion';
import { 
  Box, 
  LayoutDashboard,
  BarChart3,
  Users,
  Bot,
  FileText,
  Clock,
  Link2,
  Palette,
  Database
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';

// Tier 1: Primary features (larger cards)
const primaryFeatures = [
  {
    icons: [LayoutDashboard, BarChart3],
    title: 'Instant Dashboards from Your Data',
    description: 'Connect your data sources once. Seyvin automatically generates relevant KPIs, trend visualizations, and performance metrics—no design skills needed.',
    proof: 'Save 5-10 hours per week on manual dashboard creation',
  },
  {
    icons: [Users, Bot],
    title: 'Your data team in one assistant',
    description: 'Ask in plain English. Your AI analytics team routes to the right specialist—queries, narratives, and charts—so you get answers without switching tools. Every insight traceable to your data.',
    proof: 'Every answer backed by your actual data',
  },
  {
    icons: [FileText, Clock],
    title: 'Board-Ready Reports in One Command',
    description: '"Create a Q4 performance report for my investors." Seyvin generates professional reports with executive summaries, trend analysis, and recommendations.',
    proof: 'Board meeting prep: 8 hours → 15 minutes',
  },
];

// Tier 2: Secondary features (smaller cards)
const secondaryFeatures = [
  {
    icons: [Link2, Database],
    title: 'One Knowledge Base from All Your Sources',
    description: 'Connect QuickBooks, Notion, Google Drive, CSV, and more. Seyvin turns them into one unified, searchable knowledge base—so you stop jumping between apps and files.',
  },
  {
    icons: [Palette, BarChart3],
    title: 'Conversational Chart Editing',
    description: 'Customize any visualization by describing what you want.',
  },
];

export default function Features() {
  const { theme } = useTheme();
  
  return (
    <section id="features" className={`py-24 ${
      theme === 'dark' ? 'theme-bg-secondary' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="FEATURES"
          badgeIcon={Box}
          title="Everything You Need."
          titleAccent="Nothing You Don't."
          description="Now that you've seen the flow, here's everything the platform includes. Built for how you work—complete AI intelligence without the complexity"
        />

        {/* Tier 1: Primary Features - Large Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {primaryFeatures.map((feature, index) => {
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
                    <div className={`p-3 rounded-xl border ${
                      theme === 'dark' 
                        ? 'bg-[#0f0f0f] border-[#262626]' 
                        : 'bg-slate-50 border-slate-200'
                    }`}>
                      <Icon1 className={`w-5 h-5 ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                      }`} />
                    </div>
                    <div className={`p-3 rounded-xl border ${
                      theme === 'dark' 
                        ? 'bg-[#0f0f0f] border-[#262626]' 
                        : 'bg-slate-50 border-slate-200'
                    }`}>
                      <Icon2 className={`w-5 h-5 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                      }`} />
                    </div>
                  </div>

                  <h3 className={`text-lg font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {feature.description}
                  </p>
                  
                  {/* Proof point */}
                  <div className={`mt-auto pt-4 border-t ${
                    theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'
                  }`}>
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`}>
                      ✓ {feature.proof}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tier 2: Secondary Features - Smaller Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {secondaryFeatures.map((feature, index) => {
            const Icon1 = feature.icons[0];
            const Icon2 = feature.icons[1];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              >
                <Card padding="p-6" className="h-full">
                  {/* Icon pair */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-[#0f0f0f] border-[#262626]' 
                        : 'bg-slate-50 border-slate-200'
                    }`}>
                      <Icon1 className={`w-4 h-4 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                      }`} />
                    </div>
                    <div className={`p-2 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-[#0f0f0f] border-[#262626]' 
                        : 'bg-slate-50 border-slate-200'
                    }`}>
                      <Icon2 className={`w-4 h-4 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                      }`} />
                    </div>
                  </div>

                  <h3 className={`text-base font-semibold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                  }`}>
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

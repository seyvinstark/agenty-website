import { motion } from 'framer-motion';
import { 
  Box, 
  LayoutDashboard,
  BarChart3,
  Users,
  Bot,
  FileText,
  Clock,
  MessageSquare,
  Link2,
  Palette,
  Database,
  Workflow
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

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
    title: 'Three AI Experts. One Conversation.',
    description: 'Ask questions in plain English. Dolores routes to the right specialist. The Data Analyst generates queries. The Report Writer creates narratives. Every insight traceable.',
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
    icons: [MessageSquare, Bot],
    title: 'Natural Language Querying',
    description: 'Ask in English, get instant answers. No SQL required.',
  },
  {
    icons: [Link2, Database],
    title: 'Multi-Source Integration',
    description: 'QuickBooks, Notion, Google Drive, CSV, and more.',
  },
  {
    icons: [Palette, BarChart3],
    title: 'Conversational Chart Editing',
    description: 'Customize any visualization by describing what you want.',
  },
  {
    icons: [Database, LayoutDashboard],
    title: 'Centralized Knowledge Base',
    description: 'Unified, searchable data across your entire business.',
  },
  {
    icons: [Workflow, Bot],
    title: 'AI Agent Teams & Workflows',
    description: 'Build custom workflows without code.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="FEATURES"
          badgeIcon={Box}
          title="Everything You Need."
          titleAccent="Nothing You Don't."
          description="Built for how you work—complete AI intelligence without the complexity"
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
                    <div className="p-3 rounded-xl bg-[#0f0f0f] border border-[#262626]">
                      <Icon1 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="p-3 rounded-xl bg-[#0f0f0f] border border-[#262626]">
                      <Icon2 className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Proof point */}
                  <div className="mt-auto pt-4 border-t border-[#262626]">
                    <span className="text-cyan-400 text-sm font-medium">
                      ✓ {feature.proof}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tier 2: Secondary Features - Smaller Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
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
                    <div className="p-2 rounded-lg bg-[#0f0f0f] border border-[#262626]">
                      <Icon1 className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="p-2 rounded-lg bg-[#0f0f0f] border border-[#262626]">
                      <Icon2 className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
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

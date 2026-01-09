import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  DollarSign, 
  Clock, 
  Users, 
  Twitter,
  Check,
  RotateCw,
  Search,
  Code,
  Lightbulb,
  Layers,
  Sparkles
} from 'lucide-react';
import Card from '../ui/Card';

const services = [
  {
    id: 'automate',
    title: 'Automate repetitive tasks',
    description: 'We help you streamline internal operations by automating manual workflows',
    tasks: [
      { icon: DollarSign, label: 'Cost Management', status: 'pending' },
      { icon: Clock, label: 'Payment reminder', status: 'done' },
      { icon: Users, label: 'Employee Tracking', status: 'pending' },
      { icon: Twitter, label: 'Social media post', status: 'done' },
    ],
  },
  {
    id: 'workflows',
    title: 'Automated Workflows',
    description: 'Boost efficiency across teams with smart automation. Build intelligent workflows that automate multi-step processes across tools and platforms',
    visual: 'workflow',
  },
  {
    id: 'intelligence',
    title: 'Real-Time Intelligence',
    description: 'Make smarter decisions with live data insights. Tap into real-time data',
    visual: 'search',
    searchItems: ['Software & App Industry', 'UX & UI Design Industry', 'High Converting Customer'],
  },
  {
    id: 'agents',
    title: 'Custom AI Agent development',
    description: 'We develop custom AI agents that integrate seamlessly with your tools',
    visual: 'code',
  },
  {
    id: 'consulting',
    title: 'AI Strategy Consulting',
    description: 'Get expert guidance to implement AI solutions that drive business growth',
    visual: 'lightbulb',
  },
];

function ToggleBadge({ activeTab, onTabChange }) {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex items-center rounded-full bg-[#1a1a1a]/50 border border-[#262626] p-1">
        <button
          onClick={() => onTabChange('platform')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 ${
            activeTab === 'platform'
              ? 'bg-[#262626] text-white'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <Layers className="w-4 h-4" />
          Our Platform
        </button>
        <button
          onClick={() => onTabChange('services')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 ${
            activeTab === 'services'
              ? 'bg-[#262626] text-white'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <Box className="w-4 h-4" />
          Services
        </button>
      </div>
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <div className="space-y-3">
      {tasks.map((task, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05, duration: 0.2 }}
          className="flex items-center justify-between p-4 rounded-xl bg-[#0f0f0f] border border-[#262626]"
        >
          <div className="flex items-center gap-3">
            <task.icon className="w-5 h-5 text-gray-400" />
            <span className="text-white">{task.label}</span>
          </div>
          {task.status === 'done' ? (
            <Check className="w-5 h-5 text-gray-400" />
          ) : (
            <RotateCw className="w-5 h-5 text-gray-500" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function SearchVisual({ items }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0f0f0f] border border-[#262626]">
        <Search className="w-5 h-5 text-gray-500" />
        <span className="text-gray-500">Research anything...</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
          Research
        </span>
        {items.map((item, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-400 text-sm border border-[#262626]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CodeVisual() {
  const codeLines = [
    'class AutomationAgent:',
    '  def __init__(self, activation_limit):',
    '    self.activation_limit = activation_limit',
    '    self.current_mode = "idle"',
    '',
    '  def evaluate_task(self, workload_value):',
    '    if workload_value > self.activation_limit:',
    '      self.current_mode = "engaged"',
    '      return "Automation agent activated!"',
  ];

  return (
    <div className="bg-[#0f0f0f] rounded-xl border border-[#262626] p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3 text-gray-500 text-xs">
        <Code className="w-4 h-4" />
        <span>Code</span>
      </div>
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.03, duration: 0.2 }}
          className="flex"
        >
          <span className="w-6 text-gray-600 text-right mr-4">{i + 1}</span>
          <span className="text-gray-300">{line}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ServicesContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="grid lg:grid-cols-2 gap-6"
    >
      {/* Task automation card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <Card padding="p-8" className="h-full">
          <TaskList tasks={services[0].tasks} />
          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-2">
            {services[0].title}
          </h3>
          <p className="text-gray-400 text-sm">{services[0].description}</p>
        </Card>
      </motion.div>

      {/* Search/Intelligence card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card padding="p-8" className="h-full">
          <SearchVisual items={services[2].searchItems} />
          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-2">
            {services[2].title}
          </h3>
          <p className="text-gray-400 text-sm">{services[2].description}</p>
        </Card>
      </motion.div>

      {/* Code/AI Agents card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="lg:col-span-2"
      >
        <Card padding="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <CodeVisual />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {services[3].title}
              </h3>
              <p className="text-gray-400">{services[3].description}</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Consulting card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="lg:col-span-2"
      >
        <Card padding="p-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#262626] flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {services[4].title}
              </h3>
              <p className="text-gray-400 text-sm">{services[4].description}</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function PlatformContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="grid lg:grid-cols-2 gap-6"
    >
      {/* Placeholder card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <Card padding="p-8" className="h-full min-h-[300px] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-[#262626] flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Platform Feature 1</h3>
          <p className="text-gray-400 text-sm text-center">Placeholder for platform content. Coming soon.</p>
        </Card>
      </motion.div>

      {/* Placeholder card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card padding="p-8" className="h-full min-h-[300px] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-[#262626] flex items-center justify-center mb-4">
            <Layers className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Platform Feature 2</h3>
          <p className="text-gray-400 text-sm text-center">Placeholder for platform content. Coming soon.</p>
        </Card>
      </motion.div>

      {/* Placeholder wide card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="lg:col-span-2"
      >
        <Card padding="p-8">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-6">
              <Layers className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Our Platform</h3>
            <p className="text-gray-400 text-center max-w-xl">
              Discover how our AI-powered platform can transform your business operations. 
              Full platform details coming soon.
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        {/* Custom header with toggle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ToggleBadge activeTab={activeTab} onTabChange={setActiveTab} />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
          >
            {activeTab === 'services' ? 'Smarter Services,' : 'Powerful Platform,'}
            <br />
            <span className="font-serif italic text-gray-400">
              {activeTab === 'services' ? 'Built with AI' : 'Built for You'}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            {activeTab === 'services' 
              ? 'Everything you need to automate operations, boost productivity'
              : 'One platform to connect, analyze, and act on your data'
            }
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'services' ? (
            <ServicesContent key="services" />
          ) : (
            <PlatformContent key="platform" />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

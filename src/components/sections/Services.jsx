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
import { useTheme } from '../../context/ThemeContext';

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
  const { theme } = useTheme();
  
  return (
    <div className="flex justify-center mb-6">
      <div className={`inline-flex items-center rounded-full p-1 ${
        theme === 'dark' 
          ? 'bg-[#1a1a1a]/50 border border-[#262626]' 
          : 'bg-slate-100 border border-slate-200'
      }`}>
        <button
          onClick={() => onTabChange('platform')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 ${
            activeTab === 'platform'
              ? theme === 'dark' ? 'bg-[#262626] text-white' : 'bg-white text-slate-900 shadow-sm'
              : theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Layers className="w-4 h-4" />
          Our Platform
        </button>
        <button
          onClick={() => onTabChange('services')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 ${
            activeTab === 'services'
              ? theme === 'dark' ? 'bg-[#262626] text-white' : 'bg-white text-slate-900 shadow-sm'
              : theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-slate-500 hover:text-slate-700'
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
  const { theme } = useTheme();
  
  return (
    <div className="space-y-3">
      {tasks.map((task, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05, duration: 0.2 }}
          className={`flex items-center justify-between p-4 rounded-xl border ${
            theme === 'dark' 
              ? 'bg-[#0f0f0f] border-[#262626]' 
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <task.icon className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`} />
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>{task.label}</span>
          </div>
          {task.status === 'done' ? (
            <Check className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`} />
          ) : (
            <RotateCw className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function SearchVisual({ items }) {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-3">
      <div className={`flex items-center gap-2 p-3 rounded-xl border ${
        theme === 'dark' 
          ? 'bg-[#0f0f0f] border-[#262626]' 
          : 'bg-slate-50 border-slate-200'
      }`}>
        <Search className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`} />
        <span className={theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}>Research anything...</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className={`px-3 py-1 rounded-full text-sm border ${
          theme === 'dark' 
            ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' 
            : 'bg-cyan-50 text-cyan-700 border-cyan-200'
        }`}>
          Research
        </span>
        {items.map((item, i) => (
          <span key={i} className={`px-3 py-1 rounded-full text-sm border ${
            theme === 'dark' 
              ? 'bg-[#1a1a1a] text-gray-400 border-[#262626]' 
              : 'bg-slate-100 text-slate-600 border-slate-200'
          }`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CodeVisual() {
  const { theme } = useTheme();
  
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
    <div className={`rounded-xl border p-4 font-mono text-sm ${
      theme === 'dark' 
        ? 'bg-[#0f0f0f] border-[#262626]' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className={`flex items-center gap-2 mb-3 text-xs ${
        theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
      }`}>
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
          <span className={`w-6 text-right mr-4 ${
            theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
          }`}>{i + 1}</span>
          <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}>{line}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ServicesContent() {
  const { theme } = useTheme();
  
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
          <h3 className={`text-xl font-semibold mt-6 mb-2 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          }`}>
            {services[0].title}
          </h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            {services[0].description}
          </p>
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
          <h3 className={`text-xl font-semibold mt-6 mb-2 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          }`}>
            {services[2].title}
          </h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            {services[2].description}
          </p>
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
              <h3 className={`text-2xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {services[3].title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>
                {services[3].description}
              </p>
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
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              theme === 'dark' ? 'bg-[#262626]' : 'bg-slate-100'
            }`}>
              <Lightbulb className={`w-6 h-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {services[4].title}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                {services[4].description}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function PlatformContent() {
  const { theme } = useTheme();
  
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
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
            theme === 'dark' ? 'bg-[#262626]' : 'bg-slate-100'
          }`}>
            <Sparkles className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
          </div>
          <h3 className={`text-xl font-semibold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>Platform Feature 1</h3>
          <p className={`text-sm text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>Placeholder for platform content. Coming soon.</p>
        </Card>
      </motion.div>

      {/* Placeholder card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card padding="p-8" className="h-full min-h-[300px] flex flex-col items-center justify-center">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
            theme === 'dark' ? 'bg-[#262626]' : 'bg-slate-100'
          }`}>
            <Layers className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
          </div>
          <h3 className={`text-xl font-semibold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>Platform Feature 2</h3>
          <p className={`text-sm text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>Placeholder for platform content. Coming soon.</p>
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
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5' 
                : 'bg-gradient-to-br from-cyan-100 to-cyan-50'
            }`}>
              <Layers className={`w-10 h-10 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
            </div>
            <h3 className={`text-2xl font-semibold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>Our Platform</h3>
            <p className={`text-center max-w-xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            }`}>
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
  const { theme } = useTheme();

  return (
    <section id="services" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-slate-50'
    }`}>
      <div className="section-container">
        {/* Custom header with toggle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ToggleBadge activeTab={activeTab} onTabChange={setActiveTab} />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            {activeTab === 'services' ? 'Smarter Services,' : 'Powerful Platform,'}
            <br />
            <span className={`font-serif italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
            }`}>
              {activeTab === 'services' ? 'Built with AI' : 'Built for You'}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}
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

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ProcessStepsContent } from './Process';
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
  Sparkles,
  Handshake,
  Database,
  Map,
  Palette,
  ArrowRight
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

// Layout for "Our Platform" tab: 'sideCardRightSteps' (side card + steps on right) | 'stacked' | 'leftStepsRightVisual' | 'leftVisualRightSteps'
const PLATFORM_LAYOUT = 'sideCardRightSteps';

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
          <Handshake className="w-4 h-4" />
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

// Onboarding steps for the task list visual
const onboardingSteps = [
  { icon: Users, label: 'KPI mapping + definitions', status: 'done' },
  { icon: Database, label: 'Connect any sources', status: 'done' },
  { icon: Sparkles, label: 'First dashboard + insights', status: 'pending' },
  { icon: Check, label: 'First shareable update', status: 'pending' },
];

// Integration tags for the data setup visual
const integrationTags = ['QuickBooks', 'Notion', 'Google Drive', 'CSV / Excel', 'PDF / DOCX'];

// Roadmap features visual
function RoadmapVisual() {
  const { theme } = useTheme();
  
  const templates = [
    { name: 'Weekly ops review dashboard', status: 'ready', meta: 'Template pack' },
    { name: 'Month-end close summary', status: 'beta', meta: 'Template pack' },
    { name: 'Board / investor update', status: 'beta', meta: 'Template pack' },
  ];

  return (
    <div className="space-y-3">
      {templates.map((template, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.2 }}
          className={`flex items-center justify-between p-3 rounded-xl border ${
            theme === 'dark' 
              ? 'bg-[#0f0f0f] border-[#262626]' 
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className={`px-2 py-0.5 text-xs rounded-full ${
              template.status === 'ready'
                ? theme === 'dark' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                : theme === 'dark' ? 'bg-gray-500/20 text-gray-400' : 'bg-gray-100 text-gray-600'
            }`}>
              {template.status}
            </span>
            <span className={theme === 'dark' ? 'text-white text-sm' : 'text-slate-900 text-sm'}>
              {template.name}
            </span>
          </div>
          <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
            {template.meta}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function BetaPartnerSupportContent() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="grid lg:grid-cols-2 gap-6"
    >
      {/* Onboarding card - Task list style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <Card padding="p-8" className="h-full">
          <TaskList tasks={onboardingSteps} />
          <h3 className={`text-xl font-semibold mt-6 mb-2 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          }`}>
            KPI & Dashboard Setup
          </h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            Built for founders, investors, and department leaders: we map KPIs, align definitions, and ship your first dashboard so the numbers are consistent and repeatable.
          </p>
        </Card>
      </motion.div>

      {/* Data Setup card - Search/tags style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card padding="p-8" className="h-full">
          <div className="space-y-3">
            <div className={`flex items-center gap-2 p-3 rounded-xl border ${
              theme === 'dark' 
                ? 'bg-[#0f0f0f] border-[#262626]' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <Database className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`} />
              <span className={theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}>Connect your data...</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm border ${
                theme === 'dark' 
                  ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' 
                  : 'bg-cyan-50 text-cyan-700 border-cyan-200'
              }`}>
                We help setup
              </span>
              {integrationTags.map((tag, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-sm border ${
                  theme === 'dark' 
                    ? 'bg-[#1a1a1a] text-gray-400 border-[#262626]' 
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3 className={`text-xl font-semibold mt-6 mb-2 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          }`}>
            Data Connection + Validation
          </h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            We connect sources, validate the “source of truth,” and make sure the same metric means the same thing everywhere.
          </p>
        </Card>
      </motion.div>

      {/* Roadmap Influence card - Wide card with visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="lg:col-span-2"
      >
        <Card padding="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <RoadmapVisual />
            <div className="flex flex-col justify-center">
              <h3 className={`text-2xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Briefs & Update Templates
              </h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>
                We set up reusable write-up templates with charts you can download or share — for founder visibility, team follow-ups, month-end, and investor updates.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Customization card - Lightbulb/consulting style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="lg:col-span-2"
      >
        <Card padding="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
              theme === 'dark' ? 'bg-[#262626]' : 'bg-slate-100'
            }`}>
              <Palette className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className={`text-xl font-semibold mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Enablement + Governance
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                We help your team ask better questions, standardize definitions, and build a workflow leaders can trust — with traceable numbers.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/book-demo')}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              Book a 15-min demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* What happens in beta */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="lg:col-span-2"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['Connect any sources', 'First dashboard', 'First insights', 'First shareable updates'].map((item) => (
            <span
              key={item}
              className={`px-3 py-1 rounded-full text-sm border ${
                theme === 'dark'
                  ? 'bg-[#0f0f0f] text-gray-400 border-[#262626]'
                  : 'bg-white text-slate-600 border-slate-200'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function PlatformActionContent({ theme, navigate }) {
  return (
    <div className="min-w-0">
        <div className={`text-xs uppercase tracking-wide mb-2 ${
          theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
        }`}>
          What it does
        </div>
        <h3 className={`text-2xl font-semibold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          Platform in Action
        </h3>
        <ul className="space-y-3 mb-7">
          {[
            'Upload your files or connect to your data sources (e.g. Google Drive, CRM, database)',
            'Seyvin auto-ingests, cleans, and builds KPIs from your real sources',
            'Ask questions → get analysis + charts, with explanation and traceable numbers',
            'Generate dashboards and narrative updates you can download or share',
          ].map((item) => (
            <li
              key={item}
              className={`flex items-start gap-3 text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}
            >
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                theme === 'dark' ? 'bg-cyan-400/70' : 'bg-cyan-600'
              }`} />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate('/book-demo')}
          className="w-full sm:w-auto flex items-center gap-2 sm:whitespace-nowrap"
        >
          Book a 15-min demo
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
  );
}

function PlatformContent() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [platformStep, setPlatformStep] = useState(1);

  // Side card (What it does) left, steps + visual right — no scroll to see steps
  if (PLATFORM_LAYOUT === 'sideCardRightSteps') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="grid lg:grid-cols-5 gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="lg:col-span-2 min-w-0"
        >
          <Card padding="p-8">
            <PlatformActionContent theme={theme} navigate={navigate} />
          </Card>
        </motion.div>
        <motion.div
          id="platform-steps"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="lg:col-span-3 min-w-0 relative"
        >
          <span id="process" className="absolute top-0 left-0 pointer-events-none" aria-hidden="true" />
          <Card padding="p-8 md:p-12">
            <ProcessStepsContent />
          </Card>
        </motion.div>
      </motion.div>
    );
  }

  if (PLATFORM_LAYOUT === 'stacked') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <Card padding="p-8">
            <PlatformActionContent theme={theme} navigate={navigate} />
          </Card>
        </motion.div>
        <motion.div
          id="platform-steps"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
        >
          <Card padding="p-8 md:p-12" className="relative">
            <span id="process" className="absolute -top-24 left-0" aria-hidden="true" />
            <ProcessStepsContent />
          </Card>
        </motion.div>
      </motion.div>
    );
  }

  if (PLATFORM_LAYOUT === 'leftStepsRightVisual') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="grid lg:grid-cols-5 gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="lg:col-span-2 min-w-0"
        >
          <Card padding="p-8" className="h-full flex flex-col">
            <PlatformActionContent theme={theme} navigate={navigate} />
            <div className={`mt-6 pt-6 border-t flex-1 min-h-0 ${theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'}`}>
              <ProcessStepsContent
                layout="stepsOnly"
                activeStep={platformStep}
                setActiveStep={setPlatformStep}
              />
            </div>
          </Card>
        </motion.div>
        <motion.div
          id="platform-steps"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="lg:col-span-3 min-w-0"
        >
          <Card padding="p-8">
            <span id="process" className="sr-only" aria-hidden="true" />
            <ProcessStepsContent
              layout="visualOnly"
              activeStep={platformStep}
            />
          </Card>
        </motion.div>
      </motion.div>
    );
  }

  if (PLATFORM_LAYOUT === 'leftVisualRightSteps') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="grid lg:grid-cols-5 gap-6"
      >
        <motion.div
          id="platform-steps"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="lg:col-span-3 min-w-0"
        >
          <Card padding="p-8">
            <span id="process" className="sr-only" aria-hidden="true" />
            <ProcessStepsContent
              layout="visualOnly"
              activeStep={platformStep}
            />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="lg:col-span-2 min-w-0"
        >
          <Card padding="p-8" className="h-full flex flex-col">
            <PlatformActionContent theme={theme} navigate={navigate} />
            <div className={`mt-6 pt-6 border-t flex-1 min-h-0 ${theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'}`}>
              <ProcessStepsContent
                layout="stepsOnly"
                activeStep={platformStep}
                setActiveStep={setPlatformStep}
              />
            </div>
          </Card>
        </motion.div>
      </motion.div>
    );
  }

  return null;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('platform');
  const { theme } = useTheme();

  // Sync tab with URL hash: only #services-partners shows Services tab; everything else (including #services) shows Our Platform
  useEffect(() => {
    const syncTabFromHash = () => {
      const hash = window.location.hash;
      setActiveTab(hash === '#services-partners' ? 'services' : 'platform');
    };
    syncTabFromHash();
    window.addEventListener('hashchange', syncTabFromHash);
    return () => window.removeEventListener('hashchange', syncTabFromHash);
  }, []);

  return (
    <section id="services" className={`relative py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-slate-50'
    }`}>
      <div className="section-container">
        <span id="services-partners" className="absolute -top-24" aria-hidden="true" />
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
            {activeTab === 'services' ? 'Support Built Around You,' : 'Powerful Platform,'}
            <br />
            <span className={`font-serif italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
            }`}>
              {activeTab === 'services' ? 'For Our Partners' : 'Built for You'}
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
              ? 'We offer hands-on support for founders, investors, and department leaders: from clean data and KPI setup to decision-ready dashboards and updates. We can also build custom agents and tools for your use cases, integrated with your data providers.'
              : 'One platform to connect, analyze, and act on your data'
            }
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'services' ? (
            <BetaPartnerSupportContent key="services" />
          ) : (
            <PlatformContent key="platform" />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

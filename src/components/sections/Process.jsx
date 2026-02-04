import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Check, BarChart3, MessageSquare, FileDown, Database } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';

const steps = [
  {
    id: 1,
    number: '01',
    icon: Database,
    title: 'Connect Your Data',
    subtitle: 'One-click setup, zero configuration',
    description: 'Link the tools you already use in seconds. No APIs to configure, no data engineering required. Just authorize and go.',
    features: [
      'QuickBooks Online — Financial data',
      'Notion — Documents & wikis',
      'Google Drive — Files & spreadsheets',
      'CSV/Excel — Upload any data',
    ],
    deliverable: 'All your data sources connected',
    visual: 'integration',
  },
  {
    id: 2,
    number: '02',
    icon: BarChart3,
    title: 'Choose Your KPIs',
    subtitle: 'Personalized dashboards in seconds',
    description: 'Tell us what metrics matter to you. Seyvin instantly generates a personalized dashboard with your chosen KPIs, pulling live data from all your connected sources.',
    features: [
      'Revenue & MRR tracking',
      'Cash runway & burn rate',
      'Customer acquisition metrics',
      'Custom KPIs for your business',
    ],
    result: 'Your personalized dashboard with live KPIs from all your data sources',
    deliverable: 'Live dashboard with your KPIs',
    visual: 'dashboard',
  },
  {
    id: 3,
    number: '03',
    icon: MessageSquare,
    title: 'Ask Anything',
    subtitle: 'Natural conversations, real insights',
    description: 'Talk to your data like a colleague. Ask any question in plain English and get instant answers backed by your actual data — complete with charts and visualizations.',
    examples: [
      "What's driving our revenue growth this quarter?",
      'Compare expenses vs. last month',
      'Which customers have the highest LTV?',
      'Show me cash flow trends',
    ],
    result: 'Interactive charts and insights backed by your real data',
    deliverable: 'Data-backed answers with visuals',
    visual: 'conversation',
  },
  {
    id: 4,
    number: '04',
    icon: FileDown,
    title: 'Generate & Export Reports',
    subtitle: 'Board-ready in one command',
    description: 'Transform any insight into a professional report. Ask Seyvin to create investor updates, financial summaries, or custom reports — then download and share.',
    features: [
      'Investor update reports',
      'Monthly financial summaries',
      'Custom analysis reports',
      'Export as PDF or share link',
    ],
    result: 'Professional reports ready to download and share',
    deliverable: 'Downloadable, shareable reports',
    visual: 'report',
  },
];

// Integration Visual for Step 1 - Shows connected data sources
function IntegrationVisual() {
  const { theme } = useTheme();
  
  const integrations = [
    { name: 'QuickBooks', color: 'bg-green-500/20', border: 'border-green-500/40' },
    { name: 'Notion', color: 'bg-white/10', border: 'border-white/30' },
    { name: 'Google Drive', color: 'bg-blue-500/20', border: 'border-blue-500/40' },
    { name: 'CSV/Excel', color: 'bg-cyan-500/20', border: 'border-cyan-500/40' },
  ];

  return (
    <div className={`rounded-2xl border p-6 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#0f0f0f] border-[#262626]' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs ${
          theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
        }`}>Data Sources</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <div className={`w-2 h-2 rounded-full ${
            theme === 'dark' ? 'bg-gray-600' : 'bg-slate-300'
          }`} />
          <div className={`w-2 h-2 rounded-full ${
            theme === 'dark' ? 'bg-gray-600' : 'bg-slate-300'
          }`} />
        </div>
      </div>
      
      <div className="space-y-3">
        {integrations.map((integration, i) => (
          <motion.div 
            key={integration.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center gap-3 p-3 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-[#1a1a1a] border-[#262626]' 
                : 'bg-white border-slate-200'
            }`}
          >
            <div className={`w-8 h-8 rounded ${integration.color} ${integration.border} border flex items-center justify-center`}>
              <Check className={`w-4 h-4 ${
                theme === 'dark' ? 'text-white/60' : 'text-slate-700/60'
              }`} />
            </div>
            <div className="flex-1">
              <div className={`text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
              }`}>{integration.name}</div>
              <div className={`text-xs ${
                theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
              }`}>Connected</div>
            </div>
            <div className="w-4 h-4 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Dashboard Visual for Step 2 - Shows KPI selection and resulting dashboard
function DashboardVisual() {
  const { theme } = useTheme();
  
  const kpis = [
    { name: 'Monthly Revenue', value: '$142,500', change: '+12%', selected: true },
    { name: 'Cash Runway', value: '14.2 mo', change: 'Stable', selected: true },
    { name: 'Active Customers', value: '847', change: '+8%', selected: true },
    { name: 'Burn Rate', value: '$28,400', change: '-5%', selected: false },
  ];

  return (
    <div className={`rounded-2xl border p-6 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#0f0f0f] border-[#262626]' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs ${
          theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
        }`}>Your Dashboard</span>
        <span className={`text-xs ${
          theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
        }`}>Live Data</span>
      </div>

      {/* Mini chart */}
      <div className="mb-4 h-16 relative">
        <svg viewBox="0 0 200 50" className="w-full h-full">
          <motion.path
            d="M 0 40 Q 25 35, 50 30 T 100 25 T 150 20 T 200 15"
            fill="none"
            stroke="rgba(34, 211, 238, 0.5)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M 0 40 Q 25 35, 50 30 T 100 25 T 150 20 T 200 15 L 200 50 L 0 50 Z"
            fill="url(#gradient)"
            opacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-2">
        {kpis.filter(k => k.selected).map((kpi, i) => (
          <motion.div
            key={kpi.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`p-3 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-[#1a1a1a] border-[#262626]' 
                : 'bg-white border-slate-200'
            }`}
          >
            <div className={`text-xs mb-1 ${
              theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
            }`}>{kpi.name}</div>
            <div className="flex items-end gap-2">
              <span className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>{kpi.value}</span>
              <span className={`text-xs ${
                kpi.change.includes('+') ? 'text-green-400' : 
                kpi.change.includes('-') ? 'text-red-400' : 
                theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
              }`}>
                {kpi.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Conversation Visual for Step 3 - Shows natural language queries with chart results
function ConversationVisual() {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-2xl border p-4 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#0f0f0f] border-[#262626]' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className={`flex items-center gap-2 mb-4 text-xs ${
        theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
      }`}>
        <MessageSquare className="w-4 h-4" />
        <span>Chat with Seyvin</span>
      </div>
      
      <div className="space-y-3">
        {/* User question */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm border ${
            theme === 'dark' 
              ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-100' 
              : 'bg-cyan-50 border-cyan-200 text-cyan-900'
          }`}>
            Show me revenue trends this quarter
          </div>
        </motion.div>

        {/* AI response with chart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-start"
        >
          <div className={`max-w-[90%] px-4 py-3 rounded-2xl text-sm border ${
            theme === 'dark' 
              ? 'bg-[#1a1a1a] border-[#262626]' 
              : 'bg-white border-slate-200'
          }`}>
            <p className={`mb-3 ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
            }`}>Revenue is up 24% this quarter. Here's the breakdown:</p>
            {/* Mini bar chart */}
            <div className="flex items-end gap-2 h-12 mb-2">
              {[60, 72, 68, 85, 78, 92].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`flex-1 rounded-t ${
                    theme === 'dark' ? 'bg-cyan-500/40' : 'bg-cyan-500/60'
                  }`}
                />
              ))}
            </div>
            <div className={`flex justify-between text-xs ${
              theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
            }`}>
              <span>Jan</span>
              <span>Jun</span>
            </div>
          </div>
        </motion.div>

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`flex items-center gap-1 text-xs pl-2 ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Ask a follow-up question...</span>
        </motion.div>
      </div>
    </div>
  );
}

// Report Visual for Step 4 - Shows report generation and download
function ReportVisual() {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-2xl border p-6 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#0f0f0f] border-[#262626]' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs ${
          theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
        }`}>Report Generator</span>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-1 text-xs text-green-400"
        >
          <Check className="w-3 h-3" />
          Ready
        </motion.div>
      </div>

      {/* Report preview */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-lg border p-4 mb-4 ${
          theme === 'dark' 
            ? 'bg-[#1a1a1a] border-[#262626]' 
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-6 h-6 rounded flex items-center justify-center ${
            theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-50'
          }`}>
            <FileDown className={`w-3 h-3 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            }`} />
          </div>
          <span className={`text-sm font-medium ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>Q4 Investor Update</span>
        </div>
        
        <div className={`space-y-2 text-xs ${
          theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
        }`}>
          <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-slate-400'
            }`} />
            <span>Executive Summary</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-slate-400'
            }`} />
            <span>Financial Highlights</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-slate-400'
            }`} />
            <span>Key Metrics & Growth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-slate-400'
            }`} />
            <span>Next Quarter Outlook</span>
          </div>
        </div>
      </motion.div>

      {/* Download options */}
      <div className="flex gap-2">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${
            theme === 'dark' 
              ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/30' 
              : 'bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100'
          }`}
        >
          <FileDown className="w-4 h-4" />
          Download PDF
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${
            theme === 'dark' 
              ? 'bg-[#1a1a1a] border-[#262626] text-gray-400 hover:border-white/20' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
          }`}
        >
          Share Link
        </motion.button>
      </div>
    </div>
  );
}

const visuals = {
  integration: IntegrationVisual,
  dashboard: DashboardVisual,
  conversation: ConversationVisual,
  report: ReportVisual,
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const { theme } = useTheme();
  const currentStep = steps[activeStep - 1];
  const Visual = visuals[currentStep.visual];
  const StepIcon = currentStep.icon;

  return (
    <section id="process" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="HOW IT WORKS"
          badgeIcon={Layers}
          title="From Data to Insights"
          titleAccent="in 4 Simple Steps"
          description="Seen the platform previews? Here's the simple 4-step flow end-to-end. No technical skills required. No waiting for IT. Just connect, customize, ask, and export."
        />

        <Card padding="p-8 md:p-12">
          {/* Step tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`
                    flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300
                    ${activeStep === step.id 
                      ? theme === 'dark' 
                        ? 'bg-white text-black' 
                        : 'bg-slate-900 text-white'
                      : theme === 'dark'
                        ? 'bg-[#1a1a1a] text-gray-400 border border-[#262626] hover:border-white/20'
                        : 'bg-slate-100 text-slate-600 border border-slate-200 hover:border-slate-300'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">Step {step.id}</span>
                  <span className="sm:hidden">{step.id}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Visual */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Visual />
              </motion.div>
            </AnimatePresence>

            {/* Step content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:pl-8"
              >
                {/* Step number and icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-5xl font-bold ${
                    theme === 'dark' ? 'text-gray-800' : 'text-slate-300'
                  }`}>
                    {currentStep.number}
                  </div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-cyan-500/10 border-cyan-500/20' 
                      : 'bg-cyan-50 border-cyan-200'
                  }`}>
                    <StepIcon className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                  </div>
                </div>

                <h3 className={`text-2xl font-semibold mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {currentStep.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  {currentStep.subtitle}
                </p>
                <p className={`leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  {currentStep.description}
                </p>

                {/* Step-specific content */}
                {currentStep.features && (
                  <ul className="space-y-2 mb-6">
                    {currentStep.features.map((feature, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm ${
                        theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                      }`}>
                        <Check className={`w-4 h-4 flex-shrink-0 ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {currentStep.examples && (
                  <ul className="space-y-2 mb-6">
                    {currentStep.examples.map((example, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${
                        theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                      }`}>
                        <span className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}>"</span>
                        {example}
                        <span className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}>"</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Result highlight */}
                {currentStep.result && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      </div>
                      <div>
                        <span className="text-xs text-green-400 font-medium uppercase tracking-wide">Result</span>
                        <p className={`text-sm mt-1 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                        }`}>{currentStep.result}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Deliverable badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs ${
                  theme === 'dark' 
                    ? 'bg-[#1a1a1a] border-[#262626] text-gray-400' 
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'
                  }`} />
                  {currentStep.deliverable}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Card>
      </div>
    </section>
  );
}

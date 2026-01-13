import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Database, 
  Wrench, 
  Clock, 
  DollarSign, 
  Bot,
  Puzzle,
  X,
  AlertCircle
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';

const problems = [
  {
    id: 'fragmentation',
    title: 'Data Fragmentation',
    emoji: '🧩',
    icon: Database,
    quote: '"We have data everywhere but no insights — and no way to build agents that can use it all."',
    painPoints: [
      { label: 'Data scattered across 10-20+ SaaS apps', status: 'problem' },
      { label: 'No unified view of business performance', status: 'problem' },
      { label: 'Hours spent copying data between spreadsheets', status: 'problem' },
      { label: 'Conflicting numbers from different sources', status: 'problem' },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Expertise Required',
    emoji: '🔧',
    icon: Wrench,
    quote: '"We can\'t afford a data analyst, and our team doesn\'t know SQL."',
    painPoints: [
      { label: 'Traditional BI tools require weeks of setup', status: 'problem' },
      { label: 'SQL queries needed for basic questions', status: 'problem' },
      { label: 'Dashboard design requires specialized skills', status: 'problem' },
      { label: 'Every question requires IT involvement', status: 'problem' },
    ],
  },
  {
    id: 'slow',
    title: 'Slow Time-to-Insight',
    emoji: '⏰',
    icon: Clock,
    quote: '"By the time we get the data, the decision has already been made."',
    painPoints: [
      { label: '5-10+ hours per week on manual reporting', status: 'problem' },
      { label: 'Days or weeks to get answers from IT', status: 'problem' },
      { label: 'Manual report generation every month', status: 'problem' },
      { label: 'Decisions made on gut feeling, not data', status: 'problem' },
    ],
  },
  {
    id: 'costs',
    title: 'Prohibitive Costs',
    emoji: '💰',
    icon: DollarSign,
    quote: '"Enterprise analytics is priced for enterprises, not growing businesses."',
    painPoints: [
      { label: 'Enterprise BI tools cost $50K-$300K+ per year', status: 'problem' },
      { label: 'Need to hire data engineers ($120K+ salary)', status: 'problem' },
      { label: 'Additional costs for integration tools', status: 'problem' },
      { label: 'Hidden implementation and consulting fees', status: 'problem' },
    ],
  },
  {
    id: 'trust',
    title: 'AI That Can\'t Be Trusted',
    emoji: '🤖',
    icon: Bot,
    quote: '"ChatGPT is helpful, but I can\'t trust it for business decisions."',
    painPoints: [
      { label: 'Generic AI chatbots hallucinate', status: 'problem' },
      { label: 'No connection to your actual business data', status: 'problem' },
      { label: 'Can\'t trace how answers were derived', status: 'problem' },
      { label: 'No accountability for AI-generated insights', status: 'problem' },
    ],
  },
];

function PainPointList({ painPoints }) {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-3">
      {painPoints.map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center justify-between p-4 rounded-xl border ${
            theme === 'dark' 
              ? 'bg-[#0f0f0f] border-[#262626]' 
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400/70" />
            <span className={`text-sm ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>{point.label}</span>
          </div>
          <X className="w-4 h-4 text-red-400/50" />
        </motion.div>
      ))}
    </div>
  );
}

function QuoteVisual({ quote, icon: Icon }) {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-xl border p-6 ${
      theme === 'dark' 
        ? 'bg-[#0f0f0f] border-[#262626]' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className={`flex items-center gap-2 mb-4 text-xs ${
        theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
      }`}>
        <Icon className="w-4 h-4" />
        <span>Common Frustration</span>
      </div>
      <p className={`italic text-lg leading-relaxed ${
        theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
      }`}>{quote}</p>
    </div>
  );
}

export default function ProblemStatement() {
  const { theme } = useTheme();
  
  return (
    <section id="problem-statement" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="THE CHALLENGE"
          badgeIcon={AlertTriangle}
          title="The Problem We're"
          titleAccent="Solving"
          description="Growing businesses face these data and analytics challenges every day"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Data Fragmentation card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card padding="p-8" className="h-full">
              <PainPointList painPoints={problems[0].painPoints} />
              <h3 className={`text-xl font-semibold mt-6 mb-2 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}>
                {problems[0].emoji} {problems[0].title}
              </h3>
              <p className={`text-sm italic ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>{problems[0].quote}</p>
            </Card>
          </motion.div>

          {/* Technical Expertise card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card padding="p-8" className="h-full">
              <PainPointList painPoints={problems[1].painPoints} />
              <h3 className={`text-xl font-semibold mt-6 mb-2 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}>
                {problems[1].emoji} {problems[1].title}
              </h3>
              <p className={`text-sm italic ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>{problems[1].quote}</p>
            </Card>
          </motion.div>

          {/* Slow Time-to-Insight + Prohibitive Costs card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card padding="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <QuoteVisual quote={problems[2].quote} icon={problems[2].icon} />
                <div className="flex flex-col justify-center">
                  <h3 className={`text-2xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {problems[2].emoji} {problems[2].title}
                  </h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    5-10+ hours per week spent on manual report preparation. Days or weeks to get answers from IT. Decisions made on gut feeling, not data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Manual reports', 'Delayed insights', 'IT bottlenecks'].map((tag, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm border ${
                        theme === 'dark' 
                          ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                          : 'bg-red-50 text-red-700 border-red-200'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* AI Trust + Costs card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card padding="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-[#262626]' : 'bg-slate-200'
                  }`}>
                    <DollarSign className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {problems[3].emoji} {problems[3].title}
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>{problems[3].quote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-[#262626]' : 'bg-slate-200'
                  }`}>
                    <Bot className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {problems[4].emoji} {problems[4].title}
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>{problems[4].quote}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

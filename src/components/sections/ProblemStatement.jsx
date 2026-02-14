import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Database, 
  Wrench, 
  Clock, 
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
    title: 'Data Everywhere, No Single Source of Truth',
    emoji: '🧩',
    icon: Database,
    quote: '"We have the data — we just can\'t trust one place to answer quickly."',
    painPoints: [
      { label: 'The "truth" is split across accounting, docs, spreadsheets, and exports', status: 'problem' },
      { label: 'Teams re-download and re-upload the same files just to run analysis', status: 'problem' },
      { label: 'Definitions drift ("revenue" means different things in different places)', status: 'problem' },
      { label: 'Every follow-up question rebuilds the dataset from scratch', status: 'problem' },
    ],
    bridgeSentence: 'You don\'t need another dashboard — you need a reliable way to consolidate and query real data.',
  },
  {
    id: 'technical',
    title: 'Analysis Requires Skills Your Team Doesn\'t Have',
    emoji: '🔧',
    icon: Wrench,
    quote: '"We can\'t afford a data analyst — and nobody wants to learn SQL."',
    painPoints: [
      { label: 'Getting from raw data → clean dataset → metrics is the real work', status: 'problem' },
      { label: 'Tools assume you already have a modeled database (most teams don\'t)', status: 'problem' },
      { label: 'Basic questions become a ticket queue for the "technical person"', status: 'problem' },
      { label: 'Setup and maintenance becomes ongoing overhead', status: 'problem' },
    ],
  },
  {
    id: 'slow',
    title: 'Slow Time-to-Insight',
    emoji: '⏰',
    icon: Clock,
    quote: '"Reporting cycles repeat weekly and monthly. By the time the report is ready, the business has moved on."',
    painPoints: [
      { label: 'Manual prep', status: 'problem' },
      { label: 'Stale metrics', status: 'problem' },
      { label: 'Follow-up delay', status: 'problem' },
      { label: 'Numbers fights', status: 'problem' },
    ],
  },
  {
    id: 'trust',
    title: 'Doesn\'t understand your business',
    emoji: '🤖',
    icon: Bot,
    quote: '"Generic AI sounds confident without being grounded in your data."',
    commonFrustrationQuote: '"The answer sounded right — but it didn\'t really know how our organization works."',
    painPoints: [
      { label: 'Generic AI can sound confident without being grounded in your data', status: 'problem' },
      { label: 'No audit trail: you can\'t verify numbers or reproduce results', status: 'problem' },
      { label: 'Not safe for leadership/board contexts without traceability', status: 'problem' },
      { label: 'You end up spending time checking AI instead of acting', status: 'problem' },
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
      theme === 'dark' ? 'theme-bg-primary' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="THE CHALLENGE"
          badgeIcon={AlertTriangle}
          title="The Problem We're"
          titleAccent="Solving"
          description="Small and growing teams run into the same analytics bottlenecks every week — not because they lack effort, but because the workflow is broken."
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
              <p className={`text-sm mt-3 ${
                theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
              }`}>{problems[0].bridgeSentence}</p>
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
                    Reporting cycles repeat weekly and monthly. By the time the report is ready, the business has moved on — and follow-up questions restart the work.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Manual prep', 'Stale metrics', 'Follow-up delay', 'Numbers fights'].map((tag, i) => (
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

          {/* AI / Trust card - same layout as Slow Time-to-Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card padding="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center order-2 lg:order-1">
                  <h3 className={`text-2xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {problems[3].emoji} {problems[3].title}
                  </h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    Generic AI can sound confident without being grounded in your data. You end up spending time checking answers instead of acting — and it's not safe for leadership or board contexts without traceability.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Can\'t verify numbers', 'No audit trail', 'hours spent editing results'].map((tag, i) => (
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
                <div className="order-1 lg:order-2">
                  <QuoteVisual
                    quote={problems[3].commonFrustrationQuote || problems[3].quote}
                    icon={problems[3].icon}
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Transition to Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className={`text-base md:text-lg max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            Seyvin fixes the bottleneck by acting like an AI Data Analyst on top of your real sources: connect QuickBooks/Drive/Notion or upload files, we automatically ingest and clean the data, then you ask questions and get analysis with charts — plus dashboards and narrative reports you can download or share.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Lock, 
  Users, 
  CreditCard, 
  Clock, 
  Database, 
  FileText,
  Check,
  Sparkles,
  Link2,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  Download,
  BarChart3,
  PieChart,
  Bot,
  ExternalLink
} from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const keyBenefits = [
  {
    icon: Clock,
    text: 'Break the manual prep loop — KPIs appear automatically',
  },
  {
    icon: Database,
    text: 'Ask in plain English — get the “what” and the “why”',
  },
  {
    icon: FileText,
    text: 'Share dashboards and narrative updates with ops, finance, or leadership',
  },
];

// Slide 1: KPI Dashboard
function DashboardSlide({ theme }) {
  return (
    <div className="p-5">
      {/* KPI Cards Row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: 'Monthly Revenue', value: '$284K', change: '+12%', color: 'text-green-400' },
          { label: 'Monthly Expense', value: '$156K', change: '+3%', color: 'text-amber-400' },
          { label: 'Growth Rate', value: '18.4%', change: '+2.1%', color: 'text-green-400' },
        ].map((kpi, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-2.5 rounded-lg ${
              theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-slate-50'
            }`}
          >
            <p className={`text-[10px] mb-0.5 ${
              theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
            }`}>{kpi.label}</p>
            <p className={`text-base font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>{kpi.value}</p>
            <p className={`text-[10px] ${kpi.color}`}>{kpi.change}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-2">
        {/* Pie Chart - Department Expense */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className={`p-3 rounded-lg ${
            theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-slate-50'
          }`}
        >
          <p className={`text-[10px] mb-2 ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
          }`}>Expense by Department</p>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              {/* Pie segments */}
              <circle cx="50" cy="50" r="40" fill="transparent" stroke={theme === 'dark' ? '#06b6d4' : '#0891b2'} strokeWidth="20" strokeDasharray="75 125" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke={theme === 'dark' ? '#8b5cf6' : '#7c3aed'} strokeWidth="20" strokeDasharray="50 150" strokeDashoffset="-75" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke={theme === 'dark' ? '#f59e0b' : '#d97706'} strokeWidth="20" strokeDasharray="40 160" strokeDashoffset="-125" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke={theme === 'dark' ? '#10b981' : '#059669'} strokeWidth="20" strokeDasharray="35 165" strokeDashoffset="-165" transform="rotate(-90 50 50)" />
            </svg>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2 justify-center">
            {[
              { label: 'Ops', color: 'bg-cyan-500' },
              { label: 'Sales', color: 'bg-purple-500' },
              { label: 'Mktg', color: 'bg-amber-500' },
              { label: 'R&D', color: 'bg-green-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span className={`text-[8px] ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grouped Bar Chart - Revenue vs Expenses */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className={`p-3 rounded-lg ${
            theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-slate-50'
          }`}
        >
          <p className={`text-[10px] mb-2 ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
          }`}>Revenue vs Expenses</p>
          <div className="flex items-end justify-between gap-1.5 h-[72px] px-1">
            {[
              { rev: 52, exp: 36 },
              { rev: 60, exp: 40 },
              { rev: 48, exp: 38 },
              { rev: 68, exp: 42 },
              { rev: 72, exp: 44 },
            ].map((data, i) => (
              <div key={i} className="flex gap-0.5 items-end h-full">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: data.rev }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className={`w-3 rounded-t ${theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-500'}`}
                  style={{ minHeight: 4 }}
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: data.exp }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className={`w-3 rounded-t ${theme === 'dark' ? 'bg-amber-500/70' : 'bg-amber-500'}`}
                  style={{ minHeight: 4 }}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-2 justify-center">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-sm bg-cyan-500" />
              <span className={`text-[8px] ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>Revenue</span>
            </div>
            <div className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-sm ${theme === 'dark' ? 'bg-amber-500/70' : 'bg-amber-500'}`} />
              <span className={`text-[8px] ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>Expense</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Slide 2: AI Conversation
function ConversationSlide({ theme }) {
  return (
    <div className="p-4">
      {/* User Message */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-end mb-3"
      >
        <div className={`max-w-[80%] px-3 py-2 rounded-2xl rounded-tr-sm ${
          theme === 'dark' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'
        }`}>
          <p className="text-xs">What are sales this month?</p>
        </div>
      </motion.div>

      {/* AI Response */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className={`rounded-xl p-3 ${
          theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-slate-50'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Bot className={`w-4 h-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
          <span className={`text-[10px] font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Seyvin Assistant</span>
        </div>

        {/* Insight */}
        <div className={`flex items-start gap-2 mb-2 p-2 rounded-lg ${
          theme === 'dark' ? 'bg-[#0f0f0f]' : 'bg-white'
        }`}>
          <Lightbulb className={`w-3 h-3 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-500'}`} />
          <div>
            <p className={`text-[10px] font-medium mb-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Sales reached $284,500 this month
            </p>
            <p className={`text-[9px] ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>
              12% increase from last month. Enterprise segment drove 68% of growth.
            </p>
          </div>
        </div>

        {/* Mini Chart */}
        <div className={`h-12 rounded-lg mb-2 flex items-end justify-between px-2 pb-1 ${
          theme === 'dark' ? 'bg-[#0f0f0f]' : 'bg-white'
        }`}>
          {[30, 45, 40, 55, 50, 70, 65, 80, 75, 90].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
              className={`w-2 rounded-t ${theme === 'dark' ? 'bg-cyan-500/60' : 'bg-cyan-400'}`}
            />
          ))}
        </div>

        {/* Recommendation */}
        <div className={`flex items-start gap-2 p-2 rounded-lg mb-2 ${
          theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'
        }`}>
          <TrendingUp className={`w-3 h-3 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
          <p className={`text-[9px] ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
            Recommendation: Focus Q2 campaigns on Enterprise segment for continued momentum.
          </p>
        </div>

        {/* Source Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md border ${
            theme === 'dark' ? 'bg-[#0f0f0f] border-[#262626]' : 'bg-white border-slate-200'
          }`}
        >
          <div className="w-4 h-4 rounded flex items-center justify-center bg-blue-500/20">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-blue-500">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
            </svg>
          </div>
          <span className={`text-[9px] ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Source:</span>
          <span className={`text-[9px] font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Google Drive</span>
          <ExternalLink className={`w-2.5 h-2.5 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`} />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Slide 3: Report Generation
function ReportSlide({ theme }) {
  return (
    <div className="p-4">
      {/* User Message */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-end mb-3"
      >
        <div className={`max-w-[85%] px-3 py-2 rounded-2xl rounded-tr-sm ${
          theme === 'dark' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'
        }`}>
          <p className="text-xs">Draft a monthly performance update</p>
        </div>
      </motion.div>

      {/* AI Response - Report */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className={`rounded-xl p-3 ${
          theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-slate-50'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Bot className={`w-4 h-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
          <span className={`text-[10px] font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Generating Update...</span>
          <Sparkles className={`w-3 h-3 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-500'}`} />
        </div>

        {/* Report Preview */}
        <div className={`rounded-lg p-3 mb-2 border ${
          theme === 'dark' ? 'bg-[#0f0f0f] border-[#262626]' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <FileText className={`w-4 h-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
            <span className={`text-xs font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Performance Update
            </span>
          </div>
          <p className={`text-[9px] leading-relaxed mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            Q1 2024 showed strong performance with total revenue of $852K, a 15% increase YoY. Operating expenses remained controlled at $468K...
          </p>
          
          {/* Key Insights */}
          <div className={`text-[9px] space-y-1 p-2 rounded ${
            theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-slate-50'
          }`}>
            <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>Key Insights:</p>
            <div className="flex items-start gap-1.5">
              <Check className={`w-2.5 h-2.5 mt-0.5 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>Revenue growth exceeded targets by 8%</span>
            </div>
            <div className="flex items-start gap-1.5">
              <Check className={`w-2.5 h-2.5 mt-0.5 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>Gross margin improved to 45.2%</span>
            </div>
          </div>
        </div>

        {/* Download Options */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className={`text-[9px] ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>Export as:</span>
          {[
            { label: 'PDF', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
            { label: 'DOCX', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
            { label: 'PPT', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
          ].map((format, i) => (
            <motion.button
              key={format.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className={`flex items-center gap-1 px-2 py-1 rounded border text-[9px] font-medium ${format.color}`}
            >
              <Download className="w-2.5 h-2.5" />
              {format.label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Callout badges for each slide
const slideCallouts = [
  // Slide 1: Dashboard
  [
    { icon: BarChart3, label: 'Auto KPIs', position: '-top-3 -right-3', color: 'cyan' },
    { icon: PieChart, label: 'Visual Charts', position: '-bottom-3 -left-3', color: 'purple' },
    { icon: Database, label: 'Live Data', position: 'top-1/2 -right-3', color: 'green' },
  ],
  // Slide 2: Conversation
  [
    { icon: MessageSquare, label: 'Natural Language', position: '-top-3 -right-3', color: 'cyan' },
    { icon: Link2, label: 'Source Linked', position: '-bottom-3 -left-3', color: 'green' },
    { icon: Lightbulb, label: 'AI Insights', position: 'top-1/2 -right-3', color: 'amber' },
  ],
  // Slide 3: Report
  [
    { icon: FileText, label: 'Shareable', position: '-top-3 -right-3', color: 'purple' },
    { icon: Download, label: 'Multi-format', position: '-bottom-3 -left-3', color: 'cyan' },
    { icon: Sparkles, label: 'AI Generated', position: 'top-1/2 -right-3', color: 'amber' },
  ],
];

const colorClasses = {
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10' },
  green: { icon: 'text-green-400', bg: 'bg-green-500/10' },
  amber: { icon: 'text-amber-400', bg: 'bg-amber-500/10' },
};

export default function Hero() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [DashboardSlide, ConversationSlide, ReportSlide];
  const slideLabels = ['KPI Dashboard', 'Ask Questions', 'Write-ups'];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];
  const currentCallouts = slideCallouts[currentSlide];
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]' 
          : 'bg-gradient-to-b from-white via-slate-50 to-white'
      }`} />
      
      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: theme === 'dark' 
            ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Accent glow */}
      <div className={`absolute top-1/4 left-1/4 w-[600px] h-[400px] blur-[120px] rounded-full ${
        theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-400/10'
      }`} />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="section-container pt-12 pb-16 md:pt-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Your AI Analytics Team —
                <br />
                <span className={`font-serif italic ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }`}>built on top of your data</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-lg md:text-xl mb-8 max-w-xl ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                Stop chasing spreadsheets. Start getting answers you can trust.
              </motion.p>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className={`text-base md:text-lg mb-8 max-w-xl ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                Connect sources or upload files. Seyvin’s AI agents collaborate to clean the data, generate KPIs, and answer questions with analysis + charts — every number linked back to its source.
              </motion.p>

              {/* Key Benefits */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3 mb-8"
              >
                {keyBenefits.map((benefit, index) => (
                  <li 
                    key={index}
                    className={`flex items-center gap-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-50'
                    }`}>
                      <benefit.icon className={`w-4 h-4 ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                      }`} />
                    </div>
                    <span className="text-sm md:text-base">{benefit.text}</span>
                  </li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-6"
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  withArrow
                  onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  Book 15-min beta demo
                </Button>
                <a href="#process">
                  <Button variant="secondary" size="lg">
                    See how it works
                  </Button>
                </a>
              </motion.div>

              {/* Trust Signals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`flex flex-wrap items-center gap-4 text-sm ${
                  theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  Secure OAuth
                </span>
                <div className={`w-px h-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-300'}`} />
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  Limited beta spots
                </span>
                <div className={`w-px h-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-300'}`} />
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4" />
                  No credit card
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column - Product Visual Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Product Card */}
              <div className={`relative rounded-2xl overflow-hidden border shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-[#0f0f0f] border-[#262626]' 
                  : 'bg-white border-slate-200'
              }`}>
                {/* Browser-like header */}
                <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                  theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'
                }`}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className={`flex-1 flex justify-center`}>
                    <div className={`px-4 py-1 rounded-md text-xs ${
                      theme === 'dark' ? 'bg-[#1a1a1a] text-gray-500' : 'bg-slate-100 text-slate-500'
                    }`}>
                      seyvin.com
                    </div>
                  </div>
                </div>

                {/* Slideshow Content */}
                <div className="min-h-[320px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CurrentSlideComponent theme={theme} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slide Indicators */}
                <div className={`flex items-center justify-center gap-3 px-4 py-3 border-t ${
                  theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'
                }`}>
                  {slideLabels.map((label, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-medium transition-all ${
                        currentSlide === index
                          ? theme === 'dark'
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-cyan-100 text-cyan-700'
                          : theme === 'dark'
                            ? 'text-gray-500 hover:text-gray-400'
                            : 'text-slate-500 hover:text-slate-600'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        currentSlide === index 
                          ? 'bg-cyan-400' 
                          : theme === 'dark' ? 'bg-gray-600' : 'bg-slate-300'
                      }`} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Floating Callouts */}
              <AnimatePresence mode="wait">
                {currentCallouts.map((callout, index) => {
                  const IconComponent = callout.icon;
                  const colors = colorClasses[callout.color];
                  return (
                    <motion.div
                      key={`${currentSlide}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`absolute ${callout.position} px-3 py-2 rounded-lg shadow-lg border ${
                        theme === 'dark' 
                          ? 'bg-[#1a1a1a] border-[#262626]' 
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent className={`w-4 h-4 ${colors.icon}`} />
                        <span className={`text-xs font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                        }`}>{callout.label}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Glow effect behind card */}
              <div className={`absolute inset-0 -z-10 blur-3xl opacity-30 ${
                theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-400/20'
              }`} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#data-analysis"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`} />
        </motion.div>
      </motion.a>
    </section>
  );
}

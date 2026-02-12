import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Quote, ArrowRight, TrendingUp, 
  Building2, Briefcase, Calculator,
  Heart, GraduationCap, Landmark,
  Building, Globe, Megaphone
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';

const sectors = {
  private: {
    label: 'Private Sector',
    icon: Building,
    personas: [
      {
        id: 'operations',
        role: 'Operations',
        name: 'Sarah',
        title: 'Director of Operations',
        company: '',
        icon: Building2,
        accentColor: 'cyan',
        quote: "I spend half my week pulling reports instead of acting on them.",
        frustrations: [
          'Spreadsheets break and take hours to update',
          "IT can't prioritize analytics requests",
          'Different tools show different numbers',
        ],
        howHelps: [
          'Unified view across Shopify, QuickBooks, Google Analytics',
          'Ask questions and get answers immediately',
          'Auto-generated reports for leadership meetings',
        ],
        outcome: {
          before: '20 hours/week',
          after: '2 hours',
          metric: 'reporting time',
          improvement: '90%',
        },
        sampleQuery: "What's causing our fulfillment delays this month?",
      },
      {
        id: 'founder',
        role: 'Founder / CEO',
        name: 'Michael',
        title: 'Founder & CEO',
        company: 'Startup',
        icon: Briefcase,
        accentColor: 'emerald',
        quote: "I know the data exists, I just can't get to it fast enough.",
        frustrations: [
          "Can't afford a data team yet",
          'Tried Tableau but too complex to set up',
          "Board asks questions I can't answer immediately",
        ],
        howHelps: [
          'Self-service analytics without technical skills',
          'Board-ready reports generated automatically',
          'Costs a fraction of hiring an analyst',
        ],
        outcome: {
          before: '8 hours',
          after: '15 min',
          metric: 'board prep',
          improvement: '97%',
        },
        sampleQuery: "Create an investor update with MRR, ARR, and runway analysis",
      },
      {
        id: 'finance',
        role: 'Finance',
        name: 'Jessica',
        title: 'Finance Manager',
        company: '',
        icon: Calculator,
        accentColor: 'violet',
        quote: "I export to Excel and spend days building the same reports every month.",
        frustrations: [
          'QuickBooks data hard to analyze',
          'Manual reconciliation takes days',
          "Can't easily compare actual vs. budget",
        ],
        howHelps: [
          'Deep QuickBooks integration',
          'Automated P&L, Balance Sheet, Cash Flow analysis',
          'Natural language queries on financial data',
        ],
        outcome: {
          before: '10 days',
          after: '5 days',
          metric: 'month-end close',
          improvement: '50%',
        },
        sampleQuery: "Compare actual vs. budget by department for Q4",
      },
      {
        id: 'marketing',
        role: 'Marketing',
        name: 'Alex',
        title: 'Head of Marketing',
        company: '',
        icon: Megaphone,
        accentColor: 'orange',
        quote: "I need one place to see performance across channels—we're stuck in spreadsheets.",
        frustrations: [
          'Campaign and channel data live in different tools',
          'Manual reports for leadership take days',
          'Attribution and ROI are hard to pull together',
        ],
        howHelps: [
          'Unified view of campaigns, web, and CRM data',
          'Auto-generated performance reports for stakeholders',
          'Ask questions like "Which channel drove the most signups?" and get answers',
        ],
        outcome: { before: '6 hours', after: '15 min', metric: 'performance report', improvement: '96%' },
        sampleQuery: "Compare campaign performance by channel for last quarter",
      },
    ],
  },
  public: {
    label: 'Public Sector',
    icon: Globe,
    personas: [
      {
        id: 'nonprofit',
        role: 'Non Profit organisations',
        name: 'Amanda',
        title: 'Executive Director',
        company: '',
        icon: Heart,
        accentColor: 'rose',
        quote: "Grant reporting takes our team away from the work that actually matters.",
        frustrations: [
          'Donor reporting requires data from 6+ systems',
          'Impact metrics scattered across programs',
          'Board wants dashboards but no budget for analysts',
        ],
        howHelps: [
          'Unified view of programs, grants, and financials',
          'Auto-generated impact reports for funders',
          'Track outcomes across all initiatives instantly',
        ],
        outcome: {
          before: '15 hours',
          after: '2 hours',
          metric: 'grant reporting',
          improvement: '87%',
        },
        sampleQuery: "Show program outcomes by funding source for our annual report",
      },
      {
        id: 'academic',
        role: 'Academia',
        name: 'Dr. Chen',
        title: 'Associate Dean of Research',
        company: '',
        icon: GraduationCap,
        accentColor: 'amber',
        quote: "Faculty need data for grants, but our systems don't talk to each other.",
        frustrations: [
          'Research data siloed across departments',
          'Compliance reporting is manual and error-prone',
          'Grant applications need metrics we can\'t easily pull',
        ],
        howHelps: [
          'Connect research databases, HR, and finance systems',
          'Compliance dashboards updated automatically',
          'Natural language queries for grant proposals',
        ],
        outcome: {
          before: '3 weeks',
          after: '3 days',
          metric: 'compliance audits',
          improvement: '85%',
        },
        sampleQuery: "What's our research output by department and funding agency this year?",
      },
      {
        id: 'government',
        role: 'Government',
        name: 'Marcus',
        title: 'Program Director',
        company: '',
        icon: Landmark,
        accentColor: 'blue',
        quote: "We have the data to show impact, but no way to analyze it quickly.",
        frustrations: [
          'Legislative reporting deadlines are stressful',
          'Data lives in legacy systems and spreadsheets',
          'Public transparency requests take weeks',
        ],
        howHelps: [
          'Connect legacy systems without IT overhaul',
          'Auto-generate legislative and public reports',
          'Track program KPIs across all initiatives',
        ],
        outcome: {
          before: '2 weeks',
          after: '2 days',
          metric: 'legislative reports',
          improvement: '86%',
        },
        sampleQuery: "Create a report on job creation by county for the budget committee",
      },
    ],
  },
};

function PersonaCard({ persona, isActive, onClick }) {
  const { theme } = useTheme();
  const Icon = persona.icon;
  const colorClasses = {
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400' },
    rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  };
  const colors = colorClasses[persona.accentColor];

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full text-left p-5 rounded-2xl transition-all duration-300 border
        ${isActive 
          ? `${colors.bg} ${colors.border}` 
          : theme === 'dark'
            ? 'bg-[#0f0f0f] border-[#262626] hover:border-[#3a3a3a]'
            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`
          w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
          ${isActive ? colors.bg : theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-slate-100'}
        `}>
          <Icon className={`w-5 h-5 ${isActive ? colors.text : theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold text-sm truncate ${
            isActive 
              ? 'text-white' 
              : theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
          }`}>
            {persona.role}
          </h4>
          {persona.company && (
            <p className={`text-xs truncate ${
              theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
            }`}>{persona.company}</p>
          )}
        </div>
        <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
          isActive 
            ? `${colors.text} translate-x-1` 
            : theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
        }`} />
      </div>
    </motion.button>
  );
}

function PersonaDetail({ persona }) {
  const { theme } = useTheme();
  
  const colorClasses = {
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', ring: 'ring-cyan-500/20' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', ring: 'ring-emerald-500/20' },
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400', ring: 'ring-violet-500/20' },
    rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', ring: 'ring-rose-500/20' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', ring: 'ring-amber-500/20' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', ring: 'ring-blue-500/20' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', ring: 'ring-orange-500/20' },
  };
  const colors = colorClasses[persona.accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card padding="p-8" className="h-full">
        {/* Header with avatar and quote */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center ring-4 ${colors.ring}`}>
              <span className="text-xl font-bold text-white">{persona.name[0]}</span>
            </div>
            <div>
              <h3 className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>{persona.name}</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>{persona.title}</p>
              {persona.company && (
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                }`}>{persona.company}</p>
              )}
            </div>
          </div>
          
          {/* Quote */}
          <div className={`relative p-5 rounded-xl ${colors.bg} border ${colors.border}`}>
            <Quote className={`absolute -top-3 -left-2 w-7 h-7 ${colors.text} opacity-50`} />
            <p className="text-base text-white italic leading-relaxed pl-4">
              "{persona.quote}"
            </p>
          </div>
        </div>

        {/* Two columns: Pain vs Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Pain Points */}
          <div>
            <h4 className={`text-xs font-medium uppercase tracking-wider mb-3 ${
              theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
            }`}>
              Before Seyvin
            </h4>
            <ul className="space-y-2">
              {persona.frustrations.map((item, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className={`text-xs font-medium uppercase tracking-wider mb-3 ${
              theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
            }`}>
              With Seyvin
            </h4>
            <ul className="space-y-2">
              {persona.howHelps.map((item, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  <span className={`${colors.text} flex-shrink-0`}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sample Query */}
        <div className={`mb-6 p-4 rounded-xl border ${
          theme === 'dark' 
            ? 'bg-[#0a0a0a] border-[#262626]' 
            : 'bg-slate-50 border-slate-200'
        }`}>
          <p className={`text-xs mb-2 ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
          }`}>Sample query:</p>
          <p className={`text-sm ${colors.text} font-mono`}>
            "{persona.sampleQuery}"
          </p>
        </div>

        {/* Outcome */}
        <div className={`p-5 rounded-xl ${colors.bg} border ${colors.border}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm mb-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
              }`}>Result</p>
              <p className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>{persona.outcome.metric}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className={`text-sm line-through ${
                  theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                }`}>{persona.outcome.before}</p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
                }`}>before</p>
              </div>
              <ArrowRight className={`w-5 h-5 ${
                theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
              }`} />
              <div className="text-right">
                <p className={`text-2xl font-bold ${colors.text}`}>{persona.outcome.after}</p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                }`}>now</p>
              </div>
            </div>
          </div>
          <div className={`mt-4 pt-4 border-t ${
            theme === 'dark' ? 'border-[#262626]' : 'border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <TrendingUp className={`w-4 h-4 ${colors.text}`} />
              <span className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>
                <span className={`font-semibold ${colors.text}`}>{persona.outcome.improvement}</span> time saved
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Clients() {
  const [activeSector, setActiveSector] = useState('private');
  const [activePersona, setActivePersona] = useState(sectors.private.personas[0]);
  const { theme } = useTheme();

  const handleSectorChange = (sector) => {
    setActiveSector(sector);
    setActivePersona(sectors[sector].personas[0]);
  };

  const currentSector = sectors[activeSector];

  return (
    <section id="clients" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="USE CASES"
          badgeIcon={Users}
          title="Built for How"
          titleAccent="You Work"
          description="See how organizations like yours use Seyvin to transform their operations"
        />

        {/* Sector Toggle */}
        <div className="flex justify-center mb-10">
          <div className={`inline-flex rounded-full p-1.5 border ${
            theme === 'dark' 
              ? 'bg-[#1a1a1a] border-[#262626]' 
              : 'bg-slate-100 border-slate-200'
          }`}>
            {Object.entries(sectors).map(([key, sector]) => {
              const Icon = sector.icon;
              return (
                <button
                  key={key}
                  onClick={() => handleSectorChange(key)}
                  className={`
                    flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                    ${activeSector === key 
                      ? theme === 'dark'
                        ? 'bg-white text-black' 
                        : 'bg-slate-900 text-white'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {sector.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-[360px,1fr] gap-6">
          {/* Persona Selector */}
          <div className="space-y-2">
            <p className={`text-sm mb-4 px-2 ${
              theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
            }`}>Select your role:</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                {currentSector.personas.map((persona) => (
                  <PersonaCard
                    key={persona.id}
                    persona={persona}
                    isActive={activePersona.id === persona.id}
                    onClick={() => setActivePersona(persona)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
            
            {/* CTA */}
            <div className={`mt-6 p-5 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#262626]' 
                : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
            }`}>
              <p className={`text-sm mb-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>
                See yourself in one of these roles?
              </p>
              <Link 
                to="/book-demo" 
                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  theme === 'dark' 
                    ? 'text-cyan-400 hover:text-cyan-300' 
                    : 'text-cyan-600 hover:text-cyan-700'
                }`}
              >
                Book a personalized demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Persona Detail */}
          <AnimatePresence mode="wait">
            <PersonaDetail key={activePersona.id} persona={activePersona} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

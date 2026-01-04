import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discover & Analyze',
    description: 'We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.',
    visual: 'audit',
  },
  {
    id: 2,
    number: '02',
    title: 'Build & Implement',
    description: 'We design and develop custom AI solutions tailored to your needs. From automation workflows to AI agents, we build systems that integrate seamlessly.',
    visual: 'code',
  },
  {
    id: 3,
    number: '03',
    title: 'Optimize & Scale',
    description: 'We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.',
    visual: 'analytics',
  },
];

// Audit Dashboard Visual for Step 1
function AuditVisual() {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl border border-[#262626] p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-500">System Audit</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
        </div>
      </div>
      
      {/* Workflow boxes */}
      <div className="space-y-3">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] border border-[#262626]"
        >
          <div className="w-8 h-8 rounded bg-[#262626]" />
          <div className="flex-1">
            <div className="h-2 w-24 bg-[#262626] rounded mb-1" />
            <div className="h-2 w-16 bg-[#1f1f1f] rounded" />
          </div>
          <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-500/40" />
        </motion.div>
        
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] border border-[#262626]"
        >
          <div className="w-8 h-8 rounded bg-[#262626]" />
          <div className="flex-1">
            <div className="h-2 w-20 bg-[#262626] rounded mb-1" />
            <div className="h-2 w-12 bg-[#1f1f1f] rounded" />
          </div>
          <div className="w-4 h-4 rounded-full bg-green-500/20 border border-green-500/40" />
        </motion.div>
        
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] border border-[#262626]"
        >
          <div className="w-8 h-8 rounded bg-[#262626]" />
          <div className="flex-1">
            <div className="h-2 w-28 bg-[#262626] rounded mb-1" />
            <div className="h-2 w-14 bg-[#1f1f1f] rounded" />
          </div>
          <div className="w-4 h-4 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
        </motion.div>
      </div>
    </div>
  );
}

// Code Visual for Step 2
function CodeVisual() {
  const codeLines = [
    { num: 1, code: '// Build & Implement ->', indent: 0 },
    { num: 2, code: '', indent: 0 },
    { num: 3, code: 'async function generateResponse(prompt) {', indent: 0 },
    { num: 4, code: "  const response = await fetch('https://api.openai...", indent: 0 },
    { num: 5, code: "    method: 'POST',", indent: 0 },
    { num: 6, code: '    headers: {', indent: 0 },
    { num: 7, code: "      'Content-Type': 'application/json',", indent: 0 },
    { num: 8, code: "      'Authorization': 'Bearer YOUR_API_KEY'", indent: 0 },
    { num: 9, code: '    },', indent: 0 },
    { num: 10, code: '    body: JSON.stringify({', indent: 0 },
  ];

  return (
    <div className="bg-[#0f0f0f] rounded-2xl border border-[#262626] p-4 font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-2 mb-3 text-gray-500 text-xs">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6" />
          <polyline points="8,6 2,12 8,18" />
        </svg>
        <span>Code</span>
      </div>
      <div className="space-y-0.5">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="flex"
          >
            <span className="w-6 text-gray-600 text-right mr-3 select-none">{line.num}</span>
            <span className="text-gray-400 whitespace-nowrap">{line.code}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Analytics Dashboard Visual for Step 3
function AnalyticsVisual() {
  const categories = [
    { name: 'Marketing & ads', score: 84 },
    { name: 'AI Automation', score: 94 },
    { name: 'Money & Finance', score: 88 },
  ];

  return (
    <div className="bg-[#0f0f0f] rounded-2xl border border-[#262626] p-6 overflow-hidden">
      {/* Line chart */}
      <div className="mb-6">
        <svg viewBox="0 0 300 80" className="w-full h-20">
          <motion.path
            d="M 0 60 Q 30 50, 60 55 T 120 40 T 180 50 T 240 30 T 300 35"
            fill="none"
            stroke="#3b3b3b"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <motion.path
            d="M 0 70 Q 40 60, 80 65 T 160 55 T 240 60 T 300 50"
            fill="none"
            stroke="#262626"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </svg>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-6 mb-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded bg-gray-500" />
          <span className="text-gray-500">Users</span>
          <span className="text-white font-medium">3,6K</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded bg-gray-600" />
          <span className="text-gray-500">Clicks</span>
          <span className="text-white font-medium">2m</span>
        </div>
      </div>

      {/* Category label */}
      <div className="text-xs text-gray-500 mb-3">Growth & Efficiency Driven by AI</div>

      {/* Category scores */}
      <div className="space-y-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded bg-[#262626] flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-[#3b3b3b]" />
            </div>
            <span className="text-sm text-gray-400 flex-1">{cat.name}</span>
            <div className="w-24 h-1.5 bg-[#262626] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gray-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${cat.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              />
            </div>
            <span className="text-xs text-gray-500 w-12">{cat.score}% Score</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const visuals = {
  audit: AuditVisual,
  code: CodeVisual,
  analytics: AnalyticsVisual,
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps[activeStep - 1];
  const Visual = visuals[currentStep.visual];

  return (
    <section id="process" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="PROCESS"
          badgeIcon={Layers}
          title="Our Simple &"
          titleAccent="Smart Process"
          description="Everything you need to collaborate, create, and scale, all in one place."
        />

        <Card padding="p-8 md:p-12">
          {/* Step tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                  px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeStep === step.id 
                    ? 'bg-white text-black' 
                    : 'bg-[#1a1a1a] text-gray-400 border border-[#262626] hover:border-white/20'
                  }
                `}
              >
                STEP {step.id}
              </button>
            ))}
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
                <div className="text-6xl font-bold text-gray-800 mb-4">
                  {currentStep.number}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {currentStep.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {currentStep.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Card>
      </div>
    </section>
  );
}

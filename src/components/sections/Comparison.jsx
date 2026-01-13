import { motion } from 'framer-motion';
import { GitCompare, Check, X, Minus } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const capabilities = [
  { name: 'Data Integration', seyvin: true, thoughtspot: false, databricks: false, zapier: true, tableau: false },
  { name: 'Natural Language Queries', seyvin: true, thoughtspot: true, databricks: false, zapier: false, tableau: false },
  { name: 'Auto-Generated Dashboards', seyvin: true, thoughtspot: false, databricks: false, zapier: false, tableau: false },
  { name: 'Multi-Agent AI', seyvin: true, thoughtspot: false, databricks: false, zapier: false, tableau: false },
  { name: 'Board-Ready Reports', seyvin: true, thoughtspot: false, databricks: false, zapier: false, tableau: false },
  { name: 'Accessible Pricing', seyvin: true, thoughtspot: false, databricks: false, zapier: true, tableau: false },
  { name: 'Days to Setup', seyvin: true, thoughtspot: false, databricks: false, zapier: true, tableau: false },
  { name: 'No Technical Skills', seyvin: true, thoughtspot: false, databricks: false, zapier: true, tableau: false },
];

const competitors = [
  { key: 'seyvin', name: 'Seyvin', pricing: 'Beta pricing', highlight: true },
  { key: 'thoughtspot', name: 'ThoughtSpot', pricing: '$50K+/year', highlight: false },
  { key: 'databricks', name: 'Databricks', pricing: '$250K+/year', highlight: false },
  { key: 'zapier', name: 'Zapier', pricing: 'Integration only', highlight: false },
  { key: 'tableau', name: 'Tableau', pricing: '$1K+/year', highlight: false },
];

const differentiators = [
  {
    title: 'vs. Traditional BI',
    subtitle: 'Next-Generation AI Intelligence',
    theirLimitations: [
      'Manual dashboard design taking weeks',
      'SQL knowledge required for queries',
      'Static views that don\'t adapt',
      'Expensive implementations',
    ],
    ourAdvantages: [
      'AI creates dashboards automatically',
      'Ask questions in plain English',
      'Dynamic insights that evolve',
      'Up and running in days',
    ],
  },
  {
    title: 'vs. Data Platforms',
    subtitle: 'Business Intelligence, Not Infrastructure',
    theirLimitations: [
      'Need data engineers ($120K+ salary)',
      'Months of implementation',
      '$250K+ annual budget',
      'Technical expertise required',
    ],
    ourAdvantages: [
      'No data warehouse required',
      'Days to first insights',
      'Accessible pricing',
      'Zero technical skills needed',
    ],
  },
  {
    title: 'vs. Chatbots',
    subtitle: 'Your Data. Not Hallucinations.',
    theirLimitations: [
      'No connection to your data',
      'Hallucinate convincing "facts"',
      'Can\'t verify their answers',
      'No business context',
    ],
    ourAdvantages: [
      'Connected to your business data',
      'Multi-agent reduces hallucination',
      'Every insight traceable to source',
      'Built for business analytics',
    ],
  },
];

function FeatureIcon({ supported, highlight }) {
  if (supported) {
    return (
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${highlight ? 'bg-cyan-500/20' : 'bg-green-500/20'}`}>
        <Check className={`w-3.5 h-3.5 ${highlight ? 'text-cyan-400' : 'text-green-400'}`} />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center">
      <Minus className="w-3.5 h-3.5 text-gray-600" />
    </div>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="COMPARISON"
          badgeIcon={GitCompare}
          title="The Complete Solution"
          titleAccent="vs. Assembly Required"
          description="Seyvin combines integration, analysis, and reporting in one platform"
        />

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card padding="p-0" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#262626]">
                    <th className="text-left p-4 text-gray-400 font-medium text-sm">Capability</th>
                    {competitors.map((comp) => (
                      <th 
                        key={comp.key} 
                        className={`p-4 text-center ${comp.highlight ? 'bg-cyan-500/5' : ''}`}
                      >
                        <div className={`font-semibold ${comp.highlight ? 'text-cyan-400' : 'text-white'}`}>
                          {comp.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{comp.pricing}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {capabilities.map((cap, i) => (
                    <tr key={cap.name} className={`border-b border-[#1a1a1a] ${i % 2 === 0 ? 'bg-[#0a0a0a]' : ''}`}>
                      <td className="p-4 text-gray-300 text-sm">{cap.name}</td>
                      {competitors.map((comp) => (
                        <td 
                          key={comp.key} 
                          className={`p-4 text-center ${comp.highlight ? 'bg-cyan-500/5' : ''}`}
                        >
                          <div className="flex justify-center">
                            <FeatureIcon supported={cap[comp.key]} highlight={comp.highlight} />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="p-6" className="h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">{diff.title}</h3>
                  <p className="text-sm text-cyan-400">{diff.subtitle}</p>
                </div>

                {/* Their Limitations */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Their limitations</p>
                  <ul className="space-y-2">
                    {diff.theirLimitations.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Advantages */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Seyvin advantage</p>
                  <ul className="space-y-2">
                    {diff.ourAdvantages.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

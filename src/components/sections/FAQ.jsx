import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, ArrowUpRight, Shield, Lock } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Accordion from '../ui/Accordion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const faqItems = [
  {
    question: 'How does Seyvin connect to my data sources?',
    answer: "Seyvin uses secure OAuth 2.0 connections for services like QuickBooks and Google Drive, and direct file uploads for CSV/Excel. We never store your passwords—you authorize access through each platform's secure login, and you can revoke access anytime.",
  },
  {
    question: 'Can I trust the AI answers? How do you prevent hallucinations?',
    answer: "Unlike generic chatbots, Seyvin's multi-agent architecture (Dolores, Data Analyst, Report Writer) cross-validates every insight. Every answer is traceable to your actual source data—you can verify any number. We never make up data; if the answer isn't in your data, we tell you.",
  },
  {
    question: 'How long does setup take?',
    answer: "Most customers connect their first data source within 5 minutes using our one-click integrations. You can start asking questions immediately. Full onboarding with all your data sources typically takes 1-2 days, not the months required by traditional BI tools.",
  },
  {
    question: 'Do I need technical skills or SQL knowledge?',
    answer: "Not at all. Seyvin is designed for business users. Ask questions in plain English like \"What's our cash runway?\" or \"Show me MRR by customer segment.\" Our AI handles all the technical complexity—no SQL, no dashboard design skills required.",
  },
  {
    question: 'Is my data secure?',
    answer: "Absolutely. Your data is encrypted at rest and in transit using industry-standard protocols. We're SOC 2 Type II compliant (in progress) and GDPR-ready. We never train AI models on your business data. You own your data—disconnect or delete anytime.",
  },
  {
    question: 'What does beta pricing look like?',
    answer: "Pricing will be finalized based on beta participant feedback. Beta users get preferential founding member rates that will be locked in before public launch. There's no commitment during the beta period—you can evaluate the full platform risk-free.",
  },
  {
    question: 'What integrations do you support?',
    answer: "Currently: QuickBooks Online, Notion, Google Drive, HubSpot, and CSV/Excel uploads. Coming soon: Shopify, Google Analytics, Stripe, Salesforce, Xero, and more. We're adding new integrations every week based on user requests.",
  },
  {
    question: 'Can Seyvin generate reports for my board/investors?',
    answer: "Yes! This is one of our core features. Simply ask something like \"Create a Q4 investor report with MRR, ARR, runway analysis, and key metrics.\" Seyvin generates professional, board-ready reports with executive summaries, trend analysis, and data-backed recommendations.",
  },
];

export default function FAQ() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  return (
    <section id="faq" className={`py-24 ${
      theme === 'dark' ? 'theme-bg-primary' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="FAQ"
          badgeIcon={HelpCircle}
          title="Frequently Asked"
          titleAccent="Questions"
          description="Everything you need to know about Seyvin"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact & Security cards */}
          <div className="space-y-6">
            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card padding="p-6" className="h-auto">
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>Still Have Questions?</h3>
                    <p className={`text-sm mt-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      Book a demo and we'll walk you through everything—with your actual data.
                    </p>
                  </div>
                  <Button variant="secondary" size="sm" className="w-full justify-center" onClick={() => navigate('/book-demo')}>
                    Book a Demo
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Security card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card padding="p-6" className={`border-cyan-500/20 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-cyan-500/5 to-transparent' 
                  : 'bg-gradient-to-br from-cyan-50 to-white'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-100'
                  }`}>
                    <Shield className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                  </div>
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>Security First</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className={`flex items-center gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <Lock className={`w-3.5 h-3.5 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                    Enterprise-grade encryption
                  </li>
                  <li className={`flex items-center gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <Lock className={`w-3.5 h-3.5 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                    SOC 2 Type II (in progress)
                  </li>
                  <li className={`flex items-center gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <Lock className={`w-3.5 h-3.5 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                    GDPR-ready data handling
                  </li>
                  <li className={`flex items-center gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <Lock className={`w-3.5 h-3.5 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                    You own your data—always
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

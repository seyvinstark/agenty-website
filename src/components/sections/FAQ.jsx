import { motion } from 'framer-motion';
import { HelpCircle, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Accordion from '../ui/Accordion';
import Card from '../ui/Card';
import Button from '../ui/Button';

const faqItems = [
  {
    question: 'What types of processes can you automate?',
    answer: 'We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.',
  },
  {
    question: 'Do I need technical knowledge to use your service?',
    answer: "Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we'll automate the rest.",
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer: 'Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most clients see their first automation live within 1–2 weeks, depending on complexity and the number of workflows.',
  },
  {
    question: 'Is your AI secure and compliant?',
    answer: 'Absolutely. We use enterprise-grade security practices and ensure compliance with major data privacy standards like GDPR.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="FAQ'S"
          badgeIcon={HelpCircle}
          title="Frequently Asked"
          titleAccent="Questions"
          description="Find quick answers to the most common support questions"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card padding="p-8" className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#0f0f0f] border border-[#262626] flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Still Have Questions?
              </h3>
              <p className="text-gray-400 mb-6">
                Still have questions? Feel free to get in touch with us today!
              </p>
              <Button variant="secondary" size="sm">
                <ArrowUpRight className="w-4 h-4" />
                Ask A Question
              </Button>
            </Card>
          </motion.div>

          {/* FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


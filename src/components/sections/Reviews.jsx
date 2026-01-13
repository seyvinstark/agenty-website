import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'GrowthTech (45-person SaaS startup)',
    quote: "We went from spending 8 hours preparing for board meetings to 15 minutes. Seyvin's automated investor reports are a game-changer.",
    outcome: '8 hours → 15 minutes',
    metric: 'board prep time',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Jessica Martinez',
    role: 'Finance Manager',
    company: 'ServiceCo (100-person professional services)',
    quote: "Our month-end close process used to take 10 days. With Seyvin's QuickBooks integration and automated financial analysis, we close in 5 days.",
    outcome: '10 days → 5 days',
    metric: 'month-end close',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Sarah Thompson',
    role: 'Director of Operations',
    company: 'EcomBrand (75-person e-commerce)',
    quote: "I used to spend 20 hours a week pulling reports. Now I spend 2 hours, and the reports are better quality.",
    outcome: '20 hrs → 2 hrs/week',
    metric: 'reporting time',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
];

const stats = [
  { value: '90%', label: 'reduction in reporting time' },
  { value: '5 days', label: 'faster month-end close' },
  { value: '20+', label: 'beta customers' },
];

export default function Reviews() {
  const { theme } = useTheme();
  
  return (
    <section id="reviews" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
      <div className="section-container">
        <SectionHeader
          badge="TESTIMONIALS"
          badgeIcon={Star}
          title="See the"
          titleAccent="Impact"
          description="Beta customers have reduced reporting time by 90% and closed their month-end processes 5 days faster"
        />

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold mb-1 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}>{stat.value}</div>
              <div className={`text-xs ${
                theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
              }`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="p-6" className="h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className={`w-8 h-8 mb-4 ${
                  theme === 'dark' ? 'text-cyan-500/30' : 'text-cyan-500/40'
                }`} />

                {/* Quote */}
                <p className={`leading-relaxed mb-6 flex-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  "{testimonial.quote}"
                </p>

                {/* Outcome Badge */}
                <div className={`flex items-center gap-2 mb-6 p-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-cyan-500/10 border-cyan-500/20' 
                    : 'bg-cyan-50 border-cyan-200'
                }`}>
                  <TrendingUp className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  }`} />
                  <div>
                    <span className={`font-semibold ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`}>{testimonial.outcome}</span>
                    <span className={`text-sm ml-2 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                    }`}>{testimonial.metric}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>{testimonial.name}</h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                    }`}>{testimonial.role}</p>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-gray-600' : 'text-slate-400'
                    }`}>{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
          }`}>
            Trusted by 20+ beta customers across{' '}
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>e-commerce</span>,{' '}
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>SaaS</span>, and{' '}
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>professional services</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

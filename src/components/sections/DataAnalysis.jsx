import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionBadge } from '../ui/Badge';

export default function DataAnalysis() {
  return (
    <section id="data-analysis" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <SectionBadge icon={Star}>WE ANALYZE YOUR DATA</SectionBadge>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
            We find what to{' '}
            <span className="font-serif italic text-gray-400">automate</span>, who your users are & how AI
            can optimize your{' '}
            <span className="font-serif italic text-gray-400">workflow</span>. Best part is we also build
            and launch{' '}
            <span className="font-serif italic text-gray-400">real solutions</span>."
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                alt="Co-founder"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-400">Co-founder & AI Strategy Lead</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


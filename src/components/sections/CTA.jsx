import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, Mail } from 'lucide-react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Pre-title */}
          <p className="text-gray-500 italic mb-4">
            — <span className="text-gray-400">Reach out anytime</span> —
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Ready to Automate Smarter? Let's{' '}
            <span className="font-serif italic text-gray-400">Build Together</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-8">
            Schedule a Call and Begin Automating
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block mb-8"
          >
            <Button variant="primary" size="lg" withArrow>
              Book A Free Call
            </Button>
          </motion.div>

          {/* Glow effect under button */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-white/10 blur-3xl" />
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8 pt-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <div className="w-px h-4 bg-gray-700" />
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <div className="w-px h-4 bg-gray-700" />
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:landio@support.com"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            landio@support.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}


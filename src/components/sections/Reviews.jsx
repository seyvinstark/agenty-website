import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const reviews = [
  {
    name: 'Daniel Kim',
    role: 'Operations Lead at Flowbyte',
    quote: 'Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Priya Mehra',
    role: 'CTO at Brightstack Labs',
    quote: 'Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Manager at Nexora',
    quote: 'Smooth setup. Their system replaced three tools. We saw improvements in just the first week.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Marcus Thompson',
    role: 'Marketing Director at OrbitShift',
    quote: 'Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Sarah Wong',
    role: 'Analytics Manager at Corelink',
    quote: 'Huge time-saver. Data is better organized. The insights we get now are actionable and fast.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Ravi Shah',
    role: 'COO at PixelNest Solutions',
    quote: 'Very intuitive. No fluff, just performance. Our internal processes finally feel under control.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="REVIEWS"
          badgeIcon={Heart}
          title="Trusted by"
          titleAccent="Visionaries"
          description="Hear from real users who achieved success with our automation"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="p-6" className="h-full">
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-400 italic leading-relaxed">
                  "{review.quote}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


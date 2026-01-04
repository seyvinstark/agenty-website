import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const clients = [
  {
    name: "Max's SaaS Revolution",
    story: 'Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.',
    stats: [
      { value: 50, label: 'increase in ROI', suffix: '%' },
      { value: 75, label: 'boost in revenue', suffix: '%' },
    ],
  },
  {
    name: "Emily's E-commerce Success",
    story: "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty",
    stats: [
      { value: 60, label: 'growth in sales', suffix: '%' },
      { value: 45, label: 'rise in engagement', suffix: '%' },
    ],
  },
  {
    name: "Sophia's Retail Breakthrough",
    story: 'Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.',
    stats: [
      { value: 40, label: 'gain in retention', suffix: '%' },
      { value: 30, label: 'surge in profits', suffix: '%' },
    ],
  },
];

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex items-baseline">
      <span className="text-5xl md:text-6xl font-bold text-white">{count}</span>
      <span className="text-3xl md:text-4xl font-bold text-white">{suffix}</span>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="OUR CLIENTS"
          badgeIcon={Users}
          title="Success Stories to"
          titleAccent="Inspire"
          description="Discover how businesses and creators achieve results"
        />

        <div className="space-y-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="p-8 md:p-10">
                <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-center">
                  {/* Story */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                      {client.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {client.story}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-row gap-8 lg:gap-12 lg:border-l lg:border-[#262626] lg:pl-12">
                    {client.stats.map((stat, i) => (
                      <div key={i} className="text-center lg:text-left">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

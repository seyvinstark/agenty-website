import { motion } from 'framer-motion';
import { Users, Twitter, Instagram, Linkedin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const teamMembers = [
  {
    name: 'Ikta Sollork',
    role: 'Founder / Data Analyst',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Gwen Chase',
    role: 'AI Strategist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'James Bond',
    role: 'Automation Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Jenny Will',
    role: 'SEO / Others',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Jan Wink',
    role: 'Integration Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Lilli Math',
    role: 'Client Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
  },
];

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="OUR AMAZING TEAM"
          badgeIcon={Users}
          title="Get to Know"
          titleAccent="Us"
          description="Everything you need to collaborate, create, and scale, all in one place."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="p-6" className="h-full">
                <div className="flex gap-4">
                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                    
                    {/* Social links */}
                    <div className="flex gap-2">
                      {socialLinks.map((social, i) => (
                        <a
                          key={i}
                          href={social.href}
                          className="w-9 h-9 rounded-lg bg-[#0f0f0f] border border-[#262626] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
                        >
                          <social.icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-32 h-40 rounded-xl overflow-hidden bg-[#262626]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
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


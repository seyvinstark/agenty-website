import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Check, Heart } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Toggle from '../ui/Toggle';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 50,
    yearlyPrice: 40,
    popular: false,
    features: [
      '3 Automated Workflows',
      'Basic AI Assistant Access',
      'Email + Slack Integration',
      'Monthly Performance Reports',
      'Email Support',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 90,
    yearlyPrice: 72,
    popular: true,
    features: [
      '10+ Automated Workflows',
      'Advanced AI Assistant Features',
      'Bi-Weekly Strategy Reviews',
      'CRM + Marketing Tool Integrations',
      'Priority Support',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    popular: false,
    features: [
      'Unlimited Custom Workflows',
      'Dedicated AI Strategist',
      'API & Private Integrations',
      'Real-Time Performance Dashboards',
      '24/7 Premium Support + SLA',
    ],
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const toggleOptions = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly', badge: 'Save 20%' },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeader
          badge="PRICING"
          badgeIcon={Tag}
          title="Flexible Plans for"
          titleAccent="Everyone"
          description="Choose a plan that fits your goals and scale as you grow"
        />

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <Toggle
            options={toggleOptions}
            value={billingCycle}
            onChange={setBillingCycle}
          />
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.popular ? 'relative' : ''}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-black text-xs font-medium rounded-full">
                  Popular
                </div>
              )}
              
              <Card
                padding="p-8"
                className={`h-full ${plan.popular ? 'border-cyan-500/30' : ''}`}
              >
                <h3 className="text-cyan-400 font-medium mb-4">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-white">Custom</span>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full mb-6"
                  withArrow
                >
                  Get Started
                </Button>

                {/* Divider */}
                <div className="border-t border-dashed border-[#262626] my-6" />

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Donation note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-gray-500 text-sm"
        >
          <Heart className="w-4 h-4 text-pink-500" />
          <span>We donate 2% of your membership to pediatric wellbeing</span>
        </motion.div>
      </div>
    </section>
  );
}


/**
 * Why Solar Section
 * Feature cards for Zero Down Solar, Net Metering, Solar Calculator
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Home, Zap, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Home,
    title: 'Zero Down Solar',
    description:
      'With solar financing arrangements, a solar company will install a solar system on your roof at no upfront cost! See if you qualify for zero down solar in less than 2 minutes!',
    link: '#zero-down',
    linkText: 'Learn More',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Solar Net Metering',
    description:
      'Net metering is a utility rate program that allows your power company to buy unused energy from your solar panels. Some net-metering programs will credit you for solar energy you don\'t use that goes back to the grid!',
    link: '#net-metering',
    linkText: 'Learn More',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Calculator,
    title: 'Solar Calculator',
    description:
      'Use our solar calculator to estimate how much energy your home uses, what size solar system you need, and calculate the average sunlight your solar panels need to help power your home.',
    link: '#calculator',
    linkText: 'Learn More',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
  },
];

export default function WhySolar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resources" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Solar?
          </h2>
          <p className="text-xl text-gray-600">A Lower Power Bill Is Just The Beginning</p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl ${feature.bgColor} p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

              {/* Link */}
              <Button
                variant="ghost"
                className={`p-0 h-auto font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent hover:bg-transparent`}
                onClick={() =>
                  document.querySelector(feature.link)?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {feature.linkText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Decorative Element */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-bl-full`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

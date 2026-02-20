/**
 * Steps Section
 * "It's as easy as one, two, three" - How it works
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, ClipboardCheck, TrendingDown } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Enter your zip code',
    description: 'Enter your Zip Code and we\'ll find you top solar providers in your region.',
    icon: MapPin,
    color: 'bg-blue-500',
  },
  {
    number: 2,
    title: 'Check eligibility',
    description: 'Answer a few questions to see if installing solar panels is ideal for your home.',
    icon: ClipboardCheck,
    color: 'bg-green-500',
  },
  {
    number: 3,
    title: 'See your savings',
    description: 'Compare solar offerings in your area and learn how much you can save.',
    icon: TrendingDown,
    color: 'bg-yellow-500',
  },
];

export default function Steps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="steps" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-gray-600 mb-4">It&apos;s as easy as one, two, three.</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Find out if you&apos;re eligible for solar installation, rebates, incentives, and more!
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
              )}

              <div className="text-center">
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative w-32 h-32 mx-auto mb-6 rounded-full ${step.color} flex items-center justify-center shadow-lg`}
                >
                  {/* Inner glow */}
                  <div className={`absolute inset-2 rounded-full ${step.color} opacity-30 blur-md`} />

                  {/* Step Number */}
                  <span className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-xl font-bold text-gray-900">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <step.icon className="w-14 h-14 text-white relative z-10" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

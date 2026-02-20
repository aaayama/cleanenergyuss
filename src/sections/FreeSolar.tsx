/**
 * Free Solar Section
 * "Hey, Did You Know? Free Solar Panels?" informational section
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Gift, Info } from 'lucide-react';

const incentives = [
  'Solar Federal Tax Credit (30%)',
  'Zero down solar installation options',
  'Net metering programs',
  'State and local rebates',
  'Utility company incentives',
];

export default function FreeSolar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="zero-down" className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Info className="w-4 h-4" />
              Hey, Did You Know?
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Free Solar Panels?
            </h2>

            <div className="space-y-6 text-white/90">
              <p className="text-lg leading-relaxed">
                The age-old question is, &quot;Can I get solar panels for free?&quot; Unfortunately,
                no, but depending on the state where you reside, and with massive solar incentives
                such as the{' '}
                <span className="text-yellow-300 font-semibold">
                  Solar Federal Tax Credit that knocks 30% off the cost
                </span>
                , zero down solar installation options, net metering and other rebates and more,
                makes going solar more affordable!
              </p>

              {/* Incentives List */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-yellow-300" />
                  Available Incentives:
                </h4>
                <ul className="space-y-3">
                  {incentives.map((incentive, index) => (
                    <motion.li
                      key={incentive}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {incentive}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Get A Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&h=500&fit=crop"
                alt="Happy homeowner with solar panels"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">30%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Federal Tax Credit</p>
                      <p className="text-sm text-gray-600">Available through 2032</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg"
            >
              <span className="text-2xl font-bold">$0</span>
              <span className="text-xs font-semibold">Down</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

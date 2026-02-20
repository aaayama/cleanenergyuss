/**
 * Solar Choice Section
 * "Solar Is A Smart Choice No Matter Where You Live"
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sun, MapPin, DollarSign } from 'lucide-react';

export default function SolarChoice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Sun,
      title: 'Clean Energy',
      description: 'Reduce your carbon footprint with renewable solar power',
    },
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Lower your monthly electricity bills significantly',
    },
    {
      icon: MapPin,
      title: 'Nationwide Coverage',
      description: 'Solar works in all 50 states with various incentives',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solar Is A Smart Choice
              <span className="text-blue-600"> No Matter Where You Live</span>
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Take advantage of solar incentives in your home state! We&apos;ve broken down all 50
                states, and on our solar incentives page, you can easily find your home state and
                get a better look at what your state has to offer when it comes down to state solar
                incentives, rebates, net metering, and more!
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => document.getElementById('incentives')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop"
                  alt="Solar panels on rooftop"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Residential Solar</p>
                  <p className="text-xs opacity-80">Save up to 30% with federal tax credit</p>
                </div>
              </motion.div>

              {/* Secondary Images */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&h=300&fit=crop"
                  alt="Solar installation"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-medium">Professional Install</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop"
                  alt="Solar farm"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-medium">Clean Energy</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">30%</p>
                  <p className="text-xs text-gray-600">Federal Tax Credit</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

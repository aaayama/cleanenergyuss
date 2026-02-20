/**
 * Solar Learning Section
 * Educational topics about solar energy
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, GraduationCap, Landmark, FileCheck, BookOpen } from 'lucide-react';

const topics = [
  {
    icon: FileCheck,
    title: 'Federal Solar Tax Credit',
    description:
      'The Federal Solar Tax Credit is available to homeowners across the U.S. This credit amounts to 30% of your solar system\'s cost to make switching to solar more affordable.',
    link: '#federal-tax-credit',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Landmark,
    title: 'Government Solar Programs',
    description:
      'Thanks to the Federal government, multiple federally funded solar programs help homeowners nationwide get solar installed on their homes for little to no upfront cost.',
    link: '#government-programs',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: GraduationCap,
    title: 'Solar Satisfaction',
    description:
      'Learn why over 90% of solar homeowners are satisfied with their decision and would recommend solar to friends and family.',
    link: '#solar-satisfaction',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: BookOpen,
    title: 'Solar Education',
    description:
      'From understanding how solar panels work to learning about installation processes, get educated on everything solar.',
    link: '#solar-education',
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function SolarLearning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="incentives" className="py-20 lg:py-28 bg-gray-50">
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
            Solar Learning
          </h2>
          <p className="text-xl text-gray-600">Everything You Need To Know About Solar</p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg ${topic.color} flex items-center justify-center mb-4`}
              >
                <topic.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{topic.description}</p>

              {/* Link */}
              <button className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

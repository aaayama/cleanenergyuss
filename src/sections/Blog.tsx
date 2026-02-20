/**
 * Blog Section
 * Daily Stories - Solar-related articles
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: '1',
    title: 'Utility Scale Battery Storage: How It Works and Why It Matters',
    excerpt:
      'Learn how large-scale battery storage is revolutionizing the renewable energy landscape.',
    author: 'Mark Lawrence',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&h=250&fit=crop',
    category: 'Technology',
  },
  {
    id: '2',
    title: 'Types of Thin-Film Solar Panels: Efficiency, Cost, and Applications',
    excerpt:
      'Explore the different types of thin-film solar technology and their unique advantages.',
    author: 'Mark Lawrence',
    date: 'Dec 12, 2024',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=250&fit=crop',
    category: 'Education',
  },
  {
    id: '3',
    title: 'Solar Panel Warranties: What They Cover and How Long They Last',
    excerpt:
      'Understanding solar panel warranties is crucial for protecting your investment.',
    author: 'Mark Lawrence',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    category: 'Guide',
  },
  {
    id: '4',
    title: 'Energy Saving Tips to Lowering Your Electricity Bill',
    excerpt:
      'Practical tips and strategies to reduce your monthly energy consumption and costs.',
    author: 'Mark Lawrence',
    date: 'Dec 8, 2024',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
    category: 'Tips',
  },
  {
    id: '5',
    title: 'Energy Saving Ideas for Every Room in your Home',
    excerpt:
      'Room-by-room guide to maximizing energy efficiency throughout your house.',
    author: 'Mark Lawrence',
    date: 'Dec 5, 2024',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=400&h=250&fit=crop',
    category: 'Home',
  },
  {
    id: '6',
    title: 'Energy Saving Devices that Work',
    excerpt:
      'A comprehensive review of smart home devices that actually reduce energy usage.',
    author: 'Mark Lawrence',
    date: 'Dec 3, 2024',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=250&fit=crop',
    category: 'Reviews',
  },
  {
    id: '7',
    title: 'How Many Watts Does a Space Heater Use? Cost and Efficiency Guide',
    excerpt:
      'Calculate the true cost of running space heaters and discover more efficient alternatives.',
    author: 'Mark Lawrence',
    date: 'Nov 30, 2024',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&h=250&fit=crop',
    category: 'Guide',
  },
  {
    id: '8',
    title: 'Heat Pump Incentives: Mass Save Rebates and Federal Tax Credits',
    excerpt:
      'Maximize your savings with available incentives for heat pump installations.',
    author: 'Mark Lawrence',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=250&fit=crop',
    category: 'Incentives',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-blue-600 font-semibold mb-2">Daily Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Just For You
            </h2>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

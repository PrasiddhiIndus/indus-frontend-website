import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const NFPANews = ({ news }) => (
  <section className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stay updated with the latest in fire protection and safety training
        </p>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-redPrimary-500/50 transition-all duration-300"
          >
            {/* Date */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>

            {/* Title & Excerpt */}
            <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
            <p className="text-gray-400 mb-4">{article.description}</p>


          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NFPANews;

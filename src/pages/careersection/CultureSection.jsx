import React from 'react';
import { motion } from 'framer-motion';

const cultureValues = [
  'Innovation and Excellence',
  'Safety First Mindset',
  'Continuous Learning',
  'Team Collaboration',
  'Client Focus',
  'Integrity and Trust'
];

const CultureSection = () => (
  <section id="culture" className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Values that define who we are and how we work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cultureValues.map((value, index) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 text-center hover:border-[#FF0000] hover:shadow-[0_0_10px_#FF0000] transition-all duration-300"
          >
            <span className="text-gray-300 font-semibold text-lg hover:text-[#FF0000] transition-colors duration-300">
              {value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CultureSection;
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-900/40"></div>
    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg')] bg-cover bg-center bg-no-repeat opacity-20"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Join Our Team
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join India’s leading fire and safety experts. Grow your skills, work with advanced equipment, and make a real impact.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

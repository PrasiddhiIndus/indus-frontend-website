

import React from 'react';
import { motion } from 'framer-motion';

const NFPAHero = () => (
  <>
    {/* Hero Section */}
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-black/40 z-0"></div>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('http://209.182.233.237/images/NFPAGAL8.jpg')] bg-cover bg-center bg-no-repeat opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            NFPA Training
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Certified fire safety and emergency response training programs designed to empower professionals for high-risk industrial environments. Practical, hands-on, and globally recognized.
          </p>
        </motion.div>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16 sm:py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              About NFPA Training
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
              Indus Fire Safety Pvt. Ltd. offers NFPA-aligned training programs that enhance fire and electrical safety knowledge for industrial professionals. Our courses are structured to provide practical skills, emergency preparedness, and compliance with international safety standards.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Training includes hands-on exercises, real-world simulations, and expert instruction, covering areas such as fire suppression, emergency response, safety audits, and hazard management. Every session ensures participants gain confidence, readiness, and certified competence.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Available at our campuses in <strong>Vadodara</strong> and <strong>Chittorgarh</strong>, or on-site at client facilities, our programs empower teams to work safely in high-risk industrial environments while meeting NFPA and ISO compliance requirements.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900/30 backdrop-blur-sm shadow-lg">
              <img
                src="http://209.182.233.237/images/training6.jpg"
                alt="NFPA Training"
                className="w-full h-full object-cover aspect-[4/3] max-w-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  </>
);

export default NFPAHero;

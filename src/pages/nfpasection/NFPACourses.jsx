
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, CheckCircle, Lock } from 'lucide-react';
import { scroller } from 'react-scroll';

const NFPACourses = ({ courses }) => {
  const scrollToCTA = () => {
    scroller.scrollTo('cta-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80,
    });
  };

  return (
    <section id="views-courses" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Available Courses</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive NFPA training programs designed for safety professionals
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const isComingSoon = course.status === 'coming_soon';

            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-[#0f0f0f]/90 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 ${
                  isComingSoon ? 'opacity-60 pointer-events-none' : 'hover:border-red-500/50'
                }`}
              >
                {/* Overlay for Coming Soon */}
                {isComingSoon && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-10">
                    <Lock className="w-8 h-8 text-red-500 mb-2" />
                    <span className="text-red-500 text-sm font-medium">Coming Soon</span>
                  </div>
                )}

                {/* Icon */}
                <div className="bg-[#ff0000] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>

                {/* Duration */}
                <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#ff0000]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  {course.price && (
                    <span className="text-2xl font-bold text-[#ff0000]">{course.price}</span>
                  )}
                  <button
                    onClick={scrollToCTA}
                    disabled={isComingSoon}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isComingSoon
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-[#ff0000] hover:bg-red-700 text-white'
                    }`}
                  >
                    {isComingSoon ? 'Coming Soon' : 'Enroll Now'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NFPACourses;

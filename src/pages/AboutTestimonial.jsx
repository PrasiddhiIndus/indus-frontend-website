import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    company: 'Reliance Industries Ltd.',
    message:
      'Indus Fire Safety has consistently delivered highly trained manpower and fire safety solutions for our operations. Their professionalism and quick response make them our trusted partner for critical safety projects.',
    rating: 5,
  },
  {
    name: 'Anita Sharma',
    company: 'Tata Chemicals',
    message:
      'Their fire trucks and emergency response teams are top-notch. From project planning to execution, Indus Fire Safety ensures compliance, safety, and operational excellence every time.',
    rating: 5,
  },
 
  {
    name: 'Priya Desai',
    company: 'Essar Oil',
    message:
      'Indus Fire Safety’s AMC and maintenance services keep our fire systems operational and compliant at all times. Their technical support and attention to detail are unmatched.',
    rating: 5,
  },

];

const AboutTestimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background Accent Blobs */}
      <div className="absolute top-[-5%] left-[-5%] w-72 h-72 bg-[#FF0000]/10 blur-3xl rounded-full opacity-10 -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#FF0000]/10 blur-2xl rounded-full opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Clients Say</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Hear directly from our trusted partners and valued clients.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-zinc-900/70 to-black/80 border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-[#FF0000]/20 transition-all duration-300 backdrop-blur-lg"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-[#FF0000]/80" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-base leading-relaxed italic mb-6">
                “{t.message}”
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;

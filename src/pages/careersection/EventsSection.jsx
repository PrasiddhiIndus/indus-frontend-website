import React from 'react';
import { motion } from 'framer-motion';



const galleryImages = [
  'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
  'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
  'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
];

const EventsSection = () => (
  <section id="events" className="py-20 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Events Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Company Events</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Celebrating collaboration, growth, and safety culture
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative overflow-hidden rounded-xl group cursor-pointer shadow-md"
          >
            <img
              src={image}
              alt={`Team moment ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;

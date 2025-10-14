import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const galleryImages = [
  "http://209.182.233.237/images/careers1.JPG",
  "http://209.182.233.237/images/careers2.jpg",
  "http://209.182.233.237/images/careers3.jpg",
  "http://209.182.233.237/images/careers4.jpg",
  "http://209.182.233.237/images/careers5.jpg",
  "http://209.182.233.237/images/careers6.jpg"
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-dark-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Team Gallery</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Moments from our workplace and team events
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative overflow-hidden rounded-xl group cursor-pointer"
          >
            <img
              src={image}
              alt={`Team moment ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
              <Camera className="w-8 h-8 text-white mb-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

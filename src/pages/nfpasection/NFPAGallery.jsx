import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NFPAGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images from public folder - 9 images total
  const galleryImages = [
    '/assets/NFPAGAL1.jpg',
    '/assets/NFPAGAL2.JPG',
    '/assets/NFPAGAL3.jpg',
    '/assets/NFPAGAL4.JPG',
    '/assets/NFPAGAL5.JPG',
    '/assets/NFPAGAL6.JPG',
    '/assets/NFPAGAL7.JPG',
    '/assets/NFPAGAL8.jpg',
    '/assets/NFPAGAL9.JPG'
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">NFPA Training Gallery</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Capturing moments from our comprehensive fire safety training sessions
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
              onClick={() => setSelectedImage({ src: image, index: index + 1 })}
            >
              <img
                src={image}
                alt={`NFPA Training Session ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="eager"
                fetchPriority={index < 6 ? "high" : "auto"}
                onError={(e) => {
                  console.error(`Failed to load NFPA gallery image ${index + 1}:`, image);
                  e.target.onerror = null;
                }}
                style={{
                  imageRendering: 'high-quality',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <div className="text-white text-center p-4">
                  <p className="text-sm font-medium">NFPA Training Session {index + 1}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Popup Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-6xl max-h-[90vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-16 right-0 text-white hover:text-red-500 transition-colors duration-200 text-3xl font-bold bg-black/50 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center z-10"
                >
                  ✕
                </button>

                {/* Full Quality Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={selectedImage.src}
                    alt={`NFPA Training Session ${selectedImage.index} - Full Quality`}
                    className="w-full h-full object-contain max-h-[80vh]"
                    style={{
                      imageRendering: 'high-quality',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                    }}
                  />

                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                    <p className="text-white text-xl font-medium">
                      NFPA Training Session {selectedImage.index}
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      Click anywhere to close
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NFPAGallery;

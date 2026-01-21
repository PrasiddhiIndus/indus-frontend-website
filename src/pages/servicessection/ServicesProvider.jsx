import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { validateImageUrl, getPlaceholderImage } from '../../utils/apiHelpers';

const ServicesProvider = ({ title, services }) => {
  const [imageErrors, setImageErrors] = useState(new Set());
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          {title}
        </h2>
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`break-inside-avoid w-full ${service.size} group [perspective:1000px]`}
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-xl shadow-xl">
                {/* Front */}
                <div className="absolute w-full h-full overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={validateImageUrl(service.image) || getPlaceholderImage()}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      if (!imageErrors.has(index)) {
                        console.error(`Failed to load image for service "${service.title}":`, service.image);
                        setImageErrors(prev => new Set([...prev, index]));
                      }
                      e.target.src = getPlaceholderImage();
                      e.target.onerror = null; // Prevent infinite loop
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-3 px-4">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={validateImageUrl(service.image) || getPlaceholderImage()}
                    alt="back"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = getPlaceholderImage();
                      e.target.onerror = null; // Prevent infinite loop
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-md p-6 flex flex-col justify-center items-start border border-[1px] border-[#FF0000] ">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProvider;

import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { Award, Trophy, Medal, Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CertificateCard = ({ certificate, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotateY: -15 }}
    animate={{ opacity: 1, y: 0, rotateY: 0 }}
    transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
    className="group cursor-pointer perspective-1000"
    onClick={() => onClick(certificate)}
  >
    <div className="relative w-full h-80 transform-style-preserve-3d group-hover:rotate-y-5 transition-all duration-700">
      {/* Main Card */}
      <div className="absolute inset-0 bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 group-hover:border-[#ff0000] transition-all duration-300">
        

        {/* Certificate Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Floating Icon */}
          <div className="absolute top-4 right-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <div className="bg-[#ff0000] rounded-full p-2 shadow-lg">
              <Trophy className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Year Badge */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 border border-[#ff0000]/30">
              <span className="text-[#ff0000] font-bold text-sm">{certificate.year}</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative p-6 h-32 flex flex-col justify-between">
          {/* Title */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-[#ff0000] transition-colors duration-300 line-clamp-2">
              {certificate.title}
            </h3>
          </div>

          {/* Type Badge */}
          <div className="flex justify-between items-center">
            <span className="bg-[#ff0000] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {certificate.type}
            </span>
            
            {/* Click Indicator */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </motion.div>
);

const CertificateModal = ({ certificate, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
          <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gray-900 border border-gray-700 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm rounded-full p-2 hover:bg-[#ff0000] transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Modal Content */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Trophy */}
              <div className="absolute top-6 left-6">
                <div className="bg-[#ff0000] rounded-full p-3">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Year Badge */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 border border-[#ff0000]/30">
                  <span className="text-[#ff0000] font-bold text-sm">{certificate.year}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-[#ff0000] rounded-full p-3">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="bg-[#ff0000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {certificate.type}
                    </span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{certificate.title}</h2>
                <p className="text-gray-400 font-medium">{certificate.year}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-[#ff0000]" />
                  <span className="text-gray-300">
                    <span className="font-semibold">Category:</span> {certificate.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const AwardsCertificatesSection = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample certificates data with proper demo images
  const sampleCertificates = [
    {
      id: 1,
      title: "ISO 9001:2015 Certification",
      type: "Quality Management",
      year: "2023",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Quality Assurance"
    },
    {
      id: 2,
      title: "Safety Excellence Award",
      type: "Safety Recognition",
      year: "2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Safety"
    },
    {
      id: 3,
      title: "Environmental Compliance Certificate",
      type: "Environmental",
      year: "2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Environmental"
    },
    {
      id: 4,
      title: "Best Service Provider Award",
      type: "Service Excellence",
      year: "2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Service Excellence"
    },
    {
      id: 5,
      title: "Innovation in Technology Award",
      type: "Technology Innovation",
      year: "2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Technology"
    }
  ];

  useEffect(() => {
    // For now, use sample data. Replace with actual API call if needed
    setCertificates(sampleCertificates);
  }, []);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-5 {
          transform: rotateY(5deg);
        }
        .rotate-y-20 {
          transform: rotateY(20deg);
        }
        .rotate-y--20 {
          transform: rotateY(-20deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <section id="awards" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#ff0000] rounded-full p-3 mr-3">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">
                Awards We Achieve
              </h2>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Recognizing our commitment to excellence, innovation, and outstanding service delivery in the industrial sector
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                onClick={handleCertificateClick}
              />
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </section>
    </>
  );
};

export default AwardsCertificatesSection;

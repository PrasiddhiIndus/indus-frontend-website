import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const ServicesMarkets = ({ title, description, images }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            className="flex flex-col justify-center h-full"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-[#FF0000] w-6 h-6" />
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg">{description}</p>
          </motion.div>

          {/* RIGHT COLUMN (Slider) */}
          <motion.div
            className="w-full"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Slider {...sliderSettings}>
              {images.map((img, idx) => (
                <div key={idx} className="px-2">
                  <motion.div
                    className="overflow-hidden border border-gray-700 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-[320px] object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMarkets;

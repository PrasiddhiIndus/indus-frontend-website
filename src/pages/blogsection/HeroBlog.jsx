import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { supabase } from '../../utils/supabaseClient';

const HeroBlogSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogSliderData, setBlogSliderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('blogs_welcome')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blogs:', error);
      } else {
        const uniqueData = Array.from(new Map(data.map(item => [item.id, item])).values());
        setBlogSliderData(uniqueData);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    beforeChange: (_, next) => setCurrentSlide(next), // Update background before slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  if (loading || blogSliderData.length === 0) {
    return <div className="text-center text-white p-8">Loading blogs...</div>;
  }

  const currentBg = blogSliderData[currentSlide]?.image_url;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentBg})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Title and Description */}
      <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Events & Blogs
        </motion.h1>
        <p className="text-base md:text-lg max-w-xl mx-auto">
          {blogSliderData[currentSlide]?.description}
        </p>
      </div>

      {/* Thumbnail Slider */}
      <div className="absolute bottom-4 w-full px-4 md:px-20 z-10">
        <Slider {...settings}>
          {blogSliderData.map((item, index) => (
            <div key={index} className="px-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg ${currentSlide === index ? 'scale-105' : 'scale-95'
                  } transition-all duration-300`}
                style={{
                  aspectRatio: '0.1 / 0.05', // perfect square
                  borderRadius: '0px', // sharp corners
                }}              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroBlogSlider;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HomeServices from './homesection/HomeServices';
import HomeStats from './homesection/HomeStats';
import HomeAbout from './homesection/HomeAbout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { supabase } from '../utils/supabaseClient';


const Home = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      const { data, error } = await supabase
        .from('slider_section')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error("Error fetching slides:", error);
      } else {
        setSlides(data);
      }
    };

    fetchSliderData();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative w-full min-h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={false} 
          className="w-full h-screen"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-screen">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.video_url}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="relative z-20 w-full h-full flex items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="max-w-xl sm:max-w-2xl md:max-w-3xl w-full mx-auto text-balance break-words"
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug sm:leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                      {slide.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <HomeServices />
      <HomeStats />
      <HomeAbout />
    </div>
  );
};

export default Home;


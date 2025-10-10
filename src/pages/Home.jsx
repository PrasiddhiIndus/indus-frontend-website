

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
  const [loading, setLoading] = useState(true);
  const [videoErrors, setVideoErrors] = useState(new Set());

  // Function to handle video errors silently
  const handleVideoError = (videoUrl, slideIndex) => {
    setVideoErrors(prev => new Set([...prev, slideIndex]));
  };

  useEffect(() => {
    const fetchSliderData = async () => {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('slider_section')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error("Error fetching slides:", error);
      } else {
        setSlides(data || []);
      }
      setLoading(false);
    };

    fetchSliderData();
  }, []);
  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading slider content...</p>
        </div>
      </div>
    );
  }

  // Show empty state if no slides
  if (!slides || slides.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Indus Fire Safety</h1>
          <p className="text-gray-400 text-lg">Experience excellence in fire safety solutions</p>
        </div>
      </div>
    );
  }

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
          {slides.map((slide, index) => {
            // Check for different possible field names for media
            const videoUrl = slide.video_url || slide.video || slide.videoUrl;
            const imageUrl = slide.image_url || slide.image || slide.imageUrl || slide.url;
            
            // Determine media type based on file extension
            const isVideoFile = (url) => {
              if (!url) return false;
              const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv'];
              return videoExtensions.some(ext => url.toLowerCase().includes(ext));
            };
            
            const isImageFile = (url) => {
              if (!url) return false;
              const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
              return imageExtensions.some(ext => url.toLowerCase().includes(ext));
            };
            
            // Smart media detection
            let finalVideoUrl = null;
            let finalImageUrl = null;
            
            if (videoUrl && isVideoFile(videoUrl)) {
              finalVideoUrl = videoUrl;
            } else if (videoUrl && isImageFile(videoUrl)) {
              // If video_url contains an image, treat it as image
              finalImageUrl = videoUrl;
            }
            
            if (imageUrl && isImageFile(imageUrl)) {
              finalImageUrl = imageUrl;
            } else if (imageUrl && isVideoFile(imageUrl)) {
              // If image_url contains a video, treat it as video
              finalVideoUrl = imageUrl;
            }
            
            return (
              <SwiperSlide key={slide.id || index}>
                <div className="relative w-full h-screen">
                  {/* Smart media rendering based on file type */}
                  {finalVideoUrl && !videoErrors.has(index) ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src={decodeURIComponent(finalVideoUrl)}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onError={(e) => {
                        handleVideoError(finalVideoUrl, index);
                      }}
                    />
                  ) : finalImageUrl ? (
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      src={finalImageUrl}
                      alt={slide.title || `Slide ${index + 1}`}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBGYWlsZWQgdG8gTG9hZDwvdGV4dD4KPC9zdmc+';
                      }}
                      style={{
                        imageRendering: 'high-quality',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                    />
                  ) : (
                    // Clean fallback background
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-black" />
                  )}
                  
                  {/* Reduced overlay opacity to show content better */}
                  <div className="absolute inset-0 bg-black/30 z-10" />
                  
                  {/* Enhanced content display */}
                  <div className="relative z-20 w-full h-full flex items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2 }}
                      className="max-w-xl sm:max-w-2xl md:max-w-3xl w-full mx-auto text-balance break-words"
                    >
                      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug sm:leading-tight text-white drop-shadow-lg">
                        {slide.title || 'Welcome to Indus Fire Safety'}
                      </h1>
                      <p className="text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed text-gray-200 drop-shadow-md">
                        {slide.description || 'Experience excellence in fire safety solutions and comprehensive safety training programs'}
                      </p>
                      
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <HomeServices />
      <HomeStats />
      <HomeAbout />
    </div>
  );
};

export default Home;


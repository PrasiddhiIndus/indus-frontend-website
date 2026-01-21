

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
import { validateImageUrl, getPlaceholderImage } from '../utils/apiHelpers';

// Get Supabase URL for storage path conversion
const getSupabaseUrl = () => {
  return import.meta.env.VITE_SUPABASE_URL || '';
};


const Home = () => {
  const [slides, setSlides] = useState([]);
  const [videoErrors, setVideoErrors] = useState(new Set());

  // Function to handle video errors silently
  const handleVideoError = (videoUrl, slideIndex) => {
    setVideoErrors(prev => new Set([...prev, slideIndex]));
  };

  useEffect(() => {
    const fetchSliderData = async () => {
      const { data, error } = await supabase
        .from('slider_section')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error("Error fetching slides:", error);
      } else {
        // Log the data to help debug
        console.log("Fetched slides data:", data);
        
        // Process and validate image URLs
        const supabaseUrl = getSupabaseUrl();
        const processedSlides = (data || []).map((slide) => {
          const processed = { ...slide };
          
          // Validate and process image URLs with Supabase URL for storage paths
          if (slide.image_url) {
            processed.image_url = validateImageUrl(slide.image_url, supabaseUrl);
            if (!processed.image_url) {
              console.warn(`Invalid image_url for slide ${slide.id}:`, slide.image_url);
            } else {
              console.log(`Validated image_url for slide ${slide.id}:`, processed.image_url);
            }
          }
          if (slide.image) {
            processed.image = validateImageUrl(slide.image, supabaseUrl);
            if (!processed.image) {
              console.warn(`Invalid image for slide ${slide.id}:`, slide.image);
            }
          }
          if (slide.video_url) {
            processed.video_url = validateImageUrl(slide.video_url, supabaseUrl);
          }
          
          return processed;
        });
        
        setSlides(processedSlides);
      }
    };

    fetchSliderData();
  }, []);

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
            
            // Smart media detection with URL validation
            let finalVideoUrl = null;
            let finalImageUrl = null;
            
            if (videoUrl && isVideoFile(videoUrl)) {
              finalVideoUrl = validateImageUrl(videoUrl) || videoUrl;
            } else if (videoUrl && isImageFile(videoUrl)) {
              // If video_url contains an image, treat it as image
              finalImageUrl = validateImageUrl(videoUrl);
            }
            
            if (imageUrl && isImageFile(imageUrl)) {
              finalImageUrl = validateImageUrl(imageUrl);
            } else if (imageUrl && isVideoFile(imageUrl)) {
              // If image_url contains a video, treat it as video
              finalVideoUrl = validateImageUrl(imageUrl) || imageUrl;
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
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      onError={(e) => {
                        console.error(`Failed to load image for slide ${index + 1}:`, {
                          originalUrl: imageUrl,
                          validatedUrl: finalImageUrl,
                          slideData: slide
                        });
                        e.target.src = getPlaceholderImage();
                        e.target.onerror = null; // Prevent infinite loop
                      }}
                      onLoad={() => {
                        // Image loaded successfully - only log in development
                        if (import.meta.env.DEV) {
                          console.log(`Image loaded successfully for slide ${index + 1}:`, finalImageUrl);
                        }
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


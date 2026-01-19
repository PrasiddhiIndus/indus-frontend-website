import React, { useEffect } from 'react';
import { preloadImages } from '../utils/imagePreloader';
import HeroSection from './careersection/HeroSection';
import WhyUsSection from './careersection/WhyUsSection';
import OpeningsSection from './careersection/OpeningsSection';
import EventsSection from './careersection/EventsSection';
import CultureSection from './careersection/CultureSection';

// All Careers page images - preload these immediately
const CAREERS_IMAGES = [
  // Hero background (critical - load first)
  'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
  // Gallery images (critical - above fold)
  'http://209.182.233.237/images/careers1.JPG',
  'http://209.182.233.237/images/careers2.jpg',
  'http://209.182.233.237/images/careers3.jpg',
  // WhyUs section images (critical - above fold)
  'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
  'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg',
  'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
  // Remaining images
  'http://209.182.233.237/images/careers4.jpg',
  'http://209.182.233.237/images/careers5.jpg',
  'http://209.182.233.237/images/careers6.jpg',
  'http://209.182.233.237/images/careers1.jpg',
  'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg',
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
  'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
];

const Careers = () => {
  // Preload all images immediately when component mounts - don't wait
  useEffect(() => {
    // Start preloading images immediately in parallel
    preloadImages(CAREERS_IMAGES).catch(err => {
      console.error('Error preloading careers images:', err);
    });
    
    // Also add preload link tags for critical images
    const criticalImages = CAREERS_IMAGES.slice(0, 6);
    criticalImages.forEach((imageUrl, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      link.fetchPriority = index < 3 ? 'high' : 'auto';
      document.head.appendChild(link);
    });
    
    // Cleanup function
    return () => {
      // Remove preload links when component unmounts
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => {
        if (criticalImages.includes(link.href)) {
          link.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection/>
      <WhyUsSection />
      <OpeningsSection />
      <CultureSection/>
      <EventsSection/>
    </div>
  );
};

export default Careers;

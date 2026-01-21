// Centralized image mapping for all pages - used for preloading

export const PAGE_IMAGES = {
  '/': [
    'http://209.182.233.237/images/indusdrone.jpg',
    // Home slider images will be loaded from database dynamically
  ],
  '/manpower': [
    'http://209.182.233.237/images/manpower1.png',
    'http://209.182.233.237/images/manpower2.png',
    'http://209.182.233.237/images/manpower3.png',
  ],
  '/trucks': [
    'http://209.182.233.237/images/trucks11.png',
    'http://209.182.233.237/images/trucks12.png',
    'http://209.182.233.237/images/trucks13.png',
  ],
  '/projects': [
    'http://209.182.233.237/images/projects10.png',
    'http://209.182.233.237/images/projects12.png',
    'http://209.182.233.237/images/projects13.png',
  ],
  '/products': [
    'http://209.182.233.237/images/products10.png',
    'http://209.182.233.237/images/products11.png',
    'http://209.182.233.237/images/products12.png',
  ],
  '/training': [
    'http://209.182.233.237/images/training9.jpg',
    'http://209.182.233.237/images/training10.jpg',
    'http://209.182.233.237/images/training11.jpg',
  ],
  '/repair-maintenance': [],
  '/about': [],
  '/nfpa': [
    'http://209.182.233.237/images/NFPAGAL1.jpg',
    'http://209.182.233.237/images/NFPAGAL2.jpg',
    'http://209.182.233.237/images/NFPAGAL3.jpg',
    'http://209.182.233.237/images/NFPAGAL4.jpg',
    'http://209.182.233.237/images/NFPAGAL5.jpg',
    'http://209.182.233.237/images/NFPAGAL6.jpg',
    'http://209.182.233.237/images/NFPAGAL7.jpg',
    'http://209.182.233.237/images/NFPAGAL8.jpg',
    'http://209.182.233.237/images/NFPAGAL9.jpg',
    'http://209.182.233.237/images/training6.jpg',
  ],
  '/careers': [
    // Critical images - above the fold (load first)
    'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg', // Hero background
    'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg', // WhyUs - first 3
    'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg',
    'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    'http://209.182.233.237/images/careers1.JPG', // Gallery - first 3
    'http://209.182.233.237/images/careers2.jpg',
    'http://209.182.233.237/images/careers3.jpg',
    // Remaining images
    'http://209.182.233.237/images/careers4.jpg',
    'http://209.182.233.237/images/careers5.jpg',
    'http://209.182.233.237/images/careers6.jpg',
    'http://209.182.233.237/images/careers1.jpg',
    'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
  ],
  '/blog': [],
  '/contact': [],
};

// Get images for a specific page
export const getPageImages = (pagePath) => {
  return PAGE_IMAGES[pagePath] || [];
};


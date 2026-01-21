import { validateImageUrl } from './apiHelpers';

export const preloadImages = (imageUrls, timeout = 10000) => {
  if (!imageUrls || imageUrls.length === 0) {
    return Promise.resolve();
  }
  
  // Validate and filter URLs
  const validUrls = imageUrls
    .map(url => validateImageUrl(url))
    .filter(url => url !== null);
  
  if (validUrls.length === 0) {
    return Promise.resolve();
  }
  
  // Load all images in parallel for maximum speed with timeout
  return Promise.all(
    validUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        let resolved = false;
        
        const resolveOnce = () => {
          if (!resolved) {
            resolved = true;
            resolve();
          }
        };

        // Timeout to prevent hanging
        const timeoutId = setTimeout(() => {
          resolveOnce();
        }, timeout);

        img.onload = () => {
          clearTimeout(timeoutId);
          resolveOnce();
        };
        
        img.onerror = () => {
          clearTimeout(timeoutId);
          resolveOnce(); // Resolve even on error to not block rendering
        };
        
        // Start loading immediately
        img.src = url;
      });
    })
  );
};
// Preload images from a component's props or data
export const preloadComponentImages = async (data) => {
  const imageUrls = [];
  
  // Extract image URLs from various data structures
  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (item.image) imageUrls.push(item.image);
      if (item.image_url) imageUrls.push(item.image_url);
      if (item.images && Array.isArray(item.images)) {
        imageUrls.push(...item.images);
      }
    });
  } else if (typeof data === 'object') {
    Object.values(data).forEach((value) => {
      if (typeof value === 'string' && (value.startsWith('http') || value.startsWith('/'))) {
        imageUrls.push(value);
      } else if (Array.isArray(value)) {
        value.forEach((item) => {
          if (typeof item === 'string' && (item.startsWith('http') || item.startsWith('/'))) {
            imageUrls.push(item);
          }
        });
      }
    });
  }
  
  // Remove duplicates
  const uniqueUrls = [...new Set(imageUrls.filter(Boolean))];
  
  if (uniqueUrls.length > 0) {
    await preloadImages(uniqueUrls);
  }
};
// Hook to preload images before rendering (requires React import in component)
export const useImagePreloader = (imageUrls, dependencies = []) => {
  return true; // Always return true to show content immediately
};


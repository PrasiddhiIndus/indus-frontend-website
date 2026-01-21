// Image URL validation and formatting utility
export const validateImageUrl = (url, supabaseUrl = null) => {
  if (!url || typeof url !== 'string') {
    return null;
  }

  // Trim whitespace
  let cleanUrl = url.trim();

  // If empty after trimming, return null
  if (!cleanUrl) {
    return null;
  }

  // Decode URL if it's encoded (handle multiple encodings)
  try {
    // Try decoding multiple times in case of double encoding
    let decoded = cleanUrl;
    for (let i = 0; i < 3; i++) {
      const prev = decoded;
      try {
        decoded = decodeURIComponent(decoded);
      } catch (e) {
        break; // Stop if decoding fails
      }
      if (prev === decoded) break; // No more decoding needed
    }
    cleanUrl = decoded;
  } catch (e) {
    // If decoding fails, use original URL
    // Don't log warning for every failed decode as it might be normal
  }

  // Check if URL already has protocol
  if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
    return cleanUrl;
  }

  // If URL starts with //, add https:
  if (cleanUrl.startsWith('//')) {
    return `https:${cleanUrl}`;
  }

  // Handle Supabase storage URLs (they might start with storage path)
  // Supabase storage URLs typically look like: /storage/v1/object/public/bucket/path
  if (cleanUrl.startsWith('/storage/') || cleanUrl.includes('/storage/v1/')) {
    // This is a Supabase storage path - construct full URL if supabaseUrl is provided
    if (supabaseUrl) {
      // Remove leading slash if present
      const path = cleanUrl.startsWith('/') ? cleanUrl.substring(1) : cleanUrl;
      return `${supabaseUrl}/${path}`;
    }
    // If no supabaseUrl provided, return as relative path
    return cleanUrl;
  }

  // If URL starts with /, it's a relative path - return as is
  if (cleanUrl.startsWith('/')) {
    return cleanUrl;
  }

  // If URL doesn't have protocol, try to add https://
  // This handles cases like "example.com/image.jpg" or "209.182.233.237/images/..."
  if (cleanUrl.includes('.') && !cleanUrl.includes(' ')) {
    // Check if it looks like a domain or IP address
    const looksLikeUrl = /^([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}/.test(cleanUrl) || 
                         /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(cleanUrl);
    if (looksLikeUrl) {
      return `https://${cleanUrl}`;
    }
  }

  // Return null if URL format is invalid
  return null;
};

// Fallback placeholder image (SVG data URL)
export const getPlaceholderImage = () => {
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBGYWlsZWQgdG8gTG9hZDwvdGV4dD4KPC9zdmc+';
};

// Preload a single image
export const preloadSingleImage = (url) => {
  return new Promise((resolve) => {
    if (!url) {
      resolve(false);
      return;
    }

    const validatedUrl = validateImageUrl(url);
    if (!validatedUrl) {
      resolve(false);
      return;
    }

    const img = new Image();
    let resolved = false;

    const resolveOnce = (success) => {
      if (!resolved) {
        resolved = true;
        resolve(success);
      }
    };

    const timeoutId = setTimeout(() => {
      resolveOnce(false);
    }, 10000);

    img.onload = () => {
      clearTimeout(timeoutId);
      resolveOnce(true);
    };

    img.onerror = () => {
      clearTimeout(timeoutId);
      resolveOnce(false);
    };

    img.src = validatedUrl;
  });
};
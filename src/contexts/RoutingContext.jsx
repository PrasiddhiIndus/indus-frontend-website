import React, { createContext, useContext, useState, useEffect } from 'react';

const RoutingContext = createContext();

export const useRouting = () => {
  const context = useContext(RoutingContext);
  if (!context) {
    throw new Error('useRouting must be used within a RoutingProvider');
  }
  return context;
};

export const RoutingProvider = ({ children }) => {
  // Initialize from URL path immediately to prevent showing wrong page on refresh
  const getInitialPath = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPath());
  const [isInitialized, setIsInitialized] = useState(false);

  const navigate = (path) => {
    setCurrentPage(path);
    window.scrollTo(0, 0);
  };

  // Initialize and handle browser back/forward buttons
  useEffect(() => {
    // Mark as initialized after first render
    setIsInitialized(true);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const newPath = window.location.pathname || '/';
      setCurrentPage(newPath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL with the current page path (only after initialization to avoid conflicts)
  useEffect(() => {
    if (!isInitialized) return;
    
    // Update the URL to reflect the current page
    const currentPath = window.location.pathname || '/';
    if (currentPath !== currentPage) {
      const newUrl = window.location.origin + (currentPage === '/' ? '' : currentPage);
      window.history.pushState(null, '', newUrl);
    }
  }, [currentPage, isInitialized]);

  return (
    <RoutingContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RoutingContext.Provider>
  );
};


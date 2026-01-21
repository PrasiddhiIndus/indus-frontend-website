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
  const [currentPage, setCurrentPage] = useState('/');

  const navigate = (path) => {
    setCurrentPage(path);
    window.scrollTo(0, 0);
  };

  // Initialize from URL hash if present (for backward compatibility)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== '/') {
      setCurrentPage(hash);
    }
  }, []);

  // Update URL without changing the path
  useEffect(() => {
    // Replace the URL without adding to history
    window.history.replaceState(null, '', window.location.origin + window.location.pathname);
  }, [currentPage]);

  return (
    <RoutingContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RoutingContext.Provider>
  );
};


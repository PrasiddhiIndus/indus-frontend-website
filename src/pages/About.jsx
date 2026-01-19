import React, { useEffect } from 'react';
import { useRouting } from '../contexts/RoutingContext';
import AboutUs from './AboutUs';
import AboutTeam from './AboutTeam';
import AboutTestimonials from './AboutTestimonial';
import AboutClients from './AboutClient';

const About = () => {
  const { currentPage } = useRouting();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen">
      <AboutUs />
      <AboutTeam />
      <AboutTestimonials />
      <AboutClients />
    </div>
  );
};

export default About;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from './AboutUs';
import AboutTeam from './AboutTeam';
import AboutTestimonials from './AboutTestimonial';
import AboutClients from './AboutClient';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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

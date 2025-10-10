import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import LazyLoadWrapper from '../components/LazyLoadWrapper';

// Lazy load about sections
const AboutUs = lazy(() => import('./AboutUs'));
const AboutTeam = lazy(() => import('./AboutTeam'));
const AboutTestimonials = lazy(() => import('./AboutTestimonial'));
const AboutClients = lazy(() => import('./AboutClient'));

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
      <Suspense fallback={<LoadingSpinner text="Loading about section..." size="large" />}>
        <AboutUs />
      </Suspense>
      
      <LazyLoadWrapper fallback={<LoadingSpinner text="Loading team..." />}>
        <Suspense fallback={<LoadingSpinner text="Preparing team..." />}>
          <AboutTeam />
        </Suspense>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper fallback={<LoadingSpinner text="Loading testimonials..." />}>
        <Suspense fallback={<LoadingSpinner text="Preparing testimonials..." />}>
          <AboutTestimonials />
        </Suspense>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper fallback={<LoadingSpinner text="Loading clients..." />}>
        <Suspense fallback={<LoadingSpinner text="Preparing clients..." />}>
          <AboutClients />
        </Suspense>
      </LazyLoadWrapper>
    </div>
  );
};

export default About;

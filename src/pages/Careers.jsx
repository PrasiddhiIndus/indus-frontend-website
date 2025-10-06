import React from 'react';
import HeroSection from './careersection/HeroSection';
import WhyUsSection from './careersection/WhyUsSection';
import OpeningsSection from './careersection/OpeningsSection';
import EventsSection from './careersection/EventsSection';
import CultureSection from './careersection/CultureSection';

const Careers = () => {
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

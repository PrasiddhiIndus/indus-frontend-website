import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import logo from '../../assets/image/website_logo.webp';


const aboutData = {
  sectionTitle: "Fire Truck Manufacturing",
  highlightColor: "text-red-700",
  description:
    "Indus Fire Safety specializes in designing and building high-performance fire and rescue vehicles engineered for industrial, municipal, and emergency response needs. Our range includes water tenders, foam tenders, DCP units, and rapid intervention vehicles—each built with precision, durability, and compliance with BIS and NFPA standards. Produced at our advanced manufacturing facility in Chittorgarh, Rajasthan, every vehicle is equipped with cutting-edge systems and tested for operational excellence, ensuring unmatched reliability when every second counts.",
  experience: {
    years: "32+",
    label: "years",
    text: "of trusted expertise in fire truck engineering and manufacturing.",
  },
};

const variants = {
  fromBottom: { opacity: 0, y: 80 },
  fromTop: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const TrucksServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setScrollDirection(scrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="bg-black text-white">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 items-center"
          initial={scrollDirection === 'down' ? 'fromBottom' : 'fromTop'}
          animate={isInView ? 'visible' : ''}
          variants={variants}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className={aboutData.highlightColor}>Truck</span> Services 
            </h2>
            <p className="text-gray-300 mb-4">{aboutData.description}</p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            <div className="bg-[#950101] text-white p-6 shadow-md flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {aboutData.experience.years}
                  <span className="text-xl font-normal"> {aboutData.experience.label}</span>
                </div>
                <p className="mt-2 text-sm md:text-base font-medium">{aboutData.experience.text}</p>
              </div>
            </div>

            <div className="row-span-2 overflow-hidden">
              <img
                src="http://209.182.233.237/images/trucks10.png"
                alt="Team"
                className="w-full h-full object-cover shadow-md"
                loading="lazy"
              />
            </div>

            <div className="bg-[#950101] flex items-center justify-center p-4">
              <img
                src={logo}
                alt="Logo"
                className="h-12 sm:h-16"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrucksServices;

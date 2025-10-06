import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import logo from '../../assets/image/website_logo.webp';
import peopleImg from '../../assets/image/file_2025-05-21_11.02.15.png';

const aboutData = {
  sectionTitle: "About Our Projects",
  highlightColor: "text-red-700",
  description:
    "INDUS Fire Safety excels in delivering end-to-end fire protection project solutions across diverse industrial sectors. From turnkey system design and installation to compliance audits and maintenance, our expert teams manage every stage with precision, ensuring quality, regulatory adherence, and uninterrupted operational continuity.",
  experience: {
    years: "32+",
    label: "years",
    text: "of proven expertise in fire safety project execution.",
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

const ProjectServices = () => {
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
              Services <span className={aboutData.highlightColor}>Projects</span>
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
                src={peopleImg}
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

export default ProjectServices;

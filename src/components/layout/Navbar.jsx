import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouting } from '../../contexts/RoutingContext';
import logo from "../../assets/image/website_logo.webp"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { currentPage, navigate } = useRouting();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false); // Close the menu when route changes
  }, [currentPage]);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '',
      dropdown: [
        { name: 'Manpower', path: '/manpower' },
        { name: 'Trucks', path: '/trucks' },
        { name: 'Projects', path: '/projects' },
        { name: 'Products', path: '/products' },
        { name: 'Training ', path: '/training' },
        { name: 'Repair & Maintenance ', path: '/repair-maintenance' },



      ]
    },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about#about-us' },
        { name: 'Team', path: '/about#team' },
        { name: 'Testimonials', path: '/about#testimonials' },
        { name: 'Key Clients', path: '/about#clients' },
      ]
    },
    { name: 'NFPA', path: '/nfpa' },
    { name: 'Indus LMS', path: '/lms', external: true },
    {
      name: 'Careers',
      path: '/careers',
      // dropdown: [
      //   { name: 'Why Us', path: '/careers#why-us' },
      //   { name: 'Openings', path: '/careers#openings' },
      //   { name: 'Culture', path: '/careers#culture' },
      //   { name: 'Events', path: '/careers#events' },
      //   { name: 'Gallery', path: '/careers#gallery' },
      // ]
    },
    {
      name: 'Blog',
      path: '/blog',
      // dropdown: [
      //   { name: 'New Ventures', path: '/blog#ventures' },
      //   { name: 'Recent Events', path: '/blog#events' },
      //   { name: 'Blogs', path: '/blog#blogs' },
      //   { name: 'General Info', path: '/blog#info' },
      // ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
className={`fixed z-50 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out
  ${scrolled
    ? 'top-2 w-[95%] lg:w-[90%] px-6 py-2 rounded-2xl bg-white/10 backdrop-blur-md shadow-md border border-white/20'
    : 'top-0 w-full px-4 py-4 bg-transparent'
  }`}

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => navigate('/')} className="flex items-center space-x-3 cursor-pointer">
            <img
              src={logo}
              alt="Indus Fire Safety Logo"
              loading="lazy"
              decoding="async"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide">
                INDUS FIRE SAFETY PVT. LTD.
              </span>
              <span className="text-white text-[10px] sm:text-xs md:text-sm font-light italic tracking-wide">
                We fight what you fear
              </span>
            </div>
          </button>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.external ? (
                  <a
                    href="https://induslms.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <button
                    onClick={() => item.path && navigate(item.path)}
                    className={`flex items-center space-x-1 transition-colors duration-200 ${currentPage === item.path
                      ? 'text-[#FF0000]'
                      : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 
                 bg-black/40 backdrop-blur-md 
                 rounded-xl shadow-xl 
                 border border-white/10 
                 transition-all duration-300"
                    >
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => {
                            if (subItem.path.includes('#')) {
                              // Handle hash links (like /about#about-us)
                              const [path, hash] = subItem.path.split('#');
                              navigate(path);
                              setTimeout(() => {
                                const element = document.getElementById(hash);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }, 100);
                            } else {
                              navigate(subItem.path);
                            }
                          }}
                          className={`block w-full text-left px-4 py-3 text-gray-300 transition-colors duration-200
                     hover:text-white hover:bg-white/10 hover:backdrop-blur-sm 
                     first:rounded-t-xl last:rounded-b-xl`}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden bg-black/80 backdrop-blur-md rounded-xl mt-2 border border-white/10 shadow-md transition-all duration-300 max-h-[85vh] overflow-y-auto"

              // className="lg:hidden overflow-hidden bg-black/70 backdrop-blur-md rounded-xl mt-2 border border-white/10 shadow-md transition-all duration-300"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.external ? (
                      <a
                        href="https://induslms.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm rounded-md transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          if (item.path) navigate(item.path);
                          setIsOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${currentPage === item.path
                            ? 'text-white bg-white/10 backdrop-blur-sm'
                            : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                          }`}
                      >
                        {item.name}
                      </button>
                    )}

                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => {
                              if (subItem.path.includes('#')) {
                                // Handle hash links (like /about#about-us)
                                const [path, hash] = subItem.path.split('#');
                                navigate(path);
                                setTimeout(() => {
                                  const element = document.getElementById(hash);
                                  if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }, 100);
                              } else {
                                navigate(subItem.path);
                              }
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm rounded-md transition-all duration-200"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
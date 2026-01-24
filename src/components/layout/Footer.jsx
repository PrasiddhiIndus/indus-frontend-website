
import React from 'react';
import { useRouting } from '../../contexts/RoutingContext';
import {
  Facebook,
  Twitter,
  Linkedin as LinkedIn,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import logo from '../../assets/image/website_logo.webp';

const Footer = () => {
  const { navigate } = useRouting();
  return (
    <footer className="bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
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
            <p className="text-gray-400 text-sm">
              Providing fire safety, manpower, training, and emergency response solutions across India with commitment and compliance.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/indusfiresafety" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/indusfiresafety" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/indus-fire-safety" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors duration-200">
                <LinkedIn className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/indusfiresafety" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/nfpa')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  NFPA Training
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/products')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/careers')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate('/manpower')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Manpower Solutions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/products')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Equipment Rental
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Project Management
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/nfpa')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  NFPA Certified Training
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/repair-maintenance')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Repair & Maintenance
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/trucks')} className="text-gray-400 hover:text-white transition-colors duration-200">
                  Truck Manufacturing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF0000] mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Indus+House,+Block+No+501/1,+Opposite+GSFC+Main+Gate,+Dashrath,+Vadodara+-+391740,+Gujarat,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Head Office / Manufacturing Unit: Indus House, Block No 501/1, Opposite GSFC Main Gate, Dashrath, Vadodara - 391740, Gujarat, India
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF0000] flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="tel:+918128660114"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    +91-8128660114
                  </a>
                  <a
                    href="tel:+917016255476"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    +91-7016255476
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF0000] flex-shrink-0" />
                <a
                  href="mailto:info@indusfiresafety.com?subject=Inquiry%20from%20Website&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20your%20services."
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  info@indusfiresafety.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Indus Fire Safety Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a  className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a  className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            {/* Website Credit */}
            <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-0">
              Website by- {' '}
              <a
                href="https://www.linkedin.com/in/prasiddhi-dixena-0a5010218"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] font-semibold"
              >
                Prasiddhi Dixena
              </a>

            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

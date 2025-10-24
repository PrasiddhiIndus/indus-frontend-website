
import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <footer className="bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
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
            </Link>
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
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/nfpa" className="text-gray-400 hover:text-white transition-colors duration-200">
                  NFPA Training
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/manpower" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Manpower Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Equipment Rental
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/nfpa" className="text-gray-400 hover:text-white transition-colors duration-200">
                  NFPA Certified Training
                </Link>
              </li>
              <li>
                <Link to="/repair-maintenance" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Repair & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/trucks" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Truck Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF0000] mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  Head Office / Manufacturing Unit: Indus House, Block No 501/1, Opposite GSFC Main Gate, Dashrath, Vadodara - 391740, Gujarat, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF0000] flex-shrink-0" />
                <p className="text-gray-400">+91-8128660114/7016255476</p>


              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF0000] flex-shrink-0" />
                <p className="text-gray-400">info@indusfiresafety.com</p>
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

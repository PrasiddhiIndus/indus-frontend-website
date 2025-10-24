import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { supabase } from '../utils/supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const { error } = await supabase.from('contact_messages').insert([
      {
        full_name: name,
        email,
        phone,
        message
      }
    ]);

    if (error) {
      console.error('Submission error:', error.message);
      alert('Something went wrong. Please try again.');
    } else {
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        'Indus House, Block No 501/1',
        'Opp. GSFC Main Gate, Dashrath',
        'Vadodara - 391740, Gujarat, India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91-8128660114', '7016255476']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@indusfiresafety.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 8:30 AM - 5 PM', 'Sunday: Emergency Only']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/80"></div>
        <div
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center bg-no-repeat opacity-10"
          aria-hidden="true"
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or support
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 text-center hover:border-[#ff0000] transition-all duration-300"
              >
                <div className="bg-[#ff0000] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 break-words">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-full h-full"
          >
            <div className="bg-[#000000] border border-neutral-800 rounded-xl p-8 max-w-full h-full flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#ff0000] focus:outline-none transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#ff0000] focus:outline-none transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#ff0000] focus:outline-none transition-colors duration-200"
                    placeholder="+91 (845) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#ff0000] focus:outline-none transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff0000] hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 mt-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full px-4 sm:px-0"
          >
            <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 sm:p-8 flex flex-col h-full w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                Find Us
              </h2>
              <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.378813585847!2d73.15458607605181!3d22.377072440106815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b908309de5%3A0x67828595323499d3!2sIndus%20Fire%20Safety%20Pvt%20Ltd%20(Indus%20Group)!5e0!3m2!1sen!2sin!4v1752296052214!5m2!1sen!2sin"
                  title="Indus Fire Safety Location"
                  className="absolute inset-0 w-full h-full border-0 rounded-lg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};



export default Contact;

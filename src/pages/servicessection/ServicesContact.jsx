import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { supabase } from '../../utils/supabaseClient'; // ✅ your supabase client path

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const ServicesContact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');

    const { error } = await supabase.from('services_contact_form').insert([formData]);

    if (error) {
      console.error('Insert error:', error);
      alert('Something went wrong');
    } else {
      setSuccessMsg('Submitted successfully!');
      setFormData({ full_name: '', email: '', phone: '', company: '', message: '' });
    }
    setLoading(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 bg-[#000000] overflow-hidden flex items-center justify-center"
    >
      {/* Red blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#FF0000] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-[#FF0000] rounded-full opacity-20 blur-3xl" />

      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className="relative z-10 w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Skilled Professionals?</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Let us provide the right talent for your manpower requirements
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Full Name', name: 'full_name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
            { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter phone number' },
            { label: 'Company Name', name: 'company', type: 'text', placeholder: 'Enter company name' },
          ].map(({ label, name, type, placeholder }, idx) => (
            <div key={idx}>
              <label className="block text-sm text-white mb-1">{label}</label>
              <input
                name={name}
                type={type}
                value={formData[name]}
                placeholder={placeholder}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:bg-white/20 transition-all"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block text-sm text-white mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your requirements"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:bg-white/20 transition-all"
              required
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="relative w-full sm:w-auto px-10 py-3 rounded-xl font-semibold text-white tracking-wide bg-gradient-to-r from-[#FF0000] to-[#FF0000] hover:opacity-90 transition-all"
            >
              {loading ? 'Sending...' : 'Request Quote'}
            </motion.button>
          </div>
        </form>

        {successMsg && <p className="text-center text-green-400 mt-4">{successMsg}</p>}
      </motion.div>
    </section>
  );
};

export default ServicesContact;

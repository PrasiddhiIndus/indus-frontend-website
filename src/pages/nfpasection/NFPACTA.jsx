import React, { useState } from 'react';
import { Phone, Mail, MapPin, Book } from 'lucide-react';
import { Link } from 'react-scroll';

const NFPACTA = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted: ' + JSON.stringify(form));
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: ''
    });
  };

  return (
    <section id="cta-section" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Ready to Join the <span className="text-[#ff0000]">the NFPA Batch?</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Take the first step towards your IFSAC certification
          </p>
        </div>

        {/* Form + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-[#111] p-6 rounded-xl shadow-xl border border-[#ff0000]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0000]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0000]"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0000]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0000]"
            />
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0000]"
            >
              <option value="">Course Interested *</option>
              <option value="Firefighter I">Firefighter I</option>
              <option value="Firefighter II">Firefighter II</option>
              <option value="Hazmat Awareness">Hazmat Awareness</option>
            </select>
            <button
              type="submit"
              className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Send Application ➤
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a]/80 p-6 rounded-xl shadow-xl border border-[#ff0000]/20">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="text-[#ff0000]" />
                <div>
                  <p className="text-white font-medium">Phone Numbers</p>
                  <p>+91 9898072978 (Farhin: Project Admin)</p>
                  <p>+91 9697710101 (Sujit: Program Head)</p>
                </div>
              </div>
              <div className="flex flex-wrap items-start gap-3">
                <Mail className="text-[#ff0000] flex-shrink-0 w-6 h-6" />
                <div className="min-w-0">
                  <p className="text-white font-medium truncate">Email Addresses</p>
                  <p className="truncate break-words">indusadmin1@indusfire.com</p>
                  <p className="truncate break-words">sujit@indusfire.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-[#ff0000]" />
                <div>
                  <p className="text-white font-medium">Training Location</p>
                  <p>Vadodara, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="mt-12 flex justify-center">
          <Link
            to="views-courses"
            smooth={true}
            duration={600}
            offset={-100}
            className="cursor-pointer bg-[#ff0000] hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
          >
            <Book className="w-5 h-5" />
            <span>View All Courses</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NFPACTA;

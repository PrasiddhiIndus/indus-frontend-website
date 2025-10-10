import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Balu Nair',
    position: 'CEO & Founder',
    image: 'http://209.182.233.237/images/Balusir.jpeg',
    description: '32+ years of industry experience leading major fire and safety solutions across India and around the world.',
  },
  {
    name: 'Sujith Menon',
    position: 'Technical Director',
    // image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    description: 'Expert in project management and operational excellence with MBA in Business Administration.',
  },
  {
    name: 'Vaisakh Nair',
    position: 'Operations Director',
    // image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
    description: 'Certified professional with specialization in industrial safety, Manpower and compliance.',
  },
  // {
  //   name: 'Rashmikant Vaghela ',
  //   position: 'Chief Operating Officer',
  //   image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
  //   description: 'Engineering background with expertise in equipment management and technical solutions.',
  // },
  // {
  //   name: 'Prahlad Singh',
  //   position: 'Vice President - Technical',
  //   image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg',
  //   description: 'Responsible for safety training programs and compliance certifications across regions.',
  // },
];

const AboutTeam = () => {
  return (
    <section id="team" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the professionals driving our success
          </p>
        </div>

        {/* Professional Layout - CEO with image, Directors with content only */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* CEO Card - Full width with image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#FF0000]/40 group transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              {/* CEO Image */}
              <div className="lg:w-1/3">
                <img
                  src={team[0].image}
                  alt={team[0].name}
                  className="w-full h-80 lg:h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* CEO Content */}
              <div className="lg:w-2/3 p-8 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold group-hover:text-[#FF0000] transition-colors duration-300 mb-4">
                  {team[0].name}
                </h2>
                <h3 className="text-2xl md:text-3xl text-gray-400 group-hover:text-white font-semibold mb-6 transition-colors duration-300">
                  {team[0].position}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg md:text-xl">{team[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Directors Cards - Side by side, content only */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.slice(1, 3).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-[#FF0000]/30 group transition-all duration-300 flex flex-col justify-center min-h-[200px]"
              >
                <h3 className="text-2xl font-bold group-hover:text-[#FF0000] transition-colors duration-300 mb-3">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-400 group-hover:text-white font-medium mb-4 transition-colors duration-300">
                  {member.position}
                </p>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Balu Nair',
    position: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    description: '15+ years of industry experience leading major construction and industrial projects.',
  },
  {
    name: 'Sujith Menon',
    position: 'Technical Director',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    description: 'Expert in project management and operational excellence with MBA in Business Administration.',
  },
  {
    name: 'Vaisakh Nair',
    position: 'Operations Director',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
    description: 'NFPA certified professional with specialization in industrial safety and compliance.',
  },
  {
    name: 'Rashmikant Vaghela ',
    position: 'Chief Operating Officer',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    description: 'Engineering background with expertise in equipment management and technical solutions.',
  },
  {
    name: 'Prahlad Singh',
    position: 'Vice President - Technical',
    image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg',
    description: 'Responsible for safety training programs and compliance certifications across regions.',
  },
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

        {/* Row Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3  flex flex-col bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#FF0000]/40 group transition-all duration-300"
          >
            <img
              src={team[0].image}
              alt={team[0].name}
              className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-semibold group-hover:text-[#FF0000] transition-colors duration-300">
                  {team[0].name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-white font-medium mb-2 transition-colors duration-300">
                  {team[0].position}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-4">{team[0].description}</p>
            </div>
          </motion.div>

          {/* Other 4 Cards in 2x2 Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.slice(1, 5).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-[#FF0000]/30 group transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold group-hover:text-[#FF0000] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-white font-medium mb-2 transition-colors duration-300">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

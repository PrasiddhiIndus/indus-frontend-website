import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Briefcase } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Collaborative Team',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    description: 'Work alongside certified fire and safety professionals, learning from decades of field experience.',
  },
  {
    icon: Heart,
    title: 'Safety & Wellbeing',
    image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg',
    description: 'We prioritize employee safety, providing a supportive environment and work-life balance.',
  },
  {
    icon: Briefcase,
    title: 'Skill Development',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    description: 'Access hands-on training at our Indus Fire Safety Academy and opportunities to grow in specialized fire safety roles.',
  },
  {
    icon: Users,
    title: 'Diverse Projects',
    image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg',
    description: 'Engage in a variety of projects across industrial sectors including oil & gas, chemicals, and infrastructure.',
  },
  {
    icon: Heart,
    title: 'Impactful Work',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    description: 'Contribute to safer workplaces and communities by deploying real solutions that save lives and assets.',
  },
  {
    icon: Briefcase,
    title: 'Career Growth & Recognition',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    description: 'Climb the career ladder with mentorship, skill upgrades, and recognition for excellence in fire safety.',
  }
];


const WhyUsSection = () => {
  return (
    <section id="why-us" className="w-full min-h-screen bg-black text-white flex items-center justify-center py-16">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what makes our company a great place to work
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-neutral-800 overflow-hidden bg-zinc-900 shadow-lg transition-all duration-300 h-[600px] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[60%] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-white group-hover:bg-[#ff0000] transition-colors duration-300 p-2">
                  <benefit.icon className="w-6 h-6 text-black group-hover:text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="h-[40%] flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#ff0000] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

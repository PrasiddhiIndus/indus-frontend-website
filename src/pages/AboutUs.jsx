import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To provide comprehensive fire and safety solutions across India, protecting lives, assets, and industry operations with unmatched expertise and reliability.',
    image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Delivering superior quality in fire manpower, vehicle manufacturing, training, and turnkey projects, guided by ISO certifications and NFPA-aligned standards.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  },
  {
    icon: Shield,
    title: 'Safety',
    description:
      'Maintaining the highest safety standards across industrial sectors, from refineries and chemical plants to ports, power stations, and infrastructure projects.',
    image: 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description:
      'Fostering collaboration among trained professionals, clients, and industry partners to ensure seamless execution of projects and emergency response operations.',
    image: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg',
  },
];

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="about-us" className="relative py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg')] bg-cover bg-center opacity-10 scale-110 blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FF0000] tracking-wide">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Delivering excellence through innovation, expertise, and an unwavering commitment to safety and quality.            </p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Columns Section */}
      <section className="py-24 bg-[#0c0c0c] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {values.map((value, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row items-center ${isEven ? '' : 'lg:flex-row-reverse'
                  } gap-10`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="rounded-xl object-cover w-full h-[300px] sm:h-[400px] md:h-[450px] shadow-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="p-2 bg-[#FF0000] rounded-full shadow-md">
                      <value.icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 text-md md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF0000]/30 blur-3xl rounded-full opacity-10 animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF0000]/20 blur-2xl rounded-full opacity-10 animate-ping -z-10" />
      </section>
    </>
  );
};

export default AboutUs;

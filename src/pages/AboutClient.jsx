import React from 'react';
import { motion } from 'framer-motion';
import client1 from '../assets/image/Client Logos/adani.png'
import client2 from '../assets/image/Client Logos/bajaj.png'
import client3 from '../assets/image/Client Logos/bina.png'
import client4 from '../assets/image/Client Logos/cairn.png'
import client5 from '../assets/image/Client Logos/Castrol-logo-15A87BF0AA-seeklogo.com.png'
import client6 from '../assets/image/Client Logos/Chambal_fertilizers.png'
import client7 from '../assets/image/Client Logos/CLP.png'
import client8 from '../assets/image/Client Logos/deepak_nitrite-removebg-preview.png'
import client9 from '../assets/image/Client Logos/deepak_phenolics-removebg-preview.png'
import client10 from '../assets/image/Client Logos/Essar-removebg-preview.png'
import client11 from '../assets/image/Client Logos/FAG-removebg-preview.png'
import client12 from '../assets/image/Client Logos/Gail-removebg-preview.png'
import client13 from '../assets/image/Client Logos/GE-removebg-preview.png'
import client14 from '../assets/image/Client Logos/gfl-removebg-preview.png'
import client15 from '../assets/image/Client Logos/gnfc_logo_111-removebg-preview.png'
import client16 from '../assets/image/Client Logos/gsfc-removebg-preview.png'
import client17 from '../assets/image/Client Logos/Gujarat_gas-removebg-preview.png'
import client18 from '../assets/image/Client Logos/Hindustan_zinc-removebg-preview.png'
import client19 from '../assets/image/Client Logos/IOCL-removebg-preview.png'
import client20 from '../assets/image/Client Logos/ISPRL-removebg-preview.png'
import client21 from '../assets/image/Client Logos/itc.jpg'
import client22 from '../assets/image/Client Logos/L_T-removebg-preview.png'
import client23 from '../assets/image/Client Logos/Nayara_Energy-removebg-preview.png'
// import client24 from '../assets/image/Client Logos/NPL-removebg-preview.png'
import client25 from '../assets/image/Client Logos/ONGC.png'
import client26 from '../assets/image/Client Logos/petronet_lng-removebg-preview.png'
import client27 from '../assets/image/Client Logos/reliance.jpg'
import client28 from '../assets/image/Client Logos/sesa_sterlite-removebg-preview.png'
import client29 from '../assets/image/Client Logos/SRF-removebg-preview.png'
import client30 from '../assets/image/Client Logos/Sterling_auxilaries-removebg-preview.png'
import client31 from '../assets/image/Client Logos/tata.png'
import client32 from '../assets/image/Client Logos/united_phosphorus-removebg-preview.png'
import client33 from '../assets/image/Client Logos/Wartsila.png'
import client34 from '../assets/image/Client Logos/yara fertilizers.png'


const clientLogos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
  client25,
  client26,
  client27,
  client28,
  client29,
  client30,
  client31,
  client32,
  client33,
];

const AboutClients = () => {
  return (
    <section id="clients" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#FF0000]/20 blur-3xl rounded-full opacity-10 -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#FF0000]/10 blur-2xl rounded-full opacity-10 -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Clients</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Trusted by leading companies across various industries
        </p>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid of Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-zinc-900/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-sm hover:shadow-[#FF0000]/30 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-full h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutClients;

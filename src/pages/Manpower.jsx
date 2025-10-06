import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import ManpowerHero from './servicessection/ManpowerHero';
import ManpowerServices from './servicessection/ManpowerServices';
import ServicesProvider from './servicessection/ServicesProvider';
import peopleImg from '../assets/image/IndusHighres_0046.jpg';
import ServicesMarkets from './servicessection/ServicesMarkets';
import img1 from '../assets/image/IndusHighres_0046.jpg';
import img2 from '../assets/image/VHP06653_done.jpg';
import img3 from '../assets/image/VHP06653_done.jpg';
import ServicesContact from './servicessection/ServicesContact';

const manpowerImages = [img1, img2, img3];
const manpowerDescription =
"Manpower Services deliver certified and highly trained fire and safety professionals to India’s core industries, including oil & gas, petrochemicals, ports, power plants, logistics, and infrastructure. Our workforce comprises skilled firemen, safety officers, HSE supervisors, and emergency response teams, experienced in handling operations, shutdowns, and high-risk environments. Backed by ISO and NFPA-compliant training, they ensure fire watch, risk assessment, equipment monitoring, safety compliance, and 24/7 emergency readiness. Designed to safeguard lives and assets, our manpower solutions enhance workplace safety, minimize downtime, and support uninterrupted industrial operations."

// const manpowerServices = [
//   {
//     title: 'Skilled Technicians',
//     description: 'Certified professionals with extensive industry experience',
//     image: peopleImg,
//     size: 'h-[500px]',
//   },
//   {
//     title: 'Project Teams',
//     description: 'Complete teams for large-scale project execution',
//     image: peopleImg,
//     size: 'h-[600px]',
//   },
//   {
//     title: '24/7 Support',
//     description: 'Round-the-clock availability for critical operations',
//     image: peopleImg,
//     size: 'h-[300px]',
//   },
//   {
//     title: 'Safety Compliance',
//     description: 'Fully compliant with industry safety standards',
//     image: peopleImg,
//     size: 'h-[420px]',
//   },
//   {
//     title: 'Emergency Response',
//     description: 'Trained teams for immediate disaster and fire handling',
//     image: peopleImg,
//     size: 'h-[300px]',
//   },
//   {
//     title: 'Compliance Audit',
//     description: 'Full safety compliance auditing and certification',
//     image: peopleImg,
//     size: 'h-[650px]',
//   }
// ];

const Manpower = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchManpowerServices = async () => {
      const { data, error } = await supabase
        .from('services_manpower')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching manpower services:', error);
      } else {
        const sizeOptions = [
          'h-[500px]',
          'h-[600px]',
          'h-[300px]',
          'h-[420px]',
          'h-[300px]',
          'h-[650px]'
        ];

        const formattedServices = data.map((service, index) => ({
          title: service.title,
          description: service.description,
          image: service.image_url,
          size: sizeOptions[index % sizeOptions.length]
        }));

        setServices(formattedServices);
      }
    };

    fetchManpowerServices();
  }, []);



  return (
    <div className="min-h-screen">

      <ManpowerHero />
      <ManpowerServices />
      <ServicesProvider title="Manpower Services Provider" services={services} />
      <ServicesMarkets title="Manpower Markets"
        description={manpowerDescription}
        images={manpowerImages} />
      <ServicesContact />

    </div>
  );
};

export default Manpower;
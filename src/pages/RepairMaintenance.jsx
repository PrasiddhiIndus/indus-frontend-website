import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import peopleImg from '../assets/image/IndusHighres_0046.jpg';
import img1 from '../assets/image/IndusHighres_0046.jpg';
import img2 from '../assets/image/VHP06653_done.jpg';
import img3 from '../assets/image/VHP06653_done.jpg';
import ServicesProvider from './servicessection/ServicesProvider';
import ServicesMarkets from './servicessection/ServicesMarkets';
import RepairMaintenanceHero from './servicessection/RepairMaintenanceHero';
import RepairMaintenanceService from './servicessection/RepairMaintenanceService';
import ServicesContact from './servicessection/ServicesContact';

const manpowerImages = [img1, img2, img3];
const manpowerDescription =
"Repair & Maintenance services across industries, ensuring operational reliability and safety. Our skilled teams handle industrial systems, emergency response equipment, and critical infrastructure with precision and expertise.";


const RepairMaintenance = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchProductsServices = async () => {
      const { data, error } = await supabase
        .from('services_repair')
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

    fetchProductsServices();
  }, []);


  return (
    <div className="min-h-screen">

      <RepairMaintenanceHero />
      <RepairMaintenanceService />
      <ServicesProvider title="Repair & Maintenance Services Provider" services={services} />
      <ServicesMarkets title="Repair & Maintenance Markets"
        description={manpowerDescription}
        images={manpowerImages} />
      <ServicesContact />

    </div>
  );
};

export default RepairMaintenance;
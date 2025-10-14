import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import peopleImg from '../assets/image/IndusHighres_0046.jpg';
import ServicesProvider from './servicessection/ServicesProvider';
import ServicesMarkets from './servicessection/ServicesMarkets';
import TrainingHero from './servicessection/TrainingHero';
import TrainingServices from './servicessection/TrainingServices';
import ServicesContact from './servicessection/ServicesContact';

const img1 = 'http://209.182.233.237/images/training9.jpg';
const img2 = 'http://209.182.233.237/images/training10.jpg';
const img3 = 'http://209.182.233.237/images/training11.jpg';
const manpowerImages = [img1, img2, img3];
const manpowerDescription =
"Training Markets We Serve — delivering specialized fire and safety training across industries. From industrial operations and emergency response teams to construction and infrastructure projects, our programs equip personnel with practical skills, NFPA-compliant knowledge, and hands-on expertise to ensure workplace safety, operational efficiency, and regulatory compliance.";


const Training = () => {
  const [services, setServices] = useState([]);
  
    useEffect(() => {
      const fetchTrainingServices = async () => {
        const { data, error } = await supabase
          .from('services_training')
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
  
      fetchTrainingServices();
    }, []);
  


  return (
    <div className="min-h-screen">

      <TrainingHero/>
      <TrainingServices/>
       <ServicesProvider title="Training Services Provider" services={services} />
      <ServicesMarkets title="Training Markets"
        description={manpowerDescription}
        images={manpowerImages} />
      <ServicesContact />

    </div>
  );
};

export default Training;
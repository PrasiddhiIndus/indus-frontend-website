import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import ServicesProvider from "./servicessection/ServicesProvider";
import TrucksHero from "./servicessection/TrucksHero";
import TrucksServices from "./servicessection/TrucksServices";
import img1 from '../assets/image/IndusHighres_0046.jpg';
import img2 from '../assets/image/VHP06653_done.jpg';
import img3 from '../assets/image/VHP06653_done.jpg';
import peopleImg from '../assets/image/IndusHighres_0046.jpg';
import ServicesMarkets from "./servicessection/ServicesMarkets";
import ServicesContact from './servicessection/ServicesContact';


const trucksImagesMarkets = [img1, img2, img3];
const TrucksDescriptionMarkets =
"Serving diverse industries with purpose-built fire and rescue vehicle solutions. From oil refineries and chemical complexes to ports, power plants, and major infrastructure projects, our custom-engineered fire trucks are designed to meet the highest safety standards and demanding operational environments. Equipped with advanced firefighting systems and robust technology, our fleet ensures rapid response, consistent performance, and full compliance in every mission-critical scenario."


const Trucks = () => {

  // const trucksServices = [
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

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchTrucksServices = async () => {
      const { data, error } = await supabase
        .from('services_trucks')
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

    fetchTrucksServices();
  }, []);

  return (
    <div className="min-h-screen">
      <TrucksHero />
      <TrucksServices />
      <ServicesProvider title=" Trucks Services Provider" services={services} />
      <ServicesMarkets title="Trucks Markets"
        description={TrucksDescriptionMarkets}
        images={trucksImagesMarkets} />
      <ServicesContact />

    </div>
  );
};

export default Trucks;
import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import ProjectsHero from './servicessection/ProjectsHero';
import ProjectServices from './servicessection/ProjectServices';
import ServicesProvider from './servicessection/ServicesProvider';
import ServicesMarkets from './servicessection/ServicesMarkets';
import img1 from '../assets/image/IndusHighres_0046.jpg';
import img2 from '../assets/image/VHP06653_done.jpg';
import img3 from '../assets/image/VHP06653_done.jpg';
import ServicesContact from './servicessection/ServicesContact';

const projectsImagesMarkets = [img1, img2, img3];
const projectsDescriptionMarkets =
"Project Markets We Serve — delivering tailored fire safety solutions across diverse industries. From industrial plants, chemical and petrochemical facilities, to ports, power stations, and large-scale infrastructure projects, our services ensure full compliance, operational safety, and seamless execution. Designed for efficiency, reliability, and rapid response, our solutions safeguard personnel, assets, and processes in high-risk environments.";

const Projects = () => {


  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchProjectsServices = async () => {
      const { data, error } = await supabase
        .from('services_projects')
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

    fetchProjectsServices();
  }, []);


  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectServices />
      <ServicesProvider title="Projects Services Provider" services={services} />
      <ServicesMarkets title="Projects Markets"
        description={projectsDescriptionMarkets}
        images={projectsImagesMarkets} />
      <ServicesContact />


    </div>
  );
};

export default Projects;
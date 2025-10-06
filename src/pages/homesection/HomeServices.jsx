import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  ShieldCheck,
  ClipboardList,
  GraduationCap,
  Truck,
  Building,
  Wrench,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { supabase } from '../../utils/supabaseClient';

const iconMap = {
  'Manpower Solutions': Users,
  'Truck Manufacturing': Truck,
  'Project Management': ClipboardList,
  'NFPA Certified Training': GraduationCap,
  'Equipment Rental': Wrench,
  'Training Academy': Building,
  'Repair & Maintenance (RNM)': ShieldCheck,
};

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('services_home')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching services:', error);
      } else {
        const servicesWithIcons = data.map((service) => ({
          ...service,
          icon: iconMap[service.title] || Users, // fallback icon
        }));
        setServices(servicesWithIcons);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted fire & safety services for safety and peace of mind.          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-20"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border rounded-xl p-6 h-[370px] flex flex-col justify-between group transition-all duration-350"
                style={{ borderColor: '#1f2937' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF0000')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1f2937')}
              >
                <div>
                  <div className="relative w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 rounded-lg backdrop-blur-md bg-black/40 border border-white/10 shadow-inner transition-all duration-300 group-hover:bg-[#FF0000]/60 group-hover:backdrop-blur-lg" />
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      {service.icon &&
                        React.createElement(service.icon, {
                          className: 'w-7 h-7 text-white',
                        })}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
            .swiper {
              padding-bottom: 50px !important;
            }
            .swiper-pagination {
              bottom: 0px !important;
            }
            .swiper-pagination-bullets {
              bottom: -8px !important;
            }
            .swiper-pagination-bullet {
              background: #ffffff80;
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background: #f87171;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default HomeServices;

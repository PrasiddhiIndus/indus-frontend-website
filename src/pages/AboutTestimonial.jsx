// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star, Quote } from 'lucide-react';

// const testimonials = [
//   {
//     name: 'Rajesh Mehta',
//     company: 'Reliance Industries Ltd.',
//     message:
//       'Indus Fire Safety has consistently delivered highly trained manpower and fire safety solutions for our operations. Their professionalism and quick response make them our trusted partner for critical safety projects.',
//     rating: 5,
//   },
//   {
//     name: 'Anita Sharma',
//     company: 'Tata Chemicals',
//     message:
//       'Their fire trucks and emergency response teams are top-notch. From project planning to execution, Indus Fire Safety ensures compliance, safety, and operational excellence every time.',
//     rating: 5,
//   },

//   {
//     name: 'Priya Desai',
//     company: 'Essar Oil',
//     message:
//       'Indus Fire Safety’s AMC and maintenance services keep our fire systems operational and compliant at all times. Their technical support and attention to detail are unmatched.',
//     rating: 5,
//   },

// ];

// const AboutTestimonials = () => {
//   return (
//     <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
//       {/* Background Accent Blobs */}
//       <div className="absolute top-[-5%] left-[-5%] w-72 h-72 bg-[#FF0000]/10 blur-3xl rounded-full opacity-10 -z-10" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#FF0000]/10 blur-2xl rounded-full opacity-10 -z-10" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white">What Clients Say</h2>
//           <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
//             Hear directly from our trusted partners and valued clients.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {testimonials.map((t, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-gradient-to-br from-zinc-900/70 to-black/80 border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-[#FF0000]/20 transition-all duration-300 backdrop-blur-lg"
//             >
//               {/* Quote Icon */}
//               <div className="mb-6">
//                 <Quote className="w-8 h-8 text-[#FF0000]/80" />
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-gray-300 text-base leading-relaxed italic mb-6">
//                 “{t.message}”
//               </p>

//               {/* Footer */}
//               <div className="flex items-center justify-between mt-auto">
//                 <div>
//                   <p className="font-bold text-white">{t.name}</p>
//                   <p className="text-sm text-gray-500">{t.company}</p>
//                 </div>
//                 <div className="flex space-x-1">
//                   {[...Array(t.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-4 h-4 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutTestimonials;

import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    message:
      "We thank your team for excellent services to our organization. We are really impressed by the timely support that you have provided during external PNGRB-T4S/IMS Audit. We are truly delighted with the level of commitment and professionalism demonstrated by your team.",
    name: "Pravin Rathod",
    position: "EHS Department",
    company: "Adani Total Gas",
  },
  {
    message:
      "Hindalco Industries (Birla Copper Dahej) highly appreciates fire & emergency department and your entire fire staff for their prompt and efficient services provided during major forest fire incident .We convey our gratitude to each of your team members who helped us during this exigency and we are highly obliged.",
    name: "SK Anand",
    position: "President & Unit Head",
    company: "Birla Copper (Hindalco Industries)",
  },
  {
    message:
      "Congratulate M/s Indus Fire Safety on accomplishing 2 million man hours without any lost time accident achieved in operation and maintenance of firefighting systems during period 2019-2020.",
    name: "Abhai Raj Singh Bhandari",
    position: "Chief Operating Officer",
    company: "Bharat Oman Refineries Limited",
  },
  {
    message:
      "We are very much grateful for the wholehearted support, your organization gave to GFL during its period of crisis for combating major fire with your fire tender and timely assistance rendered by your fire fighters. We convey our gratitude to each of your team members.",
    name: "Dr. SP Gandhi",
    position: "Head EHS/TES",
    company: "Gujarat Flurochemicals Limited",
  },
  {
    message:
      "Special appreciation awarded to M/s Indus Fire Safety Private Limited in recognition of their high quality services in the field of Fire and Safety.",
    name: "Yara Fertilisers India Pvt Ltd",
    position: "—",
    company: "Babrala",
  },
];

const AboutTestimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-5%] left-[-5%] w-72 h-72 bg-[#FF0000]/10 blur-3xl rounded-full opacity-10 -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#FF0000]/10 blur-2xl rounded-full opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Clients Say</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Hear directly from our trusted partners and valued clients.
          </p>
        </motion.div>

        {/* Slider Section */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 bg-[#FF0000]/20 hover:bg-[#FF0000]/40 border border-[#FF0000]/50 p-3 rounded-full text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div className="w-full">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="px-4"
                >
                  {/* Card */}
                  <div className="bg-gradient-to-br from-zinc-900/70 to-black/80 border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-[#FF0000]/30 transition-all duration-300 backdrop-blur-lg flex flex-col justify-between h-[420px] text-center">
                    <div>
                      <Quote className="w-8 h-8 text-[#FF0000]/80 mb-4 mx-auto" />
                      <p className="text-gray-300 text-base leading-relaxed italic mb-6 line-clamp-6">
                        “{t.message}”
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="text-sm text-gray-400">{t.position}</p>
                      <p className="text-sm text-gray-500 italic">{t.company}</p>
                      <div className="flex justify-center space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 bg-[#FF0000]/20 hover:bg-[#FF0000]/40 border border-[#FF0000]/50 p-3 rounded-full text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;

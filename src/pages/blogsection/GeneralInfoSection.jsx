import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { Info, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

const InfoCard = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="h-full flex flex-col justify-between bg-black border border-neutral-700 rounded-xl overflow-hidden hover:border-[#ff0000] transition-all duration-300 group"
  >
    <div>
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#ff0000] text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-2">
        <div className="flex items-center space-x-4 text-gray-400 text-sm">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-[#ff0000] transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
      </div>
    </div>
  </motion.div>
);

const GeneralInfoSection = () => {
  const [generalInfo, setGeneralInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const { data, error } = await supabase
        .from('blogs_info')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching general info:', error);
      } else {
        setGeneralInfo(data);
      }
    };

    fetchInfo();
  }, []);

  return (
    <section id="info" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-16">
          <Info className="w-8 h-8 text-[#ff0000] mr-3" />
          <h2 className="text-4xl font-bold text-white">General Information</h2>
        </div>
        <div className={`${
          generalInfo.length === 1 ? 'flex justify-center' :
          generalInfo.length === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center' :
          generalInfo.length === 3 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :
          generalInfo.length === 4 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' :
          generalInfo.length >= 5 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :
          'flex justify-center'
        }`}>
          {generalInfo.map((post) => (
            <div key={post.id} className={`${
              generalInfo.length === 1 ? 'max-w-sm mx-auto' :
              generalInfo.length === 2 ? 'max-w-sm' :
              'w-full'
            }`}>
              <InfoCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralInfoSection;

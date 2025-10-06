import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { motion } from 'framer-motion';
import { Building, Calendar, User } from 'lucide-react';

const NewVentures = () => {
  const [ventures, setVentures] = useState([]);

  useEffect(() => {
    const fetchVentures = async () => {
      const { data, error } = await supabase
        .from('blogs_ventures')
        .select('*')
        .order('date', { ascending: false }); // Latest first

      if (error) {
        console.error('Error fetching ventures:', error.message);
      } else {
        setVentures(data);
      }
    };

    fetchVentures();
  }, []);

  const BlogCard = ({ post }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="relative group bg-[#1a1a1a]/70 backdrop-blur-md border border-[#2e2e2e] rounded-xl overflow-hidden transition-shadow hover:shadow-[0_0_20px_#ff000080]"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/1a1a1a/FFFFFF?text=No+Image`;
          }}
        />
        <span className="absolute top-4 left-4 bg-[#ff0000] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          {post.category || 'Venture'}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-5 text-gray-400 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-[#ff0000]" />
            <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4 text-[#ff0000]" />
            <span>{post.posted_by}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ff0000] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-3">{post.description}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="ventures" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building className="w-8 h-8 text-[#ff0000]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Latest <span className="text-[#ff0000]">Ventures</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover new strategic moves and innovations shaping Indus Fire Safety's future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ventures.map((post, index) => (
            <BlogCard key={post.id || index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewVentures;

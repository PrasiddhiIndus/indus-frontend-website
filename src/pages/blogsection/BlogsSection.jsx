import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Slider from 'react-slick';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogs = [
  {
    title: 'Best Practices for Industrial Safety Management',
    date: '2024-01-22',
    author: 'Michael Rodriguez',
    excerpt: 'Guide to implementing effective safety management systems in industrial environments.',
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    category: 'Safety',
    readTime: '8 min read'
  },
  {
    title: 'Future of Construction Technology',
    date: '2024-01-19',
    author: 'Emily Chen',
    excerpt: 'Emerging technologies transforming construction and industrial sectors.',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
    category: 'Technology',
    readTime: '6 min read'
  },
  {
    title: 'Sustainable Project Management Approaches',
    date: '2024-01-16',
    author: 'Sarah Mitchell',
    excerpt: 'Sustainable practices are becoming integral to project management.',
    image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg',
    category: 'Sustainability',
    readTime: '7 min read'
  },
  {
    title: 'New Regulations in Industrial Safety',
    date: '2024-01-10',
    author: 'Alex Johnson',
    excerpt: 'Explaining the new rules for industry safety compliance.',
    image: 'https://images.pexels.com/photos/234619/pexels-photo-234619.jpeg',
    category: 'Regulations',
    readTime: '5 min read'
  }
];
const BlogCard = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-black border border-neutral-700 rounded-xl flex flex-col justify-between overflow-hidden h-full min-h-[550px] max-h-[550px] group transition-all duration-300 hover:border-[#ff0000]"
  >
    <div>
      <div className="relative">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#ff0000] text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category || "General"}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-gray-400 flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.posted_by}</span>
          </div>
          {post.read_time && <span>{post.read_time}</span>}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-[#ff0000] transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {post.description}
        </p>
      </div>
    </div>
  </motion.div>
);


const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs_latest')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error("Failed to fetch blogs:", error);
      } else {
        setBlogs(data);
      }
    };

    fetchBlogs();
  }, []);
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'ease-in-out',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

return (
  <section id="blogs" className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-12">
        <BookOpen className="w-8 h-8 text-[#ff0000] mr-3" />
        <h2 className="text-4xl font-bold text-white">Latest Blogs</h2>
      </div>

      <Slider {...settings}>
        {blogs.map((post) => (
          <div key={post.id} className="px-3">
            <BlogCard post={post} />
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

};

export default BlogsSection;

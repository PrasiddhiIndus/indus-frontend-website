import React from 'react';
import NewVentures from './blogsection/NewVentures';
import HeroBlog from './blogsection/HeroBlog';
import RecentEventsPage from './blogsection/RecentEventsPage';
import BlogsSection from './blogsection/BlogsSection';
import GeneralInfoSection from './blogsection/GeneralInfoSection';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <HeroBlog />
      <NewVentures />
      <RecentEventsPage/>
      <BlogsSection/>
      <GeneralInfoSection/>

     
    </div>
  );
};

export default Blog;
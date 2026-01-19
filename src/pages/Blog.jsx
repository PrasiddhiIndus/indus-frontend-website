import React from 'react';
import HeroBlog from './blogsection/HeroBlog';
import BlogsSection from './blogsection/BlogsSection';
import NewVentures from './blogsection/NewVentures';
import RecentEventsPage from './blogsection/RecentEventsPage';
import AwardsCertificatesSection from './blogsection/AwardsCertificatesSection';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <HeroBlog />
      <BlogsSection />
      <NewVentures />
      <RecentEventsPage />
      {/* <AwardsCertificatesSection /> */}
    </div>
  );
};

export default Blog;

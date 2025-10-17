import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import LazyLoadWrapper from '../components/LazyLoadWrapper';

// Lazy load blog sections
const NewVentures = lazy(() => import('./blogsection/NewVentures'));
const HeroBlog = lazy(() => import('./blogsection/HeroBlog'));
const RecentEventsPage = lazy(() => import('./blogsection/RecentEventsPage'));
const BlogsSection = lazy(() => import('./blogsection/BlogsSection'));
const AwardsCertificatesSection = lazy(() => import('./blogsection/AwardsCertificatesSection'));

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner text="Loading hero section..." size="large" />}>
        <HeroBlog />
      </Suspense>
      <LazyLoadWrapper fallback={<LoadingSpinner text="Loading blogs..." />}>
        <Suspense fallback={<LoadingSpinner text="Preparing blogs..." />}>
          <BlogsSection />
        </Suspense>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper fallback={<LoadingSpinner text="Loading ventures..." />}>
        <Suspense fallback={<LoadingSpinner text="Preparing ventures..." />}>
          <NewVentures />
        </Suspense>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper fallback={<LoadingSpinner text="Loading events..." />}>
        <Suspense fallback={<LoadingSpinner text="Preparing events..." />}>
          <RecentEventsPage />
        </Suspense>
      </LazyLoadWrapper>
      
  
      
      <LazyLoadWrapper fallback={<LoadingSpinner text="Loading information..." />}>
        <Suspense fallback={<LoadingSpinner text="Preparing information..." />}>
          <AwardsCertificatesSection />
        </Suspense>
      </LazyLoadWrapper>
    </div>
  );
};

export default Blog;
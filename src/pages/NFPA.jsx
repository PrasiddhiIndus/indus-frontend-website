import React, { useEffect, useState, lazy, Suspense } from 'react';
import { supabase } from '../utils/supabaseClient';
import NFPAHero from './nfpasection/NFPAHero';
import NFPACourses from './nfpasection/NFPACourses';
import NFPABatches from './nfpasection/NFPABatches';
import NFPANews from './nfpasection/NFPANews';
import NFPACTA from './nfpasection/NFPACTA';
import LoadingSpinner from '../components/LoadingSpinner';
import LazyLoadWrapper from '../components/LazyLoadWrapper';

// Lazy load the gallery component
const NFPAGallery = lazy(() => import('./nfpasection/NFPAGallery'));

const NFPA = () => {
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingCourses(true);

      // Fetch Courses
      const { data: courseData, error: courseError } = await supabase
        .from('nfpa_courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (courseError) console.error('Error fetching courses:', courseError.message);

      const mappedCourses = (courseData || []).map(course => ({
        ...course,
        features: course.points || [],
      }));

      setCourses(mappedCourses);

      // Fetch Batches with joined course info
      const { data: batchData, error: batchError } = await supabase
        .from('nfpa_batches')
        .select(`
          *,
          nfpa_courses (
            title
          )
        `)
        .order('created_at', { ascending: false });

      if (batchError) console.error('Error fetching batches:', batchError.message);

      const mappedBatches = (batchData || []).map(batch => ({
        ...batch,
        course: batch.nfpa_courses?.title || 'Unknown',
        startDate: batch.start_date,
        endDate: batch.end_date,
        status: batch.status || 'open', // Ensure status field is included
      }));

      setBatches(mappedBatches);

      // Fetch News
      const { data: newsData, error: newsError } = await supabase
        .from('nfpa_news')
        .select('*')
        .order('created_at', { ascending: false });

      if (newsError) console.error('Error fetching news:', newsError.message);

      setLatestNews(newsData || []);

      setLoadingCourses(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <NFPAHero />
      {!loadingCourses && <NFPACourses courses={courses} />}
      <NFPABatches batches={batches} />
      
      {/* Lazy loaded gallery section */}
      <LazyLoadWrapper 
        fallback={<LoadingSpinner text="Loading gallery..." size="large" />}
        threshold={0.2}
        rootMargin="100px"
      >
        <Suspense fallback={<LoadingSpinner text="Preparing gallery..." size="large" />}>
          <NFPAGallery />
        </Suspense>
      </LazyLoadWrapper>
      
      <NFPANews news={latestNews} />
      <NFPACTA />
    </div>
  );
};

export default NFPA;

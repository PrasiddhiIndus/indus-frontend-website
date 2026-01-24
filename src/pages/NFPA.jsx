import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { preloadImages } from '../utils/imagePreloader';
import NFPAHero from './nfpasection/NFPAHero';
import NFPACourses from './nfpasection/NFPACourses';
import NFPABatches from './nfpasection/NFPABatches';
import NFPANews from './nfpasection/NFPANews';
import NFPACTA from './nfpasection/NFPACTA';
import NFPAGallery from './nfpasection/NFPAGallery';

// All NFPA page images - preload these immediately
const NFPA_IMAGES = [
  // Gallery images
  '/assets/NFPAGAL1.jpg',
  '/assets/NFPAGAL2.JPG',
  '/assets/NFPAGAL3.jpg',
  '/assets/NFPAGAL4.JPG',
  '/assets/NFPAGAL5.JPG',
  '/assets/NFPAGAL6.JPG',
  '/assets/NFPAGAL7.JPG',
  '/assets/NFPAGAL8.jpg',
  '/assets/NFPAGAL9.JPG',
  // Hero images
  '/assets/NFPAGAL8.jpg',
  '/assets/image/training1.jpg', // training6.jpg doesn't exist, using training1.jpg
];

const NFPA = () => {
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload all images immediately when component mounts
  useEffect(() => {
    // Start preloading images immediately
    preloadImages(NFPA_IMAGES).then(() => {
      setImagesPreloaded(true);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
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
        status: batch.status || 'open',
      }));

      setBatches(mappedBatches);

      // Fetch News
      const { data: newsData, error: newsError } = await supabase
        .from('nfpa_news')
        .select('*')
        .order('created_at', { ascending: false });

      if (newsError) console.error('Error fetching news:', newsError.message);

      setLatestNews(newsData || []);

      // Preload any images from database (if they exist in news or courses)
      const dbImages = [];
      if (newsData) {
        newsData.forEach(item => {
          if (item.image_url) dbImages.push(item.image_url);
        });
      }
      if (courseData) {
        courseData.forEach(item => {
          if (item.image_url) dbImages.push(item.image_url);
        });
      }
      if (dbImages.length > 0) {
        preloadImages(dbImages);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <NFPAHero />
      <NFPACourses courses={courses} />
      <NFPABatches batches={batches} />
      <NFPAGallery />
      <NFPANews news={latestNews} />
      <NFPACTA />
    </div>
  );
};

export default NFPA;

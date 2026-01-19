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
  'http://209.182.233.237/images/NFPAGAL1.jpg',
  'http://209.182.233.237/images/NFPAGAL2.jpg',
  'http://209.182.233.237/images/NFPAGAL3.jpg',
  'http://209.182.233.237/images/NFPAGAL4.jpg',
  'http://209.182.233.237/images/NFPAGAL5.jpg',
  'http://209.182.233.237/images/NFPAGAL6.jpg',
  'http://209.182.233.237/images/NFPAGAL7.jpg',
  'http://209.182.233.237/images/NFPAGAL8.jpg',
  'http://209.182.233.237/images/NFPAGAL9.jpg',
  // Hero images
  'http://209.182.233.237/images/NFPAGAL8.jpg',
  'http://209.182.233.237/images/training6.jpg',
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

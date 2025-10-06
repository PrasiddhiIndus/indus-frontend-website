
import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 5;

const OpeningsSection = () => {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchOpenings = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching careers:', error.message);
      } else {
        setOpenings(data);
      }
      setLoading(false);
    };

    fetchOpenings();
  }, []);

  const totalPages = Math.ceil(openings.length / ITEMS_PER_PAGE);
  const paginatedJobs = openings.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Current Openings</h2>
          <p className="text-gray-400 text-lg sm:text-xl">Explore opportunities to grow your career with us</p>
        </div>

        {loading ? (
          <p className="text-gray-400 text-center py-20">Loading openings...</p>
        ) : openings.length === 0 ? (
          <p className="text-gray-400 text-center py-20 text-lg">Openings will be coming soon!</p>
        ) : (
          <>
            {/* Scrollable Job Cards */}
            <div className="relative">
              <div className="overflow-y-auto max-h-[900px] pr-2 scroll-smooth custom-scroll">
                <AnimatePresence mode="wait">
                  {paginatedJobs.map((job, index) => (
                    <motion.div
                      key={job.id || `${job.title}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      className="bg-zinc-900 border border-white/10 hover:border-[#ff0000] transition-all duration-300 shadow-md p-6 rounded-xl mb-6"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-4 mb-3">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <span className="bg-[#ff0000]/20 text-[#ff0000] px-3 py-1 text-sm rounded">
                              {job.department}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-3 text-sm sm:text-base">{job.description}</p>
                          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{job.work_type}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="bg-[#ff0000] hover:bg-[#e60000] text-white px-6 py-3 text-sm font-semibold rounded-md flex items-center gap-2">
                            <span>Apply</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <button
                  onClick={handlePrev}
                  disabled={page === 0}
                  className="p-3 rounded-full bg-zinc-800 border border-zinc-700 hover:border-[#ff0000] hover:text-[#ff0000] transition disabled:opacity-30"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-400 text-sm">
                  Page {page + 1} of {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={page === totalPages - 1}
                  className="p-3 rounded-full bg-zinc-800 border border-zinc-700 hover:border-[#ff0000] hover:text-[#ff0000] transition disabled:opacity-30"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Scrollbar Styling */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #111;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #444;
          border-radius: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #ff0000;
        }
      `}</style>
    </section>
  );
};

export default OpeningsSection;

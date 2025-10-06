import React from 'react';
import { scroller } from 'react-scroll';

const NFPABatches = ({ batches }) => {
  const scrollToCTA = () => {
    scroller.scrollTo('cta-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80,
    });
  };

  const today = new Date();

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-black">
      {/* Scrollbar Custom Styling */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f1f1f;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #555;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #777;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Batch Details</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Schedule and details for upcoming training sessions
          </p>
        </div>

        {/* Scroll container with horizontal scroll */}
        <div className="w-full overflow-x-auto custom-scrollbar">
          <div className="min-w-[700px] bg-[#0f0f0f]/90 backdrop-blur border border-gray-800 rounded-xl overflow-hidden">
            {/* Table header */}
            <table className="w-full table-fixed text-xs sm:text-sm md:text-base border-collapse">
              <thead className="bg-gray-900/80 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-medium whitespace-nowrap">Course</th>
                  <th className="px-4 py-3 text-left text-white font-medium whitespace-nowrap">Start Date</th>
                  <th className="px-4 py-3 text-left text-white font-medium whitespace-nowrap">End Date</th>
                  <th className="px-4 py-3 text-left text-white font-medium whitespace-nowrap">Location</th>
                  <th className="px-4 py-3 text-left text-white font-medium whitespace-nowrap">Seats</th>
                  <th className="px-4 py-3 text-left text-white font-medium whitespace-nowrap">Instructor</th>
                  <th className="px-4 py-3 text-left text-white font-medium whitespace-nowrap">Action</th>
                </tr>
              </thead>
            </table>

            {/* Scrollable body with fixed height */}
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
              <table className="w-full table-fixed text-xs sm:text-sm md:text-base border-collapse">
                <tbody className="divide-y divide-gray-800">
                  {batches.map((batch, index) => {
                    const batchEndDate = new Date(batch.endDate);
                    const isEnded = today > batchEndDate;

                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-800/40 transition-colors duration-200"
                      >
                        <td className="px-4 py-3 text-gray-300 font-medium whitespace-nowrap">{batch.course}</td>
                        <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{batch.startDate}</td>
                        <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{batch.endDate}</td>
                        <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{batch.location}</td>
                        <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{batch.seats} available</td>
                        <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{batch.instructor}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {isEnded ? (
                            <button
                              disabled
                              className="bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-xs sm:text-sm font-medium cursor-not-allowed"
                            >
                              Closed
                            </button>
                          ) : (
                            <button
                              onClick={scrollToCTA}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all"
                            >
                              Register
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFPABatches;

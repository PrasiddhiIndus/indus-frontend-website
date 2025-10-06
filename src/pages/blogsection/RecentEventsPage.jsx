import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Calendar, User, Users } from "lucide-react";
import { supabase } from "../../utils/supabaseClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecentEventsPage = () => {
  const [recentEvents, setRecentEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("blogs_events")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setRecentEvents(data || []);
      }
    };

    fetchEvents();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    beforeChange: (_, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          arrows: false,
        },
      },
    ],
  };

  const currentEvent = recentEvents[currentIndex] || {};

  return (
    <section className="py-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-16">
          <Users className="w-8 h-8 text-[#ff0000] mr-3" />
          <h2 className="text-4xl font-bold text-white">Recent Events</h2>
        </div>

        {recentEvents.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Side - Content */}
            <div className="md:w-1/2 bg-[#1a1a1a] p-8 rounded-2xl shadow-xl flex flex-col justify-center">
              <span className="inline-block bg-[#ff0000] text-white px-3 py-1 rounded-full text-xs font-semibold shadow mb-4 w-fit">
                {currentEvent.category || "Event"}
              </span>
              <h3 className="text-3xl font-semibold text-white mb-4 leading-tight">
                {currentEvent.title}
              </h3>
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Calendar className="w-5 h-5 text-[#ff0000]" />
                  <span>{currentEvent.date}</span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <User className="w-5 h-5 text-[#ff0000]" />
                  <span>{currentEvent.posted_by}</span>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">{currentEvent.description}</p>
            </div>

            {/* Right Side - Slider */}
            <div className="md:w-1/2 max-w-full">
              <Slider {...settings}>
                {recentEvents.map((event, index) => (
                  <div key={event.id || index} className="px-2">
                    <div>
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-[300px] sm:h-[280px] md:h-[300px] object-cover rounded-2xl"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/600x400/111111/FFFFFF?text=Image+Not+Found";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ) : (
          <p className="text-white text-center text-lg">Loading events...</p>
        )}
      </div>
    </section>
  );
};

export default RecentEventsPage;

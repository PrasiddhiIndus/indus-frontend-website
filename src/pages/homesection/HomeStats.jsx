import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 500, suffix: '+', label: 'Projects Completed' },
  { number: 2500, suffix: '+', label: 'People Deployed across India' },
  { number: 32, suffix: '+', label: 'Years Experience' },
  { number: 120, suffix: '+', label: 'Trusted Clients' }
];

const HomeStats = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="py-20 bg-zinc-900 text-white relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF0000] mb-2">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    separator=","
                  />
                ) : (
                  '0'
                )}
                {stat.suffix}
              </div>
              <div className="text-gray-300 font-medium text-base sm:text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;

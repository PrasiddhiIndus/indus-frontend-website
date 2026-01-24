import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="mb-6"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-16 h-16 border-4 border-[#FF0000] border-t-transparent rounded-full mx-auto"></div>
        </motion.div>
        <motion.p
          className="text-white text-lg font-medium"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default PageLoader;


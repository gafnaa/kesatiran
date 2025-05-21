// components/HeroSection.jsx
"use client";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 md:pr-10 mb-10 md:mb-0 text-center md:text-left"
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
          EVERYDAY GET <span className="text-red-500">SATIRED</span>{' '}
          <br className="block md:hidden" />
          AND ALWAYS <span className="text-red-accent">SATIRING.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-light-gray text-base md:text-lg"
        >
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, randomised words which don't look even slightly believable.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="inline-block mt-8 bg-red-accent text-white font-semibold py-3 px-8 rounded-md hover:opacity-90 transition duration-300 bg-red-500"
        >
          Learn More
        </motion.a>
      </motion.div>

      {/* Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-40 h-40 md:w-60 md:h-60 bg-placeholder-light rounded-full flex-shrink-0"
      >
        {/* Placeholder for image */}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
// components/WorksSection.jsx
"use client";
import { motion } from 'framer-motion';

const WorksSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 md:px-10 py-16 md:py-24"
    >
      {/* Heading */}
      <motion.div
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         className="text-center md:text-right mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          OUR <span className="text-red-accent">WORKS</span>
        </h2>
      </motion.div>

      {/* Works Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full h-60 md:h-80 bg-placeholder-light rounded-md shadow-md"
      >
        {/* Placeholder for content */}
      </motion.div>
    </motion.section>
  );
};

export default WorksSection;
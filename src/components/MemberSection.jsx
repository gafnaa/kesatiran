// components/MembersSection.jsx
"use client";
import { motion } from 'framer-motion';

// Define variants for staggered animations (optional but nice)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1 // Delay between animating each child
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const MemberSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is visible
      variants={containerVariants} // Use variants for the container
      className="container mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center"
    >
      {/* Heading */}
      <motion.div variants={itemVariants} className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">
          OUR <br className="block md:hidden" /><span className="text-red-accent">MEMBERS</span>
        </h2>
      </motion.div>

      {/* Member Placeholders */}
      <motion.div
         variants={containerVariants} // Use variants for this inner container too for its children
         className="flex flex-wrap justify-center md:justify-start gap-6 flex-grow"
      >
        {/* Animate each member card */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            variants={itemVariants} // Apply item variants to each card
            className="w-32 h-32 bg-placeholder-light rounded-md shadow-md"
          ></motion.div>
        ))}

        {/* Navigation Card */}
        <motion.div
           variants={itemVariants} // Apply item variants to the nav card
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="w-32 h-32 bg-placeholder-dark rounded-md shadow-md flex items-center justify-center cursor-pointer hover:opacity-90 transition duration-300"
        >
          {/* Arrow Button */}
          <div className="w-10 h-10 bg-red-accent rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default MemberSection;
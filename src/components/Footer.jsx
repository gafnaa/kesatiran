// components/Footer.jsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link'; // Use Next.js Link for navigation

const Footer = () => {
  // Variants for stagger animation (optional but nice)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // You might want to use 'use client' if you add interactive elements
  // like button clicks or complex state management specific to the footer.
  // For simple whileInView animation, it might not be strictly necessary depending on Next.js version and setup,
  // but adding it ensures it works correctly in the app directory or if state is added later.
   'use client';


  return (
    <motion.footer
      initial="hidden" // Set initial state to hidden
      whileInView="visible" // Animate to visible when in view
      viewport={{ once: true, amount: 0.1 }} // Trigger animation only once when 10% is visible
      variants={containerVariants} // Use the container variants for stagger
      className="bg-dark-bg py-8 md:py-12 px-6 md:px-10 text-light-gray text-sm"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Logo and Copyright */}
        <motion.div variants={itemVariants} className="mb-4 md:mb-0 text-center md:text-left">
          <div className="text-xl font-bold text-white mb-2">Kesatiran.</div>
          <div>© {new Date().getFullYear()} Kesatiran. All rights reserved.</div>
        </motion.div>

        {/* Right Section: Navigation and Social Links */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Footer Nav Links */}
          <nav className="flex space-x-6">
            {/* Use Link component for navigation in Next.js */}
            <Link href="#" className="hover:text-red-accent transition duration-300">
              PROJECTS
            </Link>
             <Link href="#" className="hover:text-red-accent transition duration-300">
              ABOUT US
            </Link>
             <Link href="#" className="hover:text-red-accent transition duration-300">
              CONTACT
            </Link>
          </nav>

          {/* Social Media Icons (Placeholders) */}
          <div className="flex space-x-4">
            {/* Example Social Icon Placeholder */}
            <a href="#" className="w-8 h-8 bg-light-gray rounded-full flex items-center justify-center hover:bg-red-accent transition duration-300">
                {/* Replace with actual SVG icons (e.g., from react-icons) */}
                {/* <FaTwitter className="text-dark-bg" /> */}
                <span className="text-dark-bg text-xs">In</span> {/* Placeholder text */}
            </a>
             <a href="#" className="w-8 h-8 bg-light-gray rounded-full flex items-center justify-center hover:bg-red-accent transition duration-300">
                {/* <FaFacebookF className="text-dark-bg" /> */}
                 <span className="text-dark-bg text-xs">Fb</span> {/* Placeholder text */}
            </a>
             <a href="#" className="w-8 h-8 bg-light-gray rounded-full flex items-center justify-center hover:bg-red-accent transition duration-300">
                {/* <FaInstagram className="text-dark-bg" /> */}
                 <span className="text-dark-bg text-xs">Ig</span> {/* Placeholder text */}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
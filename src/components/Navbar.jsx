// components/Navbar.jsx
// Hanya untuk navigasi desktop
'use client'; // Masih perlu karena menggunakan motion.a

import { motion } from 'framer-motion';
import Link from 'next/link'; // Gunakan Link dari Next.js

const Navbar = () => {
  return (
    // Navigasi Desktop
    <nav className="hidden md:flex space-x-6 items-center"> {/* Tambahkan items-center untuk alignment */}
      <motion.div // Bungkus Link dengan motion.div jika ingin animasi
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="/projects" className="hover:text-red-accent transition duration-300">
          PROJECTS
        </Link>
      </motion.div>

       <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
       >
         <Link href="/about" className="hover:text-red-accent transition duration-300">
           ABOUT US
         </Link>
       </motion.div>

      <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.3 }}
      >
         <Link href="/contact" className="hover:text-red-accent transition duration-300">
           CONTACT
         </Link>
       </motion.div>
    </nav>
  );
};

export default Navbar;
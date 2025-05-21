// components/MobileNav.jsx
// Untuk navigasi mobile (hamburger & drawer)
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // Gunakan Link dari Next.js
// Hapus impor lucide-react dan react-icons jika tidak ingin menggunakannya
// import { Sheet, SheetContent, SheetTrigger } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "HOME", path: "/" }, // Tambahkan link Home sesuai Navbar desktop
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
];
// const pathname = usePathname(); // Hapus jika tidak digunakan

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button (Hamburger) */}
      {/* Menggunakan motion.button dari Framer Motion */}
      <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         onClick={toggleMenu}
         className="md:hidden focus:outline-none z-50" // Z-index tinggi agar di atas overlay
      >
         {/* Menggunakan SVG ikon hamburger bawaan dari Navbar.jsx sebelumnya */}
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
         {/* Atau gunakan ikon react-icons jika diinstal dan diimpor: */}
         {/* <CiMenuFries className="text-white w-6 h-6" /> */}
      </motion.button>

       {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMenu} // Tutup menu saat klik overlay
          />
        )}
      </AnimatePresence>


      {/* Mobile Menu (Drawer slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }} // Mulai di luar layar kanan
            animate={{ x: 0 }} // Slide masuk ke posisi 0
            exit={{ x: '100%' }} // Slide keluar
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-64 h-full bg-dark-bg z-50 shadow-lg p-6 flex flex-col" // Gunakan flex flex-col
          >
            {/* Close Button */}
            <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Logo (opsional di mobile menu) */}
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-xl font-bold text-white mb-8 mt-10 cursor-pointer" // Margin bawah dan atas
               onClick={toggleMenu} // Tutup menu saat klik logo
             >
                <Link href="/">Kesatiran.</Link>
             </motion.div>


            <nav className="flex flex-col space-y-6 flex-grow"> {/* flex-grow agar link mengisi ruang */}
               {links.map((link, index) => (
                  <motion.div
                     key={link.name}
                     initial={{ opacity: 0, x: 20 }} // Animasi dari kiri
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }} // Stagger delay
                     onClick={toggleMenu} // Tutup menu saat klik link
                  >
                      <Link
                          href={link.path}
                          className="block text-white hover:text-red-accent transition duration-300 text-lg font-semibold" // Ukuran font lebih besar
                      >
                         {link.name}
                      </Link>
                  </motion.div>
               ))}
            </nav>

            {/* Optional: Social media or other elements at the bottom */}
            {/* <div className="mt-auto pb-8">
                 // Social icons here
            </div> */}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
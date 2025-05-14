"use client";

import { AnimatePresence, motion } from 'framer-motion';  // Perbaiki import motion
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname(); // Mendapatkan pathname saat ini

  return (
    <AnimatePresence>
      <div key={pathname}>  {/* Perbaiki key */}
        <motion.div 
          initial={{ opacity: 1 }}  // Perbaiki typo 'intial'
          animate={{ 
            opacity: 0,  // Setel opacity ke 1 ketika animasi selesai
            transition: { delay: 1, duration: 0.5, ease: "easeInOut" },  // Perbaiki typo 'transiton'
          }}
          className='h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50'  // Perbaiki className
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;

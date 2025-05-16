'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);

  // Transisi keluar-masuk halaman
  useEffect(() => {
    setDisplayChildren(children);
  }, [pathname, children]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {displayChildren}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

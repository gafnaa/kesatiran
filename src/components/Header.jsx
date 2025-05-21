'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();
  const ticking = useRef(false);
  const scrollThreshold = 80;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        // Scroll ke bawah dan sudah lewat ambang, maka sembunyikan
        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
          controls.start('hidden');
        }
        // Scroll ke atas atau masih dekat atas, maka tampilkan
        else {
          controls.start('visible');
        }

        setLastScrollY(currentScrollY);
        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const variants = {
    visible: {
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    hidden: {
      y: -100,
      transition: {
        duration: 0.4,
        ease: 'easeIn'
      }
    }
  };

  return (
    <motion.header
      animate={controls}
      variants={variants}
      initial="visible"
      className="sticky top-0 z-50 py-4 px-6 md:px-10 text-white bg-dark-bg bg-opacity-100 shadow-sm"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="text-white font-bold font-sans text-3xl tracking-[-1px] px-10">
            Kesatiran<span className="text-red-600">.</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center px-10">
          <Navbar />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

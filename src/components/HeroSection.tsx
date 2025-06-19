'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  // Animasi untuk setiap kata dalam heading
  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  // Animasi untuk paragraf per baris
  const lineVariants = {
    hidden: { opacity: 0, x: -30, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 1.2 + i * 0.2,
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    }),
  };

  // Animasi button yang lebih dinamis
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      boxShadow: '0 0 0 rgba(255, 29, 29, 0)',
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      boxShadow: '0 4px 20px rgba(255, 29, 29, 0.3)',
      transition: { 
        duration: 0.5, 
        delay: 1.5,
        ease: 'easeOut' as const,
      },
    },
  };

  // Efek hover untuk button
  const buttonHover = {
    scale: 1.05,
    y: -2,
    boxShadow: '0 8px 30px rgba(255, 29, 29, 0.4)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut' as const,
    },
  };

  const buttonTap = {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  };

  // Animasi untuk lingkaran
  const circleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      rotate: -180,
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1.2, 
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  // Membagi teks menjadi kata-kata
  const headingWords = ['Everyday', 'get', 'Satired', 'and', 'always', 'Satiring.'];
  
  // Membagi paragraf menjadi baris-baris
  const paragraphLines = [
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected, humour, randomised words which don\'t look even slightly believable.'
  ];

  return (
    <section className="bg-[#101010] text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-20 md:py-0">
        {/* Kolom Teks (Kiri) */}
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                className={`inline-block mr-4 ${
                  word === 'Satired' || word === 'Satiring.' 
                    ? 'text-[#FF1D1D]' 
                    : ''
                }`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                style={{ transformOrigin: 'bottom' }}
              >
                {word}
                {(index === 2 || index === 5) && <br className="hidden sm:block" />}
              </motion.span>
            ))}
          </h1>
          
          <div className="mt-6 text-base lg:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
            {paragraphLines.map((line, index) => (
              <motion.p
                key={index}
                className="mb-1"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <Link href="/about" className="inline-block">
            <motion.button
              className="mt-8 bg-[#FF1D1D] text-white font-semibold py-3 px-8 rounded-full 
                         relative overflow-hidden group transition-colors duration-300
                         before:absolute before:inset-0 before:bg-gradient-to-r 
                         before:from-[#FF1D1D] before:to-[#FF4444] before:opacity-0 
                         before:transition-opacity before:duration-300 hover:before:opacity-100 cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <span className="relative z-10 flex items-center">
                Learn More
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </div>

        {/* Kolom Lingkaran (Kanan) */}
        <div className="md:w-1/2 lg:w-2/5 flex justify-center items-center">
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full
                       shadow-2xl relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={circleVariants}
          >
            {/* Efek shimmer pada lingkaran */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                delay: 2,
              ease: 'easeInOut' as const,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

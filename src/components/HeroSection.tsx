'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../assets/hero.JPG';


const HeroSection = () => {
  // Animasi untuk setiap kata dalam heading
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8 + i * 0.1,
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
        delay: 2.0 + i * 0.2,
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
      duration: 0.15,
      ease: 'easeInOut' as const,
    },
  };

  const buttonTap = {
    scale: 0.95,
    transition: {
      duration: 0.1,
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
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 py-20 md:py-0">
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
              // FIX: Tambahkan transisi default yang cepat di sini
              transition={{ duration: 0.1, ease: 'easeInOut' }}
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
        <div className="md:w-1/2 lg:w-2/5 flex justify-center items-center mb-8 md:mb-0 order-1 md:order-none my-8 md:ml-16">
          <motion.div
            className="relative rounded-full overflow-hidden shadow-lg border-8 border-white w-75 h-75 sm:w-84 sm:h-84 md:w-[400px] md:h-[400px]"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.1 }}
            style={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
            }}
          >
            <Image
              src={heroImage}
              alt="Hero Image"
              fill
              className="object-cover w-full h-full rounded-full"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 256px, 400px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

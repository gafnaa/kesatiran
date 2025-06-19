"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const pathname = usePathname();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsNavbarVisible(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Members', href: '/member' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className={`bg-[#101010] p-6 py-6 text-white transition-all duration-1000 ease-out ${isNavbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} relative z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-[#FF1D1D]" style={{ letterSpacing: '-1px' }}>
          Kesatiran.
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:text-[#FF1D1D] uppercase transition-all duration-300 ease-in-out ${
                  pathname === link.href ? 'border-b-2 pb-1 border-[#FF1D1D]' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#101010] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <ul className="flex flex-col space-y-4 mt-4 p-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`block py-2 hover:text-[#FF1D1D] uppercase ${
                  pathname === link.href ? 'border-b-2 border-[#FF1D1D]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Members', href: '/member' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className={`bg-[#101010] p-6 py-6 text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-[#FF1D1D]" style={{ letterSpacing: '-1px' }}>
          Kesatiran.
        </Link>
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:text-[#FF1D1D] uppercase transition-all duration-300 ease-in-out ${
                  pathname === link.href ? 'border-b-2 border-[#FF1D1D] pb-1' : ''
                }`}
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

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // pastikan kamu install lucide-react: npm i lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Project', href: '/project' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden xl:flex gap-8 items-center text-white font-medium text-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-[#FF1D1D] transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="xl:hidden relative">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-12 right-0 bg-[#101010] shadow-lg rounded-lg px-6 py-4 z-50">
            <nav className="flex flex-col gap-4 text-white font-medium text-base">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#FF1D1D] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

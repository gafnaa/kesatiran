import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#101010] p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Kesatiran.
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300 uppercase">
              Home
            </Link>
          </li>
          <li>
            <Link href="/member" className="hover:text-gray-300 uppercase">
              Members
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300 uppercase">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 uppercase">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 uppercase">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

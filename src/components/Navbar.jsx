'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { usePathname } from 'next/navigation';

const links = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "PROJECTS",
    path: "/projects",
  },
  {
    name: "ABOUT US",
    path: "/aboutus",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <nav className='flex gap-8'>
    {links.map((link, index) => {
      return <Link
      href={link.path}
      key={index}
      className={`${link.path === pathname ? "text-[#FF1D1D] border-b-1 border-[#FF1D1D]" : ""} capitalize font-light hover:text-[#FF1D1D] transition-all`}
    >
      {link.name}
    </Link>
    })}
  </nav>

};

export default Navbar;

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
    path: "/about",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <nav className="flex gap-8">
  {links.map((link, index) => {
    const isActive = link.path === pathname;
    return (
      <Link
        href={link.path}
        key={index}
        className={`group relative capitalize font-light transition-colors duration-300 
          ${isActive ? "text-[#FF1D1D]" : "text-white hover:text-[#FF1D1D]"}`}
      >
        {link.name}
        <span
          className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#FF1D1D] transition-all duration-500 ease-in-out
            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        />
      </Link>
    );
  })}
</nav>




};

export default Navbar;

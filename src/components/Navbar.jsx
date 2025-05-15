'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: "HOME", path: "/" },
  { name: "PROJECTS", path: "/projects" },
  { name: "ABOUT US", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`relative capitalize font-light transition-colors duration-300 
              ${isActive ? "text-[#FF1D1D]" : "text-white hover:text-[#FF1D1D]"}`}
          >
            {link.name}
            {isActive && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#FF1D1D] transition-all duration-500 ease-in-out" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;

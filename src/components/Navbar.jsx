'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { name: 'PROJECTS', path: '/projects' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-6 items-center py-8">
      {links.map((link, index) => {
        const isActive = pathname === link.path;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <Link
              href={link.path}
              className={`relative capitalize font-light transition-colors duration-300 
                ${isActive ? 'text-[#FF1D1D]' : 'text-white hover:text-[#FF1D1D]'}`}
            >
              {link.name}
              {isActive && (
                <span className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-[#FF1D1D] transition-all duration-500 ease-in-out" />
              )}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Navbar;

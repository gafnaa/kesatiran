// components/Header.jsx
// Pembungkus utama untuk header
// Tidak memerlukan 'use client' jika hanya me-render komponen client lain dan Link dari next/link

import Link from 'next/link';
import Navbar from './Navbar'; // Import Navbar (versi desktop only)
import MobileNav from './MobileNav'; // Import MobileNav (versi mobile button & drawer)

const Header = () => {
    return (
      // Tambahkan styling header utama (sticky, background, padding)
      <header className='sticky top-0 z-50 py-4 px-6 md:px-10 text-white bg-dark-bg'> {/* Gunakan bg-dark-bg dari tailwind.config */}
          <div className="container mx-auto flex justify-between items-center">
              {/* Logo */}
              <Link href="/">
                  {/* Menggunakan styling logo dari Navbar.jsx sebelumnya agar konsisten */}
                  <div className="text-xl font-bold cursor-pointer">Kesatiran.</div>
                  {/* Atau gunakan styling Anda jika prefer: */}
                  {/* <h1 className="text-white font-bold font-sans text-3xl tracking-[-1px]">Kesatiran<span className='text-red-accent'>.</span></h1> */}
              </Link>

              {/* Navigation Desktop (Navbar.jsx versi desktop) */}
              <div className="hidden md:flex items-center"> {/* Menggunakan md:flex sesuai desain awal */}
                 <Navbar /> {/* Komponen Navbar yang hanya berisi link desktop */}
              </div>

              {/* Mobile Navigation (MobileNav.jsx) */}
              <div className="md:hidden"> {/* Menggunakan md:hidden sesuai desain awal */}
                 <MobileNav /> {/* Komponen MobileNav yang berisi tombol & drawer */}
              </div>
          </div>
      </header>
    );
};

export default Header;
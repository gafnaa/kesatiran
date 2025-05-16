import Link from 'next/link';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => {
    return <header className='py-10 xl:py-10 text-white bg-[#101010]'>
        <div className="container mx-auto flex px-2 justify-between items-center">
              {/* Logo */}
            <Link href="/">
                <h1 className="text-white font-bold font-sans text-3xl tracking-[-1px]">Kesatiran
                <span className='text-[#FF1D1D]'>.</span></h1>
            </Link>

            {/* Navigation */}
            <div className="hidden xl:flex">
            <Navbar />
            </div>

            {/* Mobile Navigation */}
            <div className="xl:hidden">
             <MobileNav />

                </div>
            </div>
        </header>
};

export default Header;
// pages/index.jsx atau app/page.jsx
// Tidak memerlukan 'use client' di sini jika hanya me-render komponen client lain

import Header from '@/components/Header'; // Import Header utama
import HeroSection from '@/components/HeroSection';
import MemberSection from '@/components/MemberSection'; // Pastikan import ini MembersSection, bukan MemberSection
import WorksSection from '@/components/WorksSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans">

      <main>
        <HeroSection />
        <MemberSection /> {/* Pastikan nama komponen MembersSection */}
        <WorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
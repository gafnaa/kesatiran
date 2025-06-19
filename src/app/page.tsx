import HeroSection from '../components/HeroSection';
import OurMembers from '../components/OurMembers';
import OurWorks from '../components/OurWorks';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurMembers />
      <OurWorks />
      <Footer />
    </div>
  );
}

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1>About Us</h1>
        <p>Details about Kesatiran will go here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

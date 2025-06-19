import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MemberPage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1>Our Members</h1>
        <p>Details about our members will go here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default MemberPage;

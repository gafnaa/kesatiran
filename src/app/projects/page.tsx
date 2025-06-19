import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1>Our Projects</h1>
        <p>Details about our projects will go here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

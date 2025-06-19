import React from 'react';
import ProjectCard from './ProjectCard';

const OurWorks = () => {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A groundbreaking project that redefines industry standards.',
      image: '/images/project1.jpg',
    },
    {
      title: 'Project Beta',
      description: 'An innovative solution designed to streamline workflows.',
      image: '/images/project2.jpg',
    },
    {
      title: 'Project Gamma',
      description: 'A creative endeavor showcasing our artistic talents.',
      image: '/images/project3.jpg',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;

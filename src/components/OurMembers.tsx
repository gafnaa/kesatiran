import React from 'react';
import MemberCard from './MemberCard';

const OurMembers = () => {
  const members = [
    { name: 'John Doe', role: 'Founder', image: '/images/member1.jpg' },
    { name: 'Jane Smith', role: 'Lead Developer', image: '/images/member2.jpg' },
    { name: 'Peter Jones', role: 'Designer', image: '/images/member3.jpg' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMembers;

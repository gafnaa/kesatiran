import React from 'react';

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default MemberCard;

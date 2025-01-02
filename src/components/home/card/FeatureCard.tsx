"use client";

import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <h3 className="text-xl text-black mb-3 font-extrabold leading-tight">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default FeatureCard;
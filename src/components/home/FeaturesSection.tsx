"Use client";

import React from 'react';
import FeatureCard from './card/FeatureCard';


const FeaturesSection: React.FC = () => {

  const features = [{
    title: "Here goes to title",
    description: "Here will the description goes and it will be the description."
  }, {
    title: "Here goes to title",
    description: "Here will the description goes and it will be the description."
  }];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-20">
        <div className="text-center mb-12">
          <h2 className="text-left text-gray-500 uppercase tracking-wide font-semibold mb-4">Features</h2>
          <h1 className="text-left text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black mb-6">
            AvianInTek offers a good number of features to help you provide the best service.
          </h1>
          <div className="flex justify-left space-x-4">
            <button className="bg-gray-50 text-gray-900 border border-gray-400 rounded-full p-3 hover:bg-gray-100 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-gray-900 text-white rounded-full p-3 hover:bg-gray-700 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
            ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
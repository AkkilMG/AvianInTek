
"use client";
import React from 'react';


export default function TeamSection({ teamMembers }: any){
  return (
    <section className="bg-gray-100 py-16 pb-36">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold leading-tight text-gray-800 mb-4">
          Our Exceptional Team
        </h2>
        <p className="text-gray-600 mb-12">
          Meet our outstanding team - a synergy of talent, creativity, and
          dedication, crafting success together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member: any, index: number) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={`assets/team/${member.avatar}`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mt-4">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>

              <div className="mt-4 flex justify-center space-x-4">
                {member.socialLinks.website && (
                  <a draggable={false} href={member.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    <img draggable={false} src="assets/icons/website.svg" alt="Website" className="h-7 w-7 -mt-0.5" />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a draggable={false} href={`https://github.com/${member.socialLinks.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    <img draggable={false} src="assets/icons/github.png" alt="Github" className="h-7 w-7 -mt-1" />
                  </a>
                )}
                {member.linkedin && (
                  <a draggable={false} href={`https://www.linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    <img draggable={false} src="assets/icons/linkedin.png" alt="LinkedIn" className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

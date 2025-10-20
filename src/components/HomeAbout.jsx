import React from 'react';
import aboutImage from '../assets/photo1.jpg';

function HomeAbout() {
  return (
    <div
      className="relative mt-12 w-full h-[350px] bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto text-white md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Visit Us in Scottburgh, Park Rynie
          </h2>
          <p className="text-lg mb-4">
            Where vision meets impeccable design.
          </p>
          <p className="text-md leading-relaxed">
            Experience personalized interiors where every element is thoughtfully planned and perfectly placed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;



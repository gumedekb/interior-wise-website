import React from 'react';
import ProductRanges from './ProductRange';
import HomeAbout from './HomeAbout';
import HomeMoreInfo from './HomeMoreInfo';
import video1 from '../assets/video1.mp4'

function Home() {
  return (
    <div className="max-w-full mx-auto p-4">
      <div className="flex justify-center items-center">
        <video
          className="w-full max-w-screen-2xl h-120 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* breaking line and text */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-lg font-serif uppercase tracking-widest text-gray-700">
          Shop Our Ranges
        </span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <ProductRanges />

      <HomeAbout />

      <HomeMoreInfo />

    </div>
  );
}

export default Home;

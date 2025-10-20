import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

function ProductRanges() {
  return (
    <div className="max-w-6xl mx-auto px-2 py-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      
      {/* Category Sections */}
      <div className="flex flex-col items-center">
        <img
          src={photo1}
          alt="Couches"
          className="w-full max-w-sm object-cover rounded-md"
        />
        <hr className="w-full border-t border-gray-300 my-4" />
        <h2 className="text-xl font-semibold mb-4">Category 1</h2>
        <button className="border border-black rounded px-6 py-2 hover:bg-gray-100 transition">
          Shop Couch Range
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={photo2}
          alt="Leather"
          className="w-full max-w-sm object-cover rounded-md"
        />
        <hr className="w-full border-t border-gray-300 my-4" />
        <h2 className="text-xl font-semibold mb-4">Category 2</h2>
        <button className="border border-black rounded px-6 py-2 hover:bg-gray-100 transition">
          Shop Leather Range
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={photo3}
          alt="Leather"
          className="w-full max-w-sm object-cover rounded-md"
        />
        <hr className="w-full border-t border-gray-300 my-4" />
        <h2 className="text-xl font-semibold mb-4">Category 3</h2>
        <button className="border border-black rounded px-6 py-2 hover:bg-gray-100 transition">
          Shop Leather Range
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={photo4}
          alt="Leather"
          className="w-full max-w-sm object-cover rounded-md"
        />
        <hr className="w-full border-t border-gray-300 my-4" />
        <h2 className="text-xl font-semibold mb-4">Category 4</h2>
        <button className="border border-black rounded px-6 py-2 hover:bg-gray-100 transition">
          Shop Category Range
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={photo1}
          alt="Leather"
          className="w-full max-w-sm object-cover rounded-md"
        />
        <hr className="w-full border-t border-gray-300 my-4" />
        <h2 className="text-xl font-semibold mb-4">Category 5</h2>
        <button className="border border-black rounded px-6 py-2 hover:bg-gray-100 transition">
          Shop Category Range
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={photo2}
          alt="Leather"
          className="w-full max-w-sm object-cover rounded-md"
        />
        <hr className="w-full border-t border-gray-300 my-4" />
        <h2 className="text-xl font-semibold mb-4">Category 6</h2>
        <button className="border border-black rounded px-6 py-2 hover:bg-gray-100 transition">
          Shop Category Range
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={photo3}
          alt="Leather"
          className="w-full max-w-sm object-cover rounded-md"
        />
        <hr className="w-full border-t border-gray-300 my-4" />
        <h2 className="text-xl font-semibold mb-4">Category 7</h2>
        <button className="border border-black rounded px-6 py-2 hover:bg-gray-100 transition">
          Shop Category Range
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={photo4}
          alt="Leather"
          className="w-full max-w-sm object-cover rounded-md"
        />
        <hr className="w-full border-t border-gray-300 my-4" />
        <h2 className="text-xl font-semibold mb-4">Category 8</h2>
        <button className="border border-black rounded px-6 py-2 hover:bg-gray-100 transition">
          Shop Category Range
        </button>
      </div>
    </div>
  );
}

export default ProductRanges;

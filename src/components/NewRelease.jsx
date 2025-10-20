import React from 'react';
import HomeMoreInfo from './HomeMoreInfo';

function NewRelease() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800 text-center px-4">
        <h1 className="text-5xl font-bold mb-6">🚧 Page Under Construction 🚧</h1>
        <p className="text-2xl max-w-xl">
          We're working hard to bring you the latest releases. Please check back soon!
        </p>
      </div>

      <HomeMoreInfo />
    </div>
  );
}

export default NewRelease;

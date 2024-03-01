import React from 'react';

function BlackWhite() {
  const bookCovers = Array.from({ length: 26 }, (_, i) => `/b${i + 1}.webp`);

  return (
    <div className="p-10">
      <h1 className="text-white text-9xl text-left mb-10">Impressionen</h1>
      <div className="grid-tight-gap">
        {' '}
        {/* Use custom class for tighter gap */}
        {bookCovers.map((cover, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg relative group"
            style={{
              perspective: '2000px',
            }}
          >
            <div
              className="w-full h-full transform transition duration-300 ease-in-out group-hover:rotate-y-20 group-hover:scale-105"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src={cover}
                alt={`Book Cover ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlackWhite;

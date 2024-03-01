import React from 'react';

function Books() {
  const bookCovers = ['/book1.png', '/book2.png', '/book3.png'];

  return (
    <div className="footerp-10">
      <h1 className="text-white text-9xl text-center mb-10">
        Aktuelles Bücher
      </h1>
      <div className="flex justify-center items-center gap-10">
        {bookCovers.map((cover, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg overflow-visible transform transition duration-300 ease-in-out relative"
            style={{
              perspective:
                '1500px' /* Adjust perspective for a more subtle effect */,
            }}
          >
            <div
              className="w-full h-full transform transition duration-300 ease-in-out"
              style={{
                transformStyle:
                  'preserve-3d' /* Allows child to exist in 3D space */,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'rotateY(20deg) scale(1.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'rotateY(0deg) scale(1)')
              }
            >
              <img
                src={cover}
                alt={`Book Cover ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;

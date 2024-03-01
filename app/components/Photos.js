import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import React from 'react';

function Photos() {
  return (
    <div className="photos-section">
      <h1 className="title-impressionen">Impressionen</h1>
      <div className="photos-container">
        <Image
          src="/photos.png"
          alt="Photo 1"
          width={500}
          height={300}
          layout="responsive"
        />
        <Image
          src="/photos2.png"
          alt="Photo 2"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default Photos;

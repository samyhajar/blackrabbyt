import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

function NewsPaper() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  // Generate book cover paths dynamically
  const bookCovers = Array.from({ length: 17 }, (_, i) => `/news${i + 1}.webp`);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      xPercent: -50 * (bookCovers.length / 4 - 1), // Adjust based on the number of items you want off-screen
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${sectionRef.current.offsetWidth}`, // Adjust scrolling distance based on content width
      },
    });
  }, [bookCovers.length]);

  return (
    <div className="overflow-hidden py-10" ref={triggerRef}>
      <h1 className="text-white text-9xl text-left mb-10">Impressionen</h1>
      <div className="flex gap-4" ref={sectionRef}>
        {bookCovers.map((cover, index) => (
          <div key={index} className="min-w-[20%] flex-shrink-0">
            {' '}
            {/* Adjust width to control how many items are visible */}
            <img
              src={cover}
              alt={`News Cover ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPaper;

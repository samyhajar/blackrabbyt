import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const InfiniteMarquee = ({ text }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    // Wait until the component is fully mounted to calculate widths
    setTimeout(() => {
      const contentWidth = marquee.scrollWidth / 2; // Since the content is duplicated
      const animation = gsap
        .timeline({
          repeat: -1,
          defaults: { ease: 'none' },
        })
        .fromTo(
          marquee,
          { x: 0 },
          { x: -contentWidth, duration: 20, ease: 'linear' },
        );

      return () => animation.kill();
    }, 100);
  }, [text]);

  return (
    <div className=" w-full">
      <div
        ref={marqueeRef}
        className="flex w-full text-9xl text-extrabold uppercase opacity-40 text-gray-600 -mt-14"
      >
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>{' '}
        {/* Duplicate to ensure seamless looping */}
      </div>
    </div>
  );
};

export default InfiniteMarquee;

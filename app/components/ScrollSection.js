import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

function ScrollSection() {
  return (
    <section className="scroll-section-outer">
      <div>
        <div className="scroll-section-inner">
          <div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;

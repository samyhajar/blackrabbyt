import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      },
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section flex flex-col items-center justify-center">
            <iframe
              className="max-w-3xl w-full aspect-video mx-auto rounded-lg"
              src="https://www.youtube.com/embed/CQKiNzF0XYg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <span className="text-4xl text-white text-semibold mt-8">
              Goldenes Verdienstzeichen der Republik
            </span>
            <h3>
              Nach der Auszeichnung im Bundeskanzleramt feierte der
              Medienmanager und Honorarkonsul ein VIP-Event. LEADERSNET.tv war
              mit dabei und holte einige hochkarätige Gäste vor die Kamera.
            </h3>
          </div>
          <div className="scroll-section flex flex-col items-center justify-center">
            <iframe
              className="max-w-3xl w-full aspect-video mx-auto rounded-xl"
              src="https://www.youtube.com/embed/HjF9G3T013g"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <span className="text-4xl text-white text-semibold mt-8">
              Goldenes Verdienstzeichen der Republik
            </span>
            <h3>
              Nach der Auszeichnung im Bundeskanzleramt feierte der
              Medienmanager und Honorarkonsul ein VIP-Event. LEADERSNET.tv war
              mit dabei und holte einige hochkarätige Gäste vor die Kamera.
            </h3>
          </div>
          <div className="scroll-section flex flex-col items-center justify-center">
            <iframe
              className="max-w-3xl w-full aspect-video mx-auto rounded-xl"
              src="https://www.youtube.com/embed/CQKiNzF0XYg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <span className="text-4xl text-white text-semibold mt-8">
              Goldenes Verdienstzeichen der Republik
            </span>
            <h3>
              Nach der Auszeichnung im Bundeskanzleramt feierte der
              Medienmanager und Honorarkonsul ein VIP-Event. LEADERSNET.tv war
              mit dabei und holte einige hochkarätige Gäste vor die Kamera.
            </h3>
          </div>
          <div className="scroll-section flex flex-col items-center justify-center">
            <iframe
              className="max-w-3xl w-full aspect-video mx-auto rounded-xl"
              src="https://www.youtube.com/embed/HjF9G3T013g"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <span className="text-4xl text-white text-semibold mt-8">
              Goldenes Verdienstzeichen der Republik
            </span>
            <h3>
              Nach der Auszeichnung im Bundeskanzleramt feierte der
              Medienmanager und Honorarkonsul ein VIP-Event. LEADERSNET.tv war
              mit dabei und holte einige hochkarätige Gäste vor die Kamera.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;

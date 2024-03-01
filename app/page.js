'use client';

import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Books from './components/Books';
import Footer from './components/Footer';
import Media from './components/Media';
import ScrollSection from './components/ScrollSection';
import Testimonials from './components/Testimonials';
import TextReveal from './components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize the entrance animation for the text elements
    gsap.fromTo(
      '.text-wrapper',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      },
    );

    // Animate h1 to move to the right as you scroll
    gsap.to('.h1-wrapper', {
      x: '30vw', // Adjust the value as needed to move to the right
      ease: 'none',
      scrollTrigger: {
        trigger: '.h1-wrapper',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.from('#video1', {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });
    gsap.from('#text1', {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.5,
    });

    gsap.from('#video2', {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 1,
    });
    gsap.from('#text2', {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 1.5,
    });

    // Images animation setup to slide in slower when scrolling down
    gsap.utils.toArray('.image-wrapper').forEach((image, index) => {
      const direction = index % 2 === 0 ? '-100%' : '100%'; // Alternate direction for each image
      gsap.fromTo(
        image,
        { x: direction, opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 2.5, // Increased duration for a slower animation
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom-=100px',
            end: 'center center', // Adjusted to end when the viewport is in the center
            toggleActions: 'play none none reverse',
            scrub: true, // Smooth scrubbing effect for a more dynamic feel
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div>
      <main className="flex min-h-screen flex-col items-start justify-center bg-white font-titillium text-gray-400 p-24">
        <div className="flex flex-col justify-center items-start h-screen">
          <span className="font-bold text-gray-400 mb-4 text-wrapper text-8xl">
            Marcus Posser
          </span>
          {/* Wrapped h1 in a div with class "h1-wrapper" for the animation */}
          <div className="h1-wrapper">
            <h1 className="text-5xl font-bold text-black whitespace-nowrap text-wrapper">
              Entrepreneur & Honorary Consultant
            </h1>
          </div>
        </div>
        {/* Next section for images */}
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <div className="image-container grid grid-cols-2 gap-4">
            <div className="image-wrapper">
              <Image
                src="/ok1.png"
                alt="Image 1"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="flex flex-col bg-gray-200 w-full h-full image-wrapper p-10">
              <p className="text-2xl text-gray-600 font-bold mb-4">
                Mag. Markus Posset MBA, MSc
              </p>
              {/* Border bottom with a little bit of space */}
              <div className="w-full border-b border-gray-200"></div>
              {/* Tab container */}
              <div className="tabs-container mt-4">
                <div className="flex space-x-4 mb-4">
                  <button
                    className={`py-2 px-4 ${
                      activeTab === 'tab1'
                        ? 'text-gray-600 border-b-2 border-gray-600'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('tab1')}
                  >
                    Ausbildung & Beruf
                  </button>
                  <button
                    className={`py-2 px-4 ${
                      activeTab === 'tab2'
                        ? 'text-gray-600 border-b-2 border-gray-600'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('tab2')}
                  >
                    Aktuelles
                  </button>
                </div>
                <div className="tab-content p-8 w-[500px] h-[300px] overflow-auto">
                  {activeTab === 'tab1' && (
                    <>
                      <p className="text-xl font-bold mb-4">Medien</p>
                      <p>
                        Markus POSSET startete seine berufliche Laufbahn mit 15
                        Jahren als Lehrling bei den österreichischen
                        Bundesbahnen (ÖBB) als Nachrichtentechniker.
                        Berufsbegleitend schloss er drei Studienabschlüsse in
                        Wirtschaft (Magister), Sales und Marketing (Executive
                        MBA) sowie in Arbeits- und Prozesspsychologie (MSc) ab.
                        Seit dem Jahr 2000 ist er in verschiedenen Management-
                        und Geschäftsführerpositionen in der Werbe-, Medien- und
                        Verlagsbranche in Österreich, Deutschland und im
                        Balkanraum tätig. POSSET war unter anderem COO der Echo
                        Medienhaus Gruppe, Managing Director der Verlagsgruppe
                        News (VGN) – somit auch für die beiden österreichischen
                        Leitmedien „Profil“ und „Trend“ verantwortlich, sowie
                        Geschäftsführer der Mediengruppe Österreich. Weiters war
                        POSSET in seiner Zeit als COO des Echo Medienhauses,
                        Gründer und Herausgeber des ersten europäischen
                        Start-up-Magazins „Seeds“ mit BMW, A1, TMobil, Puls4,
                        Sat1, etc. als Partnern. Gemeinsam mit
                        Ex-Interwetten-CEO und Ex-Porsche-Frankreich-CFO Thomas
                        Daubek war Markus POSSET auch für die erfolgreiche
                        Umsetzung und Etablierung des Mobilitätsanbieters Car2Go
                        (share now) in Österreich beteiligt.
                      </p>
                    </>
                  )}
                  {activeTab === 'tab2' && (
                    <>
                      <p className="text-xl font-bold mb-4">Engagement</p>
                      <p>
                        Aktuell ist POSSET Verwaltungsratpräsident der Star
                        Troopers Media, Entertainment und Investment AG mit Sitz
                        in der Schweiz, die eine Vielzahl an Unternehmen
                        vereint. Ebenso ist er als Unternehmensberater für
                        Medien und Verlagshäuser, in der Politikberatung
                        (Regierung Balkanregion), als Medien- u. Industry
                        Lobbyist und als Vortragender für Journalismus und
                        Medienmanagement auf der Fachhochschule Wien der WKW
                        aktiv tätig. Zudem ist er als Investor bei einigen
                        Start-up Unternehmen in Österreich, Deutschland und im
                        Balkanraum engagiert. Markus POSSET ist Unterstützer des
                        Antikorruptionsvolksbegehrens, das durch einige honorige
                        Persönlichkeiten unterstützt wird.
                        www.antikorruptionsbegehren.at
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full flex justify-end items-end pr-24 mt-24">
        <Media className="text-9xl" text="Medien" />
      </div>
      <>
        {/* <Hero /> */}
        <ScrollSection />
        <Books />
        <Testimonials />
        <TextReveal />
      </>
    </div>
  );
}

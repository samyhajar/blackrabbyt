'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const content = [
  {
    type: 'p',
    text: 'Public Affairs Dienstleistung und professionelles Stakeholder Management (Lobbying) für Klienten aus Wirtschaft, Medien und Politik. Strategische Beratung und operative Umsetzung aus einer Hand.',
  },
  {
    type: 'ul',
    items: [
      'Wahlkampf & Strategie / political (election) campaign',
      'Governmental Relations & Politik(er)beratung',
      'Lobbying / Stakeholder Management / Politische Audits',
      '360 Grad Unternehmensberatung für Politik, Medien-, Defense, Glücksspiel und Industrie',
      'Coaching für Führungskräfte, Politiker & CEO´s',
      'Strategische Medienarbeit / Litigation PR / Reputations- u. Kampagnenmanagement',
      'Arena-Analyse (Policy, Politics, Issues, Stakeholder, risks & opportunities)',
      'Corporate Social Responsibility & Community Relations',
      'M&A und Beteiligungen',
      'Digitalisierung und Mehrwertsysteme (Medien)',
      'Neue Erlösmodelle und Ecosysteme (Medien)',
    ],
  },
  // Add other paragraphs or lists as needed
];

export default function Home() {
  let refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top center`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.05,
    });
  };

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'p':
          return (
            <p key={index} className="text-reveal-content">
              {item.text.split('').map((letter, i) => (
                <span key={i} ref={(el) => refs.current.push(el)}>
                  {letter}
                </span>
              ))}
            </p>
          );
        case 'ul':
          return (
            <ul key={index} className="text-reveal-content">
              {item.items.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {listItem.split('').map((letter, i) => (
                    <span key={i} ref={(el) => refs.current.push(el)}>
                      {letter}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <main ref={container} className="text-reveal-main">
      <div className="text-reveal-body">{renderContent(content)}</div>
    </main>
  );
}

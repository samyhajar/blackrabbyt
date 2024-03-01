import React from 'react';

const people = [
  {
    name: 'Auszeichnung',
    body: 'Markus POSSET wurde mit Entschließung des Bundespräsidenten vom 14. Jänner 2021 das "Goldene Verdienstzeichen seitens der Bundesrepublik Österreich" verliehen.',
    imageUrl: '/auszeichnung.webp', // Path relative to the public folder
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Honorarconsul',
    body: 'Mit Bestellungsschreiben des albanischen Ministerpräsidenten Edi Rama wurde Markus POSSET mit 5. Mai 2021 zum neuen "Honorarkonsul der Republik Albanien in Österreich" bestellt.',
    imageUrl: '/honorarconsul.webp', // Path relative to the public folder
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sonstiges',
    body: '"Gerade jetzt müssen wir klares Zeichen im Medienumfeld setzen." Markus POSSET ist seit dem Jahr 2021 aktives Unterstützungsmitglied des Rechtsstaat & Antikorruptionsvolksbegehrens.',
    imageUrl: '/sonstiges.webp', // Path relative to the public folder
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
];

export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold tracking-tight text-right text-white">
            Auszeichnungen & ehrenamtliche Funktionen
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-gray-600 px-8 py-10 shadow-md"
            >
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={person.imageUrl}
                alt={person.name}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.body}
              </p>
              {/* Additional content */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

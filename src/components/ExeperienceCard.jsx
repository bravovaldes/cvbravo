import React, { useState } from 'react';

const experiencesGrouped = [
  {
    id: 'chicoutimi',
    location: 'Chicoutimi, Canada',
    entries: [
      {
        title: 'Développeur Mobile-Desktop',
        company: 'SALVATORE',
        icons: ['react.svg', 'tailwind.png','kotlin.jpg', 'firebase.png'],
        project: null
      },
      {
        title: 'Aide Pedagogique',
        company: 'UQAC',
        icons: ['compose.jpeg', 'asp.jpg', 'postgresql.jpg'],
        project: null
      }
    ],
    className: 'top-[32%] left-[22%]',
    expandable: true
  },
  {
    id: 'Solutech',
    location: 'Dschang-Cameroun',
    entries: [
      {
        title: 'Développeur Full-Stack',
        company: 'Solutech-2019-2022 C#',
        icons: ['asp.jpg', 'postgresql.jpg','react.svg'],
        project: 'AgriPoule'
      }
    ],
    className: 'top-[60%] left-[50%]',
    expandable: false
  }
];

export default function ExperienceMap() {
  const [expanded, setExpanded] = useState({});

  const toggleCard = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16 bg-white relative">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-12">Experiences</h2>
      <div className="relative w-full max-w-7xl mx-auto">
        <img src="/assets/map-light.jpg" alt="Carte" className="w-full h-auto" />

        {experiencesGrouped.map((exp) => (
          <React.Fragment key={exp.id}>
            {/* Marqueur */}
            <div
              className={`absolute ${exp.className} w-2 h-2 bg-green-600 rounded-full z-10`}
              style={{ transform: 'translate(-50%, -50%)' }}
            ></div>

            {/* Carte */}
            <div
              className={`absolute z-10 bg-white p-2 md:p-4 rounded-xl shadow-md text-[10px] md:text-[12px] w-[150px] md:w-[200px] lg:w-[240px] ${exp.className}`}
              style={{ transform: 'translateY(-110%) translateX(-50%)' }}
            >
              <div className="text-black font-semibold mb-1">{exp.location}</div>

              {/* Détails */}
              {exp.entries.map((entry, idx) => (
                <div key={idx} className="mb-1">
                  <div className="text-green-700 font-medium">{entry.company}</div>
                  <div className="text-gray-600">{entry.title}</div>
                </div>
              ))}

              {/* Voir plus */}
              {exp.expandable && (
                <button
                  onClick={() => toggleCard(exp.id)}
                  className="mt-1 text-green-600 underline text-[10px] md:text-[12px]"
                >
                  {expanded[exp.id] ? 'Moins' : 'Voir plus'}
                </button>
              )}

              {/* Icônes technos */}
              {(expanded[exp.id] || !exp.expandable) && (
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {exp.entries.map((entry, idx) =>
                    entry.icons.map((icon, iconIdx) => (
                      <div
                        key={`${idx}-${iconIdx}`}
                        className="w-6 h-6 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center shadow"
                      >
                        <img
                          src={`/assets/${icon}`}
                          alt="tech"
                          className="w-4 h-4 md:w-5 md:h-5 object-contain"
                        />
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

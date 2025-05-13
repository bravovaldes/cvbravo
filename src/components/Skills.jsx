const skills = [
    { name: 'React', image: 'react.svg' },
    { name: 'Python', image: 'react.svg' },
    { name: 'JavaScript', image: 'react.svg' },
    { name: 'Tailwind', image: 'tailwind.png' },
    { name: 'Node.js', image: 'node.png' },
    { name: 'Node.js', image: 'node.png' },
    { name: 'Node.js', image: 'node.png' },
    { name: 'Node.js', image: 'node.png' },
    { name: 'Node.js', image: 'node.png' },
    { name: 'Node.js', image: 'node.png' },
    { name: 'Django', image: 'react.svg' },
    { name: '', image: 'avat.png', isAvatar: true }, // Avatar collé
  ]
  
  export default function Skills() {
    return (
      <section className="bg-white py-16 px-4 sm:px-12 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-12">
          COMPÉTENCES
        </h2>
  
        <div
          className="
            overflow-hidden
            mx-auto
            w-[100vw]       /* 100% de la largeur viewport par défaut */
            sm:w-[90vw]     /* ≥640px → 90% de la largeur viewport */
            md:w-[80vw]     /* ≥768px → 80% */
            lg:w-[70vw]     /* ≥1024px → 70% */
            xl:w-[60vw]     /* ≥1280px → 60% */
            2xl:w-[50vw]    /* ≥1536px → 50% */
          "
        >
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, index, arr) => {
              // Cas spécial : Django + Avatar
              if (skill.name === 'Django' && arr[index + 1]?.isAvatar) {
                const avatar = arr[index + 1];
                return (
                  <div key={`django-avatar-${index}`} className="relative flex flex-col items-center min-w-[140px]">
                    <img
                      src={`/assets/${skill.image}`}
                      alt="Django"
                      className="w-16 h-16 mb-2 z-10"
                    />
                    <p className="text-gray-700 font-medium z-10">Django</p>
                    <img
                      src={`/assets/${avatar.image}`}
                      alt="Avatar"
                      className="absolute top-0 left-[58px] w-28 h-26 bg-white animate-push z-0"
                    />
                  </div>
                );
              }
  
              // Ne pas afficher l'avatar déjà fusionné
              if (index > 0 && arr[index - 1]?.name === 'Django' && skill.isAvatar) {
                return null;
              }
  
              const isAvatar = skill.isAvatar;
  
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center min-w-[120px] ${
                    isAvatar ? 'animate-push' : ''
                  }`}
                >
                  <img
                    src={`/assets/${skill.image}`}
                    alt={skill.name || 'Avatar'}
                    className={`mb-2 ${
                      isAvatar
                        ? 'w-28 h-26 -translate-x-4 animate-push bg-white'
                        : 'w-16 h-16'
                    }`}
                  />
                  {!isAvatar && (
                    <p className="text-gray-700 font-medium">{skill.name}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
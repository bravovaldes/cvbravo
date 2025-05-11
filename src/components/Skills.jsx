const skills = [
    { name: 'React', image: 'react.svg' },
    { name: 'Python', image: 'python.png' },
    { name: 'JavaScript', image: 'js.png' },
    { name: 'Tailwind', image: 'tailwind.png' },
    { name: 'Node.js', image: 'node.png' },
    { name: 'Django', image: 'django.png' },
    { name: '', image: 'perso.png', isAvatar: true }, // Avatar collé
  ]
  
  export default function Skills() {
    return (
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-12">COMPÉTENCES</h2>
  
        <div className="overflow-hidden relative w-full">
          <div className="flex animate-marquee w-max">
            {[...skills, ...skills].map((skill, index, arr) => {
              const isAvatar = skill.isAvatar
              const isFirst = index === 0
              const previousIsAvatar = index > 0 && arr[index - 1]?.isAvatar
  
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center min-w-[120px] ${
                    isFirst || previousIsAvatar || isAvatar ? '' : 'ml-12'
                  } ${isAvatar ? 'animate-push' : ''}`}
                >
                  <img
                    src={`/assets/${skill.image}`}
                    alt={skill.name || 'Avatar'}
                    className={`mb-2 ${
                        isAvatar
                        ? 'w-28 h-26 -translate-x-4 animate-push bg-white' // ⬅️ Taille + translation
                        : 'w-16 h-16'
                    }`}
                    />


                  {!isAvatar && (
                    <p className="text-gray-700 font-medium">{skill.name}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
  
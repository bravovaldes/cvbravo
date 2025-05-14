const skills = [
    { name: 'React.js', image: 'react.svg' },
    { name: 'Tailwind', image: 'tailwind.png' },
    { name: 'ASP.NET', image: 'asp.jpg' },
    { name: 'Azure', image: 'azure.png' },
    { name: 'Postgresql', image: 'postgresql.jpg' },
    { name: 'Django', image: 'django.png' },
    { name: 'Jetpack Compose', image: 'compose.jpeg' },
    { name: 'Kotlin', image: 'kotlin.jpg' },
    { name: 'Firebase', image: 'firebase.png' },
    { name: 'Pandas', image: 'pandas.webp' },
    { name: 'Tensorflow', image: 'tensorflow.png' },
    { name: 'Pytorch', image: 'pytorch.png' },
    { name: 'Avatar', image: 'avat.png' , isAvatar: true}, // Avatar collé
  ]
  
  export default function Skills() {
    return (
      <section className="bg-white py-16 px-0 sm:px-0 md:px-0 lg:px-0">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-12">
          COMPÉTENCES
        </h2>
  
        <div
        className="
          overflow-hidden
          mx-auto
          w-[100vw]       // prend toute la largeur de l'écran
          sm:w-[90vw]     // réduit progressivement la largeur selon la taille de l'écran
          md:w-[80vw]
          lg:w-[70vw]
          xl:w-[60vw]
          2xl:w-[50vw]
          px-4            // marge intérieure à gauche et droite sur petits écrans
          sm:px-6         // un peu plus sur écrans moyens
          lg:px-8         // encore plus sur grands écrans
        "
      >

          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, index, arr) => {
              // Cas spécial : Django + Avatar
              if (skill.name === 'Pytorch' && arr[index + 1]?.isAvatar) {
                const avatar = arr[index + 1];
                return (
                  <div key={`pytorch-avatar-${index}`} className="relative flex flex-col items-center min-w-[140px] pr-11">
                    <img
                      src={`/assets/${skill.image}`}
                      alt="Pytorch"
                      className="w-16 h-16 mb-2 z-10 rounded-full"
                    />
                    <p className="text-gray-700 font-medium z-10">Pytorch</p>
                    <img
                      src={`/assets/${avatar.image}`}
                      alt="Avatar"
                      className="absolute top-0 left-[56px] w-28 h-26 bg-white animate-push z-0 "
                    />
                  </div>
                );
              }
  
              // Ne pas afficher l'avatar déjà fusionné
              if (index > 0 && arr[index - 1]?.name === 'Pytorch' && skill.isAvatar) {
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
                        : 'w-16 h-16 rounded-full'
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
  
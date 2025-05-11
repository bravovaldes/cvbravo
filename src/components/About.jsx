// src/components/About.jsx

export default function About() {
    return (
      <section id="a-propos" className="min-h-screen bg-neutral-900 text-white px-6 py-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10 text-center">À propos de moi</h2>
  
        <div className="max-w-4xl text-gray-300 leading-relaxed text-lg space-y-6 text-center">
          <p>
            Je suis Valdes Bravo Mezankou, étudiant en dernière session de Baccalauréat en Informatique
            (spécialisation en Intelligence Artificielle) à l'UQAC. Passionné par les mathématiques, la cybersécurité
            et le développement Full-Stack, je suis prêt à relever tous les défis technologiques qui se présentent à moi.
          </p>
  
          <p>
            J’ai eu l’occasion de travailler sur des projets concrets en vision par ordinateur, développement mobile
            multiplateforme et dashboards d’analyse, avec une approche axée sur la qualité, la performance et l’impact.
          </p>
  
          <p>
            Mon objectif est de combiner sécurité, design et intelligence artificielle pour construire des applications
            utiles, robustes et élégantes. Actuellement, je m’intéresse à la fusion du 3D (Three.js) avec les interfaces React.
          </p>
        </div>
  
        <div className="mt-10">
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-green-400">
            <li>#Full-Stack</li>
            <li>#VisionArtificielle</li>
            <li>#Cybersécurité</li>
            <li>#JetpackCompose</li>
            <li>#NoSQL</li>
            <li>#Django</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-200 text-sm">
            <li>🎯 Gestion de projet</li>
            <li>🧠 Vision stratégique</li>
            <li>🗂️ Organisation</li>
            <li>👨‍💼 Leadership</li>
            <li>📌 Prise de décision</li>
          </ul>
        </div>
      </section>
    )
  }
  
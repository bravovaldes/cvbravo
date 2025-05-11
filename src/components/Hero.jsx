import AvatarFlip from './AvatarFlip'

export default function Hero() {
  return (
    <section id="home" className="bg-white text-black pt-24 pb-16 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-left">
        
       {/* Partie gauche (plus large) */}
        <div className="md:col-span-2 space-y-4 animate-fade-in-down">
        <h1 className="text-4xl md:text-5xl font-bold animate-slide-in-left delay-100">
            Valdes Bravo Mezankou
        </h1>

        <h2 className="text-xl text-green-600 font-semibold animate-slide-in-left delay-200">
            Développeur Full-Stack & Étudiant en IA
        </h2>

        <p className="text-gray-700 animate-fade-in delay-300">
            Actuellement en dernière session de Baccalauréat en Informatique (spécialisation IA) à l’UQAC.
            Passionné par les mathématiques et la programmation, prêt à relever tous les défis !
        </p>

        <div className="flex flex-wrap gap-3 mt-4 animate-fade-in delay-500">
            <span className="text-green-600 font-semibold">#Full-Stack</span>
            <span className="text-green-600 font-semibold">#ComputerVision</span>
            <span className="text-green-600 font-semibold">#NoSQL</span>
            <span className="text-green-600 font-semibold">#Django</span>
            <span className="text-green-600 font-semibold">#IA</span>
            <span className="text-green-600 font-semibold">#Cybersécurité</span>
        </div>

        <ul className="list-none mt-4 flex flex-wrap gap-6 text-sm text-gray-800 animate-fade-in-up delay-700">
            <li>• Gestion de Projet</li>
            <li>• Vision Stratégique</li>
            <li>• Organisation</li>
            <li>• Leadership</li>
            <li>• Prise de Décision</li>
        </ul>
        </div>


        {/* Partie centre (avatar) */}
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <div className="w-40 h-40 mb-4">
            <AvatarFlip />
          </div>

          <a
            href="/cv-valdes.pdf"
            download
            className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition flex items-center gap-2 "
            >
            <i className="fas fa-download  animate-bounce"  ></i>
            Télécharger mon CV
          </a>

            <p className="mt-2 text-sm text-gray-700 font-medium">
            🎓 Baccalauréat en Informatique – Moyenne  <span className="text-green-700 font-semibold">3.75 / 4.3</span>
            </p>


          <p className="mt-4 text-sm text-gray-600">
            <i className="fas fa-map-marker-alt mr-1" />
            Chicoutimi, Québec, Canada
          </p>
        </div>

        {/* Partie droite (chatbot) */}
        <div className="md:col-span-1 bg-gray-100 rounded-xl shadow-md p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">🤖 Agent conversationnel</h3>
            <p className="text-sm text-gray-600 mb-4">
              Vous pouvez me poser des questions sur Valdes : ses projets, ses expériences ou ses compétences.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Ex : Quelles sont ses expériences en entreprise ?"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button className="bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">
              Envoyer la question
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

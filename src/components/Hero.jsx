import AvatarFlip from './AvatarFlip';
import FloatingChat from './FloatingChat';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-white text-black pt-24 pb-16 px-4 sm:px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-left">
        
        {/* Partie gauche */}
        <div className="md:col-span-2 space-y-4 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold animate-slide-in-left delay-100">
            Valdes Bravo Mezankou
          </h1>
          <h2 className="text-xl text-green-600 font-semibold animate-slide-in-left delay-200">
            Développeur Full-Stack & Nouveau Diplômé en IA
          </h2>
          <p className="text-gray-700 animate-fade-in delay-300">
            Nouveau diplômé du Baccalauréat en Informatique (spécialisation Intelligence Artificielle) à l’UQAC.
            Passionné par les mathématiques et la programmation, je suis prêt à relever de nouveaux défis professionnels !
          </p>


          <div className="flex flex-wrap gap-3 mt-4 animate-fade-in delay-500">
            <span className="text-green-600 font-semibold">#Full-Stack</span>
            <span className="text-green-600 font-semibold">#ComputerVision</span>
            <span className="text-green-600 font-semibold">#SQL</span>
            <span className="text-green-600 font-semibold">#NOSQL</span>
            <span className="text-green-600 font-semibold">#Django</span>
            <span className="text-green-600 font-semibold">#IA</span>
            <span className="text-green-600 font-semibold">#Mobile</span>
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
            href="/assets/cv-valdes.pdf"
            download
            className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition flex items-center gap-2"
          >
            <i className="fas fa-download animate-bounce" />
            Télécharger mon CV
          </a>

          <p className="mt-2 text-sm text-gray-700 font-medium">
            🎓 Baccalauréat en Informatique – Moyenne <span className="text-green-700 font-semibold">3.75 / 4.3</span>
          </p>

          <p className="mt-4 text-sm text-gray-600">
            <i className="fas fa-map-marker-alt mr-1" />
            Drummondville, Québec, Canada
          </p>
        </div>

        {/* Partie droite (chatbot dynamique) */}
        <div className="md:col-span-1 bg-gray-100 rounded-xl shadow-md p-6 flex flex-col justify-between h-full relative text-center items-center">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-green-700">🤖 Agent conversationnel</h3>
          <p className="text-sm text-gray-600">
            Une question sur le parcours, les projets ou les compétences de Valdes ?<br />
            <span className="font-semibold text-green-700">ValdesBot</span> vous répond instantanément :
            cliquez simplement sur le bouton ci-dessous.
          </p>

          <p className="text-sm text-gray-500">
            <strong>10 questions</strong> toutes les <strong>10 minutes</strong>.
          </p>

          {/* Flèche vers le bouton flottant */}
          <ArrowDownRight
            className="w-8 h-8 text-green-600 animate-bounce mt-6 mx-auto"
            style={{ transform: 'rotate(45deg)' }}
          />
        </div>

        <FloatingChat />
        </div>
      </div>
    </section>
  );
}

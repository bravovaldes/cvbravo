import { useState } from 'react';
import {
  Download,
  Star,
  MessageCircle,
  Pen,
  Globe,
  Github,
  Play,
  X
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                DATA                                         */
/* -------------------------------------------------------------------------- */
const projects = [
  {
    title: 'Réseau Social Intelligent',
    description:
      'Réseau social distribué développé en .NET 9 (MVC, API, Worker) avec microservices. Déployé sur AKS, CI/CD, CosmosDB, Docker et Azure AI.',
    stack: ['C#', '.NET 9', 'PostgreSQL', 'Docker', 'Azure', 'CosmosDB'],
    image: 'reseau.png',
    links: {
      github: 'https://github.com/bravovaldes/Reseau_Social_Intelligent',
      demo: 'https://youtu.be/hSilWoceVG0',
      live: '#'
    },
    reason:
      'Le déploiement live utilise plusieurs services Azure payants : le lien est désactivé pour éviter des frais.'
  },
  {
    title: 'API Blog',
    description:
      'API REST pour gérer des articles de blog en ASP.NET + PostgreSQL. Déployée avec Docker, consommée par une interface React.',
    stack: ['C#', 'ASP.NET', 'PostgreSQL', 'Docker'],
    image: 'blogap.jpg',
    links: {
      github: 'https://github.com/bravovaldes/BlogApi',
      demo: 'https://youtu.be/2lEfUqRvyj8',
      live: '#'
    },
    reason:
      'Cette API est déjà utilisée dans ce portfolio ; un lien public supplémentaire n’est pas nécessaire.'
  },
  {
    title: 'Encadrement pédagogique (UQAC)',
    description:
      'Soutien pédagogique en algorithmique, structures de données et POO ; préparation d’exercices et séances en présentiel.',
    stack: ['Java', 'C++', 'C#', 'Python', 'Pédagogie'],
    image: 'blog.jpg',
    links: { github: '#', demo: '#', live: '#' },
    reason:
      'Projet réalisé en présentiel ; il n’existe pas de dépôt ou de démo publique.'
  },
  {
    title: 'Agent IA Personnel',
    description:
      'Assistant conversationnel (LangChain + GPT-3.5) capable de répondre à propos de mon parcours et mes projets.',
    stack: [
      'LangChain',
      'GPT-3.5',
      'ASP.NET Core',
      'PostgreSQL',
      'FastAPI',
      'OpenAI API'
    ],
    image: 'agentia.png',
    links: {
      github: 'https://github.com/bravovaldes/agent_api_portfolio',
      demo: '#',
      live: '#'
    },
    reason:
      'L’agent IA est déjà intégré dans ce portfolio ; aucun lien externe requis.'
  },
  {
    title: 'AgriPoule',
    description:
      'App mobile IA pour diagnostiquer les maladies aviaires. FastAPI + PyTorch + Firebase, dispo sur Google Play.',
    stack: ['FastAPI', 'PyTorch', 'Docker', 'Firebase', 'Kotlin'],
    image: 'agripoule.jpg',
    links: {
      github: 'https://github.com/bravovaldes/PoultryCare',
      demo: 'https://youtube.com/shorts/sZE5hCyjGFQ?feature=share',
      live:
        'https://play.google.com/store/apps/details?id=uqac.dim.poultrycareapp'
    }
  },
  {
    title: 'GESTSAVLVATORE',
    description:
      'Application desktop/mobile pour gérer les flux de trésorerie liés aux livraisons. Utilisée en interne.',
    stack: ['Kotlin', 'Firebase', 'Compose Desktop'],
    image: 'cfoot.jpg',
    links: { github: '#', demo: 'https://youtu.be/5_bkt5A2uNo', live: '#' },
    reason: 'Logiciel interne à l’entreprise, non accessible publiquement.'
  },
  {
    title: 'Production d’œufs (DataViz)',
    description:
      'Analyse des conditions d’élevage et de la production d’œufs avec R / ggplot2 ; présentation Xaringan.',
    stack: ['R', 'Tidyverse', 'ggplot2', 'Xaringan'],
    image: 'visualisation.png',
    links: {
      github: 'https://github.com/8INF404-A24/Projet-Groupe-8',
      demo:
        'https://uqac.ca.panopto.com/Panopto/Pages/Viewer.aspx?id=7dd80733-d2dc-4814-aa7b-b247004e5f5f',
      live: 'https://rpubs.com/bravovaldes/1269849'
    }
  },
  {
    title: 'QUIZZ App',
    description:
      'Plateforme web de quiz à difficulté variable réalisée en React, HTML, CSS.',
    stack: ['React', 'HTML', 'CSS'],
    image: 'quizz.png',
    links: {
      github: 'https://github.com/bravovaldes/app_quiz2023',
      demo: 'https://youtu.be/ABC7d-ytxwQ',
      live: 'https://appquizbravo.netlify.app/'
    }
  },
  {
    title: 'Réservation Bus',
    description:
      'App mobile Jetpack Compose pour réserver des bus ; authentification et Firestore.',
    stack: ['Kotlin', 'Firebase', 'Jetpack Compose'],
    image: 'bus.png',
    links: {
      github: 'https://github.com/bravovaldes/Tryhard',
      demo: 'https://youtu.be/GbWjWL5E1gU',
      live: '#'
    },
    reason:
      'Projet personnel  ; la version publique n’est pas encore déployée.'
  }
];

/* -------------------------------------------------------------------------- */
/*                               COMPONENT                                    */
/* -------------------------------------------------------------------------- */
export default function Projects() {
  const [dialog, setDialog] = useState({ open: false, message: '' });
  const [showAll, setShowAll] = useState(false);          // ← NEW

  const openDialog = (msg) => setDialog({ open: true, message: msg });
  const closeDialog = () => setDialog({ open: false, message: '' });

  const handleClick = (url, reason) => {
    if (url === '#') openDialog(reason);
    else window.open(url, '_blank', 'noopener,noreferrer');
  };

  /* afficher seulement les 4 premiers si showAll === false */
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="bg-white text-white py-5">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-12 uppercase">
        Mes Projets
      </h2>

      {/* ---------------------------- GRID ---------------------------- */}
      <div className="grid justify-center justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
        {visibleProjects.map((p, idx) => (
          <div
            key={idx}
            className="w-[280px] sm:w-auto bg-[#1a1c23] border rounded-2xl overflow-hidden shadow-md hover:shadow-green-500/20 transition duration-300 flex flex-col"
          >
            <img
              src={`/assets/${p.image}`}
              alt={p.title}
              className="w-full h-36 sm:h-48 object-cover"
            />

            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 text-[11px] sm:text-xs">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-800/30 text-green-300 px-2 py-[2px] sm:px-3 sm:py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* --------------------- ACTION BUTTONS -------------------- */}
              <div className="mt-4 flex justify-between items-center gap-1 text-[11px] sm:text-sm">
                <button
                  onClick={() => handleClick(p.links.demo, p.reason)}
                  className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition flex items-center gap-1"
                >
                  <Play size={12} /> Démo
                </button>

                <button
                  onClick={() => handleClick(p.links.github, p.reason)}
                  className="border border-green-500 text-green-400 px-2 py-1 rounded hover:bg-green-500 hover:text-white transition flex items-center gap-1"
                >
                  <Github size={12} /> GitHub
                </button>

                <button
                  onClick={() => handleClick(p.links.live, p.reason)}
                  className="bg-green-700 text-white px-2 py-1 rounded hover:bg-green-600 transition flex items-center gap-1"
                >
                  <Globe size={12} /> En ligne
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --------------------------- MODAL --------------------------- */}
      {dialog.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative bg-white text-black rounded-xl shadow-lg max-w-sm w-full p-6">
            <button
              onClick={closeDialog}
              className="absolute -right-3 -top-3 bg-white rounded-full p-[2px] shadow hover:bg-gray-100"
            >
              <X size={18} />
            </button>

            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Pourquoi le lien est indisponible&nbsp;?
            </h3>
            <p className="text-sm leading-relaxed">{dialog.message}</p>
          </div>
        </div>
      )}

      {/* ---------------------- TOGGLE BUTTON ------------------------ */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block px-6 py-2 text-sm bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          {showAll ? 'Voir moins' : 'Voir plus de projets'}
        </button>
      </div>
    </section>
  );
}
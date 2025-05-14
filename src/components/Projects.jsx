import {
  Download,
  Star,
  MessageCircle,
  Pen,
  Globe,
  Github,
  ExternalLink,
  Play
} from 'lucide-react';

const projects = [
  {
    title: 'AgriPoule',
    description: 'Application IA ambivalente pour les éleveurs de volailles',
    stack: ['FastAPI', 'Jetpack'],
    downloads: '1000+ téléchargements',
    image: 'agripoule.jpg',
    links: {
      demo: '#',
      github: '#',
      live: 'https://agripoule.netlify.app'
    }
  },
  {
    title: 'CFOOT',
    description: 'Dashboard de performance du foot local camerounais',
    stack: ['React', 'Node.js'],
    rating: '4.5 ★',
    stars: '500 ★',
    image: 'cfoot.jpg',
    links: {
      demo: '#',
      github: '#',
      live: 'https://cfoot-app.netlify.app'
    }
  },
  {
    title: 'API de blog',
    description: 'Gestion automatisée des articles et auteurs',
    stack: ['Express', 'PostgreSQL'],
    posts: '3000+ posts',
    image: 'blog.jpg',
    links: {
      demo: '#',
      github: '#',
      live: 'https://blog-api-demo.netlify.app'
    }
  },
  {
    title: 'API de blog',
    description: 'Gestion automatisée des articles et auteurs',
    stack: ['Express', 'PostgreSQL'],
    posts: '3000+ posts',
    image: 'blog.jpg',
    links: {
      demo: '#',
      github: '#',
      live: 'https://blog-api-demo.netlify.app'
    }
  },
];


export default function Projects() {
  return (
    <section id="projects" className="bg-white text-white py-5 px-4">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-12 uppercase">
        Mes Projets
      </h2>

      {/* grille : centrée en largeur + items centrés dans leur cellule */}
      <div className="grid justify-center justify-items-center
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                      gap-4 sm:gap-5 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[280px] sm:w-auto bg-[#1a1c23] border
                       rounded-2xl overflow-hidden shadow-md
                       hover:shadow-green-500/20 transition duration-300
                       flex flex-col"
          >
            <img
              src={`/assets/${project.image}`}
              alt={project.title}
              className="w-full h-36 sm:h-48 object-cover"
            />

            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 text-[11px] sm:text-xs">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-800/30 text-green-300 px-2 py-[2px] sm:px-3 sm:py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.downloads && (
                  <p className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-gray-400 mb-[2px]">
                    <Download size={12} /> {project.downloads}
                  </p>
                )}
                {project.stars && (
                  <p className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-gray-400 mb-[2px]">
                    <Star size={12} /> {project.stars}
                  </p>
                )}
                {project.rating && (
                  <p className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-gray-400 mb-[2px]">
                    <MessageCircle size={12} /> {project.rating}
                  </p>
                )}
                {project.posts && (
                  <p className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-gray-400 mb-[2px]">
                    <Pen size={12} /> {project.posts}
                  </p>
                )}
              </div>

              <div className="mt-4 flex justify-between items-center gap-1 text-[11px] sm:text-sm">
                <a
                  href={project.links.demo}
                  className="bg-green-600 text-white px-0 py-1 rounded hover:bg-green-700 transition flex items-center gap-1 sm:gap-2"
                >
                  <Play size={12} /> Démo
                </a>
                <a
                  href={project.links.github}
                  className="border border-green-500 text-green-400 px-2 sm:px-3 py-1 rounded hover:bg-green-500 hover:text-white transition flex items-center gap-1 sm:gap-2"
                >
                  <Github size={12} /> GitHub
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white px-2 sm:px-3 py-1 rounded hover:bg-green-600 transition flex items-center gap-1 sm:gap-2"
                >
                  <Globe size={12} /> En ligne
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block px-6 py-2 text-sm bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Voir plus de projets
        </a>
      </div>
    </section>
  );
}

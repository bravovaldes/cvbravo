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
  
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white text-black py-20 px-4">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-12">PROJETS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-neutral-800 rounded-xl shadow-lg p-3 hover:shadow-green-400/20 transition h-full flex flex-col justify-between">
            <img
              src={`/assets/${project.image}`}
              alt={project.title}
              className="w-full h-40 object-contain mb-4 rounded bg-white"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4 text-sm text-green-400">
              {project.stack.map((tech, i) => (
                <span key={i} className="bg-green-900/20 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>

            {project.downloads && <p className="text-sm text-gray-300 mb-1">📥 {project.downloads}</p>}
            {project.stars && <p className="text-sm text-gray-300 mb-1">⭐ {project.stars}</p>}
            {project.rating && <p className="text-sm text-gray-300 mb-1">💬 {project.rating}</p>}
            {project.posts && <p className="text-sm text-gray-300 mb-1">📝 {project.posts}</p>}

            <div className="mt-3 flex gap-2 justify-between">
              <a
                href={project.links.demo}
                className="px-4 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Démo
              </a>
              <a
                href={project.links.github}
                className="px-4 py-1 text-xs bg-white text-green-700 font-medium rounded hover:bg-gray-100 transition"
              >
                GitHub
              </a>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 text-xs bg-green-700 text-white font-medium rounded hover:bg-green-600 transition"
              >
                Voir en ligne
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
      <a
        href="#"
        className="inline-block px-6 py-2 text-sm bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      >
        Voir plus de projets
      </a>
    </div>

    </section>
  )
}

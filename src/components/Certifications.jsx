const certifications = [
  {
    title: 'Azure Developer – Associate',
    issuer: 'Microsoft',
    date: 'Obtenue en mai 2024',
    skills: ['Azure', 'DevOps', 'App Services'],
    logo: 'azure.png',
    actions: [
      { label: 'Voir', url: '#' },
      { label: 'Vérifier', url: '#' }
    ]
  },
  {
    title: 'Azure Developer – AI',
    issuer: 'Microsoft',
    date: 'Obtenue en mai 2024',
    skills: ['Azure', 'DevOps', 'App Services'],
    logo: 'azure.png',
    actions: [
      { label: 'Voir', url: '#' },
      { label: 'Vérifier', url: '#' }
    ]
  },
  {
    title: 'React.js Moderne',
    issuer: 'Udemy',
    date: 'Obtenue en 2023',
    skills: ['React', 'Hooks', 'Tailwind'],
    logo: 'react.svg',
    actions: [
      { label: 'Voir', url: '#' },
      { label: 'Vérifier', url: '#' }
    ]
  },
  {
    title: 'Développement Web avec ASP.NET',
    issuer: 'Udemy',
    date: 'Obtenue en 2023',
    skills: ['ASP.NET', 'C#', 'Razor'],
    logo: 'asp.jpg',
    actions: [
      { label: 'Voir', url: '#' },
      { label: 'Vérifier', url: '#' }
    ]
  },
  {
    title: 'Kotlin & Jetpack Compose',
    issuer: 'Udemy',
    date: 'Obtenue en 2023',
    skills: ['Kotlin', 'Jetpack', 'UI Compose'],
    logo: 'kotlin.jpg',
    actions: [
      { label: 'Voir', url: '#' },
      { label: 'Vérifier', url: '#' }
    ]
  },
  {
    title: 'Machine Learning – Réseaux de Neurones',
    issuer: 'Udemy',
    date: 'Obtenue en 2023',
    skills: ['ML', 'Neural Nets', 'Deep Learning'],
    logo: 'tensorflow.png',
    actions: [
      { label: 'Voir', url: '#' },
      { label: 'Vérifier', url: '#' }
    ]
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white text-black py-20 px-4">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-12">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-neutral-100 border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
          >
            {/* En-tête */}
        <div className="flex items-center gap-4 mb-4">
        <div className="ring-glow-wrapper">
            <img
            src={`/assets/${cert.logo}`}
            alt={cert.title}
            className="w-12 h-12 object-contain rounded-full bg-white"
            />
        </div>
        <div>
            <h3 className="text-base font-semibold text-black">{cert.title}</h3>
            <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
        </div>
        </div>



            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map((s, i) => (
                <span key={i} className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>

            {/* Boutons */}
            <div className="flex gap-4 justify-center mt-auto">
              {cert.actions.map((action, i) => (
                <a
                  key={i}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 transition text-white text-sm font-semibold px-5 py-1.5 rounded-md"
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
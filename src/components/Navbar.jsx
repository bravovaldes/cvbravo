export default function Navbar() {
    return (
      <header className="w-full fixed top-0 left-0 z-50 bg-[#1a1c23] text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-green-500 font-bold text-lg">
            <span className="text-xl">&lt;/&gt;</span>
            <span className="text-white">MonPortfolio</span>
          </div>
  
          {/* Menu navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-green-400">Accueil</a>
            <a href="#profile" className="hover:text-green-400">Profil</a>
            <a href="#projects" className="hover:text-green-400">Projets</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </nav>
  
          {/* Actions */}
          <div className="flex items-center gap-4 text-sm">
            
            {/* Langue */}
            <div className="flex items-center gap-1">
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">FR</span>
              <span className="text-gray-400">EN</span>
            </div>
  
            {/* Icônes */}
            <div className="flex items-center gap-2 text-lg">
              <i className="fas fa-moon cursor-pointer hover:text-green-400"></i>
              <a href="https://linkedin.com/in/valdesbravo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin hover:text-green-400"></i>
              </a>
              <a href="https://github.com/bravovaldes" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github hover:text-green-400"></i>
              </a>
            </div>
  
            {/* Bouton CTA */}
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
              Bonjour
            </button>
          </div>
        </div>
      </header>
    )
  }
  
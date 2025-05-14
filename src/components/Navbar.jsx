import { useState, useEffect } from 'react';
import { Eye, Menu, X, Moon, Github } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [views, setViews] = useState(543); // Simule les vues

  useEffect(() => {
    const increment = Math.floor(Math.random() * 3) + 1;
    setViews((v) => v + increment);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#1a1c23] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-xl">&lt;/&gt;</span>
          <span>MonPortfolio</span>
        </div>

        {/* Icônes desktop visibles à droite */}
        <div className="hidden md:flex gap-3 items-center text-white text-lg">
          <Moon className="w-5 h-5 hover:text-green-400 cursor-pointer" />
          <a href="https://linkedin.com/in/valdesbravo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-green-400 text-green-400"></i>
          </a>
          <a href="https://github.com/bravovaldes" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-green-400 text-green-400" />
          </a>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          <a href="#blog" className="hover:text-green-400 text-white">Blog</a>
          <a href="#home" className="hover:text-green-400 text-white">Accueil</a>
          <a href="#profile" className="hover:text-green-400 text-white">Profil</a>
          <a href="#projects" className="hover:text-green-400 text-white">Projets</a>
          <a href="#contact" className="hover:text-green-400 text-white">Contact</a>
        </nav>

        {/* Actions & bouton CTA */}
        <div className="hidden md:flex items-center gap-4 text-sm text-white">
          <div className="flex items-center gap-1">
            <span className="bg-gray-700 px-2 py-1 rounded text-xs">FR</span>
            <span>EN</span>
          </div>

          <a
            href="#blog"
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition text-sm font-semibold"
          >
            Partager un article
          </a>
        </div>

        {/* Menu burger mobile */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex gap-2 items-center text-white text-lg">
            <Moon className="w-5 h-5 hover:text-green-400 cursor-pointer" />
            <a href="https://linkedin.com/in/valdesbravo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin hover:text-green-400 text-green-400"></i>
            </a>
            <a href="https://github.com/bravovaldes" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-green-400 text-green-400" />
            </a>
          </div>
          <div
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1c23] text-white p-6 w-full shadow-lg space-y-5">
          <div className="flex flex-col items-center text-white gap-3 text-base">
            <a href="#blog" onClick={() => setMenuOpen(false)} className="hover:text-green-400 text-white">Blog</a>
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-green-400 text-white">Accueil</a>
            <a href="#profile" onClick={() => setMenuOpen(false)} className="hover:text-green-400 text-white">Profil</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-green-400 text-white">Projets</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-green-400 text-white">Contact</a>
          </div>

          <div className="flex justify-center items-center gap-2 mt-4">
            <Eye className="w-5 h-5 text-white" />
            <span className="text-sm">{views} vues</span>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="#blog"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition text-sm font-semibold"
            >
              Partager un article
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* src/components/Navbar.jsx */
import { useState, useEffect } from 'react';
import { Eye, Menu, X, Moon, Github } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [views, setViews]       = useState(543); // Simule les vues

  useEffect(() => {
    setViews(v => v + Math.floor(Math.random() * 3) + 1);
  }, []);

  /* --- scroll doux + fermeture menu mobile --- */
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#1a1c23] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-xl">&lt;/&gt;</span>
          <span>MonPortfolio</span>
        </div>

        {/* Icônes desktop */}
        <div className="hidden md:flex gap-3 items-center text-lg">
          <Moon className="w-5 h-5 hover:text-green-400 cursor-pointer" />
          <a href="https://linkedin.com/in/valdesbravo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-green-400 text-green-400"></i>
          </a>
          <a href="https://github.com/bravovaldes" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-green-400 text-green-400" />
          </a>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#blog"     onClick={(e)=>scrollTo(e,'blog')}     className="hover:text-green-400">Blog</a>
          <a href="#home"     onClick={(e)=>scrollTo(e,'home')}     className="hover:text-green-400">Accueil</a>
          <a href="#skills"   onClick={(e)=>scrollTo(e,'skills')}   className="hover:text-green-400">Compétences</a>
          <a href="#projects" onClick={(e)=>scrollTo(e,'projects')} className="hover:text-green-400">Projets</a>
          <a href="#contact"  onClick={(e)=>scrollTo(e,'contact')}  className="hover:text-green-400">Contact</a>
        </nav>

        {/* Actions & bouton CTA */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="bg-gray-700 px-2 py-1 rounded text-xs">FR</span>
            <span>EN</span>
          </div>
          <a href="#blog" onClick={(e)=>scrollTo(e,'blog')}
             className="bg-green-600 px-4 py-1 rounded hover:bg-green-700 transition font-semibold">
            Partager un article
          </a>
        </div>

        {/* Burger mobile */}
        <div className="md:hidden flex items-center gap-8">
          <div className="flex gap-4 items-center text-lg">
            <Moon className="w-5 h-5 hover:text-green-400 cursor-pointer" />
            <a href="https://linkedin.com/in/valdesbravo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin hover:text-green-400 text-green-400"></i>
            </a>
            <a href="https://github.com/bravovaldes" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-green-400 text-green-400" />
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}  className="bg-transparent p-1 m-0 border-none outline-none appearance-none">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
         <div className="md:hidden bg-transparent text-white p-6 w-full shadow-none space-y-5">
          <div className="flex flex-col items-center gap-3 text-base">
            <a href="#blog"     onClick={(e)=>scrollTo(e,'blog')}     className="hover:text-green-400 text-white visited:text-white">Blog</a>
            <a href="#home"     onClick={(e)=>scrollTo(e,'home')}     className="text-white hover:text-green-400">Accueil</a>
            <a href="#skills"   onClick={(e)=>scrollTo(e,'skills')}   className="hover:text-green-400">Compétences</a>
            <a href="#projects" onClick={(e)=>scrollTo(e,'projects')} className="hover:text-green-400">Projets</a>
            <a href="#contact"  onClick={(e)=>scrollTo(e,'contact')}  className="hover:text-green-400">Contact</a>
          </div>

          <div className="mt-4 flex justify-center">
            <a href="#blog" onClick={(e)=>scrollTo(e,'blog')}
               className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition text-sm font-semibold">
              Partager un article
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { Github, Code } from 'lucide-react';

export default function FooterSection() {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] w-screen bg-neutral-900 text-gray-300">
      <footer className="py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Info gauche */}
          <div className="text-sm text-center md:text-left">
            <p className="text-green-500 font-semibold">Mezankou Valdes Bravo © 2025</p>
            <p>Projet développé avec passion 💚</p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4 justify-center text-xs text-white">
            <span className="flex items-center gap-1 bg-green-700 px-2 py-1 rounded-full"><Code className="w-4 h-4" /> React</span>
            <span className="flex items-center gap-1 bg-green-700 px-2 py-1 rounded-full"><Code className="w-4 h-4" /> Tailwind CSS</span>
            <span className="flex items-center gap-1 bg-green-700 px-2 py-1 rounded-full"><Code className="w-4 h-4" /> Firebase</span>
            <span className="flex items-center gap-1 bg-green-700 px-2 py-1 rounded-full"><Code className="w-4 h-4" /> Node.js</span>
          </div>

          {/* GitHub */}
          <div className="text-sm text-center md:text-right">
            <a
              href="https://github.com/bravovaldes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:underline"
            >
              <Github className="w-5 h-5" /> Voir le projet sur GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(false);

  // Intro automatique au bout de 5s
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* BOUTON FLOTTANT */}
      <button
        className="fixed bottom-5 right-5 z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-xl
                   flex items-center justify-center transition animate-pulse-once"
        onClick={() => {
          setOpen(!open);
          setShowHint(false); // on masque la bulle si on clique
        }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {/* Petit badge notification */}
        {!open && (
          <span className="absolute top-1 right-1 bg-white border border-green-600 text-green-600 text-[10px] px-[6px] py-[1px] rounded-full animate-bounce">
            !
          </span>
        )}
      </button>

      {/* BULLE DE SUGGESTION (uniquement sur desktop) */}
        {showHint && !open && (
        <div className="hidden sm:block fixed bottom-24 right-5 bg-white px-4 py-2 rounded-xl shadow-md text-sm text-gray-800 animate-fade-in">
            💬 Une question sur Valdes ?
        </div>
        )}


      {/* FENÊTRE DE CHAT */}
      {open && (
        <div
          className="fixed bottom-20 right-5 w-80 sm:w-96 bg-white text-black rounded-xl shadow-xl z-50 flex flex-col overflow-hidden
                     animate-slide-up-fade"
        >
          {/* HEADER */}
          <div className="bg-green-600 text-white px-4 py-3 font-semibold flex justify-between items-center">
            <span>🤖 Agent de Valdes</span>
            <X className="w-5 h-5 cursor-pointer hover:text-red-200" onClick={() => setOpen(false)} />
          </div>

          {/* CONTENU */}
          <div className="p-3 h-64 overflow-y-auto text-sm space-y-3">
            <div className="text-left text-green-700">🤖 Bonjour ! Pose-moi une question sur Valdes ou ses projets.</div>
            <div className="text-right text-black">👤 Quelles sont ses compétences ?</div>
            <div className="text-left text-green-700">🤖 Il maîtrise React, Angular, Spring Boot, Kubernetes et l’IA appliquée.</div>
          </div>

          {/* CHAMP DE TEXTE */}
          <div className="border-t px-3 py-2 flex gap-2 items-center bg-gray-50">
            <input
              type="text"
              placeholder="Votre question..."
              className="flex-1 px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
              onClick={() => setInput("")}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

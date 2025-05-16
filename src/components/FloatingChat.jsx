import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const TOKEN_LIMIT = 10;
const RESET_DELAY_MINUTES = 10;
const RESET_DELAY_MS = RESET_DELAY_MINUTES * 60 * 1000;

const suggestions = [
  "Pourquoi recruter Valdes ?",
  "Quels projets a-t-il réalisés ?",
  "Dans quels langages est-il compétent ?",
  "Quelle est son expérience avec l’IA ?",
  "A-t-il déjà travaillé en entreprise ?",
  "Quelles sont ses plus grandes qualités ?",
  "Est-il à l’aise avec le travail en équipe ?",
  "Quels sont ses frameworks préférés ?",
];

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "🤖 Bonjour ! Pose-moi une question sur Valdes ou ses projets." },
  ]);
  const [showHint, setShowHint] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState(TOKEN_LIMIT);
  const [randomSuggestions, setRandomSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const storedTokens = parseInt(localStorage.getItem("tokensRemaining") || `${TOKEN_LIMIT}`);
    const resetTime = parseInt(localStorage.getItem("resetTimestamp") || "0");
    const now = Date.now();

    if (now >= resetTime) {
      localStorage.setItem("tokensRemaining", `${TOKEN_LIMIT}`);
      localStorage.setItem("resetTimestamp", `${now + RESET_DELAY_MS}`);
      setTokens(TOKEN_LIMIT);
    } else {
      setTokens(storedTokens);
    }
  }, []);

  useEffect(() => {
    if (open) {
      shuffleSuggestions();
      setShowSuggestions(true);
    }
  }, [open]);

  const shuffleSuggestions = () => {
    const shuffled = Array.from(suggestions).sort(() => 0.5 - Math.random());
    setRandomSuggestions(shuffled.slice(0, 3));
  };

  const updateTokenUsage = () => {
    const newTokenCount = tokens - 1;
    setTokens(newTokenCount);
    localStorage.setItem("tokensRemaining", `${newTokenCount}`);
    if (newTokenCount <= 0) {
      localStorage.setItem("resetTimestamp", `${Date.now() + RESET_DELAY_MS}`);
    }
  };

  const sendMessageWithText = async (text) => {
    if (!text.trim()) return;

    if (tokens <= 0) {
      const resetIn = parseInt(localStorage.getItem("resetTimestamp") || "0") - Date.now();
      const minutesLeft = Math.ceil(resetIn / (1000 * 60));
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `⏳ Vous avez atteint votre limite. Nouvel accès dans ${minutesLeft} minute${minutesLeft > 1 ? "s" : ""}.` },
      ]);
      return;
    }

    const newMessages = [...messages, { from: "user", text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    updateTokenUsage();
    shuffleSuggestions();

    if (tokens <= 5 && tokens > 1) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `⚠️ Il vous reste ${tokens - 1} question${tokens - 1 > 1 ? "s" : ""}.` },
      ]);
    }

    try {
      const res = await fetch("https://agent-api-portfolio.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.answer || "🤖 Une erreur est survenue." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "🤖 Erreur de connexion à l'agent." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = () => sendMessageWithText(input);

  return (
    <>
      <button
        className="fixed bottom-5 right-5 z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition animate-pulse-once"
        onClick={() => {
          setOpen(!open);
          setShowHint(false);
        }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && (
          <span className="absolute top-1 right-1 bg-white border border-green-600 text-green-600 text-[10px] px-[6px] py-[1px] rounded-full animate-bounce">!</span>
        )}
      </button>

      {showHint && !open && (
        <div className="hidden sm:block fixed bottom-24 right-5 bg-white px-4 py-2 rounded-xl shadow-md text-sm text-gray-800 animate-fade-in">
          💬 Une question sur Valdes ?
        </div>
      )}

      {open && (
        <div className="fixed bottom-20 right-5 w-80 sm:w-96 bg-white text-black rounded-xl shadow-xl z-50 flex flex-col overflow-hidden animate-slide-up-fade">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-3 font-semibold flex justify-between items-center">
            <span>🤖 Agent de Valdes</span>
            <X className="w-5 h-5 cursor-pointer hover:text-red-200" onClick={() => setOpen(false)} />
          </div>

          {/* Suggestions */}
          {showSuggestions && randomSuggestions.length > 0 && (
            <div className="px-3 pt-2 pb-1 border-b bg-gray-50 space-y-1 text-xs max-h-[70px]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-500">Suggestions</span>
                <button onClick={() => setShowSuggestions(false)} className="text-gray-400 hover:text-red-500 text-xs">
                  ✕ Fermer
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {randomSuggestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendMessageWithText(q)}
                    className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full hover:bg-green-200 transition whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="p-3 h-64 overflow-y-auto text-sm space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`text-${msg.from === "bot" ? "left text-green-700" : "right text-black"}`}>
                {msg.from === "bot" ? "🤖 " : "👤 "}{msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-left text-green-700">
                🤖 <span className="animate-pulse">...</span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="border-t px-3 py-2 flex gap-2 items-center bg-gray-50">
            <input
              type="text"
              placeholder="Votre question..."
              className="w-full max-w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className={`bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={sendMessage}
              disabled={loading}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

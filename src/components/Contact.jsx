import React, { useState } from 'react';
import { Mail, Send, User, MessageSquareText } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xldbzbgn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Erreur réseau.");
    }
  };

  return (
    <section id="contact" className="bg-white text-black py-20 px-6">
      <div className="max-w-3xl mx-auto bg-neutral-100 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-green-600 mb-8 flex items-center gap-2 justify-center">
          <Mail className="w-6 h-6 text-green-500" /> Me contacter
        </h2>

        {submitted && (
          <div className="mb-6 text-center text-green-700 font-semibold">
            ✅ Votre message a été envoyé avec succès !
          </div>
        )}

        {error && (
          <div className="mb-6 text-center text-red-600 font-semibold">
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom complet"
              required
              className="bg-white text-black w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
            />
            <User className="absolute top-4 left-4 text-gray-400 w-5 h-5" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre adresse e-mail"
              required
              className="bg-white text-black w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
            />
            <Mail className="absolute top-4 left-4 text-gray-400 w-5 h-5" />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message"
              required
              rows={5}
              className="bg-white text-black w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
            ></textarea>
            <MessageSquareText className="absolute top-4 left-4 text-gray-400 w-5 h-5" />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}

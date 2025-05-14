import React, { useState } from 'react';
import { BookOpenText, Calendar, Clock, PencilLine, User, X } from 'lucide-react';

const initialBlogs = [
  {
    title: 'Comment j’ai appris React en 30 jours',
    content: 'Dans cet article, je vous partage mon parcours et les ressources que j’ai utilisées pour maîtriser les bases de React...',
    author: 'Invité anonyme',
    date: new Date().toLocaleDateString(),
    readTime: '3 min',
    views: 12
  },
  {
    title: 'Travailler avec Firebase Auth + Firestore',
    content: 'Dans ce post, on explore comment intégrer Firebase à une app React et sécuriser les routes publiques/privées...',
    author: 'bravovaldes',
    date: new Date().toLocaleDateString(),
    readTime: '4 min',
    views: 27
  }
];

export default function BlogSection() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [form, setForm] = useState({ title: '', content: '', author: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ...form,
      date: new Date().toLocaleDateString() || 'Aujourd’hui',
      views: Math.floor(Math.random() * 100),
      readTime: `${2 + Math.floor(form.content.length / 150)} min`
    };
    setBlogs([newBlog, ...blogs]);
    setForm({ title: '', content: '', author: '' });
    setShowModal(false);
  };

  return (
    <section className="bg-white text-black py-20 px-6 relative">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-12 flex items-center justify-center gap-2">
        <BookOpenText className="w-6 h-6 text-green-500" /> Blog collaboratif
      </h2>

      <div className="text-center mb-12">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-lg font-semibold transition"
        >
          <PencilLine className="w-4 h-4" /> Écrire un article
        </button>
      </div>

      {/* Modal formulaire */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white text-black w-full max-w-xl rounded-xl shadow-lg p-6 relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-6 text-center text-neutral-800 flex items-center justify-center gap-2">
              <PencilLine className="w-5 h-5" /> Publier un article
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Titre de l’article"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                name="content"
                placeholder="Contenu de l’article"
                value={form.content}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="author"
                placeholder="Votre nom ou pseudo (facultatif)"
                value={form.author}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Publier l’article
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Affichage des articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-neutral-900 text-white p-5 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-green-400/20 transition"
          >
            <div>
              <h4 className="text-xl font-bold text-green-400 mb-2">{blog.title}</h4>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">{blog.content}</p>
            </div>
            <div className="text-xs text-gray-400 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <User className="w-4 h-4" /> {blog.author || 'Anonyme'}
              </div>
              <div className="flex gap-2 items-center">
                <Calendar className="w-4 h-4" /> {blog.date}
              </div>
              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4" /> {blog.readTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
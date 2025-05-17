import React, { useState, useEffect } from 'react';
import {
  BookOpenText,
  Calendar,
  Clock,
  PencilLine,
  User,
  X,
  ThumbsUp,
  ThumbsDown,
  Eye
} from 'lucide-react';
import axios from 'axios';

const API_URL = 'https://blogapi-qcj8.onrender.com/posts';

export default function BlogSection() {
  const ITEMS_PER_PAGE = 4;
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => setCurrentPage(page);

  const handleLike = async (id) => {
    const liked = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    if (liked.includes(id)) {
      alert('Vous avez déjà liké cet article.');
      return;
    }
    try {
      const res = await axios.put(`${API_URL}/${id}/like`);
      const updated = blogs.map(post => post.id === id ? res.data : post);
      setBlogs(updated);
      localStorage.setItem('likedPosts', JSON.stringify([...liked, id]));
    } catch (err) {
      console.error('Erreur lors du like :', err);
    }
  };

  const handleDislike = async (id) => {
    const disliked = JSON.parse(localStorage.getItem('dislikedPosts') || '[]');
    if (disliked.includes(id)) {
      alert('Vous avez déjà disliké cet article.');
      return;
    }
    try {
      const res = await axios.put(`${API_URL}/${id}/dislike`);
      const updated = blogs.map(post => post.id === id ? res.data : post);
      setBlogs(updated);
      localStorage.setItem('dislikedPosts', JSON.stringify([...disliked, id]));
    } catch (err) {
      console.error('Erreur lors du dislike :', err);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.title.length > 25) {
      alert('Le titre ne peut pas dépasser 25 caractères.');
      return;
    }
    if (form.author.length > 10) {
      alert("Le nom d'auteur ne peut pas dépasser 10 caractères.");
      return;
    }
    const newPost = {
      title: form.title,
      content: form.content,
      author: form.author || 'Anonyme',
    };
    try {
      const res = await axios.post(API_URL, newPost);
      setBlogs([res.data, ...blogs]);
      setForm({ title: '', content: '', author: '' });
      setShowModal(false);
      setCurrentPage(1);
    } catch (err) {
      console.error('Erreur lors de la création du post :', err);
    }
  };

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setBlogs(res.data))
      .catch(err => console.error('Erreur de chargement:', err));
  }, []);

  return (
    <section className="bg-white text-black py-20 px-0 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto ">
         <h2 className="text-3xl font-bold text-green-600 text-center mb-8 flex items-center justify-center gap-2">
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
                placeholder="Titre de l’article (max 25 caractères)"
                value={form.title}
                onChange={handleChange}
                required
                className="bg-white text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                name="content"
                placeholder="Contenu de l’article"
                value={form.content}
                onChange={handleChange}
                required
                rows={5}
                className="bg-white text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="author"
                placeholder="Votre nom ou pseudo (facultatif, max 15 caractères)"
                value={form.author}
                onChange={handleChange}
                className="bg-white text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mx-auto px-4 ">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-neutral-900  w-full text-white p-5 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-green-400/20 transition  overflow-hidden"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="text-lg font-bold text-green-400 mb-2 truncate">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-300 mb-2 leading-relaxed line-clamp-4 overflow-hidden">
                  {blog.content}
                </p>

              </div>
              <div>
                <button
                  onClick={() => window.location.href = `/blog/${blog.id}`}
                  className="text-xs text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded shadow mb-3"
                >
                  Voir plus
                </button>

                <div className="text-xs text-gray-400 flex flex-wrap justify-between items-center gap-y-2">
                  <div className="flex gap-2 items-center">
                    <User className="w-4 h-4" />
                    {blog.author.length > 10 ? blog.author.slice(0, 10) + '...' : blog.author}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Calendar className="w-4 h-4" /> {blog.date}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Clock className="w-4 h-4" /> {blog.readTime}
                  </div>
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => handleLike(blog.id)}
                      className="text-xs flex items-center gap-1 text-green-400 hover:text-green-300 transition"
                    >
                      <ThumbsUp className="w-4 h-4" /> {blog.likes}
                    </button>
                    <button
                      onClick={() => handleDislike(blog.id)}
                      className="text-xs flex items-center gap-1 text-red-400 hover:text-red-300 transition"
                    >
                      <ThumbsDown className="w-4 h-4" /> {blog.dislikes}
                    </button>
                     <div className="text-xs flex items-center gap-1 text-gray-300">
                      <Eye className="w-4 h-4" /> {blog.views}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-14 flex justify-center items-center gap-1 text-sm px-1">
          <button
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === 1
                ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition'
            }`}
          >
            Précédent
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`w-9 h-9 rounded-lg border ${
                currentPage === i + 1
                  ? 'bg-green-600 text-white border-green-600'
                  : 'border-gray-300 text-gray-600 hover:bg-green-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === totalPages
                ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition'
            }`}
          >
            Suivant
          </button>
        </div>
      )}
       </div>
    </section>
  );
}

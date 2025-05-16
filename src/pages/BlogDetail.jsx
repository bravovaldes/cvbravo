import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Calendar,
  Clock,
  Eye,
  ThumbsUp,
  ThumbsDown,
  User,
  ArrowLeft
} from 'lucide-react';

const API_URL = 'https://blogapi-qcj8.onrender.com/posts';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');

  const fetchPost = () => {
    axios.get(`${API_URL}/${id}`)
      .then(res => setPost(res.data))
      .catch(() => setError("Article introuvable..."));
  };

  useEffect(() => {
    fetchPost();
    axios.put(`${API_URL}/views/${id}`).catch(() =>
      console.error("Erreur lors de l'incrémentation des vues")
    );
  }, [id]);

  const handleLike = async () => {
    const liked = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    if (liked.includes(id)) {
      alert("Vous avez déjà liké cet article.");
      return;
    }
    await axios.put(`${API_URL}/${id}/like`);
    localStorage.setItem('likedPosts', JSON.stringify([...liked, id]));
    fetchPost();
  };

  const handleDislike = async () => {
    const disliked = JSON.parse(localStorage.getItem('dislikedPosts') || '[]');
    if (disliked.includes(id)) {
      alert("Vous avez déjà disliké cet article.");
      return;
    }
    await axios.put(`${API_URL}/${id}/dislike`);
    localStorage.setItem('dislikedPosts', JSON.stringify([...disliked, id]));
    fetchPost();
  };

  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!post) return <p className="text-center text-gray-500 mt-10">Chargement...</p>;

  return (
    <main className="min-h-screen  py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm text-green-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la liste
        </button>

        <h1 className="text-4xl font-extrabold text-neutral-900 mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</div>
          <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</div>
          <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</div>
          <div className="flex items-center gap-1"><Eye className="w-4 h-4" /> {post.views}</div>
        </div>

        <article className="text-lg text-gray-800 leading-8 whitespace-pre-wrap mb-10">
          {post.content}
        </article>

        <div className="flex gap-6 text-sm text-gray-600">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 hover:bg-green-200 transition text-green-700 font-semibold"
          >
            <ThumbsUp className="w-4 h-4" /> {post.likes}
          </button>
          <button
            onClick={handleDislike}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 hover:bg-red-200 transition text-red-600 font-semibold"
          >
            <ThumbsDown className="w-4 h-4" /> {post.dislikes}
          </button>
        </div>
      </div>
    </main>
  );
}

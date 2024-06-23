import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import { FaStar } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/blogs/details/${slug}`);
        setPost(response.data);
        setComments(response.data.comments); // Mengambil komentar dari respons blog
      } catch (error) {
        setError('Error fetching the blog post.');
        console.error(error);
      }
    };

    fetchPost();
  }, [slug]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/blogs/${post.id}/comments`);
      setComments(response.data);
    } catch (error) {
      setError('Error fetching comments.');
      console.error(error);
    }
  };

  const handleCommentSubmit = async () => {
    const userId = localStorage.getItem('id');
    if (!userId) {
      // Jika user belum login, arahkan ke halaman login
      navigate('/login');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_TBN_API_URL}/api/blogs/${post.id}/comments`, {
        blog_id: post.id,
        user_id: userId,
        comment: newComment,
        stars: rating,
      });

      setNewComment('');
      setRating(0);
      fetchComments();
    } catch (error) {
      setError('Error submitting comment.');
      console.error(error);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return (
      <div>
        <NavbarComponent />
        <div className="p-12">
          <Skeleton height={400} className="mt-16 px-24 justify-center" />
          <Skeleton height={50} className="mt-4 justify-center" />
          <Skeleton height={50} className="mt-4 justify-center" />
          <Skeleton height={50} className="mt-4 justify-center" />
          <Skeleton height={50} className="mt-4 justify-center" />
          <Skeleton height={50} className="mt-4 justify-center" />
          <Skeleton height={50} className="mt-4 justify-center" />
          <Skeleton height={50} className="mt-4 justify-center" />
          <Skeleton height={50} className="mt-4 justify-center" />
          <Skeleton height={150} className="mt-4 justify-center" />
        </div>
        <FooterComponent />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>TBN Indonesia - Blog Detail</title>
        </Helmet>
        <NavbarComponent />
        <section>
          <div className="flex flex-col w-full py-24 items-center">
            <div className="flex w-4/5 mb-8">
              <div className="flex items-center gap-x-4">
                <RiAccountCircleLine className="text-4xl mr-1 text-[#092040]" />
                <p className="font-semibold text-gray-900">{post.user.name}</p>
                <p className="font-normal text-gray-900">{new Date(post.created_at).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${post.image_path}`} alt="blogimage" className="w-4/5 xl:w-3/5" />
            </div>
            <div className="w-4/5">
              <p className="font-semibold text-gray-900 text-3xl mt-8">{post.title}</p>
              <div className="font-light text-gray-900 text-xl mt-4 text-justify description" dangerouslySetInnerHTML={{ __html: post.desc }}></div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="w-4/5">
            <p className="xl:text-4xl text-lg font-bold">Comments</p>
            {comments.map((comment) => (
              <div key={comment.id} className="flex flex-col items-start justify-start mb-6">
                <div className="flex flex-row justify-center items-center xl:mt-12 mt-8">
                  <RiAccountCircleLine className="text-4xl mr-1 text-[#092040]" />
                  <div className="ml-4">
                    <p className="font-bold">{comment.user ? comment.user.name : 'Unknown'}</p>
                    <p className="font-light">{new Date(comment.created_at).toLocaleDateString()}</p>
                    <div className="flex">
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return <FaStar key={i} className="star" color={ratingValue <= comment.stars ? '#ffc107' : '#e4e5e9'} size={20} />;
                      })}
                    </div>
                  </div>
                </div>
                <p className="text-xl mt-4">{comment.comment}</p>
              </div>
            ))}
            <p className="xl:text-4xl text-lg font-bold xl:mt-24 mt-12">Leave a Comment</p>
            <div className="flex flex-col">
              <div className="flex mt-8 mb-6 justify-center">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i} className="cursor-pointer">
                      <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} className="hidden" />
                      <FaStar className="star text-3xl" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)} />
                    </label>
                  );
                })}
              </div>
              <textarea type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Write your comments here..." className="w-full h-48 mb-6 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black p-4" />
              <button onClick={handleCommentSubmit} className="self-center bg-[#092040] text-white px-8 py-4 rounded-2xl mb-24">
                Submit
              </button>
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    </HelmetProvider>
  );
};

export default BlogDetailPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

const BlogListPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/blogs`);
        const postsData = response.data;

        // Fetch comments count for each post
        const postsWithCommentsCount = await Promise.all(
          postsData.map(async (post) => {
            const commentsResponse = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/blogs/${post.id}/comments`);
            return { ...post, commentsCount: commentsResponse.data.length };
          })
        );

        setPosts(postsWithCommentsCount);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <div className="flex-grow">
        <section>
          <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center">
              <div className="mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Blog</h2>
              </div>
              {loading ? (
                <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {Array(6).fill().map((_, index) => (
                    <article key={index} className="flexflex-col items-start justify-between w-[350]">
                      <Skeleton width={350} height={196} />
                      <div className='flex flex-row mt-2 gap-2'>
                        <Skeleton width={90} height={20} />
                        <Skeleton width={128} height={20} />
                      </div>
                      <Skeleton width={350} height={24} className='mt-6 mb-4' />
                      <Skeleton width={350} height={12} count={3} />
                      <div className='flex felx-row justify-between items-center mt-4'>
                        <div className='flex flex-row justify-center items-center gap-2'>
                          <Skeleton width={40} height={40} circle='true' />
                          <Skeleton width={100} height={14} />
                        </div>
                        <Skeleton width={128} height={40} />
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                posts.length === 0 ? (
                  <article className="bg-gray-100 rounded-lg overflow-hidden shadow-md mt-8 p-6 text-center col-span-full">
                    <div className="font-bold text-xl mb-2 text-gray-800">Belum ada blog tersedia</div>
                  </article>
                ) : (
                  <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                      <article key={post.id} className="flex max-w-xl flex-col items-start justify-start">
                        <div>
                          <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${post.image_path}`} alt="" className="rounded-xl mb-4 aspect-video object-cover" />
                        </div>
                        <div className="flex items-center gap-x-4 text-xs">
                          <time dateTime={new Date(post.created_at).toISOString()} className="text-gray-500">
                            {new Date(post.created_at).toLocaleDateString()}
                          </time>
                          <p className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">{post.commentsCount} Comments</p>
                        </div>
                        <div className="group relative">
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <NavLink to={`/blog/${post.id}`}>
                              <span className="absolute inset-0" />
                              {post.title}
                            </NavLink>
                          </h3>
                          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{ __html: post.desc }}></p>
                        </div>
                        <div className="text-sm leading-6 mt-8 flex flex-row w-full h-full items-end justify-between relative bottom-0">
                          <div className="relative flex items-center gap-x-4">
                            
                            <img
                              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                              className="h-10 w-10 rounded-full bg-gray-50"
                            />
                            <p className="font-semibold text-gray-900">
                              <NavLink to="#">
                                <span className="absolute inset-0" />
                                {post.user.name}
                              </NavLink>
                            </p>
                          </div>
                          <NavLink to={`/blog/${post.id}`} className="bg-[#195A94] text-white px-8 py-2 rounded-xl">
                            Read More
                          </NavLink>
                        </div>
                      </article>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
};

export default BlogListPage;

import React from 'react';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';
import { NavLink } from 'react-router-dom';

const posts = [
  {
    id: 1,
    image:
      'https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg',
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    comment: '134 Comments',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    image:
      'https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg',
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    comment: '134 Comments',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    image:
      'https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg',
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    comment: '134 Comments',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    image:
      'https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg',
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    comment: '134 Comments',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    image:
      'https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg',
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    comment: '134 Comments',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    image:
      'https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg',
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    comment: '134 Comments',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];

const blog_list_page = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Blog List*/}
      <section>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 ">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div>
                    <img src={post.image} alt="" className="rounded-xl mb-4" />
                  </div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{post.comment}</a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="text-sm leading-6 mt-8 flex flex-row w-full items-center justify-between">
                    <div className="relative  flex items-center gap-x-4">
                      <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />

                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                    </div>
                    <NavLink to={`/blog/${post.id}`} className="bg-[#195A94] text-white px-8 py-2 rounded-xl">
                      Read More
                    </NavLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};

export default blog_list_page;

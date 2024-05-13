import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { NavLink } from 'react-router-dom';

const BlogDetailPage = () => {
  const posts = [
    {
      id: 1,
      image:
        "https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg",
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      comment: "134 Comments",
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Isi Blog */}
      <section>
        <div>
          {posts.map((post) => (
            <div className="flex flex-col w-screen py-24 items-center">
              <div className="flex w-4/5 mb-8">
                <div className="flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />

                  <p className="font-semibold text-gray-900">
                    {post.author.name}
                  </p>
                  <p className="font-normal text-gray-900">{post.date}</p>
                </div>
              </div>
              <div className="flex w-screen items-center justify-center">
                <img src={post.image} alt="" className="w-4/5" />
              </div>
              <div className="w-4/5">
                <p className="font-semibold text-gray-900 text-3xl mt-8">
                  {post.title}
                </p>
                <p className="font-light text-gray-900 text-xl mt-4">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Section 2 - Komentar */}
      <section className="flex justify-center items-center">
        <div className="w-4/5">
          <p className="text-4xl font-bold">Komentar</p>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row justify-center items-center mt-12">
              <img src='https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png' alt="" className="h-12 w-12 rounded-full"/>
              <div className="ml-4">
                <p className="font-bold">Achmad</p>
                <p className="font-light">8 Mei 2024</p>
              </div>
            </div>
            <p className="text-xl mt-4">
              Mantappppp, menyala abangkuhhh. Ceritanya bagus sekali, jadi
              tertarik ingin bergabung dengan TBN Alliance.{" "}
            </p>
          </div>
          <p className="text-4xl font-bold mt-24">Tinggalkan Komentar</p>
          <div className="flex flex-col">
            <textarea type="text" className="w-full h-48 my-12 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black p-4 "/>
            <button className='bg-[#092040] text-white px-8 py-4 rounded-2xl mb-24'>Kirim</button>
          </div>
        </div>
      </section>
      <FooterComponent/>
    </div>
  );
};

export default BlogDetailPage;

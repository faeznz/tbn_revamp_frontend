import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { NavLink } from "react-router-dom";

import BannerUpcoming from "../../assets/images/event/upcoming/upcoming_bannner.png";
import TransformationalSalesConference from "../../assets/images/event/upcoming/transformation_sales_conference.png";
import SalesBoard from "../../assets/images/event/upcoming/sales-board.png";
import EloyZalukhu from "../../assets/images/event/upcoming/eloy_zalukhu.png";
import JohnGriffin from "../../assets/images/event/upcoming/john_griffin.png";
import TeddyHartono from "../../assets/images/event/upcoming/teddy_hartono.png";

const UpcomingEventPage = () => {
  const posts = [
    {
      id: 1,
      image:
        "https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg",
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      comment: "134 Comments",
    },
    {
      id: 1,
      image:
        "https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg",
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      comment: "134 Comments",
    },
    {
      id: 1,
      image:
        "https://cdn0-production-images-kly.akamaized.net/3p6o5uA4XVyfN2-s8H-GVZDgGOQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245217/original/027457600_1600754989-photo-1542744173-8e7e53415bb0__4_.jpg",
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      comment: "134 Comments",
    },
    // More posts...
  ];

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Banner */}
      <section className="w-full h-full">
        {/* Image for main banner */}
        <div className=" absolute aspect-21/9 w-full bg-[#131313]/40 top-0"></div>
        <img
          src={BannerUpcoming}
          alt=""
          className="w-full aspect-21/9 bg-center bg-cover top-0"
        />
        <div className="w-full h-5/6 top-0 absolute flex flex-col justify-center p-24 items-center">
          <div className="  p-8 flex flex-col justify-center items-center rounded-2xl">
            <p className="text-white font-bold text-5xl mb-12">
              Transformational Sales Conference
            </p>
            <p className="text-white font-bold text-2xl">10 AGUSTUS 2024</p>
            <p className="text-white font-light text-xl">
              MENARA DANAREKSA (ARYA NUSA BALLROOM)
            </p>
            <p className="text-white font-light text-xl">JAKARTA</p>
            <div className="flex flex-row gap-8 mt-12">
              <button className="bg-[#005F94] h-12 w-32 text-white font-bold rounded-full text-sm">
                REGISTER
              </button>
              <button className="bg-[#005F94] h-12 w-32 text-white font-bold rounded-full text-sm">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 -  Transformational Sales Conference 2024*/}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-sm font-medium">- Post Conference Highlights -</p>
        <p className="text-4xl mb-12 font-medium">
          Transformational Sales Conference 2024
        </p>
        <img
          src={TransformationalSalesConference}
          alt=""
          className="w-3/5 aspect-16/9 bg-center bg-cover top-14"
        />
        <div className="mx-24 flex flex-col justify-center items-center my-24">
          <p className="text-xl mb-12 font-light underline underline-offset-2">
            About the Conference
          </p>
          <div className="flex flex-row mx-12">
            <img src={SalesBoard} alt="" className="w-1/4 mr-12" />
            <p className="text-justify font-light">
              <span>
                "Don't find customers for your products, find products for your
                customers." ~ Seth Godin
              </span>
              <br />
              <br /> Discover the future of sales at our upcoming conference,
              "From Transaction to Transformation: The New Sales Paradigm." Join
              us for dynamic keynote presentations, interactive workshops,
              engaging panel discussions, and an exhibitor showcase featuring
              the latest tools and technologies. Learn from industry experts,
              connect with like-minded professionals, and gain actionable
              strategies to thrive in today's evolving sales landscape. Don't
              miss out on this transformative experience – register now to
              secure your spot!
            </p>
          </div>
        </div>
      </section>
      {/* Section 3 -  Speaker*/}
      <section className="bg-[#C3D21F] flex flex-col rounded-t-[100px] py-24">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl mb-12 font-light underline underline-offset-2">
            The Speakers
          </p>
          <div className="flex flex-row w-screen justify-center items-center gap-12">
            <img src={EloyZalukhu} alt="" className="w-1/4" />
            <img src={JohnGriffin} alt="" className="w-1/4" />
            <img src={TeddyHartono} alt="" className="w-1/4" />
          </div>
        </div>
      </section>
      {/* Section 3 -  Who We Are*/}
      <section className="bg-[#C3D21F] flex flex-col">
        <div className="flex flex-col items-center justify-center bg-[#F2EEEA] rounded-t-[100px] py-24">
          <p className="text-2xl mb-12">The Last Event</p>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-6xl flex-col items-start justify-between"
              >
                <div className="flex flex-row justify-center items-start">
                  <img src={post.image} alt="" className="rounded-xl mr-4" />
                  <div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="text-sm leading-6 mt-8 flex flex-row w-full items-center justify-between">
                      <NavLink
                        to={`/event/${post.id}`}
                        className="bg-[#195A94] text-white px-8 py-2 rounded-xl"
                      >
                        Look up the event
                      </NavLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default UpcomingEventPage;

import React from "react";
import assetsManajement from "../components/assets_manajement";
import logoTbn from "../assets/LOGO_TBN_ALLIANCE.png";
import bannerHomepage from "../assets/banner-homepage.png";
import videoHomepage from "../assets/video_homepage.png";
import iconWatchVideo from "../assets/icon_watch_video.png";
import whoWeAreImg from "../assets/who_we_are.png";
import missionBanner from "../assets/mission.png";
import ourPartner from "../assets/our_partner.png";
import tbnWorldwide from "../assets/tbn_worldwide.png";

function home_page() {
  return (
    <div>
      {/* Navbar */}
      <div className="flex fixed justify-between items-center bg-[#0350C4] w-full h-16 px-8 z-10">
        <div>
          <img src={logoTbn} alt="Logo TBN Alliance" className="h-10" />
        </div>
        <div className="flex flex-row gap-4 items-center text-white">
          <a className="">Home</a>
          <a>About</a>
          <a>Blog</a>
          <a>Media</a>
          <button className="bg-white text-black px-6 py-2 rounded-2xl">
            Register
          </button>
        </div>
      </div>
      {/* Section 1 - Main */}
      <section className="w-full h-full">
        {/* Image for main banner */}
        <img
          src={bannerHomepage}
          alt=""
          className="w-full aspect-21/9 bg-center bg-cover top-0"
        />
        <div className="w-full h-full top-0 absolute flex justify-center items-center">
          <div className="w-3/5 bg-slate-300/50 p-8 flex flex-col justify-center items-center rounded-2xl">
            <h1 className="text-6xl mb-8">Lorem Ipsum</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              faucibus nibh sit amet est faucibus consequat non sit amet risus.
              Maecenas tristique sit amet dui eget euismod. Donec faucibus
              molestie turpis, eu tempus metus facilisis a. Suspendisse purus
              mi, rhoncus et dolor nec, tempor sodales ex. Phasellus vitae
              aliquam magna. Morbi ipsum dui, faucibus sit amet nunc et, rhoncus
              finibus ipsum. Nulla eget odio vitae ipsum consequat imperdiet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              ipsum accumsan, fringilla turpis sit amet, vulputate massa.
              Pellentesque quis ipsum blandit, pellentesque eros quis, euismod
              libero. Praesent vestibulum augue bibendum, placerat leo et,
              tincidunt mi. Fusce tristique mattis metus, et gravida lorem
              condimentum sed. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Interdum et malesuada
              fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </section>
      {/* Section 2 -  About Us*/}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-3xl mb-12">About Us</p>
        <div className="flex flex-row px-24 pb-32 justify-between items-center">
          <img
            src={videoHomepage}
            alt=""
            className="w-2/5 aspect-16/9 bg-center bg-cover top-14"
          />
          <div className="mx-24 flex flex-col justify-center items-center">
            <p className="text-5xl mb-12">TBN ALLIANCE</p>
            <p className="text-justify">
              TBN Alliance is a global network focused on poverty alleviation
              through enterprise, emphasizing multi-faith, multi-sector
              partnerships. Over the next five years, they plan to launch 1,800
              ventures, creating around 11,850 new jobs in emerging markets.
            </p>
            <div className="mt-12 flex flex-row">
              <button className="bg-[#DC8400] px-6 py-1 rounded-full mr-8">
                Register
              </button>
              <div className="flex flex-row gap-2 justify-center items-center">
                <img src={iconWatchVideo} alt="" className="w-8" />
                <a href="">Watch Video</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 -  Who We Are*/}
      <section className="bg-[#0350C4] w-full h-full flex flex-row">
        <div className="flex items-center justify-center px-24 py-24">
          <img src={whoWeAreImg} alt="" className="w-2/5" />
          <div className="bg-[#EDEDED] w-2/5 h-full flex flex-col justify-center items-center px-12">
            <p className="text-2xl mb-8">WHO WE ARE</p>
            <p className="font-light text-justify">
              TBN Alliance is a global network of purpose-driven entrepreneurs,
              impact investors and capacity builders who take an enterprise
              approach to alleviate poverty in low-income and underserved
              communities.
            </p>
            <p className="font-light mt-4 text-justify">
              Over the next five years,{" "}
              <span className="font-semibold">
                {" "}
                TBN Alliance will launch an estimated 1,800 ventures,
              </span>{" "}
              providing approximately 11,850 new jobs in frontier and emerging
              markets globally.
            </p>
          </div>
        </div>
      </section>
      {/* Section 4 - Mission */}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-3xl mb-12">Mission</p>
        <div className="flex flex-col px-24 pb-32 justify-between items-center">
          <p className="text-justify font-light">
            The Alliance leverages the particular strengths of our partners,
            establishing a global platform and resource hub capable of scaling a
            distinctive model of economic and community development with a
            proven record of transformational impact
            <br />
            <br />
            Tapping the power of business, our solutions focus on:
          </p>
          <img src={missionBanner} alt="" className="my-8" />
          <p>
            The TBN Alliance provides an environment for purpose-driven
            enterprises to flourish so they may be catalysts for reducing
            poverty and stewarding environmental sustainability. We do this by
            fostering a social movement for good that produces tangible results,
            helping social entrepreneurs thrive, and directly influencing the
            well-being of families and communities.
            <br />
            <br />
            Our goal is lofty! We seek to catalyze an impact movement - people
            across the globe who are passionate about leveraging the power of
            business for the greater good, for true social transformation,
            geared especially towards support of SMEs in frontier and emerging
            markets.
          </p>
        </div>
      </section>
      {/* Section 4 - Our Partner */}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-3xl">Our Partner</p>
        <div className="flex flex-col px-24 pb-32 justify-between items-center">
          <img src={ourPartner} alt="" className="" />
          <img src={tbnWorldwide} alt="" className="" />
        </div>
      </section>
      {/* Section 3 -  Who We Are*/}
      <section className="bg-[#0350C4] w-full h-full flex flex-col">
        <div className="flex flex-col items-center justify-center px-24 py-24">
          <p className="text-[#FBFDFF] font-semibold text-4xl mb-12">BE PART OF THE COMMUNITY</p>
          <form className="w-full flex flex-col items-center">
            <div className="w-3/4 flex items-start justify-start">
              <p className="text-[#FBFDFF] font-medium">Your</p>
            </div>
            <input type="text" className="w-3/4 h-10 rounded-md" />
            <div className="w-3/4 flex items-start justify-start mt-8">
              <p className="text-[#FBFDFF] font-medium">Your</p>
            </div>
            <input type="text" className="w-3/4 h-10 rounded-md" />
            <div className="w-3/4 flex items-start justify-start mt-8">
              <p className="text-[#FBFDFF] font-medium">Join Us</p>
              <div>
                <p>Investasi</p>
                <input type="checkbox" />
                <p>Capacity Builder</p>
                <input type="checkbox" />
                <p>Investasi</p>
                <input type="checkbox" />
                <p>Investasi</p>
                <input type="checkbox" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default home_page;

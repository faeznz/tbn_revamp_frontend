import React from "react";
import bannerHomepage from "../assets/banner-homepage.png";
import videoHomepage from "../assets/video_homepage.png";
import iconWatchVideo from "../assets/icon_watch_video.png";
import whoWeAreImg from "../assets/who_we_are.png";
import missionBanner from "../assets/mission_tbn.png";
import ourPartner from "../assets/our_partner.png";
import tbnWorldwide from "../assets/peta_tbn.png";
import NavbarComponent from "../components/navbar_component";
import FooterComponent from "../components/footer_component";

var token = localStorage.getItem('token');
console.log(token);

function HomePage() {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Main */}
      <section className="w-full h-full">
        {/* Image for main banner */}
        <div className="absolute aspect-video lg:aspect-21/9 w-full lg:bg-[#131313]/40 bg-[#131313]/60 top-0 pt-12"></div>
        <img src={bannerHomepage} alt="" className="w-full aspect-video lg:aspect-21/9 bg-center bg-cover top-0 pt-12" />
        <div className="w-full lg:h-5/6 sm:h-1/5 top-0 absolute flex flex-row lg:justify-start justify-center lg:p-24 pt-12 items-center">
          <div className="w-1 h-3/5 lg:bg-[#FFB400] sm:bg-transparent"></div>
          <div className="lg:w-3/5 sm:w-full p-8 flex flex-col justify-center lg:items-start items-center rounded-2xl">
            <p className="text-white font-bold lg:text-5xl text-md lg:mb-12 sm:mb-4 lg:text-left text-center">
              Transformational <br /> Business Network (TBN) Alliance
            </p>
            <p className="text-white font-light lg:text-3xl text-sm lg:text-left text-center">
              Fighting Poverty in Frontier Markets <br /> Across the Globe.
            </p>
          </div>
        </div>
      </section>
      {/* Section 2 -  About Us*/}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="lg:text-4xl text-2xl mb-12 font-medium">ABOUT US</p>
        <div className="flex lg:flex-row flex-col lg:px-24 px-8 lg:pb-32 pb-12 justify-between items-center">
          <img src={videoHomepage} alt="" className="lg:w-2/5 w-full aspect-16/9 bg-center bg-cover top-14" />
          <div className="lg:mx-24 mx-8 flex flex-col justify-center items-center">
            <p className="lg:text-5xl text-2xl mb-12 lg:mt-0 mt-8">TBN ALLIANCE</p>
            <p className="text-justify">
              TBN Alliance is a global network focused on poverty alleviation through enterprise, emphasizing multi-faith, multi-sector partnerships. Over the next five years, they plan to launch 1,800 ventures, creating around 11,850 new
              jobs in emerging markets.
            </p>
            <div className="mt-12 flex flex-row">
              <button className="bg-[#DC8400] px-6 py-1 rounded-full mr-8">Register</button>
              <div className="flex flex-row gap-2 justify-center items-center">
                <img src={iconWatchVideo} alt="" className="w-8" />
                <a href="">Watch Video</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 -  Who We Are*/}
      <section className="bg-[#F6CF55] flex flex-row lg:rounded-t-[100px] rounded-t-[50px]">
        <div className="flex lg:flex-row flex-col items-center justify-center lg:px-24 px-8 lg:py-0 py-12 lg:h-screen">
          <img src={whoWeAreImg} alt="" className="h-3/5" />
          <div className="bg-[#EDEDED] lg:h-3/5 flex flex-col justify-center items-center px-12 lg:py-0 py-8">
            <p className="lg:text-4xl text-2xl mb-8 font-medium">WHO WE ARE</p>
            <p className="font-light text-justify">
              TBN Alliance is a global network of purpose-driven entrepreneurs, impact investors and capacity builders who take an enterprise approach to alleviate poverty in low-income and underserved communities.
            </p>
            <p className="font-light mt-4 text-justify">
              Over the next five years,
              <span className="font-semibold">TBN Alliance will launch an estimated 1,800 ventures,</span>
              providing approximately 11,850 new jobs in frontier and emerging markets globally.
            </p>
          </div>
        </div>
      </section>
      {/* Section 4 - Mission */}
      <section className="flex flex-col justify-center items-center bg-[#F6CF55]">
        <div className="flex flex-col lg:pt-24 pt-12 justify-center items-center bg-white lg:rounded-t-[100px] rounded-t-[50px]">
          <p className="lg:text-4xl text-2xl lg:mb-12 font-medium">MISSION</p>
          <div className="flex lg:flex-row flex-col lg:px-32 px-8 lg:pb-32 justify-center items-center gap-8">
            <p className="text-justify font-light lg:w-2/5 w-full lg:leading-loose">
              The TBN Alliance nurtures purpose-driven businesses to thrive, aiming to reduce poverty and promote environmental sustainability. We foster a global movement for social good, empowering entrepreneurs, and directly benefiting
              families and communities. Our ambitious aim is to ignite an impact movement, uniting people worldwide to leverage business for social transformation, particularly supporting SMEs in emerging markets.
            </p>
            <img src={missionBanner} alt="" className="lg:w-2/5 w-4/5" />
          </div>
        </div>
      </section>
      {/* Section 4 - Our Partner */}
      <section className="flex flex-col mt-12 justify-center items-center ">
        <p className="lg:text-3xl text-2xl">Our Partner</p>
        <div className="flex flex-col lg:px-24 px-8 pb-32 justify-between items-center">
          <img src={ourPartner} alt="" className="" />
          <p className="lg:text-3xl text-2xl lg:py-24 py-8">TBN's Global Reach</p>
          <img src={tbnWorldwide} alt="" className="" />
        </div>
      </section>
      {/* Section 3 -  Who We Are*/}
      {/* <section className="bg-[#0350C4] w-full h-full flex flex-col">
        <div className="flex flex-col items-center justify-center px-24 py-24">
          <p className="text-[#FBFDFF] font-semibold text-4xl mb-12">
            BE PART OF THE COMMUNITY
          </p>
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
              <div className="flex flex-row justify-center items-center gap-1 ml-12">
                <input type="checkbox" className="" />
                <p className="mr-4 text-[#FBFDFF]">Investasi</p>
                <input type="checkbox" />
                <p className="mr-4 text-[#FBFDFF]">Capacity Builder</p>
                <input type="checkbox" />
                <p className="mr-4 text-[#FBFDFF]">
                  Seasoned Social Entrepreneur
                </p>
                <input type="checkbox" />
                <p className="mr-4 text-[#FBFDFF]">Professional</p>
              </div>
            </div>
            <div className="w-3/4 flex flex-col justify-start items-start mt-8">
              <button className="bg-[#DC8400] text-[#FBFDFF] px-6 py-2 rounded-xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section> */}
      {/* Section 3 -  Footer*/}
      <FooterComponent/>
    </div>
  );
}

export default HomePage;

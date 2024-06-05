import React from "react";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

import BannerVisiMisi from "../../assets/images/about/visi-misi/banner_visi_misi.png";
import BannerValueDna from "../../assets/images/about/visi-misi/banner_value_dna.png";
import BannerWeAre from "../../assets/images/about/visi-misi/banner_we_are.png";

const VisiMisiPage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen lg:h-64 h-36 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">
            Our Vision, Mission, and Values
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-screen lg:py-24 py-12 lg:px-0 px-8">
          <img src={BannerVisiMisi} alt="" />
        </div>
      </section>
      {/* Section 2 - Values and DNA */}
      <section className="flex flex-col items-center justify-center bg-[#F2EEEA] lg:rounded-t-[100px] rounded-t-[50px]">
        <p className="lg:text-4xl text-2xl mb-8 font-medium lg:pt-24 pt-12">VALUES AND DNA</p>
        <div className="flex flex-col justify-center items-center w-screen lg:py-24 py-8 lg:px-0 px-8">
          <img src={BannerValueDna} alt="" />
        </div>
      </section>
      {/* Section 3 - We Are */}
      <section className="flex flex-col items-center justify-center bg-[#F2EEEA]">
        <div className="flex flex-col items-center justify-center bg-white lg:rounded-t-[100px] rounded-t-[50px]">
          <div className="flex flex-col justify-center items-center w-screen lg:py-24 py-8">
            <img src={BannerWeAre} alt="" className="lg:w-3/5 w-full"/>
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default VisiMisiPage;

import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import BannerVisiMisi from "../../assets/banner_visi_misi.png";
import BannerValueDna from "../../assets/banner_value_dna.png";
import BannerWeAre from "../../assets/banner_we_are.png";

const visi_misi_page = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen h-64 bg-[#C3D21F] rounded-b-[100px]">
          <p className="text-black text-4xl font-semibold pt-16">
            Our Vision, Mission, and Values
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-screen py-24">
          <img src={BannerVisiMisi} alt="" />
        </div>
      </section>
      {/* Section 2 - Values and DNA */}
      <section className="flex flex-col items-center justify-center bg-[#F2EEEA] rounded-t-[100px]">
        <p className="text-4xl mb-8 font-medium pt-24">VALUES AND DNA</p>
        <div className="flex flex-col justify-center items-center w-screen py-24">
          <img src={BannerValueDna} alt="" />
        </div>
      </section>
      {/* Section 3 - We Are */}
      <section className="flex flex-col items-center justify-center bg-[#F2EEEA]">
        <div className="flex flex-col items-center justify-center bg-white rounded-t-[100px]">
          <div className="flex flex-col justify-center items-center w-screen py-24">
            <img src={BannerWeAre} alt="" className="w-3/5"/>
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default visi_misi_page;

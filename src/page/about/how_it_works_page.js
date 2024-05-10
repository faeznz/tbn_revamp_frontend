import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import BannerOverview from "../../assets/banner_overview.png";

const how_it_works_page = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen h-64 bg-[#C3D21F] rounded-b-[100px]">
          <p className="text-black text-4xl font-semibold pt-16">
            How It Works
          </p>
        </div>
      </section>
      {/* Section 2 - Overview */}
      <section>
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl mb-8 font-medium pt-24">OVERVIEW</p>
          <img src={BannerOverview} alt="" className="w-4/5" />
        </div>
      </section>
      {/* Section 3 - Alliance Build-out Priorities */}
    </div>
  );
};

export default how_it_works_page;

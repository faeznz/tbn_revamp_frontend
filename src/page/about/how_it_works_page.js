import React from "react";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

import BannerBuildOutPriorities from "../../assets/images/about/how-it-works/allience_build_out-Priorities.png";
import OurFocusSector from "../../assets/images/about/how-it-works/our-focus-sector.png";
import AllianceServeInFour from "../../assets/images/about/how-it-works/alliance_serves_in_four_critical_ways.png";
import PreAlliance from "../../assets/images/about/how-it-works/pre_alliance.png";

const HowItWorksPage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">
            How It Works
          </p>
        </div>
      </section>
      {/* Section 2 - Overview */}
      <section className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center pb-12 w-4/5">
          <p className="lg:text-4xl text-xl mb-8 font-medium lg:pt-24 pt-12">TBN Indonesia Build-out Priorities</p>
          <img src={BannerBuildOutPriorities} alt="" className="w-4/5" />
        </div>
      </section>
      {/* Section 3 - Alliance Build-out Priorities */}
      <section>
        <div className="flex flex-col justify-center pb-24 items-center bg-[#005F94] lg:rounded-t-[100px] rounded-t-[30px]">
          <p className="lg:text-4xl text-xl mb-8 font-medium lg:pt-24 pt-12 text-white lg:pb-12 text-center">
            Our Focus Sectors
          </p>
          <div className="w-4/5 flex flex-col items-center">
            <img src={OurFocusSector} alt="" className="w-4/5" />
          </div>
        </div>
      </section>
      {/* Section 3 - The Alliance serves its diverse ecosystem in four critical ways */}
      <section className="bg-[#005F94]">
        <div className="flex flex-col justify-center items-center bg-[#092040] lg:rounded-t-[100px] rounded-t-[30px]">
          <p className="lg:text-4xl text-xl mb-8 font-medium lg:pt-24 pt-12 text-white lg:pb-12 text-center">
            TBN Indonesia serves its diverse ecosystem in four critical ways:
          </p>
          <div className="w-4/5 flex flex-col items-center">
            <img src={AllianceServeInFour} alt="" className="w-4/5 lg:pb-24 pb-12" />
          </div>
        </div>
      </section>
      {/* Section 3 - Pre Alliance */}
      <section className="bg-[#092040]">
        <div className="flex flex-col lg:py-24 py-12 justify-center items-center bg-white lg:rounded-t-[100px] rounded-t-[30px]">
          <div className="w-4/5 flex flex-col items-center">
            <img src={PreAlliance} alt="" className="w-4/5" />
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default HowItWorksPage;

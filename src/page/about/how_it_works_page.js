import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import BannerOverview from "../../assets/banner_overview.png";
import BannerBuildOutPriorities from "../../assets/allience_build_out-Priorities.png";
import AllianceServeInFour from "../../assets/alliance_serves_in_four_critical_ways.png";
import PreAlliance from "../../assets/pre_alliance.png";

const HowItWorksPage = () => {
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
        <div className="flex flex-col justify-center items-center pb-16">
          <p className="text-4xl mb-8 font-medium pt-24">OVERVIEW</p>
          <img src={BannerOverview} alt="" className="w-4/5" />
        </div>
      </section>
      {/* Section 3 - Alliance Build-out Priorities */}
      <section>
        <div className="flex flex-col justify-center items-center bg-[#005F94] rounded-t-[100px]">
          <p className="text-4xl mb-8 font-medium pt-24 text-white pb-12">
            Alliance Build-out Priorities
          </p>
          <img src={BannerBuildOutPriorities} alt="" className="w-4/5" />
        </div>
      </section>
      {/* Section 3 - The Alliance serves its diverse ecosystem in four critical ways */}
      <section className="bg-[#005F94]">
        <div className="flex flex-col justify-center items-center bg-[#092040] rounded-t-[100px]">
          <p className="text-4xl mb-8 font-medium pt-24 text-white pb-12">
            The Alliance serves its diverse ecosystem in four critical ways:
          </p>
          <img src={AllianceServeInFour} alt="" className="w-4/5 pb-24" />
        </div>
      </section>
      {/* Section 3 - Pre Alliance */}
      <section className="bg-[#092040]">
        <div className="flex flex-col py-24 justify-center items-center bg-white rounded-t-[100px]">
          <img src={PreAlliance} alt="" className="w-4/5" />
        </div>
      </section>
      {/* Footer */}
      <FooterComponent/>
    </div>
  );
};

export default HowItWorksPage;

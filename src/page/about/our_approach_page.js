import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import BannerSocialEnterprise from "../../assets/banner_social_enterprise.png";
import BannerOurUniqueApproach from "../../assets/our_unique_approach.png";

const OurApproachPage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[50px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">
            Our Approach
          </p>
        </div>
      </section>
      {/* Section 2 - Description */}
      <section>
        <div className="flex flex-col justify-center items-center lg:px-24 px-8">
          <p className="lg:text-2xl text-xl lg:pt-24 pt-12 text-justify">
            TBN’s interventions focus on capacity building, capital raising and
            the development of a values-based community. This is akin to the
            support offered by other business development providers in the
            market, but TBN’s differentiator is that interventions are bespoke;
            they are targeted, personalized, and curated based on specific
            challenges facing an individual enterprise.  We are unapologetically
            relational in approach.
          </p>
          <p className="lg:text-2xl text-xl font-semibold pt-24">
            Our range of key services includes :
          </p>
          <div className="flex lg:flex-row flex-col justify-around lg:items-center items-start w-screen lg:px-24 px-12 lg:pt-12 lg:pb-24 pb-12">
            <ul className="lg:text-2xl text-md list-disc font-semibold">
              <li>Competitive prizes</li>
              <li>Business training and mentorship</li>
              <li>Translational research</li>
            </ul>
            <ul className="lg:text-2xl text-md list-disc font-semibold">
              <li>CMulti-stakeholder, multi-faith partnerships</li>
              <li>Strategic Convening</li>
              <li>Data-informed impact storytelling</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section 3 - Social Enterprise */}
      <section>
        <div className="bg-[#092040] lg:py-24 py-12 lg:rounded-t-[100px] rounded-t-[50px]">
          <img src={BannerSocialEnterprise} alt="" />
        </div>
      </section>
      {/* Section 4 - OUR UNIQUE APPROACH */}
      <section className="bg-[#092040]">
        <div className="flex flex-col justify-center items-center bg-[#F2EEEA] lg:rounded-t-[100px] rounded-t-[50px]">
          <p className="lg:text-4xl text-xl mb-8 font-medium lg:pt-24 pt-12 lg:pb-12 pb-4">
            OUR UNIQUE APPROACH
          </p>
          <img src={BannerOurUniqueApproach} alt="" className="lg:w-3/5 w-full lg:pb-24 pb-12" />
        </div>
      </section>
      {/* Footer */}
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default OurApproachPage;

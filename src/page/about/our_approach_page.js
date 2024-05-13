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
        <div className="flex flex-col justify-center items-center w-screen h-64 bg-[#C3D21F] rounded-b-[100px]">
          <p className="text-black text-4xl font-semibold pt-16">
            Our Approach
          </p>
        </div>
      </section>
      {/* Section 2 - Description */}
      <section>
        <div className="flex flex-col justify-center items-center px-24">
          <p className="text-2xl text-center pt-24">
            TBN’s interventions focus on capacity building, capital raising and
            the development of a values-based community. This is akin to the
            support offered by other business development providers in the
            market, but TBN’s differentiator is that interventions are bespoke;
            they are targeted, personalized, and curated based on specific
            challenges facing an individual enterprise.  We are unapologetically
            relational in approach.
          </p>
          <p className="text-2xl font-semibold pt-24">
            Our range of key services includes :
          </p>
          <div className="flex flex-row justify-around items-center w-screen px-24 pt-12 pb-24">
            <ul className="text-2xl list-disc font-semibold">
              <li>Competitive prizes</li>
              <li>Business training and mentorship</li>
              <li>Translational research</li>
            </ul>
            <ul className="text-2xl list-disc font-semibold">
              <li>CMulti-stakeholder, multi-faith partnerships</li>
              <li>Strategic Convening</li>
              <li>Data-informed impact storytelling</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section 3 - Social Enterprise */}
      <section>
        <div className="bg-[#092040] py-24 rounded-t-[100px]">
          <img src={BannerSocialEnterprise} alt="" />
        </div>
      </section>
      {/* Section 4 - OUR UNIQUE APPROACH */}
      <section className="bg-[#092040]">
        <div className="flex flex-col justify-center items-center bg-[#F2EEEA] rounded-t-[100px]">
          <p className="text-4xl mb-8 font-medium pt-24 pb-12">
            OUR UNIQUE APPROACH
          </p>
          <img src={BannerOurUniqueApproach} alt="" className="w-3/5 pb-24" />
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

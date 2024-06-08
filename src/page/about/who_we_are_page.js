import React from "react";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

import BannerWhoWeAre from "../../assets/images/about/who-we-are/who_we_are_banner.png";
import KontenCapacityBuilders from "../../assets/images/about/who-we-are/whoweare_capacity_builders.png";
import KontenImpactInvestors from "../../assets/images/about/who-we-are/whoweare_impact_investors.png";
import KontenSocialEnterprises from "../../assets/images/about/who-we-are/whoweare_social_enterprises.png";
import AboutWhoWeAre from "../../assets/images/about/who-we-are/about-whoweare.png";

const WhoWeArePage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">Who We Are</p>
        </div>
      </section>
      {/* Section 2 - Description */}
      <section>
        <div className="w-screen flex flex-col items-center">
          <div className="flex lg:flex-row w-full flex-col justify-between items-center xl:px-24 px-12 my-24 lg:gap-24 gap-8">
            <img src={AboutWhoWeAre} alt="" className="w-2/3"/>
            <div className="w-2/3">
              <p className="text-4xl font-medium mb-8">About TBN Indonesia</p>
              <p className="font-light">
                TBN Indonesia is a network that connects entrepreneurs and investors, and offers advisory services such as research, capacity building, and educational content creation.
                <br /><br />
                We connect businesses with the capital and resources they need to create positive social and environmental impact alongside financial returns.
                <br /><br />
                TBN Indonesia, led by Mr. Teddy Hartono, is the local chapter, focusing on driving impact investment in the Indonesian market.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div className="w-screen bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default WhoWeArePage;

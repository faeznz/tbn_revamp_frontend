import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

import BannerWhoWeAre from "../../assets/images/about/who_we_are/who_we_are_banner.png";
import KontenCapacityBuilders from "../../assets/images/about/who_we_are/whoweare_capacity_builders.png";
import KontenImpactInvestors from "../../assets/images/about/who_we_are/whoweare_impact_investors.png";
import KontenSocialEnterprises from "../../assets/images/about/who_we_are/whoweare_social_enterprises.png";

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
          <div className="flex lg:flex-row flex-col justify-between items-start lg:w-3/5 lg:px-0 px-12 my-24 lg:gap-24 gap-8">
            <p className="lg:text-2xl text-lg text-justify leading-relaxed">
              TBN Alliance is a globalnetwork of purpose-driven entrepreneurs,
              impact investors and capacitybuilders who take an
              enterpriseapproach to alleviatepoverty in low-income and
              underserved communities.
            </p>
            <p className="lg:text-2xl text-lg text-justify leading-relaxed">
              Founded by one of the pioneers of impact investing, Dr. Dato Kim
              Tan, TBN Alliance was then launched in 2003 through the creation
              of a strategic partnership with Belmont University and Templeton
              Religion Trust.
            </p>
          </div>
        </div>
      </section>
      {/* Section 3 - The Challenge */}
      <section>
        <div className="bg-[#005F94] lg:rounded-t-[100px] rounded-t-[50px]">
          <div className="flex lg:flex-row flex-col items-center lg:px-24 px-12 lg:py-32 py-12">
            <img src={BannerWhoWeAre} alt="" className="lg:w-2/5 lg:flex hidden" />
            <div className="flex flex-col lg:items-start items-center">
              <p className="lg:text-4xl text:2xl lg:pl-24 lg:mt-24 pt-8 text-white">
                THE CHALLENGE WE FACE
              </p>
              <img src={BannerWhoWeAre} alt="" className="lg:hidden mt-12 w-3/4" />
              <ul className="lg:text-3xl text-mds list-disc lg:pl-24 pb-24 lg:pt-32 pt-12 leading-relaxed text-white">
                <li className="lg:mb-12 mb-4">
                  700M people live in extremepoverty, subsisting on less than
                  $2.15 USD a day globally.
                </li>
                <li className="lg:mb-12 mb-4">
                  COVID-19 pandemic pushed 97 million more people back below the
                  poverty line since 2020 - humanity has lost three to four
                  years of hard-won progress in the ongoing campaign to end
                  extreme poverty.
                </li>
                <li className="lg:mb-12 mb-4">
                  Small and medium enterprises (SMES) are a key pathway out of
                  poverty, representing more than 90% of the business
                  population, 50% of employment and 40% of national GDP in
                  emerging economies.
                </li>
                <li className="lg:mb-12 mb-4">
                  In lower incomecountries, SMEs struggleto get the support and
                  investment they need to grow, creating what development
                  economists call “the missing middle.”
                </li>
                <li className="lg:mb-12 mb-4">
                  65 million firms,or 40% of formal micro,small and medium
                  enterprises(MSMEs) in developing countries, have an unmet
                  financing need of $5.2 trillion every year.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 - Who We Partner With */}
      <section className="bg-[#005F94]">
        <div className="flex flex-col bg-[#F2EEEA] lg:rounded-t-[100px] rounded-t-[50px]">
          <p className="lg:text-4xl text-xl lg:pl-24 lg:mt-24 mt-12 lg:pt-8 font-semibold lg:text-start text-center">
            WHO WE PARTNER WITH
          </p>
          <div className="w-screen flex lg:flex-row flex-col justify-between items-center lg:py-24 py-12">
            <div className="lg:w-1/3 flex flex-col justify-center items-center">
              <img src={KontenCapacityBuilders} alt="" className="lg:w-3/5 w-1/2" />
              <p className="lg:text-2xl text-xl text-center px-12 mt-8">
                Purpose-driven enterprises tackling issues of poverty through
                their business model
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center items-center mt-8">
              <img src={KontenImpactInvestors} alt="" className="lg:w-3/5 w-1/2" />
              <p className="lg:text-2xl text-xl text-center px-12 mt-8">
                Funding partners making purposeful investments that help achieve
                social benefits
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center items-center mt-8">
              <img src={KontenSocialEnterprises} alt="" className="lg:w-3/5 w-1/2" />
              <p className="lg:text-2xl text-xl text-center px-12 mt-8">
                Partners that help strengthen the skills, knowledge, and
                resources of social entrepreneurs to achieve their impactgoals
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div className="w-screen bg-[#F2EEEA]">
        <FooterComponent/>
      </div>
    </div>
  );
};

export default WhoWeArePage;

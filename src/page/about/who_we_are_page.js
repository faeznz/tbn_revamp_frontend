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
        <div className="flex flex-col justify-center items-center w-screen h-64 bg-[#C3D21F] rounded-b-[100px]">
          <p className="text-black text-4xl font-semibold pt-16">Who We Are</p>
        </div>
      </section>
      {/* Section 2 - Description */}
      <section>
        <div className="w-screen flex flex-col items-center">
          <div className="flex flex-row justify-between items-start w-3/5 my-24 gap-24">
            <p className="text-2xl text-justify leading-relaxed">
              TBN Alliance is a globalnetwork of purpose-driven entrepreneurs,
              impact investors and capacitybuilders who take an
              enterpriseapproach to alleviatepoverty in low-income and
              underserved communities.
            </p>
            <p className="text-2xl text-justify leading-relaxed">
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
        <div className="bg-[#005F94] rounded-t-[100px]">
          <div className="flex flex-row px-24 py-32">
            <img src={BannerWhoWeAre} alt="" className="w-2/5" />
            <div>
              <p className="text-4xl pl-24 mt-24 pt-8 text-white">
                THE CHALLENGE WE FACE
              </p>
              <ul className="text-3xl list-disc pl-24 pb-24 pt-32 leading-relaxed text-white">
                <li className="mb-12">
                  700M people live in extremepoverty, subsisting on less than
                  $2.15 USD a day globally.
                </li>
                <li className="mb-12">
                  COVID-19 pandemic pushed 97 million more people back below the
                  poverty line since 2020 - humanity has lost three to four
                  years of hard-won progress in the ongoing campaign to end
                  extreme poverty.
                </li>
                <li className="mb-12">
                  Small and medium enterprises (SMES) are a key pathway out of
                  poverty, representing more than 90% of the business
                  population, 50% of employment and 40% of national GDP in
                  emerging economies.
                </li>
                <li className="mb-12">
                  In lower incomecountries, SMEs struggleto get the support and
                  investment they need to grow, creating what development
                  economists call “the missing middle.”
                </li>
                <li className="mb-12">
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
        <div className="flex flex-col bg-[#F2EEEA] rounded-t-[100px]">
          <p className="text-4xl pl-24 mt-24 pt-8 font-semibold ">
            WHO WE PARTNER WITH
          </p>
          <div className="w-screen flex flex-row justify-between py-24">
            <div className="w-1/3 flex flex-col justify-center items-center">
              <img src={KontenCapacityBuilders} alt="" className="w-3/5" />
              <p className="text-2xl px-12 mt-8">
                Purpose-driven enterprises tackling issues of poverty through
                their business model
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <img src={KontenImpactInvestors} alt="" className="w-3/5" />
              <p className="text-2xl px-12 mt-8">
                Funding partners making purposeful investments that help achieve
                social benefits
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <img src={KontenSocialEnterprises} alt="" className="w-3/5" />
              <p className="text-2xl px-12 mt-8">
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

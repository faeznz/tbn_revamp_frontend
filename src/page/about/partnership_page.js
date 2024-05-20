import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

import BannerHistory from "../../assets/banner_partner.png";
import BannerEcosystem from "../../assets/tbn_ecosystem_partner.png";

const PartnershipPage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[50px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">
            Our Partnerships
          </p>
        </div>
      </section>
      {/* Section 2 - Univ Partner */}
      <section>
        <div className="flex flex-col justify-center items-center lg:px-32 px-8">
          <p className="lg:text-2xl text-xl font-medium pt-16">
            Belmont University and the Belmont Innovation Labs
          </p>
          <p className="lg:text-2xl text-xl text-center pt-16">
            The TBN Alliance is anchored by a strategic partnership between the
            TBN Network and Belmont University, with the Belmont Innovation Labs
            as the organization at Belmont stewarding the Alliance.
            <br />
            <br />
            The Innovation Labs hosts the TBN Alliance Secretariat.
          </p>
          <img src={BannerHistory} alt="" className="lg:w-4/5 w-full lg:py-24 py-8" />
        </div>
      </section>
      {/* Section 3 - TBN Ecosystem Partner*/}
      <section>
        <div className="bg-[#F2EEEA] pt-12 flex flex-col justify-center items-center lg:rounded-t-[100px] rounded-t-[50px]">
          <p className="lg:text-4xl text-xl mb-8 font-medium lg:pt-24">
            TBN Ecosystem Partners
          </p>
          <img src={BannerEcosystem} alt="" className="" />
        </div>
      </section>
      {/* Footer */}
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default PartnershipPage;

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
        <div className="flex flex-col justify-center items-center w-screen h-64 bg-[#C3D21F] rounded-b-[100px]">
          <p className="text-black text-4xl font-semibold pt-16">
            Our Partnerships
          </p>
        </div>
      </section>
      {/* Section 2 - Univ Partner */}
      <section>
        <div className="flex flex-col justify-center items-center px-32">
          <p className="text-2xl font-medium pt-16">
            Belmont University and the Belmont Innovation Labs
          </p>
          <p className="text-2xl text-center pt-16">
            The TBN Alliance is anchored by a strategic partnership between the
            TBN Network and Belmont University, with the Belmont Innovation Labs
            as the organization at Belmont stewarding the Alliance.
            <br />
            <br />
            The Innovation Labs hosts the TBN Alliance Secretariat.
          </p>
          <img src={BannerHistory} alt="" className="w-4/5 py-24" />
        </div>
      </section>
      {/* Section 3 - TBN Ecosystem Partner*/}
      <section>
        <div className="bg-[#F2EEEA] pt-12 flex flex-col justify-center items-center rounded-t-[100px]">
          <p className="text-4xl mb-8 font-medium pt-24">
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

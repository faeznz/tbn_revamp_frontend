import React from 'react';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import BannerOurApproach from '../../assets/images/about/our-approach/banner_our_approach.png';

const OurApproachPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <div>
        <NavbarComponent />
        {/* Section 1 - Header */}
        <section>
          <div className="flex flex-col justify-center items-center w-full lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
            <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">Our Approach</p>
          </div>
        </section>
        {/* Section 2 - Description */}
        <section className="flex flex-col items-center flex-grow">
          <div className="flex flex-col justify-center items-center lg:px-24 mb-12 w-4/5">
            <p className="lg:text-2xl text-md font-semibold lg:pt-24 pt-12">We believe that big changes begin with small steps. The Four Pillars:</p>
            <img src={BannerOurApproach} alt="ourapproach" className="my-12" />
          </div>
        </section>
      </div>
      {/* Footer */}
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default OurApproachPage;

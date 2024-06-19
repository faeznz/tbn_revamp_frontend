import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import AboutWhoWeAre from '../../assets/images/about/who-we-are/about-whoweare.webp';

const WhoWeArePage = () => {
  return (
    <HelmetProvider>
      <div className="overflow-x-hidden">
        <Helmet>
          <title>TBN Indonesia - Who We Are</title>
        </Helmet>
        <NavbarComponent />
        {/* Section 1 - Header */}
        <section>
          <div className="flex flex-col justify-center items-center w-full lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
            <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">Who We Are</p>
          </div>
        </section>
        {/* Section 2 - Description */}
        <section>
          <div className="w-screen flex flex-col items-center">
            <div className="flex lg:flex-row w-full flex-col justify-between items-center xl:px-24 px-12 lg:my-24 my-12 lg:gap-24 gap-8">
              <img src={AboutWhoWeAre} loading="lazy" alt="whoweare" className="xl:w-2/3 " />
              <div className="xl:w-2/3">
                <p className="text-4xl font-medium mb-8">About TBN Indonesia</p>
                <p className="font-light text-justify">
                  TBN Indonesia is a network that connects entrepreneurs and investors, and offers advisory services such as research, capacity building, and educational content creation.
                  <br />
                  <br />
                  We connect businesses with the capital and resources they need to create positive social and environmental impact alongside financial returns.
                  <br />
                  <br />
                  TBN Indonesia, led by Mr. Teddy Hartono, is the local chapter, focusing on driving impact investment in the Indonesian market.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <div>
          <FooterComponent />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default WhoWeArePage;

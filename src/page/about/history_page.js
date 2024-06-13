import React from 'react';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import BannerPioneer from '../../assets/images/about/history/history_image.png';
import BannerPartner from '../../assets/images/about/history/banner_partnership.png';

const HistoryPage = () => {
  return (
    <div className="overflow-x-hidden">
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-full lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">Our History</p>
        </div>
      </section>
      {/* Section 2 - Pioneer */}
      <section>
        <div className="flex lg:flex-row flex-col justify-between w-screen items-center lg:py-24 py-8">
          <div className="flex flex-col justify-center items-center">
            <img src={BannerPioneer} alt="" className="w-4/5" />
            <p className="lg:text-3xl text-lg lg:px-24 px-8 lg:pt-12 pt-4 lg:mb-0 mb-12 text-center font-semibold">Building on decades of work spearheaded by one of the pioneers of impact investing, Dr. Kim Tam</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={BannerPartner} alt="" className="w-4/5" />
            <p className="lg:text-3xl text-lg lg:px-24 px-8 lg:pt-12 pt-4 lg:mb-0 mb-12 text-center font-semibold">In partnership with TRT and Belmont University we are moving into the era of etablishing TBN Indonesia</p>
          </div>
        </div>
      </section>
      {/* Section 3 -  Description*/}
      <section>
        <div className="bg-[#F2EEEA] lg:px-24 px-12 lg:py-32 py-12 lg:rounded-t-[100px] rounded-t-[50px]">
          <p className="lg:text-2xl text-md text-justify">
            While founded in 2003, TBN began to accelerate its impact with the formalization of social entrepreneur training programs in Africa and Asia in 2017 and 2019 respectively.  TBN has supported more than 800 entrepreneurs, helped
            launch/scale almost 400 enterprises, and contribute to growing regional ecosystems in Asia, Africa and, effective 2022, the Americas, with multiple events, collaborations, impact visits, speaking engagements and introductions
            every year.
            <br /> <br />
            Over this time, TBN has been quietly pioneering a distinctive and effective model of enterprise solutions to poverty, one which embraces diversity and encourages long-term relationships with partners and collaborators, one that
            is open, generative, and supportive of the greater social impact ecosystem.  This model has a demonstrated track record of working in frontier and emerging markets and in culturally and religiously diverse regions.
            <br /> <br />
            The results are success stories of transformational business with a poverty alleviation focus that have achieved scale in Africa and Asia.
            <br /> <br />
            TBN Indonesia was launched in September 2023 in a strategic partnership with Belmont University Innovation Labs with the support of the Templeton Religion Trust, a global charitable trust chartered by Sir John Templeton. 
            <br /> <br />
            We launched with four founding chapters - Africa, Asia, Indonesia and Americas.
          </p>
        </div>
        <div className="bg-[#F2EEEA]">
          <FooterComponent />
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;

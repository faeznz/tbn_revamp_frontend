import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import BannerPioneer from "../../assets/history_image.png";
import BannerPartner from "../../assets/banner_partnership.png";

const history_page = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen h-64 bg-[#C3D21F] rounded-b-[100px]">
          <p className="text-black text-4xl font-semibold pt-16">Our History</p>
        </div>
      </section>
      {/* Section 2 - Pioneer */}
      <section>
        <div className="flex flex-row justify-between w-screen items-center py-24">
          <div className="flex flex-col justify-center items-center">
            <img src={BannerPioneer} alt="" className="w-4/5" />
            <p className="text-3xl px-24 pt-12 text-center font-semibold">
              Building on decades of work spearheaded by one of the pioneers of
              impact investing, Dr. Kim Tam
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={BannerPartner} alt="" className="w-4/5" />
            <p className="text-3xl px-24 pt-12 text-center font-semibold">
              In partnership with TRT and Belmont University we are moving into
              the era of etablishing TBN Alliance
            </p>
          </div>
        </div>
      </section>
      {/* Section 3 -  Description*/}
      <section>
        <div className="bg-[#F2EEEA] px-24 py-32 rounded-t-[100px]">
          <p className="text-2xl text-center">
            While founded in 2003, TBN began to accelerate its impact with the
            formalization of social entrepreneur training programs in Africa and
            Asia in 2017 and 2019 respectively.  TBN has supported more than 800
            entrepreneurs, helped launch/scale almost 400 enterprises, and
            contribute to growing regional ecosystems in Asia, Africa and,
            effective 2022, the Americas, with multiple events, collaborations,
            impact visits, speaking engagements and introductions every year.
            <br /> <br />
            Over this time, TBN has been quietly pioneering a distinctive and
            effective model of enterprise solutions to poverty, one which
            embraces diversity and encourages long-term relationships with
            partners and collaborators, one that is open, generative, and
            supportive of the greater social impact ecosystem.  This model has a
            demonstrated track record of working in frontier and emerging
            markets and in culturally and religiously diverse regions.
            <br /> <br />
            The results are success stories of transformational business with a
            poverty alleviation focus that have achieved scale in Africa and
            Asia.
            <br /> <br />
            The Alliance was launched in September 2023 in a strategic
            partnership with Belmont University Innovation Labs with the support
            of the Templeton Religion Trust, a global charitable trust chartered
            by Sir John Templeton. 
            <br /> <br />
            We launched with four founding chapters - Africa, Asia, Indonesia
            and Americas.
          </p>
        </div>
        <div className="bg-[#F2EEEA]">
          <FooterComponent />
        </div>
      </section>
    </div>
  );
};

export default history_page;

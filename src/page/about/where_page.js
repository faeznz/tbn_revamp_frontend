import React from "react";
import { NavLink } from "react-router-dom";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

import MapsWhereWeAre from '../../assets/images/about/where-we-are/maps_where_we_are.png';

const WherePage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">
            Where We Are
          </p>
        </div>
      </section>
      {/* Section 2 - Maps */}
      <section>
        <div className="flex flex-col justify-center items-center">
          <img src={MapsWhereWeAre} alt="" className="w-4/5 lg:py-24 py-12" />
        </div>
      </section>
      {/* Section 3 - Description */}
      <section className="bg-[#F2EEEA] lg:rounded-t-[100px] rounded-t-[30px]">
        <div className=" flex flex-col justify-center items-start lg:px-24 px-12 lg:pt-24 pt-12">
          <p className="lg:text-2xl text-lg">
            Click on the links below to learn more about the ecosystems  and impact in our founding chapter locations.
          </p>
          <ul className="lg:text-2xl text-lg list-disc lg:pl-24 lg:pb-24 pb-12 pt-8">
            <li>Africa tbnetworkafrica.org</li>
            <li>Americas tbn-americas.org</li>
            <li>Asia tbn.asia</li>
            <li>Indonesia tbnindonesia.org</li>
          </ul>
        </div>
        <div className="flex flex-row justify-center w-full items-center lg:pb-24 pb-12">
          <NavLink to='' className='bg-[#092040] text-white px-8 py-4 rounded-2xl'>Join Us</NavLink>
        </div>
      </section>
      {/* Footer */}
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default WherePage;

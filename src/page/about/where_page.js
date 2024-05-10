import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import MapsWhereWeAre from '../../assets/maps_where_we_are.png'
import { NavLink } from "react-router-dom";

const where_page = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen h-64 bg-[#C3D21F] rounded-b-[100px]">
          <p className="text-black text-4xl font-semibold pt-16">
            Where We Are
          </p>
        </div>
      </section>
      {/* Section 2 - Maps */}
      <section>
        <div className="flex flex-col justify-center items-center">
          <img src={MapsWhereWeAre} alt="" className="w-4/5 py-24"/>
        </div>
      </section>
      {/* Section 3 - Description */}
      <section className="bg-[#F2EEEA] rounded-t-[100px]">
        <div className=" flex flex-col justify-center items-start px-24 pt-24">
          <p className="text-2xl">
          Click on the links below to learn more about the ecosystems  and impact in our founding chapter locations.
          </p>
          <ul className="text-2xl list-disc pl-24 pb-24 pt-8">
            <li>Africa tbnetworkafrica.org</li>
            <li>Americas tbn-americas.org</li>
            <li>Asia tbn.asia</li>
            <li>Indonesia tbnindonesia.org</li>
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center pb-24">
          <NavLink to='' className='bg-[#092040] text-white px-8 py-4 rounded-2xl'>Join Us</NavLink>
        </div>
      </section>
      {/* Footer */}
      <div className="bg-[#F2EEEA]">
        <FooterComponent/>
      </div>
    </div>
  );
};

export default where_page;

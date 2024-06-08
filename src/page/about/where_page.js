import React from "react";
import { NavLink } from "react-router-dom";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

import { FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

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
      {/* Section 2 - Description */}
      <section className=" pb-24">
        <div className=" flex flex-col justify-center items-start lg:px-24 px-12 lg:pt-24 pt-12 text-white">
          <div className="flex flex-col w-full bg-[#092040] p-12 rounded-2xl">
            <p className="lg:text-7xl text-lg text-[#C3D21F] font-bold">Reach Us On</p>
            <p className="lg:text-xl text-lg font-light">Together, we can make a significant impact on the lives of Indonesians and the environment</p>
          <p className="lg:text-2xl text-lg font-semibold mt-16">Impact Hub</p>
          <p className="lg:text-2xl text-lg font-light">Lippo Thamrin 5th Floor <br />
            M.H, Thamrin No. 20 <br />
            Central Jakarta, 10350, Indonesia
          </p>
          <div className="flex flex-col mt-12">
            <div className="flex flex-row items-center gap-2">
              <FaWhatsapp className="w-8 h-8" />
              <p className="text-xl">+62 823 1000 1908</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-4">
              <TbWorld className="w-8 h-8" />
              <p className="text-xl">info@tbnindonesia.org</p>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default WherePage;

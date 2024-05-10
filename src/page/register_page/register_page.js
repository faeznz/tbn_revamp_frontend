import React from "react";
import NavbarComponent from "../../components/navbar_component";
import ImgLogin from "../../assets/img_login.png";
import { NavLink } from "react-router-dom";

const register_page = () => {
  return (
    <div className="bg-[#D2DCDD] h-screen">
      <NavbarComponent />
      <div className="h-full w-full flex justify-center items-center pt-12">
        {/* Section 1 -  Login*/}
        <section className=" w-full h-full flex flex-row">
          <div className="flex items-center justify-center px-24 py-24 w-screen">
            <img src={ImgLogin} alt="" className="h-5/6" />
            <div className="bg-white h-5/6 w-3/5  flex flex-col justify-center items-center px-12">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <p className="text-2xl mb-8">Create an Account!</p>
                </div>
                <input
                  type="text"
                  className="w-full h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-[#9A9CA9] px-4"
                  value="Username"
                />
                <input
                  type="text"
                  className="w-full h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-[#9A9CA9] px-4"
                  value="Email"
                />
                <div className="flex flex-row justify-between gap-2">
                  <input
                    type="text"
                    className=" h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-[#9A9CA9] px-4"
                    value="Password"
                  />
                  <input
                    type="text"
                    className=" h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-[#9A9CA9] px-4"
                    value="Repeat Password"
                  />
                </div>

                <button className="bg-[#4E73DF] text-white font-medium rounded-full w-full h-12">
                  Register
                </button>
                <div className="flex flex-row justify-center items-center mt-4 gap-2">
                  <p className="text-[#9A9CA9]">Have an account?</p>
                  <NavLink to="/login" className="text-[#4E73DF] text-sm">
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default register_page;

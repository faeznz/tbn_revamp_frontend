import React from "react";
import NavbarComponent from "../../components/navbar";
import ImgLogin from "../../assets/img_login.png";
import { NavLink } from "react-router-dom";

const login_page = () => {
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

                <p className="text-2xl mb-8">Welcome Back!</p>
                </div>
                <input
                  type="text"
                  className="w-96 h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-[#9A9CA9] px-4"
                  value="Enter Email Address.."
                />
                <input
                  type="text"
                  className="w-96 h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-[#9A9CA9] px-4"
                  value="Password"
                />
                <div className="flex flex-row justify-start items-center ml-4 mb-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-2 rounded-full"
                    value="Password"
                  />
                  <p className="text-[#9A9CA9]">Remember Me</p>
                </div>
                <button className="bg-[#4E73DF] text-white font-medium rounded-full w-full h-12">Login</button>
                <div className="flex flex-col justify-center items-center mt-4 gap-2">
                    <p className="text-[#4E73DF] text-sm">Forgot Password?</p>
                    <NavLink to='/register' className="text-[#4E73DF] text-sm">Create an Account?</NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default login_page;

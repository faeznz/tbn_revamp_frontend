import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { useAuth } from "../../context/auth_context";

import BannerKomentar1 from "../../assets/banner-seminar.png";

import { MdStar } from "react-icons/md";

const PengalamanPesertaPage = () => {
  const { dataLogin } = useAuth();

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen h-64 bg-[#C3D21F] rounded-b-[100px]">
          <p className="text-black text-4xl font-semibold pt-16">
            Transformational Sales Conference 2023
          </p>
          <p className="text-black font-light text-xl pt-4 text-center">
            Jl. Medan Merdeka Selatan, No.14, Gambir, Kecamatan Gambir, Kota
            Jakarta Pusat, <br /> Daerah Ibukota Jakarta 10110
          </p>
        </div>
      </section>
      {/* Section 2 - List Komentar */}
      <section>
        <div className="px-24 w-screen">
          <p className="text-black text-2xl font-semibold pt-16">
            Transformational Sales Conference 2023
          </p>
          <div className="flex flex-row items-center w-full">
            <div className="flex flex-row mr-4 gap-1">
              <MdStar className="text-xl text-yellow-400" />
              <MdStar className="text-xl text-yellow-400" />
              <MdStar className="text-xl text-yellow-400" />
              <MdStar className="text-xl text-yellow-400" />
              <MdStar className="text-xl text-yellow-400" />
            </div>
            <p className="mr-1">5/5</p>
            <p>(3 Ulasan)</p>
          </div>
          {/* Komentar */}
          <div className="flex flex-row items-center mt-12 w-full">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4 w-full">
              <div className="flex flex-row justify-between w-full">
                <div>
                  <p className="font-bold">Dita</p>
                  <p className="font-light">8 Mei 2024</p>
                </div>
                <div className="flex flex-row mr-4 gap-1">
                  <MdStar className="text-2xl text-yellow-400" />
                  <MdStar className="text-2xl text-yellow-400" />
                  <MdStar className="text-2xl text-yellow-400" />
                  <MdStar className="text-2xl text-yellow-400" />
                  <MdStar className="text-2xl text-yellow-400" />
                </div>
              </div>
              <p className=" ">
                Mantappppp, menyala abangkuhhh. Ceritanya bagus sekali, jadi
                tertarik ingin bergabung dengan TBN Alliance.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-12 w-full">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4 w-full">
              <div className="flex flex-row justify-between w-full">
                <div>
                  <p className="font-bold">Ebi</p>
                  <p className="font-light">8 Mei 2024</p>
                </div>
                <div className="flex flex-row mr-4 gap-1">
                  <MdStar className="text-2xl text-yellow-400" />
                  <MdStar className="text-2xl text-yellow-400" />
                  <MdStar className="text-2xl text-yellow-400" />
                  <MdStar className="text-2xl text-yellow-400" />
                  <MdStar className="text-2xl text-yellow-400" />
                </div>
              </div>
              <p className=" ">
                Mantappppp, menyala abangkuhhh. Ceritanya bagus sekali, jadi
                tertarik ingin bergabung dengan TBN Alliance.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center mt-12 w-full">
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png"
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-4 w-full">
                <div className="flex flex-row justify-between w-full">
                  <div>
                    <p className="font-bold">Arsy</p>
                    <p className="font-light">8 Mei 2024</p>
                  </div>
                  <div className="flex flex-row mr-4 gap-1">
                    <MdStar className="text-2xl text-yellow-400" />
                    <MdStar className="text-2xl text-yellow-400" />
                    <MdStar className="text-2xl text-yellow-400" />
                    <MdStar className="text-2xl text-yellow-400" />
                    <MdStar className="text-2xl text-yellow-400" />
                  </div>
                </div>
                <p className="">
                  Mantappppp, menyala abangkuhhh. Ceritanya bagus sekali, jadi
                  tertarik ingin bergabung dengan TBN Alliance.
                </p>
              </div>
            </div>
            <img src={BannerKomentar1} alt="" className="w-2/5 ml-16" />
          </div>
        </div>
      </section>
      {/* Section 3 -  Description*/}
      <section>
        <div className="bg-[#F2EEEA] w-screen px-24 py-32 mt-24 rounded-t-[100px] flex flex-col items-center justify-center">
          <div className="flex flex-row items-center mt-12 w-3/5">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4 w-full">
              <div className="flex flex-row justify-between w-full">
                <div>
                  <p className="font-bold">{dataLogin.nama}</p>
                  <p className="font-light">Memposting ulasan untuk artikel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-row mr-4 gap-1">
              <MdStar className="text-5xl text-gray-300" />
              <MdStar className="text-5xl text-gray-300" />
              <MdStar className="text-5xl text-gray-300" />
              <MdStar className="text-5xl text-gray-300" />
              <MdStar className="text-5xl text-gray-300" />
            </div>
          </div>
          <div className="flex flex-col w-3/5">
            <textarea
              type="text"
              className="w-full h-48 my-12 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black p-4 "
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              id="image_uploads"
              name="image_uploads"
            />

            <button className="bg-[#092040] text-white px-8 py-4 mt-4 rounded-2xl mb-24">
              Posting
            </button>
          </div>
        </div>
      </section>
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default PengalamanPesertaPage;

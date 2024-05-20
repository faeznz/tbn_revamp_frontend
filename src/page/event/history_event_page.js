import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import Review from "../../components/event/status_pendaftaran_review_component";
import Accepted from "../../components/event/status_pendaftaran_accepted_component";
import Rejected from "../../components/event/status_pendaftaran_rejected_component";
import { NavLink, useNavigate } from "react-router-dom";

const HistoryEventPage = () => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/event/history/detail");
  }

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Main */}
      <section>
        <div className="flex flex-col items-center w-screen min-h-screen pt-16 bg-[#F2EEEA] pb-24">
          <p className="my-12 text-2xl font-semibold">Riwayat Pendaftaran</p>
          <div className="bg-white p-12 rounded-xl">
            <table>
              <tr key="">
                <td className="px-12 text-center font-semibold pb-8">Status</td>
                <td className="px-12 text-center font-semibold pb-8">
                  Pendaftaran
                </td>
                <td className="px-12 text-center font-semibold pb-8">Aksi</td>
              </tr>
              <tr key="">
                <td className="px-12 text-center pb-4">
                  <Review />
                </td>
                <td className="px-12 pb-4">
                  242150003 : Maxy Academy <br /> <span>12 Mei 2024</span>
                </td>
                <td className="px-12 text-center pb-4">
                  <button className="w-32 h-10 bg-[#092040] text-white rounded-xl" onClick={handleView}>
                    View
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default HistoryEventPage;

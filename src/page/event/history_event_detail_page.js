import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

import CircleBefore from "../../assets/images/event/history/circle_progress_before.png";
import CircleDone from "../../assets/images/event/history/circle_progres_done.png";

const HistoryEventDetailPage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Main */}
      <section>
        <div className="flex flex-col items-center w-screen min-h-screen pt-16 bg-[#F2EEEA] pb-24">
          <div className="bg-white p-12 rounded-xl w-4/5 my-24">
            <p className="my-12 text-xl font-semibold text-center">Latest Activity</p>
            <div className="flex flex-row items-center justify-center mx-32">
              <div className="flex flex-col justify-center items-center">
                <img src={CircleDone} alt="" className="w-12 h-12" />
                <p>Registration</p>
              </div>
              <div className="h-1 w-full bg-[#3167D2] mb-6"></div>
              <div className="flex flex-col justify-center items-center">
                <img src={CircleDone} alt="" className="w-12 h-12" />
                <p>Review</p>
              </div>
              <div className="h-1 w-full bg-[#999999] mb-6"></div>
              <div className="flex flex-col justify-center items-center">
                <img src={CircleBefore} alt="" className="w-12 h-12" />
                <p>Accepted</p>
              </div>
              <div className="h-1 w-full bg-[#999999] mb-6"></div>
              <div className="flex flex-col justify-center items-center">
                <img src={CircleBefore} alt="" className="w-12 h-12" />
                <p>Presence</p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-24 mt-12">
              <table className="my-12">
                <tr key="">
                  <td className="pr-16 pb-4">Registration ID</td>
                  <td className="pr-12 pb-4">: </td>
                  <td className="pr-16 pb-4">Email</td>
                  <td className="pr-12 pb-4">: </td>
                </tr>
                <tr key="">
                  <td className="pb-4">Participant Name</td>
                  <td className="pb-4">: </td>
                  <td className="pb-4">Afiliation</td>
                  <td className="pb-4">: </td>
                </tr>
                <tr key="">
                  <td>Phone Number</td>
                  <td>: </td>
                  <td>Ticket Type</td>
                  <td>: </td>
                </tr>
              </table>
              <div className="bg-[#092040] h-16 w-full rounded-xl flex justify-center items-center">
                <p className="text-white text-2xl font-bold">Your registration is being processed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default HistoryEventDetailPage;

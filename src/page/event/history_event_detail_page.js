import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import CircleBefore from '../../assets/images/event/history/circle_progress_before.png';
import CircleDone from '../../assets/images/event/history/circle_progres_done.png';
import CircleReject from '../../assets/images/event/history/circle_progress_reject.png';

const HistoryEventDetailPage = () => {
  const { registrationId } = useParams(); // Mendapatkan registrationId dari URL
  const navigate = useNavigate();
  const [registration, setRegistration] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (registrationId) {
      axios
        .get(`${process.env.REACT_APP_TBN_API_URL}/registrations/${registrationId}`)
        .then((response) => {
          console.log('API Response:', response.data); // Log response dari API
          setRegistration(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching registration data:', error);
          setLoading(false);
        });
    }
  }, [registrationId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!registration) {
    return <div>No registration found for the given ID.</div>;
  }

  const isPending = registration.data.status === 'Pending';
  const isRejected = registration.data.status === 'Rejected';
  const isAccepted = registration.data.status === 'Accepted';
  const isPresence = registration.data.attendance === 1;

  const handleExperienceClick = () => {
    // Navigasi ke halaman pengalaman
    navigate(`/event/pengalaman-peserta/create/${registrationId}`);
  };

  return (
    <div>
      <NavbarComponent />
      <section>
        <div className="flex flex-col items-center w-full min-h-screen xl:pt-16 bg-[#F2EEEA] xl:pb-24">
          <div className="bg-white xl:p-12 px-6 rounded-xl xl:w-4/5 w-5/6 xl:my-24 mt-28">
            <p className="my-12 text-xl font-semibold text-center">Latest Activity</p>
            <div className="flex flex-row items-center justify-center xl:mx-12 md:mx-12">
              {/* Layout For status */}
              <div className="flex flex-col justify-center items-center">
                <img src={CircleDone} alt="Done" className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-6 h-6" />
                <p className='xl:text-xl md:text-md text-xs'>Registration</p>
              </div>
              <div className="xl:h-1 h-0.5 rounded-full w-full bg-[#3167D2] xl:mb-6 mb-4"></div>
              <div className="flex flex-col justify-center items-center">
                <img src={isRejected ? CircleReject : CircleDone} alt={isRejected ? 'Reject' : 'Done'} className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-6 h-6" />
                <p className='xl:text-xl md:text-md text-xs'>Review</p>
              </div>
              <div className={`xl:h-1 h-0.5 w-full ${isAccepted ? 'bg-[#3167D2]' : 'bg-[#999999]'} xl:mb-6 mb-4`}></div>
              <div className="flex flex-col justify-center items-center">
                <img src={isAccepted ? CircleDone : CircleBefore} alt={isAccepted ? 'Done' : 'Before'} className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-6 h-6" />
                <p className='xl:text-xl md:text-md text-xs'>Accepted</p>
              </div>
              <div className={`xl:h-1 h-0.5 w-full ${isPresence ? 'bg-[#3167D2]' : 'bg-[#999999]'} xl:mb-6 mb-4`}></div>
              <div className="flex flex-col justify-center items-center">
                <img src={isPresence ? CircleDone : CircleBefore} alt={isPresence ? 'Done' : 'Before'} className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-6 h-6" />
                <p className='xl:text-xl md:text-md text-xs'>Presence</p>
              </div>
            </div>
            <div className="flex flex-col justify-center xl:px-24 xl:mt-12 text-md pb-12">
              {/* Layout Data Pendaftar For Dekstop */}
              <table className="my-12 xl:table hidden">
                <tbody>
                  <tr>
                    <td className="pr-16 pb-4">Registration ID</td>
                    <td className="pr-12 pb-4">: {registration.data.id}</td>
                    <td className="pr-16 pb-4">Email</td>
                    <td className="pr-12 pb-4">: {registration.data.email}</td>
                  </tr>
                  <tr>
                    <td className="pb-4">Participant Name</td>
                    <td className="pb-4">: {registration.data.name}</td>
                    <td className="pb-4">Affiliation</td>
                    <td className="pb-4">: {registration.data.affiliation}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>: {registration.data.phone}</td>
                    <td>Ticket Type</td>
                    <td>: {registration.data.ticket_type}</td>
                  </tr>
                </tbody>
              </table>
              {/* Layout Data Pendaftar For Mobile */}
              <table className="my-12 xl:hidden">
                <tbody className='text-xs md:text-xl'>
                  <tr>
                    <td className="pr-4 pb-4">Registration ID</td>
                    <td className="pb-4">: {registration.data.id}</td>
                  </tr>
                  <tr>
                    <td className="pb-4">Participant Name</td>
                    <td className="pb-4">: {registration.data.name}</td>
                  </tr>
                  <tr>
                    <td className="pb-4">Phone Number</td>
                    <td className="pb-4">: {registration.data.phone}</td>
                  </tr>
                  <tr>
                    <td className="pr-16 pb-4">Email</td>
                    <td className="pb-4">: {registration.data.email}</td>
                  </tr>
                  <tr>
                    <td className="pb-4">Affiliation</td>
                    <td className="pb-4">: {registration.data.affiliation}</td>
                  </tr>
                  <tr>
                    <td>Ticket Type</td>
                    <td>: {registration.data.ticket_type}</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-[#092040] xl:h-16 md:h-12 h-10 w-full rounded-xl flex justify-center items-center">
                {isRejected && <p className="text-white xl:text-2xl md:text-lg text-sm font-bold">Your registration has been rejected</p>}
                {isAccepted && !isPresence && <p className="text-white xl:text-2xl md:text-lg text-sm font-bold">Your registration is accepted</p>}
                {isPresence && (
                  <button onClick={handleExperienceClick} className="bg-[#092040] text-white xl:text-2xl md:text-lg text-sm font-bold py-2 px-4 rounded-xl">
                    Share your experience here!
                  </button>
                )}
                {isPending && <p className="text-white xl:text-2xl md:text-lg px-4 text-xs font-bold">Your registration is being processed</p>}
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

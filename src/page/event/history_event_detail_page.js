import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';
import CircleBefore from '../../assets/images/event/history/circle_progress_before.png';
import CircleDone from '../../assets/images/event/history/circle_progres_done.png';
import CircleReject from '../../assets/images/event/history/circle_progress_reject.png';

const HistoryEventDetailPage = () => {
  const { registrationId } = useParams(); // Mendapatkan registrationId dari URL
  const [registration, setRegistration] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (registrationId) {
      axios
        .get(`http://127.0.0.1:8000/api/registrations/${registrationId}`)
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

  const isRejected = registration.data.status === 'Rejected';
  const isAccepted = registration.data.status === 'Accepted';
  const isPresence = registration.data.attendance === 1;

  return (
    <div>
      <NavbarComponent />
      <section>
        <div className="flex flex-col items-center w-screen min-h-screen pt-16 bg-[#F2EEEA] pb-24">
          <div className="bg-white p-12 rounded-xl w-4/5 my-24">
            <p className="my-12 text-xl font-semibold text-center">Latest Activity</p>
            <div className="flex flex-row items-center justify-center mx-32">
              {/* Rendering status */}
              <div className="flex flex-col justify-center items-center">
                <img src={CircleDone} alt="Done" className="w-12 h-12" />
                <p>Registration</p>
              </div>
              <div className="h-1 w-full bg-[#3167D2] mb-6"></div>
              <div className="flex flex-col justify-center items-center">
                <img src={isRejected ? CircleReject : CircleDone} alt={isRejected ? 'Reject' : 'Done'} className="w-12 h-12" />
                <p>Review</p>
              </div>
              <div className={`h-1 w-full ${isAccepted ? 'bg-[#3167D2]' : 'bg-[#999999]'} mb-6`}></div>
              <div className="flex flex-col justify-center items-center">
                <img src={isAccepted ? CircleDone : CircleBefore} alt={isAccepted ? 'Done' : 'Before'} className="w-12 h-12" />
                <p>Accepted</p>
              </div>
              <div className={`h-1 w-full ${isPresence ? 'bg-[#3167D2]' : 'bg-[#999999]'} mb-6`}></div>
              <div className="flex flex-col justify-center items-center">
                <img src={isPresence ? CircleDone : CircleBefore} alt={isPresence ? 'Done' : 'Before'} className="w-12 h-12" />
                <p>Presence</p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-24 mt-12">
              {/* Rendering data pendaftaran */}
              <table className="my-12">
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
              <div className="bg-[#092040] h-16 w-full rounded-xl flex justify-center items-center">
                <p className="text-white text-2xl font-bold">Your registration is being processed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};

export default HistoryEventDetailPage;

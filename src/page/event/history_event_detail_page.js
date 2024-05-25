import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';
import CircleBefore from '../../assets/images/event/history/circle_progress_before.png';
import CircleDone from '../../assets/images/event/history/circle_progres_done.png';

const HistoryEventDetailPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/registrations/')
      .then((response) => {
        const userId = localStorage.getItem('id');
        const filteredRegistrations = response.data.filter((registration) => registration.user_id === parseInt(userId));
        setRegistrations(filteredRegistrations);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching registration data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavbarComponent />
      <section>
        <div className="flex flex-col items-center w-screen min-h-screen pt-16 bg-[#F2EEEA] pb-24">
          <div className="bg-white p-12 rounded-xl w-4/5 my-24">
            <p className="my-12 text-xl font-semibold text-center">Latest Activity</p>
            <div className="flex flex-row items-center justify-center mx-32">
              <div className="flex flex-col justify-center items-center">
                <img src={CircleDone} alt="Done" className="w-12 h-12" />
                <p>Registration</p>
              </div>
              <div className="h-1 w-full bg-[#3167D2] mb-6"></div>
              <div className="flex flex-col justify-center items-center">
                <img src={CircleDone} alt="Done" className="w-12 h-12" />
                <p>Review</p>
              </div>
              <div className="h-1 w-full bg-[#999999] mb-6"></div>
              <div className="flex flex-col justify-center items-center">
                {registrations.some((registration) => registration.status === 'Accepted') ? <img src={CircleDone} alt="Accepted" className="w-12 h-12" /> : <img src={CircleBefore} alt="Before" className="w-12 h-12" />}
                <p>Accepted</p>
              </div>
              <div className="h-1 w-full bg-[#999999] mb-6"></div>
              <div className="flex flex-col justify-center items-center">
                {registrations.some((registration) => registration.attendance === 1) ? <img src={CircleDone} alt="Done" className="w-12 h-12" /> : <img src={CircleBefore} alt="Before" className="w-12 h-12" />}
                <p>Presence</p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-24 mt-12">
              {registrations.length > 0 ? (
                <table className="my-12">
                  <tbody>
                    {registrations.map((registration) => (
                      <React.Fragment key={registration.id}>
                        <tr>
                          <td className="pr-16 pb-4">Registration ID</td>
                          <td className="pr-12 pb-4">: {registration.id}</td>
                          <td className="pr-16 pb-4">Email</td>
                          <td className="pr-12 pb-4">: {registration.email}</td>
                        </tr>
                        <tr>
                          <td className="pb-4">Participant Name</td>
                          <td className="pb-4">: {registration.name}</td>
                          <td className="pb-4">Affiliation</td>
                          <td className="pb-4">: {registration.affiliation}</td>
                        </tr>
                        <tr>
                          <td>Phone Number</td>
                          <td>: {registration.phone}</td>
                          <td>Ticket Type</td>
                          <td>: {registration.ticket_type}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>No registration found for the given ID.</div>
              )}
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

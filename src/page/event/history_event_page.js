import React, { useState, useEffect } from 'react';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';
import Review from '../../components/event/status_pendaftaran_review_component';
import Accepted from '../../components/event/status_pendaftaran_accepted_component';
import Rejected from '../../components/event/status_pendaftaran_rejected_component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HistoryEventPage = () => {
  const navigate = useNavigate();
  const [userRegistrations, setUserRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch registration data from backend when component mounts
    axios
      .get('http://127.0.0.1:8000/api/registrations')
      .then((response) => {
        // Filter registrations by user ID
        const userId = localStorage.getItem('id');
        const filteredRegistrations = response.data.filter((registration) => registration.user_id === parseInt(userId));
        setUserRegistrations(filteredRegistrations);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching registration data:', error);
        setLoading(false);
      });
  }, []);

  const handleView = (registrationId) => {
    // Navigate to detail page for the selected registration
    navigate(`/event/history/detail`); // <-- Pass the registrationId to detail page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userRegistrations.length === 0) {
    return (
      <div>
        <NavbarComponent />
        <section className="flex flex-col items-center w-screen min-h-screen pt-16 bg-[#F2EEEA] pb-24">
          <p className="my-12 text-2xl font-semibold">Riwayat Pendaftaran</p>
          <div className="bg-white p-12 rounded-xl">
            <p>Anda tidak mendaftar acara.</p>
          </div>
        </section>
        <FooterComponent />
      </div>
    );
  }

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Main */}
      <section className="flex flex-col items-center w-screen min-h-screen pt-16 bg-[#F2EEEA] pb-24">
        <p className="my-12 text-2xl font-semibold">Riwayat Pendaftaran</p>
        <div className="bg-white p-12 rounded-xl">
          <table>
            <tr>
              <td className="px-12 text-center font-semibold pb-8">Status</td>
              <td className="px-12 text-center font-semibold pb-8">Pendaftaran</td>
              <td className="px-12 text-center font-semibold pb-8">Aksi</td>
            </tr>
            {userRegistrations.map((registration) => (
              <tr key={registration.id}>
                <td className="px-12 text-center pb-4">
                  {/* Tampilkan status pendaftaran berdasarkan status yang diterima */}
                  {registration.status === 'Pending' && <Review />}
                  {registration.status === 'Accepted' && <Accepted />}
                  {registration.status === 'Rejected' && <Rejected />}
                </td>
                <td className="px-12 pb-4">
                  {/* Tampilkan informasi pendaftaran */}
                  {registration.id} : {registration.event.judul} <br />
                  <span>{registration.event.tanggal}</span>
                </td>
                <td className="px-12 text-center pb-4">
                  <button className="w-32 h-10 bg-[#092040] text-white rounded-xl" onClick={() => handleView(registration.id)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};

export default HistoryEventPage;

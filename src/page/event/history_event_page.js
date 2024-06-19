import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import Review from '../../components/event/status_pendaftaran_review_component';
import Accepted from '../../components/event/status_pendaftaran_accepted_component';
import Rejected from '../../components/event/status_pendaftaran_rejected_component';

const HistoryEventPage = () => {
  const navigate = useNavigate();
  const [userRegistrations, setUserRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch registration data from backend when component mounts
    axios
      .get(`${process.env.REACT_APP_TBN_API_URL}/api/registrations`)
      .then((response) => {
        // Filter registrations by user ID
        const userId = localStorage.getItem('id');
        const filteredRegistrations = response.data.filter((registration) => registration.user_id === parseInt(userId));
        // Sort registrations by created_at in descending order
        filteredRegistrations.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
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
    navigate(`/event/history/detail/${registrationId}`); // <-- Pass the registrationId to detail page
  };

  const formatDateTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  if (loading) {
    return (
      <div>
        <NavbarComponent />
        <div className="p-4">
          <Skeleton height={1000} className="mt-16 justify-center" />
        </div>
        <FooterComponent />
      </div>
    );
  }

  if (userRegistrations.length === 0) {
    return (
      <div>
        <NavbarComponent />
        <section className="flex flex-col items-center w-screen min-h-screen pt-16 bg-[#F2EEEA] pb-24">
          <p className="my-12 text-2xl font-semibold">Riwayat Pendaftaran</p>
          <article className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-10 text-center col-span-full">
            <div className="font-semibold lg:text-xl text-gray-800">Anda tidak mendaftar acara apapun</div>
          </article>
        </section>
        <FooterComponent />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>TBN Indonesia - History</title>
        </Helmet>
        <NavbarComponent />
        {/* Section 1 - Main */}
        <section className="flex flex-col items-center justify-center w-full min-h-screen pt-16 bg-[#F2EEEA] pb-24">
          <p className="my-12 text-2xl font-semibold">Riwayat Pendaftaran</p>
          <div className="bg-white lg:w-fit w-5/6 lg:p-12 py-8 rounded-xl">
            <table className="lg:block hidden">
              <thead>
                <tr>
                  <td className="px-12 text-center font-semibold pb-8">Status</td>
                  <td className="px-12 text-center font-semibold pb-8">Pendaftaran</td>
                  <td className="px-12 text-center font-semibold pb-8">Aksi</td>
                </tr>
              </thead>
              <tbody>
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
                      {registration.event.judul} <br />
                      <span>{formatDateTime(registration.created_at)}</span>
                    </td>
                    <td className="px-12 text-center pb-4">
                      <button className="w-32 h-10 bg-[#092040] text-white rounded-xl" onClick={() => handleView(registration.id)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="lg:hidden">
              {userRegistrations.map((registration) => (
                <div key={registration.id} className="flex flex-col items-center justify-center">
                  <div className="pb-4 flex flex-col justify-center items-center">
                    {/* Tampilkan informasi pendaftaran */}
                    <p className="text-center px-1 font-bold">
                      {registration.event.judul} <br />
                    </p>
                    <p>{formatDateTime(registration.created_at)}</p>
                  </div>
                  <div className="flex flex-row w-full justify-around items-end">
                    <div className="text-center pb-4">
                      <p>Status :</p>
                      {/* Tampilkan status pendaftaran berdasarkan status yang diterima */}
                      {registration.status === 'Pending' && <Review />}
                      {registration.status === 'Accepted' && <Accepted />}
                      {registration.status === 'Rejected' && <Rejected />}
                    </div>
                    <div className="text-center pb-4">
                      <button className="w-32 h-10 bg-[#092040] text-white rounded-xl" onClick={() => handleView(registration.id)}>
                        View
                      </button>
                    </div>
                  </div>
                  <div className="w-5/6 h-0.5 bg-black/40 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="bg-[#F2EEEA]">
          <FooterComponent />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default HistoryEventPage;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import { MdLocalOffer } from 'react-icons/md';

import BannerUpcoming from '../../assets/images/event/upcoming/upcoming_bannner.webp';

const UpcomingEventDetail = () => {
  const { slug } = useParams(); // Ambil ID dari parameter URL
  const [event, setEvent] = useState(null); // State untuk menyimpan data event
  const [events, setEvents] = useState([]); // State untuk menyimpan data semua event
  const [isRegistered, setIsRegistered] = useState(false); // State untuk menyimpan status pendaftaran pengguna

  const userId = localStorage.getItem('id'); // Ambil user_id dari penyimpanan lokal

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/events/details/${slug}`);
        setEvent(response.data.event);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    const fetchAllEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/events`);
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching all events:', error);
      }
    };

    fetchEventData();
    fetchAllEvents();
  }, [slug]);

  useEffect(() => {
    if (userId && event) {
      const fetchRegistrations = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/registrations`);
          const registrations = response.data;

          // Cek apakah user sudah terdaftar untuk event dengan id saat ini
          const isUserRegistered = registrations.some((registration) => registration.user_id === parseInt(userId) && registration.event_id === event.id);
          setIsRegistered(isUserRegistered);
        } catch (error) {
          console.error('Error fetching registrations:', error);
        }
      };

      fetchRegistrations();
    }
  }, [event, userId]);

  if (!event) {
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

  const today = new Date();
  const eventDate = new Date(event.tanggal);
  const isEventExpired = eventDate < today;

  return (
    <div>
      <Helmet>
        <title>TBN Indonesia - Event Detail</title>
      </Helmet>
      <NavbarComponent />
      {/* Section 1 - Banner */}
      <section className="w-full h-full">
        <div className="absolute aspect-square md:aspect-video xl:aspect-21/9 w-full xl:bg-[#131313]/40 bg-[#131313]/60 top-0 pt-12 flex flex-col items-center justify-center"></div>
        <img src={BannerUpcoming} alt="bannerupcoming" className="w-full aspect-square md:aspect-video object-cover xl:aspect-21/9 bg-center bg-cover top-0 pt-12" />
        <div className="absolute aspect-square md:aspect-video xl:aspect-21/9 w-full top-0 flex flex-row justify-center xl:p-24 pt-12 items-center">
          <div className="p-4 mt-2 flex flex-col justify-center items-center rounded-2xl">
            <p className="text-white text-center xl:font-bold lg:font-bold md:font-bold font-semibold xl:text-5xl lg:text-3xl md:text-xl text-lg xl:mb-6 lg:mb-6 mb-2">{event.judul}</p>
            <p className="text-white xl:font-semibold xl:text-2xl lg:text-2xl md:text-lg text-sm xl:mb-6 lg:mb-6">{eventDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="text-white font-light xl:text-2xl lg:text-2xl md:text-lg text-xs text-center xl:mb-6 lg:mb-6 mb-2">{event.lokasi}</p>
            <p className="text-white font-semibold xl:text-xl lg:text-xl md:text-lg text-sm ">REGISTRATION : {event.harga === '0' ? 'Free' : `Rp ${parseInt(event.harga).toLocaleString('id-ID')}`}</p>
            <div className="flex bg-white/50 h-0.5 w-full xl:mt-8 lg:mt-8 md:mt-8 mt-5"></div>
            <div className="text-white xl:h-12 lg:h-12 md:h-8 h-8 mt-0 rounded-full p-2 flex items-center justify-center w-full gap-2">
              <div className="rounded-full xl:p-2">
                <p className="xl:text-2xl lg:text-2xl md:text-lg text-sm">SPEAKERS :</p>
              </div>
            </div>
            <div className=" text-white xl:text-2xl lg:text-2xl md:text-lg text-xs font-bold xl:h-12 md:h-10 h-8 rounded-full p-2 flex items-center text-center justify-center w-full gap-2">{event.pembicara}</div>
            <div className="flex bg-white/50 h-0.5 w-full mt-1 xl:mb-10 lg:mb-10 md:mb-5 mb-4"></div>

            <div className="w-full max-w-xl">
              <div className="w-full xl:mt-0 lg:mt-3 md:mt-1 mt-0">
                {!isEventExpired ? (
                  userId ? (
                    isRegistered ? (
                      <button className="bg-gray-500 xl:h-12 md:h-10 h-8 w-full text-white font-semibold rounded-full text-xl flex items-center justify-center gap-2" disabled>
                        <MdLocalOffer className="xl:text-2xl text-xl" />
                        <p className="xl:text-2xl lg:text-2xl text-sm">Already Registered</p>
                      </button>
                    ) : (
                      <Link to={`/event/register-event/${slug}`} className="block w-full">
                        <button className="bg-[#005F94] xl:h-12 md:h-10 h-8 w-full text-white font-semibold rounded-full text-xl flex items-center justify-center gap-2">
                          <MdLocalOffer className="xl:text-2xl lg:text-2xl text-xl" />
                          <p className="xl:text-2xl text-sm">Register Event Here</p>
                        </button>
                      </Link>
                    )
                  ) : (
                    <Link to={`/event/register-event/${slug}`} className="block w-full">
                      <button className="bg-[#005F94] xl:h-12 md:h-10 h-8 w-full text-white font-semibold rounded-full text-xl flex items-center justify-center gap-2">
                        <MdLocalOffer className="xl:text-2xl text-xl" />
                        <p className="xl:text-2xl lg:text-2xl text-sm">Register Event Here</p>
                      </button>
                    </Link>
                  )
                ) : (
                  <button className="bg-gray-500 xl:h-12 md:h-10 h-8 w-full text-white font-semibold rounded-full text-xl flex items-center justify-center gap-2" disabled>
                    <MdLocalOffer className="xl:text-2xl text-xl" />
                    <p className="xl:text-2xl lg:text-2xl text-sm">Event Expired</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Body */}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-sm font-medium">- Post Conference Highlights -</p>
        <p className="xl:text-4xl lg:text-3xl md:text-xl text-lg mb-12 font-medium text-center xl:mx-0 lg:mx-0 md:mx-0 mx-5">{event.judul}</p>
        <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${event.poster_path}`} alt="poster" className="xl:w-1/3 lg:w-1/3 w-4/5 bg-center bg-cover" />
        <div className="xl:mx-24 mx-12 flex flex-col justify-center items-center my-24">
          <p className="text-xl mb-12 font-light underline underline-offset-2">About the Conference</p>
          <div className="flex flex-row xl:mx-12">
            <p className="text-justify font-light description" dangerouslySetInnerHTML={{ __html: event.deskripsi }}></p>
          </div>
        </div>
      </section>

      {/* Section 3 - Who We Are */}
      <section>
        <div className="bg-[#F2EEEA] py-24 xl:rounded-t-[100px] rounded-t-[50px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center">
            <div className="mx-auto xl:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">More Event</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-8 sm:pt-8 xl:mx-0 xl:max-w-none lg:max-w-none xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
              {/* Map semua event dan tampilkan dalam bentuk card */}
              {events.map((event) => (
                <article key={event.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="relative w-full">
                    <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${event.poster_path}`} alt="poster" className="w-full object-cover rounded-lg" />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{event.judul}</h3>
                    <p className="mt-2 text-sm text-gray-600">{new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <p className="mt-2 text-sm text-gray-600">{event.lokasi}</p>
                    <p className="mt-2 text-sm text-gray-600">Registration: {event.harga === '0' ? 'Free' : `Rp ${parseInt(event.harga).toLocaleString('id-ID')}`}</p>
                    <Link to={`/event/upcoming/detail/${event.slug}`} className="mt-4 block text-blue-600 hover:underline">
                      See Details
                    </Link>
                  </div>
                </article>
              ))}
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

export default UpcomingEventDetail;

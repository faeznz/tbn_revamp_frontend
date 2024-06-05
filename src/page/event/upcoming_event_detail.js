import React, { useEffect, useState } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import axios from 'axios';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import { FaMicrophone } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';

import BannerUpcoming from '../../assets/images/event/upcoming/upcoming_bannner.png';

const UpcomingEventDetail = () => {
  const { id } = useParams(); // Ambil ID dari parameter URL
  const [event, setEvent] = useState(null); // State untuk menyimpan data event
  const [events, setEvents] = useState([]); // State untuk menyimpan data semua event

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/events/${id}`);
        setEvent(response.data.event);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    const fetchAllEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/events`);
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching all events:', error);
      }
    };

    fetchEventData();
    fetchAllEvents();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>; // Tampilkan loading saat data masih di-fetch
  }

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Banner */}
      <section className="w-full h-full">
        <div className="absolute aspect-square md:aspect-video xl:aspect-21/9 w-full xl:bg-[#131313]/40 bg-[#131313]/60 top-0 pt-12 flex flex-col items-center justify-center"></div>
        <img src={BannerUpcoming} alt="" className="w-full aspect-square md:aspect-video object-cover xl:aspect-21/9 bg-center bg-cover top-0 pt-12" />
        <div className="absolute aspect-square md:aspect-video xl:aspect-21/9 w-full top-0 flex flex-row justify-center xl:p-24 pt-12 items-center">
          <div className="p-8 mt-4 flex flex-col justify-center items-center rounded-2xl">
            <p className="text-white text-center font-bold xl:text-5xl md:text-3xl text-md xl:mb-6 mb-2">{event.judul}</p>
            <p className="text-white xl:font-semibold xl:text-2xl md:text-xl text-sm xl:mb-6">{new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="text-white font-light xl:text-2xl md:text-xl text-xs text-center xl:mb-6 mb-2">{event.lokasi}</p>
            <p className="text-white font-semibold xl:text-xl md:text-xl text-md xl:mb-6">REGISTRATION : Rp {parseInt(event.harga).toLocaleString('id-ID')}</p>
            <div className="w-full max-w-xl">
              <div className="xl:mt-12 mt-6 bg-[#005F94] xl:h-12 md:h-10 h-8 shadow-md rounded-full p-2 flex items-center justify-center w-full gap-2">
                <div className="text-white rounded-full xl:p-2">
                  <FaMicrophone className='xl:text-2xl text-xl' />
                </div>
                <div className="text-white rounded-full xl:p-2">
                  <p className="xl:text-2xl text-sm">SPEAKERS : {event.pembicara}</p>
                </div>
              </div>
              <div className="w-full xl:mt-8 mt-4">
                <Link to="/event/register-event" className="block w-full">
                  <button className="bg-[#005F94] xl:h-12 md:h-10 h-8 w-full text-white font-semibold rounded-full text-xl flex items-center justify-center gap-2">
                    <MdLocalOffer className='xl:text-2xl text-xl' />
                    <p className='xl:text-2xl text-sm'>Register Event Here</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Body */}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-sm font-medium">- Post Conference Highlights -</p>
        <p className="xl:text-4xl text-2xl mb-12 font-medium text-center">{event.judul}</p>
        <img src={`${process.env.REACT_APP_TBN_API_STORAGE}/storage/${event.poster_path}`} alt="" className="xl:w-1/3 w-4/5 bg-center bg-cover" />
        <div className="xl:mx-24 mx-12 flex flex-col justify-center items-center my-24">
          <p className="text-xl mb-12 font-light underline underline-offset-2">About the Conference</p>
          <div className="flex flex-row xl:mx-12">
            <p className="text-justify font-light" dangerouslySetInnerHTML={{ __html: event.deskripsi }}></p>
          </div>
        </div>
      </section>

      {/* Section 3 - Who We Are */}
      <section>
        <div className="bg-[#F2EEEA] py-24 xl:rounded-t-[100px] rounded-t-[50px]">
          <div className="mx-auto px-6 xl:px-8">
            <div className="mx-auto xl:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">More Event</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-8 sm:pt-8 xl:mx-0 xl:max-w-none xl:grid-cols-3">
              {/* Map semua event dan tampilkan dalam bentuk card */}
              {events.map((event) => (
                <article key={event.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div>
                    <img src={`${process.env.REACT_APP_TBN_API_STORAGE}/storage/${event.poster_path}`} alt={event.judul} className="rounded-xl mb-4" />
                  </div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={new Date(event.tanggal).toISOString()} className="text-gray-500">
                      {new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <NavLink to={`/event/${event.id}`}>
                        <span className="absolute inset-0" />
                        {event.judul}
                      </NavLink>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{ __html: event.deskripsi }}></p>
                  </div>
                  <div className="text-sm leading-6 mt-8 flex flex-row w-full items-center justify-between">
                    {/* Ganti link "Read More" dengan tautan yang sesuai */}
                    <NavLink to={`/event/upcoming/detail/${event.id}`} className="bg-[#195A94] text-white px-8 py-2 rounded-xl">
                      Read More
                    </NavLink>
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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';
import { FaMicrophone } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import { NavLink, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BannerUpcoming from '../../assets/images/event/upcoming/upcoming_bannner.png';

const UpcomingEventDetail = () => {
  const { id } = useParams(); // Ambil ID dari parameter URL
  const [event, setEvent] = useState(null); // State untuk menyimpan data event
  const [events, setEvents] = useState([]); // State untuk menyimpan data semua event

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}`);
        setEvent(response.data.event);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    const fetchAllEvents = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events`);
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
        {/* Image for main banner */}
        <div className="relative">
          <div className="absolute aspect-21/9 w-full bg-[#131313]/40 top-0"></div>
          <img src={BannerUpcoming} alt="" className="w-full aspect-21/9 bg-center bg-cover top-0" />
          <div className="w-full h-5/6 mt-12 top-0 absolute flex flex-col justify-center p-24 items-center">
            <div className="p-8 mt-12 flex flex-col justify-center items-center rounded-2xl">
              <p className="text-white font-bold text-5xl mb-5">{event.judul}</p> {/* Menampilkan judul event */}
              <p className="text-white font-semibold text-2xl mb-5">{new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p> {/* Menampilkan tanggal event */}
              <p className="text-white font-light text-xl text-center mb-5">{event.lokasi}</p>
              <p className="text-white font-semibold text-xl mb-5">REGISTRATION : Rp {parseInt(event.harga).toLocaleString('id-ID')}</p> {/* Menampilkan harga dalam format Rupiah */}
              <div className="w-full max-w-xl">
                <div className="mt-5 bg-[#005F94] shadow-md rounded-full p-2 flex items-center justify-center w-full">
                  <div className="text-white rounded-full p-2">
                    <FaMicrophone size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-white">SPEAKERS : {event.pembicara}</p> {/* Menampilkan pembicara */}
                  </div>
                </div>
                <div className="w-full mt-8">
                  <Link to="/event/register-event" className="block w-full">
                    <button className="bg-[#005F94] h-12 w-full text-white font-semibold rounded-full text-lg flex items-center justify-center gap-2">
                      <MdLocalOffer size={24} />
                      Register Event Here
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 - Transformational Sales Conference 2024 */}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-sm font-medium">- Post Conference Highlights -</p>
        <p className="text-4xl mb-12 font-medium">{event.judul}</p> {/* Menampilkan judul event */}
        <img src={`http://127.0.0.1:8000/storage/${event.poster_path}`} alt="" className="w-1/3 max-w-md aspect-w-16 aspect-h-9 bg-center bg-cover top-14" /> {/* Menampilkan poster event dengan proporsi aspek 16:9 */}
        <div className="mx-24 flex flex-col justify-center items-center my-24">
          <p className="text-4xl mb-12">About the Conference</p>
          <div className="flex flex-col mx-12" dangerouslySetInnerHTML={{ __html: event.deskripsi }}></div>
        </div>
      </section>

      {/* Section 3 - Who We Are */}
      <section>
        <div className="bg-[#F2EEEA] py-24 lg:rounded-t-[100px] rounded-t-[50px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">More Event</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Map semua event dan tampilkan dalam bentuk card */}
              {events.map((event) => (
                <article key={event.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div>
                    <img src={`http://127.0.0.1:8000/storage/${event.poster_path}`} alt={event.judul} className="rounded-xl mb-4" />
                  </div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={new Date(event.tanggal).toISOString()} className="text-gray-500">
                      {new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
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

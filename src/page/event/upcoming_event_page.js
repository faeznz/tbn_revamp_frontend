import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Lottie from 'lottie-react';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import LottieDataNotFound from '../../assets/lottie/data-not-found.json';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/events`);
        if (response.data && response.data.events && response.data.events.length > 0) {
          const pastEvents = response.data.events.filter((event) => new Date(event.tanggal) > new Date());
          setEvents(pastEvents);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <div className="flex-grow">
          <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Event Upcoming</h2>
              <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {Array(3)
                  .fill()
                  .map((_, index) => (
                    <article key={index}>
                      <Skeleton width={350} height={466} className="rounded-lg mb-4" />
                      <div>
                        <Skeleton width={`60%`} height={24} className="mb-2" />
                        <Skeleton width={`70%`} height={12} />
                        <Skeleton width={`40%`} height={12} />
                        <Skeleton width={`50%`} height={12} />
                      </div>
                      <div className="mt-4">
                        <Skeleton width={128} height={40} />
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        </div>
        <FooterComponent />
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <div className="flex flex-col">
          <section className="bg-white py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Event Upcoming</h2>
              <article className="rounded-lg overflow-hidden text-center col-span-full mt-12">
                <Lottie animationData={LottieDataNotFound} loop={true} />
              </article>
            </div>
          </section>
        </div>
        <FooterComponent />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <div className="flex-grow">
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Event Upcoming</h2>
            <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
              {events.map((event) => (
                <article key={event.id} className="h-full flex flex-col justify-between bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <div>
                    <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${event.poster_path}`} alt={event.judul} onLoad={() => setLoading(false)} className="w-full aspect-3/4 object-cover" />
                    <p className="font-bold text-xl mb-2 text-gray-800 px-6 pt-4">{event.judul}</p>
                  </div>
                  <div className="w-full justify-center items-center">
                    <div className="px-6 pb-4">
                      <p className="text-gray-800 font-medium mb-2">Pembicara: {event.pembicara}</p>
                      <p className="text-gray-800 font-medium mb-2">Registration: {event.harga === '0' ? 'Free' : `Rp ${parseInt(event.harga).toLocaleString('id-ID')}`}</p>
                      <p className="text-gray-800 font-medium">Tanggal: {new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <div className="px-6 py-8 text-center justify-center items-center">
                      <a href={`/event/upcoming/detail/${event.slug}`} className="bg-[#195A94] text-white px-8 py-2 rounded-xl">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
};

export default EventsPage;

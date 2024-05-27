import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/events');
        setEvents(response.data.events);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleImageLoad = () => {
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <div className="flex-grow">
        {/* Section 1 - Blog List */}
        <section className="bg-white py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">EVENT LIST</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
              {events.length === 0 ? (
                <article className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-6 text-center col-span-full">
                  <div className="font-bold text-xl mb-2 text-gray-800">Belum ada event tersedia</div>
                </article>
              ) : (
                events.map((event) => (
                  <article key={event.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <img src={`http://127.0.0.1:8000/storage/${event.poster_path}`} alt={event.judul} onLoad={handleImageLoad} className="w-full object-cover" style={{ height: 'auto', aspectRatio: `${event.aspect_ratio}` }} />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-gray-800">{event.judul}</div>
                      <p className="text-gray-600 text-sm mb-4">{event.deskripsi}</p>
                      <p className="text-gray-800 font-semibold mb-2">Pembicara: {event.pembicara}</p>
                      <p className="text-gray-800 font-semibold mb-2">Harga: Rp {event.harga}</p>
                      <p className="text-gray-800 font-semibold">Tanggal: {new Date(event.tanggal).toLocaleDateString()}</p>
                    </div>
                    <div className="px-6 py-4">
                      <a href={`/events/${event.id}`} className="bg-[#195A94] text-white px-8 py-2 rounded-xl">
                        Read More
                      </a>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
};

export default EventsPage;

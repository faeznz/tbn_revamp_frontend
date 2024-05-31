import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';
import { FaMicrophone } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import BannerUpcoming from '../../assets/images/event/upcoming/upcoming_bannner.png';
import { MdStar } from 'react-icons/md';

const PengalamanPesertaDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}`);
        setEvent(response.data.event);

        const reviewsResponse = await axios.get(`http://127.0.0.1:8000/api/reviews`);
        const reviewsData = reviewsResponse.data.reviews;

        const filteredReviews = reviewsData.filter((review) => review.registration.event_id === parseInt(id));

        setReviews(filteredReviews);

        console.log('Event Data:', response.data.event);
        console.log('Respon data:', reviewsResponse);
        console.log('Filtered Reviews Data:', filteredReviews);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round(totalRating / reviews.length);
  };

  return (
    <div>
      <NavbarComponent />
      <section className="w-full h-full">
        <div className="relative">
          <div className="absolute aspect-21/9 w-full bg-[#131313]/40 top-0"></div>
          <img src={BannerUpcoming} alt="" className="w-full aspect-21/9 bg-center bg-cover top-0" />
          <div className="w-full h-5/6 mt-12 top-0 absolute flex flex-col justify-center p-24 items-center">
            <div className="p-8 mt-12 flex flex-col justify-center items-center rounded-2xl">
              <p className="text-white font-bold text-5xl mb-5">{event.judul}</p>
              <p className="text-white font-semibold text-2xl mb-5">{new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <p className="text-white font-light text-xl text-center mb-5">{event.lokasi}</p>
              <p className="text-white font-semibold text-xl mb-5">REGISTRATION : Rp {parseInt(event.harga).toLocaleString('id-ID')}</p>
              <div className="w-full max-w-xl">
                <div className="mt-5 bg-[#005F94] shadow-md rounded-full p-2 flex items-center justify-center w-full">
                  <div className="text-white rounded-full p-2">
                    <FaMicrophone size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-white">SPEAKERS : {event.pembicara}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-sm font-medium">- Post Conference Highlights -</p>
        <p className="text-4xl mb-12 font-medium">{event.judul}</p>
        <img src={`http://127.0.0.1:8000/storage/${event.poster_path}`} alt="" className="w-1/3 max-w-md aspect-w-16 aspect-h-9 bg-center bg-cover top-14" />
        <div className="mx-24 flex flex-col justify-center items-center my-24">
          <p className="text-xl mb-12 font-light underline underline-offset-2">About the Conference</p>
          <div className="flex flex-row mx-12">
            <p className="text-justify font-light" dangerouslySetInnerHTML={{ __html: event.deskripsi }}></p>
          </div>
        </div>
      </section>
      <section>
        <div className="px-24 bg-[#F2EEEA] py-16 lg:rounded-t-[100px] rounded-t-[50px]">
          <p className="text-black text-2xl font-semibold text-center mb-5">{event.judul}</p>
          <div className="flex flex-row items-center mt-5 mb-5 w-full justify-center">
            <div className="flex flex-row mr-4 gap-1">
              {[...Array(5)].map((_, index) => (
                <MdStar key={index} className={`text-xl ${index < calculateAverageRating(reviews) ? 'text-yellow-400' : 'text-gray-400'}`} />
              ))}
            </div>
            <p>({reviews.length} Ulasan)</p>
          </div>
          {reviews.map((review) => (
            <div key={review.id} className="mx-24">
              <div className="flex flex-row items-center mt-12 w-full">
                <img src="https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png" alt="" className="h-12 w-12 rounded-full" />
                <div className="ml-4 w-full">
                  <div className="flex flex-row justify-between w-full">
                    <div>
                      <p className="font-bold">{review.registration.name}</p>
                      <p className="font-light">{new Date(review.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <div className="flex flex-row gap-1">
                      {[...Array(5)].map((_, index) => (
                        <MdStar key={index} className={`text-xl ${index < review.rating ? 'text-yellow-400' : 'text-gray-400'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="mb-2 mr-24">{review.review}</p>
                </div>
              </div>
              {review.image_path && <img src={`http://127.0.0.1:8000/storage/${review.image_path}`} alt="" className="w-2/5 ml-16" />}
              <hr className="my-8 border-t-2 border-gray-300" /> {/* Garis pemisah antar ulasan */}
            </div>
          ))}
        </div>
      </section>
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default PengalamanPesertaDetail;

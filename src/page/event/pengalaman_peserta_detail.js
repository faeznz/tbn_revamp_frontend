import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import { FaMicrophone } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';

import BannerUpcoming from '../../assets/images/event/upcoming/upcoming_bannner.png';

const PengalamanPesertaDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/events/${id}`);
        setEvent(response.data.event);

        const reviewsResponse = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/reviews`);
        const reviewsData = reviewsResponse.data.reviews;
        const filteredReviews = reviewsData.filter((review) => review.registration.event_id === parseInt(id));

        setReviews(filteredReviews);
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
      {/* Header */}
      <section className="w-full h-full">
        <div className="absolute aspect-square md:aspect-video xl:aspect-21/9 w-full xl:bg-[#131313]/40 bg-[#131313]/60 top-0 pt-12 flex flex-col items-center justify-center"></div>
        <img src={BannerUpcoming} alt="" className="w-full aspect-square md:aspect-video object-cover xl:aspect-21/9 bg-center bg-cover top-0 pt-12" />
        <div className="absolute aspect-square md:aspect-video xl:aspect-21/9 w-full top-0 flex flex-row justify-center xl:p-24 pt-12 items-center">
          <div className="p-8 mt-4 flex flex-col justify-center items-center rounded-2xl">
            <p className="text-white text-center font-bold xl:text-5xl md:text-3xl text-md xl:mb-6 mb-2">{event.judul}</p>
            <p className="text-white xl:font-semibold xl:text-2xl md:text-xl text-sm xl:mb-6">{new Date(event.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="text-white font-light xl:text-2xl md:text-xl text-xs text-center xl:mb-6 mb-2">{event.lokasi}</p>
            <p className="text-white font-semibold xl:text-xl md:text-xl text-md ">REGISTRATION : {event.harga === '0' ? 'Free' : `Rp ${parseInt(event.harga).toLocaleString('id-ID')}`}</p>
            <div className="flex bg-white/50 h-0.5 w-full mt-8"></div>
            <div className="text-white xl:h-12 md:h-10 h-8 mt-4 rounded-full p-2 flex items-center justify-center w-full gap-2">
              <div className="rounded-full xl:p-2">
                <p className="xl:text-2xl text-sm">SPEAKERS :</p>
              </div>
            </div>
            <div className=" text-white xl:text-2xl text-sm font-bold xl:h-12 md:h-10 h-8 rounded-full p-2 flex items-center justify-center w-full gap-2">{event.pembicara}</div>
            <div className="flex bg-white/50 h-0.5 w-full mt-4"></div>
          </div>
        </div>
      </section>
      {/* Body */}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="text-sm font-medium">- Post Conference Highlights -</p>
        <p className="xl:text-4xl text-2xl mb-12 font-medium text-center">{event.judul}</p>
        <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${event.poster_path}`} alt="" className="xl:w-1/3 w-4/5 bg-center bg-cover" />
        <div className="xl:mx-24 mx-12 flex flex-col justify-center items-center my-24">
          <p className="text-xl mb-12 font-light underline underline-offset-2">About the Conference</p>
          <div className="flex flex-row xl:mx-12">
            <p className="text-justify font-light" dangerouslySetInnerHTML={{ __html: event.deskripsi }}></p>
          </div>
        </div>
      </section>
      {/* Ulasan Peserta */}
      <section>
        <div className="xl:px-24 px-12 bg-[#F2EEEA] py-16 xl:rounded-t-[100px] rounded-t-[50px]">
          <p className="text-black xl:text-2xl text-xl font-semibold text-center justify-center mb-6">{event.judul}</p>
          <div className="flex flex-row items-center mt-5 mb-5 w-full justify-center">
            <div className="flex flex-row xl:mr-4 gap-1">
              {[...Array(5)].map((_, index) => (
                <MdStar key={index} className={`xl:text-xl ${index < calculateAverageRating(reviews) ? 'text-yellow-400' : 'text-gray-400'}`} />
              ))}
            </div>
            <p>({reviews.length} Ulasan)</p>
          </div>
          {reviews.map((review) => (
            <div key={review.id} className="xl:mx-24">
              {/* Layout For Dekstop */}
              <div className="hidden xl:flex flex-row items-center mt-12 w-full">
                <img src="https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png" alt="" className="xl:h-12 xl:w-12 h-8 w-8 rounded-full" />
                <div className="ml-4 w-full">
                  <div className="flex flex-row justify-between w-full">
                    <div>
                      <p className="text-xl font-bold">{review.registration.name}</p>
                      <p className="text-md font-light">{new Date(review.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <div className="flex flex-row gap-1">
                      {[...Array(5)].map((_, index) => (
                        <MdStar key={index} className={`text-3xl ${index < review.rating ? 'text-yellow-400' : 'text-gray-400'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xl mb-2 mr-24 mt-4">{review.review}</p>
                </div>
              </div>
              {/* Layout For Mobile */}
              <div className="xl:hidden flex flex-row items-center mt-12 w-full">
                <div className="xl:ml-4 w-full">
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-2">
                        <img src="https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png" alt="" className="xl:h-12 xl:w-12 h-8 w-8 rounded-full" />
                        <div>
                          <p className="text-xl font-bold">{review.registration.name}</p>
                          <p className="text-md font-light">{new Date(review.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 mt-2">
                        {[...Array(5)].map((_, index) => (
                          <MdStar key={index} className={`text-2xl ${index < review.rating ? 'text-yellow-400' : 'text-gray-400'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-md mb-4 mt-4">{review.review}</p>
                </div>
              </div>
              {review.image_path && <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${review.image_path}`} alt="" className="w-72" />}
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

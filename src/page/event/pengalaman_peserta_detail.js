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
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/events/${id}`);
        setEvent(response.data.event);

        const reviewsResponse = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/reviews`);
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
      {/* Header */}
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
      {/* Ulasan Peserta */}
      <section>
        <div className="px-24 bg-[#F2EEEA] py-16 xl:rounded-t-[100px] rounded-t-[50px]">
          <p className="text-black xl:text-2xl text-xl font-semibold text-center mb-6">{event.judul}</p>
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
              {review.image_path && <img src={`${process.env.REACT_APP_TBN_API_STORAGE}/storage/${review.image_path}`} alt="" className="w-2/5 ml-16" />}
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

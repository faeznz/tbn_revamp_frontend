import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/auth_context';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import { MdStar } from 'react-icons/md';

const PengalamanPesertaCreate = () => {
  const { dataLogin } = useAuth();
  const { id } = useParams(); // Mendapatkan registrationId dari URL
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State untuk menampilkan pop-up
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/registrations/${id}`);
        const eventData = response.data.data.event;
        console.log(response);
        setEventName(eventData.judul);
        setEventLocation(eventData.lokasi);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEventData();
  }, [id]);

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('event_registration_id', id);
    formData.append('review', review);
    formData.append('rating', rating);
    formData.append('image', image);

    try {
      await axios.post(`${process.env.REACT_APP_TBN_API_URL}/api/reviews/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setShowSuccessPopup(true); // Menampilkan pop-up setelah berhasil membuat ulasan
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  // Fungsi untuk menutup pop-up
  const handleClosePopup = () => {
    setShowSuccessPopup(false);

    // Redirect ke halaman lain jika diperlukan
    navigate('/event/pengalaman-peserta');
  };

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section className='bg-[#F2EEEA]'>
        <div className="flex flex-col justify-center items-center w-screen xl:h-64 h-48 bg-[#C3D21F] xl:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black xl:text-4xl text-xl font-semibold pt-16">{eventName}</p>
          <p className="text-black xl:text-2xl text-sm font-light">{eventLocation}</p>
        </div>
      </section>
      {/* Section 3 - Description */}
      <section>
        <form onSubmit={handleSubmit} className="bg-[#F2EEEA] w-full xl:px-24 px-12 xl:py-32 flex flex-col items-center justify-center">
          <div className="flex flex-row items-center mt-12 xl:w-3/5">
            <img src="https://cdn1.iconfinder.com/data/icons/user-interface-outline-7/512/ui_ux_user_account_profile-512.png" alt="" className="h-12 w-12 rounded-full" />
            <div className="ml-4 w-full">
              <div className="flex flex-row justify-between w-full">
                <div>
                  <p className="font-bold">{dataLogin.nama}</p>
                  <p className="font-light">Memposting ulasan untuk artikel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex flex-row mr-4 gap-1">
              {[...Array(5)].map((_, index) => (
                <MdStar key={index} className={`text-5xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} onClick={() => handleRatingClick(index)} />
              ))}
            </div>
          </div>
          <div className="flex flex-col xl:w-3/5 xl:mt-8">
            <textarea value={review} onChange={(e) => setReview(e.target.value)} className="h-48 mx-8 my-12 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black p-4" placeholder="Tulis ulasan Anda di sini" />
            <input type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange}/>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button type="submit" className="bg-[#092040] text-white px-8 xl:py-4 py-3 mt-4 rounded-2xl mb-24 mx-8">
              Posting
            </button>
          </div>
        </form>
      </section>
      {/* Menampilkan pop-up jika showSuccessPopup bernilai true */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-xl flex flex-col justify-center items-center">
            <p className="xl:text-2xl font-bold text-gray-800">Terimakasih telah membuat ulasan!</p>
            <button onClick={handleClosePopup} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-xl">
              Tutup
            </button>
          </div>
        </div>
      )}
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default PengalamanPesertaCreate;

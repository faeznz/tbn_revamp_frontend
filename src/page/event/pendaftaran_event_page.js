import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

const PendaftaranEventPage = () => {
  const [events, setEvents] = useState([]); // Inisialisasi sebagai array kosong
  const [selectedEventId, setSelectedEventId] = useState('');
  const [ticketOptions, setTicketOptions] = useState([]); // State baru untuk pilihan tiket

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [notes, setNotes] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [affiliationError, setAffiliationError] = useState('');
  const [ticketTypeError, setTicketTypeError] = useState('');

  const [showConfirmation, setShowConfirmation] = useState(false); // State untuk popup konfirmasi

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/events`);
        if (response.data && response.data.events && response.data.events.length > 0) {
          const pastEvents = response.data.events.filter((event) => new Date(event.tanggal) > new Date());
          setEvents(pastEvents);
        } else {
          console.error('Expected array but got:', typeof response.data.events);
          setEvents([]);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const validateName = (name) => {
    if (name.trim() === '') {
      setNameError('Nama wajib diisi');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Email wajib diisi');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Format email salah');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePhone = (phone) => {
    if (phone.trim() === '') {
      setPhoneError('Nomor Handphone wajib diisi');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  const validateAffiliation = (affiliation) => {
    if (affiliation.trim() === '') {
      setAffiliationError('Afiliasi wajib diisi');
      return false;
    } else {
      setAffiliationError('');
      return true;
    }
  };

  const validateTicketType = (ticketType) => {
    if (ticketType === '') {
      setTicketTypeError('Jenis Tiket wajib dipilih');
      return false;
    } else {
      setTicketTypeError('');
      return true;
    }
  };

  const handleEventChange = (event) => {
    const selectedId = event.target.value;
    setSelectedEventId(selectedId);

    // Cari event yang dipilih berdasarkan ID
    const selectedEvent = events.find((e) => e.id === parseInt(selectedId));

    if (selectedEvent) {
      // Periksa harga tiket dan sesuaikan opsi tiket
      if (selectedEvent.harga === '0') {
        setTicketOptions(['Tiket Gratis']);
        setTicketType('Tiket Gratis');
      } else {
        setTicketOptions(['Tiket Berbayar']);
        setTicketType('Tiket Berbayar');
      }
    } else {
      setTicketOptions([]);
      setTicketType('');
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    validateName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    validatePhone(event.target.value);
  };

  const handleAffiliationChange = (event) => {
    setAffiliation(event.target.value);
    validateAffiliation(event.target.value);
  };

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
    validateTicketType(event.target.value);
  };

  const handleConfirm = async () => {
    const id = localStorage.getItem('id');

    const formData = {
      user_id: id,
      event_id: selectedEventId, // Menggunakan event_id yang dipilih dari dropdown
      name: name,
      email: email,
      phone: phone,
      affiliation: affiliation,
      ticket_type: ticketType,
      notes: notes,
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_TBN_API_URL}/api/registrations`, formData);

      setSuccessMessage('Pendaftaran berhasil.');
      setShowSuccess(true);
      const redirectUrl =
        'https://wa.me/6285156254824?text=Halo%2C%0ASaya%20telah%20mendaftar%20sebagai%20peserta%20Transformational%20Sales%20Conference(%20' +
        encodeURIComponent(selectedEventId) +
        '%20)%20' +
        '%20%0ARegistration%20Id:(%20' +
        encodeURIComponent(response.data.data.id) +
        '%20)%20' +
        '%20%0AName:%20' +
        encodeURIComponent(name) +
        '%20%0AE-Mail:%20' +
        encodeURIComponent(email) +
        '%20%0APhone%20Number:%20' +
        encodeURIComponent(phone) +
        '%20%0AAfiliation:%20' +
        encodeURIComponent(affiliation) +
        '%20%0ATicket%20Type:%20' +
        encodeURIComponent(ticketType) +
        '%20%0A%0AMohon%20konfirmasikan%20pendaftaran%20saya%20dan%20informasi%20terkait%20pembayaran.%0ATerima%20kasih.';
      window.open(redirectUrl, '_blank');
    } catch (error) {
      setErrorMessage('Pendaftaran gagal. Coba ulangi lagi.');
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 10000);

      console.error('Error submitting form:', error);
    } finally {
      setShowConfirmation(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validasi sebelum menampilkan konfirmasi
    if (validateName(name) && validateEmail(email) && validatePhone(phone) && validateAffiliation(affiliation) && validateTicketType(ticketType)) {
      setShowConfirmation(true);
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleCloseSuccess = () => {
    navigate('/event/history');
  };

  return (
    <div className="h-screen">
      <NavbarComponent />
      {showError && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button onClick={handleCloseError} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              &times;
            </button>
            <p className="text-red-600 font-semibold">{errorMessage}</p>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <p className="text-green-600 font-semibold mb-4">{successMessage}</p>
            <button className="absolute bottom-2 right-4 text-gray-600 hover:text-gray-900" onClick={handleCloseSuccess}>
              Close
            </button>
          </div>
        </div>
      )}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <p className="text-black font-semibold mb-4">Apakah Anda yakin ingin mendaftar acara?</p>
            <div className="flex justify-end">
              <button className="bg-[#EB5757] text-white px-4 py-2 rounded-xl mr-4" onClick={handleCancel}>
                Batal
              </button>
              <button className="bg-[#34D399] text-white px-4 py-2 rounded-xl" onClick={handleConfirm}>
                Ya
              </button>
            </div>
          </div>
        </div>
      )}
      <section>
        <div className="flex flex-col justify-center items-center w-full">
          <form className="lg:w-3/5 w-4/5 mt-32 " onSubmit={handleSubmit}>
            <p className="text-3xl font-bold mb-12">Pendaftaran</p>
            <p className="">Event</p>
            <select
              id="event_id"
              name="event_id"
              className={`w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border ${selectedEventId ? 'border-[#B6B6B6]' : 'border-red-500'} text-black px-4`}
              value={selectedEventId}
              onChange={handleEventChange}
              required
            >
              <option value="">Pilih Event</option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.judul}
                </option>
              ))}
            </select>
            {selectedEventId === '' && <p className="text-red-500 text-xs mb-4">Event wajib dipilih</p>}
            <p>Nama</p>
            <input
              type="text"
              className={`w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border ${nameError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black px-4`}
              placeholder="Masukkan Nama"
              value={name}
              onChange={handleNameChange}
              required
            />
            {nameError && <p className="text-red-500 text-xs mb-4">{nameError}</p>}
            <p>Email</p>
            <input
              type="email"
              className={`w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border ${emailError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black px-4`}
              placeholder="Masukkan Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="text-red-500 text-xs mb-4">{emailError}</p>}
            <p>Nomor Handphone</p>
            <input
              type="tel"
              className={`w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border ${phoneError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black px-4`}
              placeholder="Masukkan Nomor Handphone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            {phoneError && <p className="text-red-500 text-xs mb-4">{phoneError}</p>}
            <p>Afiliasi</p>
            <input
              type="text"
              className={`w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border ${affiliationError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black px-4`}
              placeholder="Masukkan Afiliasi"
              value={affiliation}
              onChange={handleAffiliationChange}
            />
            {affiliationError && <p className="text-red-500 text-xs mb-4">{affiliationError}</p>}
            <p>Jenis Tiket</p>
            <select
              id="jenis_tiket"
              name="jenis_tiket"
              className={`w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border ${ticketTypeError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black px-4`}
              value={ticketType}
              onChange={handleTicketTypeChange}
              required
            >
              <option value="">Pilih Jenis Tiket</option>
              {ticketOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {ticketTypeError && <p className="text-red-500 text-xs mb-4">{ticketTypeError}</p>}
            <p>Catatan</p>
            <input type="text" className="w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" placeholder="Masukkan Catatan" value={notes} onChange={(e) => setNotes(e.target.value)} />
            <div className="flex flex-col w-full items-center">
              <button type="submit" className="bg-[#092040] text-white px-16 py-3 rounded-2xl mt-8 mb-24">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};

export default PendaftaranEventPage;

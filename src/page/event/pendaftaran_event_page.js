import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Helmet } from 'react-helmet';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

const PendaftaranEventPage = () => {
  const { slug } = useParams(); // Mengambil ID event dari URL
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/events/details/${slug}`);
        if (response.data && response.data.event) {
          const event = response.data.event;
          setSelectedEvent(event);
          if (event.harga === '0') {
            setTicketType('Tiket Gratis');
          } else {
            setTicketType('Tiket Berbayar');
          }
        } else {
          console.error('Event not found:', slug);
          setSelectedEvent(null);
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

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

  const handleConfirm = async () => {
    const id = localStorage.getItem('id');

    const formData = {
      user_id: id,
      event_id: selectedEvent.id,
      name: name,
      email: email,
      phone: phone,
      affiliation: affiliation,
      ticket_type: ticketType,
      notes: notes,
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_TBN_API_URL}/api/registrations`, formData);

      setSuccessMessage('Terima kasih telah melakukan pendaftaran.');
      setShowSuccess(true);
      const redirectUrl =
        'https://wa.me/6282310001908?text=Halo%2C%0ASaya%20telah%20mendaftar%20sebagai%20peserta%20' +
        encodeURIComponent(selectedEvent.judul) +
        '%20%0ARegistration%20Id:%20' +
        encodeURIComponent(response.data.data.id) +
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
      setErrorMessage('Anda telah mendaftar acara ini. Silahkan lihat di History!');
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

    if (validateName(name) && validateEmail(email) && validatePhone(phone) && validateAffiliation(affiliation)) {
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
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>TBN Indonesia - Event Register</title>
      </Helmet>
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
      {showConfirmation && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative mx-8">
            <p className="text-black font-semibold mb-4">Apakah data yang Anda masukkan sudah benar?</p>
            <table className="w-full mb-4">
              <tbody>
                <tr>
                  <td className="pr-4 py-2 font-semibold">Nama:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td className="pr-4 py-2 font-semibold">Email:</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td className="pr-4 py-2 font-semibold">No. Handphone:</td>
                  <td>{phone}</td>
                </tr>
                <tr>
                  <td className="pr-4 py-2 font-semibold">Afiliasi:</td>
                  <td>{affiliation}</td>
                </tr>
                <tr>
                  <td className="pr-4 py-2 font-semibold">Jenis Tiket:</td>
                  <td>{ticketType}</td>
                </tr>
                <tr>
                  <td className="pr-4 py-2 font-semibold">Catatan:</td>
                  <td>{notes}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end">
              <button className="mr-2 px-4 py-2 bg-gray-400 text-white rounded-md" onClick={handleCancel}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center mt-16 my-8 px-4">
        {loading ? (
          <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              <Skeleton width={200} />
            </h2>
            <div className="mb-4">
              <Skeleton height={40} />
            </div>
            <div className="mb-4">
              <Skeleton height={40} />
            </div>
            <div className="mb-4">
              <Skeleton height={40} />
            </div>
            <div className="mb-4">
              <Skeleton height={40} />
            </div>
            <div className="mb-4">
              <Skeleton height={40} />
            </div>
            <div className="mb-4">
              <Skeleton height={40} />
            </div>
            <div className="flex justify-center">
              <Skeleton width={100} height={40} />
            </div>
          </div>
        ) : selectedEvent ? (
          <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Pendaftaran Event: {selectedEvent.judul}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-1">
                  Nama
                </label>
                <input type="text" id="name" className={`w-full px-3 py-2 border rounded-md ${nameError ? 'border-red-500' : 'border-gray-300'}`} value={name} onChange={handleNameChange} />
                {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-1">
                  Email
                </label>
                <input type="email" id="email" className={`w-full px-3 py-2 border rounded-md ${emailError ? 'border-red-500' : 'border-gray-300'}`} value={email} onChange={handleEmailChange} />
                {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-semibold mb-1">
                  No. Handphone
                </label>
                <input type="text" id="phone" className={`w-full px-3 py-2 border rounded-md ${phoneError ? 'border-red-500' : 'border-gray-300'}`} value={phone} onChange={handlePhoneChange} />
                {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="affiliation" className="block font-semibold mb-1">
                  Afiliasi
                </label>
                <input type="text" id="affiliation" className={`w-full px-3 py-2 border rounded-md ${affiliationError ? 'border-red-500' : 'border-gray-300'}`} value={affiliation} onChange={handleAffiliationChange} />
                {affiliationError && <p className="text-red-500 text-sm">{affiliationError}</p>}
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Jenis Tiket</label>
                <p className="w-full px-3 py-2 border border-gray-300 rounded-md">{ticketType}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="notes" className="block font-semibold mb-1">
                  Catatan
                </label>
                <textarea id="notes" className="w-full px-3 py-2 border border-gray-300 rounded-md" value={notes} onChange={(e) => setNotes(e.target.value)} />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Daftar
                </button>
              </div>
            </form>
          </div>
        ) : (
          <p>Event tidak ditemukan</p>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default PendaftaranEventPage;

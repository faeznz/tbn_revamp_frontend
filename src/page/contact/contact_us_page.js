import React, { useState } from 'react';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';
import { Helmet } from 'react-helmet';

import ContentContactUs from '../../assets/images/contact-us/konten_contact_us.webp';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateName = (name) => {
    if (name.trim() === '') {
      setNameError('Name is required');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateLastName = (lastName) => {
    if (lastName.trim() === '') {
      setLastNameError('Last Name is required');
      return false;
    } else {
      setLastNameError('');
      return true;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePhone = (phone) => {
    if (phone.trim() === '') {
      setPhoneError('Phone Number is required');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  const validateMessage = (message) => {
    if (message.trim() === '') {
      setMessageError('Message is required');
      return false;
    } else {
      setMessageError('');
      return true;
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    validateName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    validateLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    validatePhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    validateMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidName = validateName(name);
    const isValidLastName = validateLastName(lastName);
    const isValidEmail = validateEmail(email);
    const isValidPhone = validatePhone(phone);
    const isValidMessage = validateMessage(message);

    if (isValidName && isValidLastName && isValidEmail && isValidPhone && isValidMessage) {
      const mailtoLink = `mailto:info@tbnindonesia.org?subject=Contact Us&body=Name: ${name} ${lastName}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;

      window.location.href = mailtoLink;
    }
  };

  return (
    <div>
      <Helmet>
        <title>TBN Indonesia - Contact Us</title>
      </Helmet>
      <NavbarComponent />
      {/* <section>
        <div>
          <img src={BannerContactUs} alt="Banner Contact Us" />
        </div>
      </section> */}
      <section>
        <div className="flex lg:flex-row flex-col w-full lg:h-screen lg:justify-between justify-start items-center pt-16">
          <div className="bg-[#005F94] lg:w-2/5 h-full flex justify-center items-center lg:py-0 py-8">
            <img src={ContentContactUs} alt="Content Contact Us" className="w-4/5" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-center lg:px-24 px-12 lg:py-24">
              <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center mb-8 ml-2 mt-10">
                  <p className="lg:text-2xl text-xl font-semibold">Contact Us</p>
                  <p className="lg:text-xl text-sm text-[#666666]">Any question? We would be happy to help you!</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex lg:flex-row flex-col lg:gap-4">
                    <div className="w-full">
                      <input
                        type="text"
                        className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${nameError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black px-4`}
                        placeholder="First Name"
                        value={name}
                        onChange={handleNameChange}
                      />
                      {nameError && <p className="text-red-500 text-xs ml-4 mb-4">{nameError}</p>}
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${lastNameError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black px-4`}
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange}
                      />
                      {lastNameError && <p className="text-red-500 text-xs ml-4 mb-4">{lastNameError}</p>}
                    </div>
                  </div>
                  <div className="w-full">
                    <input type="text" className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${emailError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black px-4`} placeholder="Email" value={email} onChange={handleEmailChange} />
                    {emailError && <p className="text-red-500 text-xs ml-4 mb-4">{emailError}</p>}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${phoneError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black
                      px-4`}
                      placeholder="Phone Number"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    {phoneError && <p className="text-red-500 text-xs ml-4 mb-4">{phoneError}</p>}
                  </div>
                  <div className="w-full">
                    <textarea
                      type="text"
                      className={`w-full h-48 rounded-3xl bg-[#FBFBFB] border border-[#B6B6B6] text-black p-4 ${messageError ? 'border-red-500' : ''}`}
                      placeholder="Message"
                      value={message}
                      onChange={handleMessageChange}
                    />
                    {messageError && <p className="text-red-500 text-xs ml-4 mb-4">{messageError}</p>}
                  </div>
                  <button type="submit" className="bg-[#4E73DF] text-white font-medium rounded-full w-full h-12 mt-4 lg:mb-0 mb-12">
                    Send Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden bg-white">
        <FooterComponent />
      </div>
      <div style={{ background: 'linear-gradient(to right, #005F94 50%, #FFFFFF 50%)' }} className="lg:block hidden">
        <FooterComponent />
      </div>
    </div>
  );
};

export default ContactUsPage;

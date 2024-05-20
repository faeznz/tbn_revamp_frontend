import React, { useState } from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import BannerContactUs from "../../assets/banner_contact_us.png";
import ContentContactUs from "../../assets/konten_contact_us.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const navigate = useNavigate();

  const validateName = (name) => {
    if (name.trim() === "") {
      setNameError("Name wajib diisi");
    } else {
      setNameError("");
    }
  };

  const validateLastName = (lastName) => {
    if (lastName.trim() === "") {
      setLastNameError("Last Name wajib diisi");
    } else {
      setLastNameError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      setEmailError("Email wajib diisi");
    } else if (!emailRegex.test(email)) {
      setEmailError("Format email salah");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = (phone) => {
    if (phone.trim() === "") {
      setPhoneError("Nomor Handphone wajib diisi");
      return false;
    } else {
      setPhoneError("");
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataRegister = {
      name: name,
      last_name: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    try {
      // Make a POST request to your backend server
      const response = await axios.post(
        "http://127.0.0.1:8000/api/",
        dataRegister
      );

      setSuccessMessage("Pendaftaran berhasil. Silakan login.");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/login");
      }, 3000);
    } catch (error) {
      // Handle error
      setErrorMessage("Pendaftaran gagal. Coba ulangi lagi.");
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 10000);

      console.error("Error registering:", error);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Banner */}
      <section>
        <div>
          <img src={BannerContactUs} alt="" />
        </div>
      </section>
      {/* Section 2 - Main */}
      <section>
        <div className="flex flex-row w-screen h-screen justify-between items-center">
          <div className="bg-[#005F94] w-2/5 h-full flex justify-center items-center">
            <img src={ContentContactUs} alt="" className="w-4/5" />
          </div>
          <div className="bg-white w-full">
            <div className="flex items-center justify-center px-24 py-24">
              <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center mb-8 ml-2">
                  <p className="text-2xl font-semibold">Contact Us</p>
                  <p className="text-xl text-[#666666]">
                    Any question ? we would be happy to help you!
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="w-full">
                    <input
                      type="text"
                      className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${
                        nameError ? "border-red-500" : "border-[#B6B6B6]"
                      } text-black px-4`}
                      placeholder="First Name"
                      value={name}
                      onChange={handleNameChange}
                    />
                    {nameError && (
                      <p className="text-red-500 text-xs ml-4 mb-4 ">
                        {nameError}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${
                        lastNameError ? "border-red-500" : "border-[#B6B6B6]"
                      } text-black px-4`}
                      placeholder="Last Name"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                    {lastNameError && (
                      <p className="text-red-500 text-xs ml-4 mb-4">
                        {lastNameError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${
                      emailError ? "border-red-500" : "border-[#B6B6B6]"
                    } text-black px-4`}
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs ml-4 mb-4">
                      {emailError}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${
                      nameError ? "border-red-500" : "border-[#B6B6B6]"
                    } text-black px-4`}
                    placeholder="Phone Number"
                    value={name}
                    onChange={handlePhoneChange}
                  />

                  {nameError && (
                    <p className="text-red-500 text-xs ml-4 mb-4 ">
                      {nameError}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <textarea
                    type="text"
                    className="w-full h-48 rounded-3xl bg-[#FBFBFB] border border-[#B6B6B6] text-black p-4 "
                    placeholder="Message"
                    value={message}
                    onChange={handleMessageChange}
                  />

                  {nameError && (
                    <p className="text-red-500 text-xs ml-4 mb-4 ">
                      {nameError}
                    </p>
                  )}
                </div>

                <button
                  className="bg-[#4E73DF] text-white font-medium rounded-full w-full h-12"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;

import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth_context';

import NavbarComponent from '../../components/navbar_component';

import { auth, googleAuthProvider } from '../../firebase/firebase_config';
import { signInWithPopup } from 'firebase/auth';

import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

import ImgLogin from '../../assets/images/login-register/img_login.png';

const RegisterPage = () => {
  const { login } = useAuth();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');

  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      buttonRef.current.click();
    }
  };

  const validateName = (name) => {
    if (name.trim() === '') {
      setNameError('Name wajib diisi');
    } else {
      setNameError('');
    }
  };

  const validateLastName = (lastName) => {
    if (lastName.trim() === '') {
      setLastNameError('Last Name wajib diisi');
    } else {
      setLastNameError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Email wajib diisi');
    } else if (!emailRegex.test(email)) {
      setEmailError('Format email salah');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (password.trim() === '') {
      setPasswordError('Password wajib diisi');
    } else if (password.length < 8) {
      setPasswordError('Password minimal 8 karakter');
    } else {
      setPasswordError('');
    }
  };

  const validateRepeatPassword = (repeatPassword) => {
    if (repeatPassword !== password) {
      setRepeatPasswordError('Passwords tidak sama');
    } else {
      setRepeatPasswordError('');
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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    validateRepeatPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataRegister = {
      name: name,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: repeatPassword,
    };

    try {
      // Make a POST request to your backend server
      await axios.post(`${process.env.REACT_APP_TBN_API_URL}/api/register`, dataRegister);

      setSuccessMessage('Pendaftaran berhasil. Silakan login.');
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/login');
      }, 8000);
    } catch (error) {
      // Handle error
      setErrorMessage('Pendaftaran gagal. Coba ulangi lagi.');
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 10000);

      console.error('Error registering:', error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);

      const dataRegister = {
        name: result.user.displayName,
        last_name: result.user.displayName,
        email: result.user.email,
        password: result.user.uid,
        password_confirmation: result.user.uid,
      };

      try {
        // Make a POST request to your backend server
        const response = await axios.post(`${process.env.REACT_APP_TBN_API_URL}/api/google-auth`, dataRegister);

        if (response.data && response.data.user) {
          const token = response.data.token;
          const nama = response.data.user.name;
          const id = response.data.user.id;

          localStorage.setItem('token', token);
          localStorage.setItem('id', id);

          login({ nama });

          navigate('/');

          console.log('Login successful:', response.data);
        } else {
          // Handle case where response data is not as expected
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        setErrorMessage('Pendaftaran gagal. Coba ulangi lagi.');
        setShowError(true);

        setTimeout(() => {
          setShowError(false);
        }, 10000);

        console.error('Error registering:', error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    navigate('/login');
  };

  return (
    <div className="bg-[#D2DCDD] h-screen">
      <NavbarComponent />
      {showError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button onClick={handleCloseError} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              &times;
            </button>
            <p className="text-red-600 font-semibold">{errorMessage}</p>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <p className="text-green-600 font-semibold mb-2">{successMessage}</p>
            <button className="absolute bottom-2 right-4 text-gray-600 hover:text-gray-900" onClick={handleCloseSuccess}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className="h-full w-full flex justify-center items-center pt-12">
        {/* Section 1 -  Register*/}
        <section className="w-full h-full flex flex-row">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:mx-10 lg:my-7 lg:px-24 lg:py-25 w-screen">
            <img src={ImgLogin} alt="" className="h-full lg:block hidden" />
            <div className="bg-white h-full lg:w-2/5 w-full flex flex-col lg:justify-center justify-start items-center lg:px-12 lg:rounded-r-xl">
              <div className="flex flex-col items-center">
                <div className="flex justify-center">
                  <p className="text-2xl mb-8 lg:mt-0 mt-12">Create an Account!</p>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${nameError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black pl-4`}
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    onKeyPress={handleKeyPress}
                    ref={inputRef}
                  />
                  {nameError && <p className="text-red-500 text-xs ml-4 mb-4 ">{nameError}</p>}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${lastNameError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black pl-4`}
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    onKeyPress={handleKeyPress}
                    ref={inputRef}
                  />
                  {lastNameError && <p className="text-red-500 text-xs ml-4 mb-4">{lastNameError}</p>}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${emailError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black pl-4`}
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    onKeyPress={handleKeyPress}
                    ref={inputRef}
                  />
                  {emailError && <p className="text-red-500 text-xs ml-4 mb-4">{emailError}</p>}
                </div>
                <div className="flex lg:flex-row flex-col justify-between lg:gap-2 w-full">
                  <div className="lg:w-1/2 w-full">
                    <input
                      type="password"
                      className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${passwordError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black pl-4`}
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      onKeyPress={handleKeyPress}
                      ref={inputRef}
                    />
                    {passwordError && <p className="text-red-500 text-xs ml-4 mb-4">{passwordError}</p>}
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <input
                      type="password"
                      className={`w-full h-14 mb-2 rounded-full bg-[#FBFBFB] border ${repeatPasswordError ? 'border-red-500' : 'border-[#B6B6B6]'} text-black pl-4`}
                      placeholder="Repeat Password"
                      value={repeatPassword}
                      onChange={handleRepeatPasswordChange}
                      onKeyPress={handleKeyPress}
                      ref={inputRef}
                    />
                    {repeatPasswordError && <p className="text-red-500 text-xs ml-4 mb-4">{repeatPasswordError}</p>}
                  </div>
                </div>

                <button id="myBtn" ref={buttonRef} className="bg-[#4E73DF] text-white font-medium rounded-full w-full h-12 mt-4" onClick={handleSubmit}>
                  Register
                </button>
                <div className="flex flex-row justify-center items-center mt-4 gap-2">
                  <p className="text-[#9A9CA9]">Have an account?</p>
                  <NavLink to="/login" className="text-[#4E73DF] text-sm">
                    Login
                  </NavLink>
                </div>

                <div className="w-full flex flex-row justify-center items-center">
                  <div className="w-2/5 h-[1px] bg-[#B6B6B6] rounded-full my-6"></div>
                  <p className="text-gray-600 mx-4">or</p>
                  <div className="w-2/5 h-[1px] bg-[#B6B6B6] rounded-full my-6"></div>
                </div>
                <button className="border-[#4E73DF] border-2 text-[#4E73DF] font-medium rounded-full w-full h-12" onClick={handleSignInWithGoogle}>
                  <div className="flex flex-row items-center justify-center">
                    <FcGoogle className="text-2xl mr-2" />
                    <p>Sign in with Google</p>
                  </div>
                </button>
                <button className="border-[#4E73DF] border-2 text-[#4E73DF] font-medium rounded-full w-full h-12 mt-2 lg:mb-0 mb-12" onClick={handleSignInWithGoogle}>
                  <div className="flex flex-row items-center justify-center">
                    <FaApple className="text-2xl mr-2 text-black" />
                    <p>Sign in with Apple</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterPage;

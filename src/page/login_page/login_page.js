import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth_context';

import NavbarComponent from '../../components/navbar_component';

import { auth, googleAuthProvider } from '../../firebase/firebase_config';
import { signInWithPopup } from 'firebase/auth';

import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

import ImgLogin from '../../assets/images/login-register/img_login.png';

const LoginPage = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // This function to POST login input to API
  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataLogin = {
      email: email,
      password: password,
    };

    try {
      console.log(process.env.REACT_APP_TBN_API_URL);
      const response = await axios.post(`${process.env.REACT_APP_TBN_API_URL}/api/login`, dataLogin);

      const token = response.data.token;
      const nama = response.data.users.name;
      const id = response.data.users.id;

      localStorage.setItem('token', token);
      localStorage.setItem('id', id);

      login({ nama });
      navigate('/');

      console.log('Login successful:', response.data);
    } catch (error) {
      setErrorMessage('Invalid email or password. Please try again.');
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 10000);
      console.error('Error login:', error);
    }
  };

  // This function to login google in firebase and send data to API
  const handleLogInWithGoogle = async () => {
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

  // This function to display message if login error
  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <div className="bg-[#D2DCDD] h-screen">
      <NavbarComponent />
      {/* Section 1 -  Login*/}
      <div className="h-full w-full flex justify-center items-center pt-12">
        {/* If Error Message */}
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
        <section className=" w-full h-full flex flex-row">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:mx-10 lg:my-7 lg:px-24 py-25 w-screen">
            {/* Image Banner */}
            <img src={ImgLogin} alt="" className="h-full lg:block hidden" />
            {/* Form Login */}
            <div className="bg-white lg:h-full h-screen lg:w-2/5 w-full flex flex-col justify-center items-center px-12 lg:rounded-r-xl">
              <div className="flex flex-col items-center">
                <div className="flex justify-center">
                  <p className="text-2xl mb-8 lg:mt-0 mt-8">Welcome Back!</p>
                </div>
                {/* Input Username and Password */}
                <input type="text" className="lg:w-96 w-80 h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" placeholder="Enter Email Address.." value={email} onChange={handleEmailChange} />
                <input type="password" className="lg:w-96 w-80 h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" placeholder="Password" value={password} onChange={handlePasswordChange} />
                {/* Remember Me */}
                <div className="flex flex-row justify-start items-center ml-4 mb-4">
                  <input type="checkbox" className="w-4 h-4 mr-2 rounded-full" />
                  <p className="text-[#9A9CA9]">Remember Me</p>
                </div>
                {/* Login Button */}
                <button className="bg-[#4E73DF] text-white font-medium rounded-full w-full h-12" onClick={handleSubmit}>
                  Login
                </button>
                {/* Forgot Password and Register Button */}
                <div className="flex flex-col justify-center items-center mt-4 gap-2">
                  <p className="text-[#4E73DF] text-sm">Forgot Password?</p>
                  <NavLink to="/register" className="text-[#4E73DF] text-sm">
                    Create an Account?
                  </NavLink>
                </div>
                {/* Separator */}
                <div className="w-full flex flex-row justify-center items-center">
                  <div className="w-2/5 h-[1px] bg-[#B6B6B6] rounded-full my-6"></div>
                  <p className="text-gray-600 mx-4">or</p>
                  <div className="w-2/5 h-[1px] bg-[#B6B6B6] rounded-full my-6"></div>
                </div>
                {/* Login with Google Account */}
                <button className="border-[#4E73DF] border-2 text-[#4E73DF] font-medium rounded-full w-full h-12" onClick={handleLogInWithGoogle}>
                  <div className="flex flex-row items-center justify-center">
                    <FcGoogle className="text-2xl mr-2" />
                    <p>Login with Google</p>
                  </div>
                </button>
                {/* Login with Apple Account */}
                <button className="border-[#4E73DF] border-2 text-[#4E73DF] font-medium rounded-full w-full h-12 mt-2 lg:mb-0 mb-12" onClick={handleLogInWithGoogle}>
                  <div className="flex flex-row items-center justify-center">
                    <FaApple className="text-2xl mr-2 text-black" />
                    <p>Login with Apple</p>
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

export default LoginPage;

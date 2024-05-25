import React, { useState } from 'react';
import NavbarComponent from '../../components/navbar_component';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth_context';

import { auth, googleAuthProvider } from '../../firebase/firebase_config';
import { signInWithPopup } from 'firebase/auth';

import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

import ImgLogin from '../../assets/img_login.png';

const LoginPage = () => {
  const { login } = useAuth();
  const { loginGoogle } = useAuth();

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataLogin = {
      email: email,
      password: password,
    };

    try {
      // Make a POST request to your backend server
      const response = await axios.post('http://127.0.0.1:8000/api/login', dataLogin);

      console.log(response.data.user);

      // Extract token from response
      const token = response.data.token;
      const nama = response.data.users.name;
      const id = response.data.users.id;

      // Save token to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);

      login({ nama });

      navigate('/');

      // Handle success response
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle error

      setErrorMessage('Invalid email or password. Please try again.');
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 10000);

      console.error('Error login:', error);
    }
  };

  const handleLogInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem('token', result.user.accessToken);
      localStorage.setItem('user', JSON.stringify(result.user));

      var nama = result.user.displayName;

      loginGoogle({ nama });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <div className="bg-[#D2DCDD] h-screen">
      <NavbarComponent />
      <div className="h-full w-full flex justify-center items-center pt-12">
        {/* Section 1 -  Login*/}
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
          <div className="flex items-center justify-center mx-10 my-7 px-24 py-25 w-screen">
            <img src={ImgLogin} alt="" className="h-full" />
            <div className="bg-white h-full w-2/5  flex flex-col justify-center items-center px-12 rounded-r-xl">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <p className="text-2xl mb-8">Welcome Back!</p>
                </div>
                <input type="text" className="w-96 h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" placeholder="Enter Email Address.." value={email} onChange={handleEmailChange} />
                <input type="password" className="w-96 h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <div className="flex flex-row justify-start items-center ml-4 mb-4">
                  <input type="checkbox" className="w-4 h-4 mr-2 rounded-full" />
                  <p className="text-[#9A9CA9]">Remember Me</p>
                </div>
                <button className="bg-[#4E73DF] text-white font-medium rounded-full w-full h-12" onClick={handleSubmit}>
                  Login
                </button>
                <div className="flex flex-col justify-center items-center mt-4 gap-2">
                  <p className="text-[#4E73DF] text-sm">Forgot Password?</p>
                  <NavLink to="/register" className="text-[#4E73DF] text-sm">
                    Create an Account?
                  </NavLink>
                </div>

                <div className="w-full flex flex-row justify-center items-center">
                  <div className="w-2/5 h-[1px] bg-[#B6B6B6] rounded-full my-6"></div>
                  <p className="text-gray-600 mx-4">or</p>
                  <div className="w-2/5 h-[1px] bg-[#B6B6B6] rounded-full my-6"></div>
                </div>

                <button className="border-[#4E73DF] border-2 text-[#4E73DF] font-medium rounded-full w-full h-12" onClick={handleLogInWithGoogle}>
                  <div className="flex flex-row items-center justify-center">
                    <FcGoogle className="text-2xl mr-2" />
                    <p>Login with Google</p>
                  </div>
                </button>
                <button className="border-[#4E73DF] border-2 text-[#4E73DF] font-medium rounded-full w-full h-12 mt-2" onClick={handleLogInWithGoogle}>
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

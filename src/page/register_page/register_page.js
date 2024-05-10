import React, { useState } from 'react';
import NavbarComponent from '../../components/navbar';
import ImgLogin from '../../assets/img_login.png';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan username, email, password, dan repeatPassword
  };

  return (
    <div className="bg-[#D2DCDD] h-screen">
      <NavbarComponent />
      <div className="h-full w-full flex justify-center items-center pt-12">
        {/* Section 1 -  Register*/}
        <section className="w-full h-full flex flex-row">
          <div className="flex items-center justify-center px-24 py-24 w-screen">
            <img src={ImgLogin} alt="" className="h-full" />
            <div className="bg-white h-full w-2/5 flex flex-col justify-center items-center px-12 rounded-r-xl">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <p className="text-2xl mb-8">Create an Account!</p>
                </div>
                <input
                  type="text"
                  className="w-full h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" // Mengubah warna teks menjadi hitam
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <input
                  type="text"
                  className="w-full h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" // Mengubah warna teks menjadi hitam
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="flex flex-row justify-between gap-2">
                  <input
                    type="password"
                    className="w-1/2 h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" // Mengubah warna teks menjadi hitam
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <input
                    type="password"
                    className="w-1/2 h-14 mb-4 rounded-full bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4" // Mengubah warna teks menjadi hitam
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                  />
                </div>

                <button className="bg-[#4E73DF] text-white font-medium rounded-full w-full h-12" onClick={handleSubmit}>
                  Register
                </button>
                <div className="flex flex-row justify-center items-center mt-4 gap-2">
                  <p className="text-[#9A9CA9]">Have an account?</p>
                  <NavLink to="/login" className="text-[#4E73DF] text-sm">
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterPage;

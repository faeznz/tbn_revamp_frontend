import React from 'react';
import NavbarComponent from '../../components/navbar';
import ImgLogin from '../../assets/img_login.png';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan email dan password
  };

  return (
    <div className="bg-[#D2DCDD] h-screen">
      <NavbarComponent />
      <div className="h-full w-full flex justify-center items-center pt-12">
        {/* Section 1 -  Login*/}
        <section className=" w-full h-full flex flex-row">
          <div className="flex items-center justify-center px-24 py-24 w-screen">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;

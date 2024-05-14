import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoTbn from "../assets/logo_tbn_indonesia.png";
import { AuthProvider, useAuth } from "../context/auth_context";

function Navbar({ data }) {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isAccountHovered, setIsAccountHovered] = useState(false);
  const aboutRef = useRef(null);
  const accountRef = useRef(null);
  const { dataLogin } = useAuth();
  const { logout } = useAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAboutHovered(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setIsAccountHovered(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aboutRef, accountRef]);

  let timeoutIdAbout, timeoutIdAccount;

  const handleMouseLeaveAbout = () => {
    timeoutIdAbout = setTimeout(() => {
      setIsAboutHovered(false);
    }, 200);
  };

  const handleMouseEnterAbout = () => {
    clearTimeout(timeoutIdAbout);
    setIsAboutHovered(true);
  };

  const handleMouseLeaveAccount = () => {
    timeoutIdAccount = setTimeout(() => {
      setIsAccountHovered(false);
    }, 200);
  };

  const handleMouseEnterAccount = () => {
    clearTimeout(timeoutIdAccount);
    setIsAccountHovered(true);
  };

  const handleAboutClick = () => {
    setIsAboutHovered(!isAboutHovered);
  };

  const handleAccountClick = () => {
    setIsAccountHovered(!isAccountHovered);
  };

  const token = localStorage.getItem("token");

  return (
    <div>
      {/* Navbar */}
      <div className="flex fixed justify-between items-center bg-[#092040] w-full h-16 px-16 z-10">
        <div>
          <img src={logoTbn} alt="Logo TBN Alliance" className="h-10" />
        </div>
        <div className="flex flex-row gap-10 items-center text-white font-medium">
          <NavLink to="/">Home</NavLink>
          <div
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
            onClick={handleAboutClick}
            ref={aboutRef}
            className="relative"
          >
            <p>About</p>
            {isAboutHovered && (
              <div className="flex flex-col gap-2 absolute w-40 bg-white text-black font-medium rounded-md shadow-md py-2 px-4 top-12 left-0 z-10">
                <NavLink to="/about/visimisi">Visi dan Misi</NavLink>
                <NavLink to="/about/history">History</NavLink>
                <NavLink to="/about/partnership">Partnership</NavLink>
                <NavLink to="/about/our-approach">Our Approach</NavLink>
                <NavLink to="/about/how-it-works">How It Works</NavLink>
                <NavLink to="/about/where">Where</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/register-event">Register Event</NavLink>
          <p>{data}</p>
          {dataLogin ? (
            <div className="flex flex-row justify-center items-center">
              <i className="fa-regular fa-user text-white"></i>
              <div
                onMouseEnter={handleMouseEnterAccount}
                onMouseLeave={handleMouseLeaveAccount}
                onClick={handleAccountClick}
                ref={accountRef}
                className="relative"
              >
                <p>{dataLogin.nama}</p>
                {isAccountHovered && (
                  <div className="flex flex-col gap-2 absolute w-40 bg-white text-black font-medium rounded-md shadow-md py-2 px-4 top-12 right-0 z-10">
                    <button onClick={logout}>Logout</button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button className="bg-white text-black font-medium px-6 py-2 rounded-2xl w-28">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth_context';

import { RiAccountCircleLine } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

import logoTbn from '../assets/images/logo/logo_tbn_indonesia.png';

function Navbar({ data }) {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isAccountHovered, setIsAccountHovered] = useState(false);
  const [isEventHovered, setIsEventHovered] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const aboutRef = useRef(null);
  const accountRef = useRef(null);
  const eventRef = useRef(null);
  const burgerRef = useRef(null);
  const burgerMenuRef = useRef(null);
  const { dataLogin, logout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target) && burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
        setIsAboutHovered(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setIsAccountHovered(false);
      }
      if (eventRef.current && !eventRef.current.contains(event.target) && burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
        setIsEventHovered(false);
      }
      if (burgerRef.current && !burgerRef.current.contains(event.target) && burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
        setIsBurgerOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aboutRef, accountRef, eventRef, burgerRef, burgerMenuRef]);

  let timeoutIdAbout, timeoutIdAccount, timeoutIdEvent;

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

  const handleMouseLeaveEvent = () => {
    timeoutIdEvent = setTimeout(() => {
      setIsEventHovered(false);
    }, 200);
  };

  const handleMouseEnterEvent = () => {
    clearTimeout(timeoutIdEvent);
    setIsEventHovered(true);
  };

  const handleAboutClick = () => {
    setIsAboutHovered(!isAboutHovered);
  };

  const handleAccountClick = () => {
    setIsAccountHovered(!isAccountHovered);
  };

  const handleEventClick = () => {
    setIsEventHovered(!isEventHovered);
  };

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleLogout = async () => {
    await logout();
    setShowSuccess(true);
    setIsBurgerOpen(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    navigate('/');
  };

  return (
    <div>
      <div className="flex fixed justify-between items-center bg-[#092040] w-full h-16 lg:px-16 px-6 z-10">
        <div>
          <img src={logoTbn} alt="Logo TBN Alliance" className="lg:h-10 h-6" />
        </div>
        <div className="hidden md:flex flex-row gap-10 items-center text-white font-medium">
          <NavLink to="/">Home</NavLink>
          <div onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout} onClick={handleAboutClick} ref={aboutRef} className="relative">
            <p>About</p>
            {isAboutHovered && (
              <div className="flex flex-col gap-2 absolute w-40 bg-white text-black font-medium rounded-md shadow-md py-2 px-4 top-12 left-0 z-10">
                <NavLink to="/about/visimisi">Visi dan Misi</NavLink>
                <NavLink to="/about/history">History</NavLink>
                <NavLink to="/about/partnership">Partnership</NavLink>
                <NavLink to="/about/our-approach">Our Approach</NavLink>
                <NavLink to="/about/how-it-works">How It Works</NavLink>
                <NavLink to="/about/where">Where</NavLink>
                <NavLink to="/about/who-we-are">Who We Are</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <div onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent} onClick={handleEventClick} ref={eventRef} className="relative">
            <p>Event</p>
            {isEventHovered && (
              <div className="flex flex-col gap-2 absolute w-40 bg-white text-black font-medium rounded-md shadow-md py-2 px-4 top-12 left-0 z-10">
                <NavLink to="/event/upcoming" className="leading-4">
                  Upcoming Event
                </NavLink>
                <NavLink to="/event/pengalaman-peserta" className="leading-4">
                  Pengalaman Peserta
                </NavLink>
                <NavLink to="/event/history">History</NavLink>
              </div>
            )}
          </div>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            IMM
          </a>
          <p>{data}</p>
          {dataLogin ? (
            <div className="flex flex-row justify-center items-center">
              <i className="fa-regular fa-user text-white"></i>
              <div onMouseEnter={handleMouseEnterAccount} onMouseLeave={handleMouseLeaveAccount} onClick={handleAccountClick} ref={accountRef} className="relative">
                <div className="flex flex-row items-center">
                  <RiAccountCircleLine className="text-2xl mr-1" />
                  <p>{dataLogin.nama}</p>
                </div>
                {isAccountHovered && (
                  <div className="flex flex-col gap-2 absolute w-40 bg-white text-black font-medium rounded-md shadow-md py-2 px-4 top-12 right-0 z-10">
                    <button onClick={handleLogout}>Logout</button>
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
        <div className="md:hidden flex items-center" ref={burgerRef}>
          <button onClick={handleBurgerClick} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Burger Menu Navbar */}
      {isBurgerOpen && (
        <div ref={burgerMenuRef} className="flex flex-col fixed items-start bg-[#092040] text-white rounded-b-3xl font-medium py-4 px-8 md:hidden w-full z-10">
          <div className="flex justify-between items-center w-full mb-8 mt-4">
            <img src={logoTbn} alt="Logo TBN Alliance" className="h-6" />
            <button onClick={handleBurgerClick} className="text-white focus:outline-none">
              <IoClose className="w-6 h-6" />
            </button>
          </div>
          {dataLogin ? (
            <div className="flex lg:hidden flex-row justify-center items-center w-full py-2 mb-4">
              <i className="fa-regular fa-user text-white"></i>
              <div onMouseEnter={handleMouseEnterAccount} onMouseLeave={handleMouseLeaveAccount} onClick={handleAccountClick} className="relative w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-xl">Hi, {dataLogin.nama}</p>
                  <MdLogout
                    className="text-xl"
                    onClick={() => {
                      handleLogout();
                      setIsBurgerOpen(false);
                    }}
                  />
                </div>
                <div className="w-full h-0.5 bg-white opacity-50 mt-4"></div>
              </div>
            </div>
          ) : (
            <button className="hidden">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}

          <NavLink to="/" onClick={() => setIsBurgerOpen(false)}>
            Home
          </NavLink>
          <div onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout} onClick={handleAboutClick} className="relative w-full">
            <p className="mt-3">About</p>
            {isAboutHovered && (
              <div className="flex flex-col gap-2 w-full bg-white text-black font-medium rounded-md shadow-md p-4 my-2">
                <NavLink to="/about/visimisi" onClick={() => setIsBurgerOpen(false)}>
                  Visi dan Misi
                </NavLink>
                <NavLink to="/about/history" onClick={() => setIsBurgerOpen(false)}>
                  History
                </NavLink>
                <NavLink to="/about/partnership" onClick={() => setIsBurgerOpen(false)}>
                  Partnership
                </NavLink>
                <NavLink to="/about/our-approach" onClick={() => setIsBurgerOpen(false)}>
                  Our Approach
                </NavLink>
                <NavLink to="/about/how-it-works" onClick={() => setIsBurgerOpen(false)}>
                  How It Works
                </NavLink>
                <NavLink to="/about/where" onClick={() => setIsBurgerOpen(false)}>
                  Where
                </NavLink>
                <NavLink to="/about/who-we-are" onClick={() => setIsBurgerOpen(false)}>
                  Who We Are
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="/blog" className="mt-3" onClick={() => setIsBurgerOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/contact" className="mt-3" onClick={() => setIsBurgerOpen(false)}>
            Contact Us
          </NavLink>
          <div onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent} onClick={handleEventClick} className="relative w-full">
            <p className="mt-3">Event</p>
            {isEventHovered && (
              <div className="flex flex-col gap-2 w-full bg-white text-black font-medium rounded-md shadow-md p-4 my-2">
                <NavLink to="/event/upcoming" className="lg:leading-4" onClick={() => setIsBurgerOpen(false)}>
                  Upcoming Event
                </NavLink>
                <NavLink to="/event/pengalaman-peserta" className="lg:leading-4" onClick={() => setIsBurgerOpen(false)}>
                  Pengalaman Peserta
                </NavLink>
                <NavLink to="/event/history" onClick={() => setIsBurgerOpen(false)}>
                  History
                </NavLink>
              </div>
            )}
          </div>
          <a href="https://example.com" className="mt-3" onClick={() => setIsBurgerOpen(false)} target="_blank" rel="noopener noreferrer">
            IMM
          </a>
          <p>{data}</p>
          {dataLogin ? (
            <div className="lg:flex hidden flex-row justify-center items-center w-full">
              <i className="fa-regular fa-user text-white"></i>
              <div onMouseEnter={handleMouseEnterAccount} onMouseLeave={handleMouseLeaveAccount} onClick={handleAccountClick} className="relative w-full">
                <div className="flex flex-row items-center w-full lg:mt-0 mt-12">
                  <RiAccountCircleLine className="text-2xl mr-1" />
                  <p>{dataLogin.nama}</p>
                </div>
                {isAccountHovered && (
                  <div className="flex flex-col gap-2 w-full bg-white text-black font-medium rounded-md shadow-md py-2 px-4">
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsBurgerOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button className="bg-white text-black font-medium px-6 py-2 rounded-2xl w-full my-8">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <p className="text-green-600 font-semibold mb-4">Anda berhasil melakukan log out.</p>
            <button className="absolute bottom-2 right-4 text-gray-600 hover:text-gray-900" onClick={handleCloseSuccess}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

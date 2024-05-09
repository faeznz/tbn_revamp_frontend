import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoTbn from "../assets/LOGO_TBN_ALLIANCE.png";

function Navbar() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAboutHovered(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aboutRef]);

  let timeoutId;

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsAboutHovered(false);
    }, 100);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsAboutHovered(true);
  };

  const handleAboutClick = () => {
    setIsAboutHovered(!isAboutHovered);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex fixed justify-between items-center bg-[#092040] w-full h-16 px-16 z-10">
        <div>
          <img src={logoTbn} alt="Logo TBN Alliance" className="h-10" />
        </div>
        <div className="flex flex-row gap-10 items-center text-white font-medium">
          <NavLink to='/'>Home</NavLink>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleAboutClick}
            ref={aboutRef}
            className="relative"
          >
            <p>About</p>
            {isAboutHovered && (
              <div className="flex flex-col gap-2 absolute w-40 bg-white text-black font-medium rounded-md shadow-md py-2 px-4 top-12 left-0 z-10">
                <NavLink to='/about/visi-dan-misi'>Visi dan Misi</NavLink>
                <NavLink to='/about/history'>History</NavLink>
                <NavLink to='/about/partnership'>Partnership</NavLink>
                <NavLink to='/about/our-approach'>Our Approach</NavLink>
                <NavLink to='/about/how-it-works'>How It Works</NavLink>
                <NavLink to='/about/where'>Where</NavLink>
              </div>
            )}
          </div>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>
          <NavLink to='/register-event'>Register Event</NavLink>
          <button className="bg-white text-black font-medium px-6 py-2 rounded-2xl w-28">
            <NavLink to='/login'>Login</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

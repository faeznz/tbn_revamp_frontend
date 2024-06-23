import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

import logoTbn from '../assets/images/logo/logo_tbn_indonesia.png';

const footer_component = () => {
  return (
    <div>
      <section className="bg-[#092040] w-full h-full flex flex-col lg:rounded-t-[100px] rounded-t-[30px] lg:py-8">
        {/* Logo and Address */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center justify-around px-8 lg:py-12 py-8 lg:text-lg text-sm">
          <div className="flex flex-col items-center text-white">
            <img src={logoTbn} alt="logotbn" className="lg:h-32 h-24 lg:mb-12 mb-4 lg:flex hidden" />
            <p className="leading-loose text-center lg:flex hidden">Indonesia Team Impact Hub</p>
            <p className="leading-loose text-center lg:flex hidden">Lippo Thamrin Lt.5 #0503</p>
            <p className="leading-loose text-center lg:flex hidden">Jl. M.H.Thamrin No.20, Menteng</p>
            <p className="leading-loose text-center lg:flex hidden">Jakarta Pusat 10350, Indonesia</p>
          </div>
          {/* About */}
          <div className="lg:flex hidden flex-col text-white gap-4 ">
            <p className="font-bold tracking-[.25em] mb-2">About</p>
            <NavLink to="/about/visimisi">Vision Mission</NavLink>
            <NavLink to="/about/history">History</NavLink>
            <NavLink to="/about/partnership">Partnership</NavLink>
            <NavLink to="/about/our-approach">Our Approach</NavLink>
            <NavLink to="/about/how-it-works">How It Works</NavLink>
            <NavLink to="/about/where">Where</NavLink>
            <NavLink to="/about/who-we-are">Who We Are</NavLink>
          </div>
          {/* Resources */}
          <div className="flex flex-col text-white gap-4">
            <p className="lg:flex hidden font-bold tracking-[.25em] mb-2">Resources</p>
            <NavLink to="/blog" className="lg:flex hidden">
              Blog
            </NavLink>
            <NavLink to="/contact" className="lg:flex hidden">
              Contact Us
            </NavLink>
            {/* Social Media */}
            <div className="flex flex-col gap-6 lg:mt-8 items-center">
              <div className="flex flex-row gap-6 items-center justify-center">
                <img src={logoTbn} alt="logotbn" className="w-1/3 lg:mb-12 mb-4 lg:hidden" />
                <div className="flex flex-col lg:gap-6 gap-3 items-center">
                  <p className="font-bold tracking-[.25em]">Connect with Us</p>
                  <div className="flex flex-row gap-4 lg:text-3xl text-xl">
                    <a href="https://www.instagram.com/tbn.indonesia/" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/channel/UCnal-hHUTJRGKl5N0S79Gbg" target="_blank" rel="noopener noreferrer" title="YouTube">
                      <FaYoutube />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+6282310001908&text=Hi,%20Saya%20ingin%20bertanya%20tentang%20informasi%20TBN%20Indonesia" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                      <FaWhatsapp />
                    </a>
                    <a href="mailto:info@tbnindonesia.org" target="_blank" rel="noopener noreferrer" title="Email">
                      <MdEmail />
                    </a>
                    <a href="https://www.linkedin.com/in/tbn-indonesia-210705251/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <p className="lg:text-md text-xs">© 2024 TBN Indonesia. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default footer_component;

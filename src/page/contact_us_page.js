import React from 'react';
import NavbarComponent from "../components/navbar_component";
import FooterComponent from "../components/footer_component";
import BannerContactUs from '../assets/banner_contact_us.png';
import ContentContactUs from '../assets/konten_contact_us.png';

const ContactUsPage = () => {
  return (
    <div>
        <NavbarComponent/>
        {/* Section 1 - Banner */}
        <section>
            <div>
                <img src={BannerContactUs} alt="" />
            </div>
        </section>
        {/* Section 2 - Main */}
        <section>
            <div className='flex flex-row w-screen justify-between items-center'>
                <div className='bg-[#005F94] w-2/5 flex justify-center items-center'>
                    <img src={ContentContactUs} alt="" className='w-4/5 my-32'/>
                </div>
                <div className='bg-white w-3/5'>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactUsPage
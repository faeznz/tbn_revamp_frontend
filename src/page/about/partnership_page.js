import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import BannerHistory from '../../assets/images/about/partnership/banner_partner.png';

const PartnershipPage = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TBN_API_URL}/api/partners`)
      .then((response) => {
        setPartners(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">Our Partnerships</p>
        </div>
      </section>
      {/* Section 2 - Univ Partner */}
      <section>
        <div className="flex flex-col justify-center items-center lg:px-32 px-8">
          <p className="lg:text-2xl text-lg font-medium pt-16 text-center">Belmont University and the Belmont Innovation Labs</p>
          <p className="lg:text-2xl text-lg text-center pt-16">
            The TBN is anchored by a strategic partnership between the TBN Network and Belmont University, with the Belmont Innovation Labs as the organization at Belmont stewarding the Alliance.
            <br />
            <br />
            The Innovation Labs hosts the TBN Indonesia Secretariat.
          </p>
          <img src={BannerHistory} alt="" className="lg:w-4/5 w-full lg:py-24 py-8" />
        </div>
      </section>
      {/* Section 3 - Our Partner */}
      <section className="flex flex-col mt-12 justify-center items-center ">
        <div className="bg-[#EEEEEE] w-full flex flex-col justify-center items-center">
          <p className="lg:text-3xl text-2xl my-24">TBN Indonesia Partners</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-4 px-12 pb-24">
            {partners.map((partner) => (
              <div key={partner.id} className="h-32 bg-white rounded-xl flex justify-center items-center p-4">
                <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${partner.image}`} alt={partner.name} className="h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <div className="bg-[#F2EEEA]">
        <FooterComponent />
      </div>
    </div>
  );
};

export default PartnershipPage;

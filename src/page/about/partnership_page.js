import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

const PartnershipPage = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TBN_API_URL}/api/partners`)
      .then((response) => {
        setPartners(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>TBN Indonesia - Partnership</title>
      </Helmet>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section className="bg-[#EEEEEE]">
        <div className="flex flex-col justify-center items-center w-full lg:h-64 h-40 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black lg:text-4xl text-2xl font-semibold pt-16">Our Partnerships</p>
        </div>
      </section>

      {/* Section 2 - Our Partner */}
      <section className={`flex flex-col justify-center items-center ${!partners || partners.length === 0 ? 'hidden' : ''}`}>
        <div className="bg-[#EEEEEE] w-full flex flex-col justify-center items-center pt-16">
          <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center gap-4 xl:px-12 xl:pb-24 px-6 pb-6">
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

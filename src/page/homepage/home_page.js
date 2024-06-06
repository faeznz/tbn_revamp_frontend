import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import bannerHomepage from '../../assets/images/home/banner-homepage.png';
import missionBanner from '../../assets/images/home/mission_tbn.png';
import tbnWorldwide from '../../assets/images/home/peta_tbn.png';

function HomePage() {
  const [homeContents, setHomeContents] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TBN_API_URL}/api/posts`)
      .then((response) => {
        setHomeContents(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });

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

  const renderSectionContent = (section) => {
    const content = homeContents.find((item) => item.section === section);
    if (content) {
      const postData = content.post_data;
      return postData;
    }
    return null;
  };

  const getYoutubeEmbedUrl = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const cleanDescription = (description) => {
    return description.replace(/rnrn/g, '<br />');
  };

  const aboutUsContent = renderSectionContent('About Us');
  const whoWeAreContent = renderSectionContent('Who We Are');

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Main */}
      <section className="w-full h-full">
        {/* Image for main banner */}
        <div className="absolute aspect-4/3 md:aspect-video lg:aspect-21/9 w-full lg:bg-[#131313]/40 bg-[#131313]/60 top-0 pt-12 flex flex-col items-center justify-center"></div>
        <img src={bannerHomepage} alt="" className="w-full aspect-4/3 md:aspect-video object-cover lg:aspect-21/9 bg-center bg-cover top-0 pt-12" />
        <div className="absolute aspect-4/3 md:aspect-video lg:aspect-21/9 w-full top-0 flex flex-row justify-center lg:p-24 items-center">
          <div className="w-1 h-3/5 lg:bg-[#FFB400] sm:bg-transparent"></div>
          <div className=" sm:w-full lg:p-8 pt-20 flex flex-col justify-center lg:items-start items-center rounded-2xl">
            <p className="text-white font-bold lg:text-5xl md:text-4xl text-md lg:mb-12 sm:mb-4 lg:text-left text-center">
              Transformational <br /> Business Network (TBN) Indonesia
            </p>
            <p className="text-white font-light lg:text-3xl md:text-xl text-sm lg:text-left text-center">
              Fighting Poverty in Frontier Markets <br /> Across the Globe.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - About Us */}
      <section className="flex flex-col lg:mt-12 md:mt-12 justify-center items-center">
        <p className="lg:text-4xl text-2xl mb-12 font-medium">ABOUT US</p>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:px-24 px-8 lg:pb-32 pb-12">
          {aboutUsContent && (
            <>
              {aboutUsContent.content_type === 'video' && (
                <div className="w-full h-full relative pt-[56.25%] overflow-hidden flex flex-col justify-center items-center">
                  <iframe
                    src={getYoutubeEmbedUrl(aboutUsContent.content)}
                    title={aboutUsContent.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute lg:top-32 top-0 bottom-0 right-0 left-0 w-full lg:h-2/3 h-full"
                  ></iframe>
                </div>
              )}
              <div className="lg:w-1/2 lg:mx-24 mx-8 flex flex-col justify-center items-center lg:mt-0 mt-8">
                <p className="lg:text-5xl text-2xl mb-12">{aboutUsContent.title}</p>
                <div className="text-justify" dangerouslySetInnerHTML={{ __html: cleanDescription(aboutUsContent.description) }}></div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Section 3 - WHO WE ARE */}
      <section className="bg-[#F6CF55] flex flex-row lg:rounded-t-[100px] rounded-t-[50px]">
        <div className="flex lg:flex-row flex-col items-center justify-center lg:px-24 px-8 lg:py-0 py-12 lg:h-screen">
          {whoWeAreContent && (
            <>
              {whoWeAreContent.content_type === 'image' && <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${whoWeAreContent.content}`} alt={whoWeAreContent.title} className="lg:h-3/5 aspect-video object-cover" />}
              <div className="bg-[#EDEDED] lg:h-3/5 flex flex-col justify-center items-center px-12 lg:py-0 py-8">
                <p className="lg:text-4xl text-2xl mb-8 font-medium">{whoWeAreContent.title}</p>
                <div className="font-light text-justify" dangerouslySetInnerHTML={{ __html: cleanDescription(whoWeAreContent.description) }}></div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Section 4 - Mission */}
      <section className="flex flex-col justify-center items-center bg-[#F6CF55]">
        <div className="flex flex-col lg:pt-24 pt-12 justify-center items-center bg-white lg:rounded-t-[100px] rounded-t-[50px]">
          <p className="lg:text-4xl text-2xl lg:mb-12 md:mb-12 font-medium">MISSION</p>
          <div className="flex lg:flex-row flex-col lg:px-32 px-8 lg:pb-32 justify-center items-center gap-8">
            <p className="text-justify font-light lg:w-2/5 w-full lg:leading-loose">
              The TBN Indonesia nurtures purpose-driven businesses to thrive, aiming to reduce poverty and promote environmental sustainability. We foster a global movement for social good, empowering entrepreneurs, and directly benefiting
              families and communities. Our ambitious aim is to ignite an impact movement, uniting people worldwide to leverage business for social transformation, particularly supporting SMEs in emerging markets.
            </p>
            <img src={missionBanner} alt="" className="lg:w-2/5 w-4/5 " />
          </div>
        </div>
      </section>

      {/* Section 5 - Our Partner */}
      <section className="flex flex-col mt-12 justify-center items-center ">
        <div className="bg-[#EEEEEE] w-full flex flex-col justify-center items-center">
          <p className="lg:text-3xl text-2xl my-24">Our Partner</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-4 px-12 pb-24">
            {partners.map((partner) => (
              <div key={partner.id} className="h-32 bg-white rounded-xl flex justify-center items-center p-4">
                <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${partner.image}`} alt={partner.name} className="h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:px-24 px-8 pb-32 justify-between items-center">
          <p className="lg:text-3xl text-2xl lg:py-24 py-8">TBN's Global Reach</p>
          <img src={tbnWorldwide} alt="" className="" />
        </div>
      </section>

      {/* Section 3 -  Footer*/}
      <FooterComponent />
    </div>
  );
}

export default HomePage;

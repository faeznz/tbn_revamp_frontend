import React, { useEffect, useState } from 'react';
import bannerHomepage from '../assets/banner-homepage.png';
import missionBanner from '../assets/mission_tbn.png';
import ourPartner from '../assets/our_partner.png';
import tbnWorldwide from '../assets/peta_tbn.png';
import NavbarComponent from '../components/navbar_component';
import FooterComponent from '../components/footer_component';
import axios from 'axios';

var token = localStorage.getItem('token');
console.log(token);

function HomePage() {
  const [homeContents, setHomeContents] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/posts')
      .then((response) => {
        setHomeContents(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const renderSectionContent = (section) => {
    const content = homeContents.find((item) => item.section === section);
    if (content) {
      const postData = content.post_data; // Update: directly use post_data without parsing
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

  const aboutUsContent = renderSectionContent('About us');
  const whoWeAreContent = renderSectionContent('WHO WE ARE');

  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Main */}
      <section className="w-full h-full">
        {/* Image for main banner */}
        <div className="absolute aspect-4/3 lg:aspect-21/9 w-full lg:bg-[#131313]/40 bg-[#131313]/60 top-0 pt-12"></div>
        <img src={bannerHomepage} alt="" className="w-full aspect-4/3 lg:aspect-21/9 bg-center bg-cover top-0 pt-12" />
        <div className="w-full lg:h-5/6 sm:h-1/5 top-0 absolute flex flex-row lg:justify-start justify-center lg:p-24 pt-12 items-center">
          <div className="w-1 h-3/5 lg:bg-[#FFB400] sm:bg-transparent"></div>
          <div className="lg:w-3/5 sm:w-full lg:p-8 pt-20 flex flex-col justify-center lg:items-start items-center rounded-2xl">
            <p className="text-white font-bold lg:text-5xl text-md lg:mb-12 sm:mb-4 lg:text-left text-center">
              Transformational <br /> Business Network (TBN) Indonesia
            </p>
            <p className="text-white font-light lg:text-3xl text-sm lg:text-left text-center">
              Fighting Poverty in Frontier Markets <br /> Across the Globe.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - About Us */}
      <section className="flex flex-col mt-12 justify-center items-center">
        <p className="lg:text-4xl text-2xl mb-12 font-medium">ABOUT US</p>
        <div className="flex lg:flex-row flex-col lg:px-24 px-8 lg:pb-32 pb-12 justify-between items-center">
          {aboutUsContent && (
            <>
              {aboutUsContent.content_type === 'video' && (
                <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                  <iframe
                    width="100%"
                    height="320"
                    src={getYoutubeEmbedUrl(aboutUsContent.content)}
                    title={aboutUsContent.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
              {whoWeAreContent.content_type === 'image' && <img src={`http://127.0.0.1:8000/storage/${whoWeAreContent.content}`} alt={whoWeAreContent.title} className="lg:h-3/5 aspect-square" />}
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
          <p className="lg:text-4xl text-2xl lg:mb-12 font-medium">MISSION</p>
          <div className="flex lg:flex-row flex-col lg:px-32 px-8 lg:pb-32 justify-center items-center gap-8">
            <p className="text-justify font-light lg:w-2/5 w-full lg:leading-loose">
              The TBN Alliance nurtures purpose-driven businesses to thrive, aiming to reduce poverty and promote environmental sustainability. We foster a global movement for social good, empowering entrepreneurs, and directly benefiting
              families and communities. Our ambitious aim is to ignite an impact movement, uniting people worldwide to leverage business for social transformation, particularly supporting SMEs in emerging markets.
            </p>
            <img src={missionBanner} alt="" className="lg:w-2/5 w-4/5 " />
          </div>
        </div>
      </section>

      {/* Section 5 - Our Partner */}
      <section className="flex flex-col mt-12 justify-center items-center ">
        <p className="lg:text-3xl text-2xl">Our Partner</p>
        <div className="flex flex-col lg:px-24 px-8 pb-32 justify-between items-center">
          <img src={ourPartner} alt="" className="" />
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

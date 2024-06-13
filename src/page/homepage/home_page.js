import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';
import CarouselComponent from '../../components/carousel';

import bannerHomepage from '../../assets/images/home/banner-homepage.png';
import missionBanner from '../../assets/images/home/mission_tbn.png';
import tbnWorldwide from '../../assets/images/home/peta_tbn.png';
import nullSafetyImageWhoWeAre from '../../assets/images/home/who_we_are.png';

function HomePage() {
  const [homeContents, setHomeContents] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TBN_API_URL}/api/posts`)
      .then((response) => {
        setHomeContents(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });

    axios
      .get(`${process.env.REACT_APP_TBN_API_URL}/api/partners`)
      .then((response) => {
        setPartners(response.data);
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
    return description.replace(/rnrn/g, '');
  };

  const aboutUsContent = renderSectionContent('About Us');
  const whoWeAreContent = renderSectionContent('Who We Are');
  const landingPageContent = renderSectionContent('Landing Page');
  const landingPageImage = landingPageContent ? `${process.env.REACT_APP_TBN_API_URL}/storage/${landingPageContent.content}` : bannerHomepage;

  return (
    <div className="overflow-x-hidden">
      <NavbarComponent />
      {/* Section 1 - Main */}
      <section className="relative w-full h-full">
        {/* Image for main banner */}
        <div className="absolute inset-0 aspect-9/16 md:aspect-16/9 lg:aspect-18/9 xl:aspect-21/9 w-full xl:bg-[#131313]/45 lg:bg-[#131313]/45 md:bg-[#131313]/45 bg-[#131313]/40 flex flex-col items-center justify-center"></div>
        <img src={landingPageImage} alt="" className="w-full aspect-9/16 md:aspect-16/9 lg:aspect-18/9 xl:aspect-21/9 object-cover bg-center bg-cover top-0 pt-16" />
        <div className="absolute aspect-9/16 md:aspect-21/9 xl:aspect-21/9 w-full top-0 flex flex-row justify-center xl:p-24 xl:pt-0 lg:pt-16 md:pt-24 pt-24 items-center">
          <div className="w-1 h-2/5 xl:bg-[#FFB400] sm:bg-transparent"></div>
          <div className=" sm:w-full xl:p-8 flex flex-col justify-center xl:items-start items-center rounded-2xl">
            <p className="text-white font-bold xl:text-5xl lg:text-4xl md:text-4xl text-lg xl:mb-12 sm:mb-4 xl:text-left text-center">
              Transformational <br /> Business Network (TBN) Indonesia
            </p>
            <p className="text-[#C3D21F] font-bold xl:text-4xl lg:text-3xl md:text-2xl text-lg xl:text-left text-center">Fighting Poverty Through Enterprise</p>
          </div>
        </div>
      </section>

      {/* Section 2 - About Us */}
      <section className="flex flex-col justify-center items-center">
        <p className="xl:text-4xl text-2xl xl:mb-0 mb-12 xl:mt-12 md:mt-12 mt-5 font-medium">ABOUT US</p>
        <div className="flex xl:flex-row flex-col w-full justify-center items-center xl:px-32 lg:px-56 md:px-32 px-8 pb-12">
          {aboutUsContent ? (
            <>
              {aboutUsContent.content_type === 'video' && (
                <div className="w-full h-full relative pt-[56.25%] overflow-hidden flex flex-col justify-center items-center">
                  <iframe
                    src={getYoutubeEmbedUrl(aboutUsContent.content)}
                    title={aboutUsContent.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute xl:top-32 top-0 bottom-0 right-0 left-0 w-full xl:h-2/3 h-full"
                  ></iframe>
                </div>
              )}
              <div className="xl:w-1/2 xl:ml-12 flex flex-col justify-center items-center xl:mt-0 mt-8">
                <p className="xl:text-4xl text-2xl mb-5 xl:mb-12 font-medium">{aboutUsContent.title}</p>
                <div className="text-justify xl:text-lg description" dangerouslySetInnerHTML={{ __html: cleanDescription(aboutUsContent.description) }}></div>
              </div>
            </>
          ) : (
            <div className="flex xl:flex-row flex-col w-full justify-center items-center pb-12">
              <div className="w-full h-full relative pt-[56.25%] overflow-hidden flex flex-col justify-center items-center">
                <iframe
                  src="https://www.youtube.com/embed/3kMdhQVjMhU"
                  title="Mengenal lebih dekat TBN Indonesia"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute xl:top-32 top-0 bottom-0 right-0 left-0 w-full xl:h-2/3 h-full"
                ></iframe>
              </div>
              <div className="xl:w-1/2 xl:ml-12 flex flex-col justify-center items-center xl:mt-0 mt-8">
                <p className="xl:text-4xl text-2xl mb-5 xl:mb-12 font-medium">TBN Indonesia</p>
                <div className="text-justify xl:text-lg description">
                  TBN Indonesia is a community of investors, NGOs, educators, and philanthropists dedicated to driving transformative change for a better life. Our mission is to address pressing social issues through the power of social
                  entrepreneurship.
                  <br />
                  <br />
                  By fostering collaboration among diverse stakeholders, we aim to create innovative and sustainable solutions that uplift communities and improve quality of life. Our community members bring a wealth of knowledge,
                  resources, and passion, working together to tackle challenges ranging from poverty and education to healthcare and environmental sustainability.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 3 - WHO WE ARE */}
      <div>
        <section className="bg-[#F6CF55] flex flex-row xl:rounded-t-[100px] rounded-t-[50px]">
          <div className="flex xl:flex-row flex-col items-center justify-center xl:px-32 lg:px-56 md:px-32 px-8 xl:py-0 py-12 xl:h-screen">
            {whoWeAreContent ? (
              <>
                {whoWeAreContent.content_type === 'image' && (
                  <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${whoWeAreContent.content}`} alt={whoWeAreContent.title} className="xl:h-3/5 aspect-video object-cover xl:rounded-[20px] rounded-[10px] order-1 xl:order-2" />
                )}
                <div className="xl:h-3/5 flex flex-col justify-center items-center xl:mr-12 xl:py-0 py-8 order-2 xl:order-1">
                  <p className="xl:text-4xl text-2xl mb-8 font-medium">{whoWeAreContent.title}</p>
                  <div className="xl:text-lg text-justify description" dangerouslySetInnerHTML={{ __html: cleanDescription(whoWeAreContent.description) }}></div>
                </div>
              </>
            ) : (
              <div className="flex xl:flex-row flex-col items-center justify-center xl:py-0 py-12 xl:h-screen">
                <img src={nullSafetyImageWhoWeAre} alt="Who We Are" className="xl:h-3/5 aspect-video object-cover xl:rounded-[20px] rounded-[10px] order-1 xl:order-2" />
                <div className="xl:h-3/5 flex flex-col justify-center items-center xl:mr-12 xl:py-0 py-8 order-2 xl:order-1">
                  <p className="xl:text-4xl text-2xl mb-8 font-medium">WHO WE ARE</p>
                  <div className="text-justify xl:text-lg description">
                    TBN Indonesia is a network that connects entrepreneurs and investors, and offers advisory services such as research, capacity building, and educational content creation.
                    <br />
                    <br />
                    We connect businesses with the capital and resources they need to create positive social and environmental impact alongside financial returns.
                    <br />
                    <br />
                    TBN Indonesia, led by Mr. Teddy Hartono, is the local chapter, focusing on driving impact investment in the Indonesian market.
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Section 4 - Mission */}
      <section className="flex flex-col justify-center items-center bg-[#F6CF55]">
        <div className="flex flex-col xl:pt-24 lg:px-56 md:px-24 pt-12 justify-center items-center bg-[#EEEEEE] xl:rounded-t-[100px] rounded-t-[50px]">
          <p className="xl:text-4xl text-2xl xl:mb-12 md:mb-12 mb-8 font-medium">MISSION</p>
          <div className="flex xl:flex-row flex-col xl:px-0 px-8 xl:pb-32 justify-center items-center gap-8">
            <p className="text-justify xl:text-lg xl:w-3/5 w-full xl:leading-loose">
              The TBN Indonesia nurtures purpose-driven businesses to thrive, aiming to reduce poverty and promote environmental sustainability. We foster a global movement for social good, empowering entrepreneurs, and directly benefiting
              families and communities. Our ambitious aim is to ignite an impact movement, uniting people worldwide to leverage business for social transformation, particularly supporting SMEs in emerging markets.
            </p>
            <img src={missionBanner} alt="" className="xl:w-3/5 lg:w-3/5 py-12 " />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="bg-[#EEEEEE]">
        <section className="bg-white xl:rounded-t-[100px] rounded-t-[50px]">
          <CarouselComponent />
        </section>
      </div>

      {/* Section 5 - Our Partner */}
      <section className="flex flex-col bg-white justify-center items-center">
        <div className={`bg-[#EEEEEE] w-full flex flex-col xl:rounded-t-[100px] rounded-t-[50px] justify-center items-center ${!partners || partners.length === 0 ? 'hidden' : ''}`}>
          <p className="xl:text-4xl text-2xl xl:my-24 my-12 font-medium">Our Partner</p>
          <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center gap-4 xl:px-12 xl:pb-24 px-6 pb-6">
            {partners && partners.length > 0 ? (
              partners.map((partner) => (
                <div key={partner.id} className="h-32 bg-white rounded-xl flex justify-center items-center p-4">
                  <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${partner.image}`} alt={partner.name} className="h-full object-contain" />
                </div>
              ))
            ) : (
              <p className="text-xl text-red-500">Gagal mengambil data partner</p>
            )}
          </div>
        </div>
        <div className="flex flex-col xl:px-24 px-8 xl:pb-32 pb-16 justify-between items-center">
          <p className="xl:text-4xl text-2xl xl:py-24 py-8 font-medium">TBN's Global Reach</p>
          <img src={tbnWorldwide} alt="" className="" />
        </div>
      </section>

      {/* Section 3 -  Footer*/}
      <FooterComponent />
    </div>
  );
}

export default HomePage;

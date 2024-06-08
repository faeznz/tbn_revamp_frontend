import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

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
        <div className="absolute aspect-4/3 md:aspect-video xl:aspect-21/9 w-full xl:bg-[#131313]/40 bg-[#131313]/60 top-0 pt-12 flex flex-col items-center justify-center"></div>
        <img src={bannerHomepage} alt="" className="w-full aspect-4/3 md:aspect-video object-cover xl:aspect-21/9 bg-center bg-cover top-0 pt-12" />
        <div className="absolute aspect-4/3 md:aspect-video xl:aspect-21/9 w-full top-0 flex flex-row justify-center xl:p-24 items-center">
          <div className="w-1 h-3/5 xl:bg-[#FFB400] sm:bg-transparent"></div>
          <div className=" sm:w-full xl:p-8 pt-20 flex flex-col justify-center xl:items-start items-center rounded-2xl">
            <p className="text-white font-bold xl:text-5xl md:text-4xl text-md xl:mb-12 sm:mb-4 xl:text-left text-center">
              Transformational <br /> Business Network (TBN) Indonesia
            </p>
            <p className="text-white font-light xl:text-3xl md:text-xl text-sm xl:text-left text-center">
              Fighting Poverty in Frontier Markets <br /> Across the Globe.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - About Us */}
      <section className="flex flex-col xl:mt-12 md:mt-12 mt-8 justify-center items-center">
        <p className="xl:text-4xl text-2xl mb-12 mt-8 font-medium">ABOUT US</p>
        <div className="flex xl:flex-row flex-col w-full justify-center items-center xl:px-24 px-8 pb-12">
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
              <div className="xl:w-1/2 xl:mx-24 mx-8 flex flex-col justify-center items-center xl:mt-0 mt-8">
                <p className="xl:text-5xl text-2xl mb-12">{aboutUsContent.title}</p>
                <div className="text-justify" dangerouslySetInnerHTML={{ __html: cleanDescription(aboutUsContent.description) }}></div>
              </div>
            </>
          ) : (
            <div className='flex xl:flex-row flex-col w-full justify-center items-center xl:px-24 px-8 xl:pb-32 pb-12'>
              <div className="w-full h-full relative pt-[56.25%] overflow-hidden flex flex-col justify-center items-center">
                <iframe
                  src='https://www.youtube.com/embed/3kMdhQVjMhU'
                  title='Mengenal lebih dekat TBN Indonesia'
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute xl:top-32 top-0 bottom-0 right-0 left-0 w-full xl:h-2/3 h-full"
                ></iframe>
              </div>
              <div className="xl:w-1/2 xl:mx-24 mx-8 flex flex-col justify-center items-center xl:mt-0 mt-8">
                <p className="xl:text-5xl text-2xl mb-12">TBN Indonesia</p>
                <div className="text-justify">TBN Indonesia is a global network focused on poverty alleviation through enterprise, emphasizing multi-faith, multi-sector partnerships. Over the next five years, they plan to launch 1,800 ventures, creating around 11,850 new jobs in emerging markets.</div>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Section 3 - WHO WE ARE */}
      <section className="bg-[#F6CF55] flex flex-row xl:rounded-t-[100px] rounded-t-[50px]">
        <div className="flex xl:flex-row flex-col items-center justify-center xl:px-24 px-8 xl:py-0 py-12 xl:h-screen">
          {whoWeAreContent ? (
            <>
              {whoWeAreContent.content_type === 'image' && <img src={`${process.env.REACT_APP_TBN_API_URL}/storage/${whoWeAreContent.content}`} alt={whoWeAreContent.title} className="xl:h-3/5 aspect-video object-cover" />}
              <div className="bg-[#EDEDED] xl:h-3/5 flex flex-col justify-center items-center px-12 xl:py-0 py-8">
                <p className="xl:text-4xl text-2xl mb-8 font-medium">{whoWeAreContent.title}</p>
                <div className="font-light text-justify" dangerouslySetInnerHTML={{ __html: cleanDescription(whoWeAreContent.description) }}></div>
              </div>
            </>
          ) : (
            <div className='flex xl:flex-row flex-col items-center justify-center xl:px-24 px-8 xl:py-0 py-12 xl:h-screen'>
              <img src={nullSafetyImageWhoWeAre} alt='Who We Are' className="xl:h-3/5 aspect-video object-cover" />
              <div className="bg-[#EDEDED] xl:h-3/5 flex flex-col justify-center items-center px-12 xl:py-0 py-8">
                <p className="xl:text-4xl text-2xl mb-8 font-medium">WHO WE ARE</p>
                <div className="font-light text-justify">TBN Indonesia is a global network of purpose-driven entrepreneurs, impact investors and capacity builders who take an enterprise approach to alleviate poverty in low-income and underserved communities.
                  <br />
                  <br />
                  Over the next five years, TBN Indonesia will launch an estimated 1,800 ventures, providing approximately 11,850 new jobs in frontier and emerging markets globally.</div>
              </div>
            </div>
          )
          }
        </div>
      </section>

      {/* Section 4 - Mission */}
      <section className="flex flex-col justify-center items-center bg-[#F6CF55]">
        <div className="flex flex-col xl:pt-24 pt-12 justify-center items-center bg-white xl:rounded-t-[100px] rounded-t-[50px]">
          <p className="xl:text-4xl text-2xl xl:mb-12 md:mb-12 mb-8 font-medium">MISSION</p>
          <div className="flex xl:flex-row flex-col xl:px-32 px-8 xl:pb-32 justify-center items-center gap-8">
            <p className="text-justify font-light xl:w-2/5 w-full xl:leading-loose">
              The TBN Indonesia nurtures purpose-driven businesses to thrive, aiming to reduce poverty and promote environmental sustainability. We foster a global movement for social good, empowering entrepreneurs, and directly benefiting
              families and communities. Our ambitious aim is to ignite an impact movement, uniting people worldwide to leverage business for social transformation, particularly supporting SMEs in emerging markets.
            </p>
            <img src={missionBanner} alt="" className="xl:w-2/5 w-4/5 " />
          </div>
        </div>
      </section>

      {/* Section 5 - Our Partner */}
      <section className="flex flex-col mt-12 justify-center items-center ">
        <div className={`bg-[#EEEEEE] w-full flex flex-col justify-center items-center ${!partners || partners.length === 0 ? 'hidden' : ''}`}>
          <p className="xl:text-3xl text-2xl xl:my-24 my-12">Our Partner</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center gap-4 px-12 pb-24">
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
        <div className="flex flex-col xl:px-24 px-8 pb-32 justify-between items-center">
          <p className="xl:text-3xl text-2xl xl:py-24 py-8">TBN's Global Reach</p>
          <img src={tbnWorldwide} alt="" className="" />
        </div>
      </section>


      {/* Section 3 -  Footer*/}
      <FooterComponent />
    </div>
  );
}

export default HomePage;

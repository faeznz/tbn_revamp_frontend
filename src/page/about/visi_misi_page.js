import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import BannerVisiMisi from '../../assets/images/about/visi-misi/banner_visi_misi.webp';
import BannerValueDna from '../../assets/images/about/visi-misi/banner_value_dna.webp';
import BannerWeAre from '../../assets/images/about/visi-misi/banner_we_are.webp';

const VisiMisiPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TBN_API_URL}/api/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const getPostDescription = (section) => {
    const post = posts.find((post) => post.section === section);
    return post ? post.post_data.description : '';
  };

  return (
    <HelmetProvider>
      <div className="overflow-x-hidden">
        <Helmet>
          <title>TBN Indonesia - Vision & Mission</title>
        </Helmet>
        <NavbarComponent />
        {/* Section 1 - Header */}
        <section>
          <div className="flex flex-col justify-center items-center w-full lg:h-64 h-36 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
            <p className="text-black lg:text-4xl text-xl font-semibold pt-16">Our Vision, Mission, and Values</p>
          </div>
        </section>
        {/*  */}
        <section className="w-screen flex flex-col items-center">
          <div className="relative flex flex-col justify-center items-center xl:w-3/5 md:w-4/5 lg:w-3/4 lg:h-3/4 lg:py-24 py-12 lg:px-0 px-4">
            <img src={BannerVisiMisi} loading="lazy" alt="visimisi" className="relative" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between items-center text-center xl:py-48 lg:py-36 md:py-20 py-16 font-semibold">
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="bg-[#092040] text-white font-bold xl:px-6 xl:py-1 xl:text-2xl lg:text-2xl md:text-xs text-[10px] lg:px-6 md:px-6 lg:py-1 md:py-1 px-2 py-0 ml-16 xl:mt-0 lg:mt-0 md:mt-0 mt-2">Vision</div>
                <p className="xl:text-base lg:text-base md:text-sm text-[7px] text-left xl:mt-0 lg:mt-0 md:mt-0 mt-2 xl:mr-0 lg:mr-0 mr-10" dangerouslySetInnerHTML={{ __html: getPostDescription('Vision') }} />
              </div>
              <div className="flex flex-col xl:gap-12 lg:gap-12 xl:px-24 md:px-0 xl:mt-0 lg:mt-0 md:mt-0 mt-0">
                <div className="flex flex-row justify-center items-center gap-4">
                  <div className="bg-[#092040] text-white font-bold xl:px-6 xl:py-1 xl:text-2xl lg:text-2xl md:text-xs text-[10px] lg:px-6 md:px-6 lg:py-1 md:py-1  px-2 py-0 xl:ml-16 lg:ml-16 md:ml-14 ml-10 xl:mt-0 md:mt-0 mt-2">
                    Mission
                  </div>
                  <p className="xl:text-base lg:text-base md:text-sm text-[7px] text-left xl:mt-0 lg:mt-0 md:mt-0 mt-2 xl:mr-0 lg:mr-5 md:mr-5 mr-6" dangerouslySetInnerHTML={{ __html: getPostDescription('Mision') }} />
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <div className="bg-[#092040] text-white font-bold xl:px-6 xl:py-1 xl:text-2xl lg:text-2xl md:text-xs text-[10px] lg:px-6 md:px-6 lg:py-1 md:py-1 px-2 py-0 xl:ml-16 lg:ml-16 md:ml-20 ml-12 xl:mt-0 mt-2">Values</div>
                  <p className="xl:text-base lg:text-base md:text-sm text-[7px] text-left xl:mt-0 lg:mt-0 mt-2 xl:mr-0 lg:mr-0 md:mr-5 mr-6" dangerouslySetInnerHTML={{ __html: getPostDescription('Value') }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Values and DNA */}
        <section className="flex flex-col items-center justify-center bg-[#F2EEEA] lg:rounded-t-[100px] rounded-t-[50px]">
          <p className="lg:text-4xl text-2xl mb-8 font-medium lg:pt-24 pt-12">VALUES AND DNA</p>
          <div className="flex flex-col justify-center items-center w-screen lg:py-24 py-8 lg:px-0 px-8">
            <img src={BannerValueDna} loading="lazy" alt="valueDna" />
          </div>
        </section>
        {/* Section 3 - We Are */}
        <section className="flex flex-col items-center justify-center bg-[#F2EEEA]">
          <div className="flex flex-col items-center justify-center bg-white lg:rounded-t-[100px] rounded-t-[50px]">
            <div className="flex flex-col justify-center items-center w-screen lg:py-24 py-8">
              <img src={BannerWeAre} loading="lazy" alt="bannerWeare" className="lg:w-3/5 w-full" />
            </div>
          </div>
        </section>
        {/* Footer */}
        <FooterComponent />
      </div>
    </HelmetProvider>
  );
};

export default VisiMisiPage;

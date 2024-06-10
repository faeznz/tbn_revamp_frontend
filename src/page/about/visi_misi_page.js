import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavbarComponent from '../../components/navbar_component';
import FooterComponent from '../../components/footer_component';

import BannerVisiMisi from '../../assets/images/about/visi-misi/banner_visi_misi.png';
import BannerValueDna from '../../assets/images/about/visi-misi/banner_value_dna.png';
import BannerWeAre from '../../assets/images/about/visi-misi/banner_we_are.png';

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
    <div>
      <NavbarComponent />
      {/* Section 1 - Header */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen lg:h-64 h-36 bg-[#C3D21F] lg:rounded-b-[100px] rounded-b-[30px]">
          <p className="text-black lg:text-4xl text-xl font-semibold pt-16">Our Vision, Mission, and Values</p>
        </div>
      </section>
      {/*  */}
      <section className="w-screen flex flex-col items-center">
        <div className="relative flex flex-col justify-center items-center w-3/5 lg:py-24 py-12 lg:px-0 px-8">
          <img src={BannerVisiMisi} alt="" className="relative" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between items-center text-center py-48 font-semibold">
            <div className="flex flex-row justify-center items-center gap-4">
              <div className="bg-[#092040] text-white font-bold px-6 py-1 text-2xl">Vision</div>
              <p dangerouslySetInnerHTML={{ __html: getPostDescription('Vision') }} />
            </div>
            <div className="flex flex-col gap-12 px-24">
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="bg-[#092040] text-white font-bold px-6 py-1 text-2xl">Mission</div>
                <p dangerouslySetInnerHTML={{ __html: getPostDescription('Mision') }} />
              </div>
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="bg-[#092040] text-white font-bold px-6 py-1 text-2xl">Values</div>
                <p dangerouslySetInnerHTML={{ __html: getPostDescription('Value') }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Values and DNA */}
      <section className="flex flex-col items-center justify-center bg-[#F2EEEA] lg:rounded-t-[100px] rounded-t-[50px]">
        <p className="lg:text-4xl text-2xl mb-8 font-medium lg:pt-24 pt-12">VALUES AND DNA</p>
        <div className="flex flex-col justify-center items-center w-screen lg:py-24 py-8 lg:px-0 px-8">
          <img src={BannerValueDna} alt="" />
        </div>
      </section>
      {/* Section 3 - We Are */}
      <section className="flex flex-col items-center justify-center bg-[#F2EEEA]">
        <div className="flex flex-col items-center justify-center bg-white lg:rounded-t-[100px] rounded-t-[50px]">
          <div className="flex flex-col justify-center items-center w-screen lg:py-24 py-8">
            <img src={BannerWeAre} alt="" className="lg:w-3/5 w-full" />
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default VisiMisiPage;

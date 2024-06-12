import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/images/carousel/Group 3081.png';
import image2 from '../assets/images/carousel/Group 3082.png';
import image3 from '../assets/images/carousel/Group 3083.png';
import image4 from '../assets/images/carousel/Group 3084.png';
import image5 from '../assets/images/carousel/Group 3085.png';

const images = [
  { src: image1, description: 'Together with TBN Indonesia, we are collaborating to create a healthier and greener planet through hydroponic vegetables and organic fruits.' },
  { src: image2, description: 'TBN Indonesia collaborates with social entrepreneurs who prioritize environmental friendliness and utilize usable recycled materials.' },
  { src: image3, description: 'TBN Indonesia is always striving to collaborate with social entrepreneurs who prioritize digital technology as a gateway to the future.' },
  { src: image4, description: 'TBN Indonesia provides attention from an early age, starting from families to the highest levels, in order to provide solutions in building a balanced and sustainable society and environment.' },
  { src: image5, description: 'TBN Indonesia cherishes, preserves, and promotes local culture and arts, and strives to always use local products as a tangible form of support for local social entrepreneurs.' },
];

function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Untuk layar lebih kecil dari 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Untuk layar lebih kecil dari 640px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-screen py-8 px-4 sm:px-6 lg:px-24 mb-16">
      <div>
        <p className="xl:text-4xl md:text-2xl text-lg mb-10 xl:mt-8 mt-4 font-medium text-center">
          Collaboration for Sustainable Future <br />
          TBN Indonesia Focuses on Five Industrial Fields
        </p>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2 md:px-4 lg:px-6">
            <div className="relative group">
              <img src={image.src} alt={`Carousel ${index + 1}`} className="w-full object-contain rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <p className="text-white xl:text-lg text-center p-4">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselComponent;

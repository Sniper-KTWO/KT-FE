'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import brand1 from '../../../public/images/brand-slider/brand1.png';
import brand2 from '../../../public/images/brand-slider/brand2.png';
import brand3 from '../../../public/images/brand-slider/brand3.png';
import brand4 from '../../../public/images/brand-slider/brand4.png';
import brand5 from '../../../public/images/brand-slider/brand5.png';
import brand6 from '../../../public/images/brand-slider/brand6.png';
import brand0 from '../../../public/images/brand-slider/brand0.png';
import Image from 'next/image';
import './styles/slider.css';
import './styles/brand_slider.css';

const images = [brand1, brand2, brand3, brand4, brand5, brand6];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} arrowNext`} onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} arrowPrev`} onClick={onClick}></div>;
}

function BrandSlide() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container slide">
      <div className="background" />
      <div className="sliderWrapper">
        <Slider {...settings}>
          {images.map((image, idx) => (
            <div key={idx}>
              <Image
                alt={`slider${idx + 1}`}
                src={image}
                width={390}
                height={634}
                style={
                  idx === 1
                    ? { marginTop: '50px' }
                    : idx === 3
                    ? { marginTop: '-7px' }
                    : idx === 4
                    ? { marginTop: '7px' }
                    : idx === 5
                    ? { marginTop: '-5px' }
                    : {}
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BrandSlide;

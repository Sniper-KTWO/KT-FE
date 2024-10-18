'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import slider1 from '../../../../../public/images/home_slider/slider1.png';
import slider2 from '../../../../../public/images/home_slider/slider2.png';
import slider3 from '../../../../../public/images/home_slider/slider3.png';
import slider4 from '../../../../../public/images/home_slider/slider4.png';
import slider5 from '../../../../../public/images/home_slider/slider5.png';
import slider6 from '../../../../../public/images/home_slider/slider6.png';
import slider7 from '../../../../../public/images/home_slider/slider7.png';
import slider8 from '../../../../../public/images/home_slider/slider8.png';
import slider9 from '../../../../../public/images/home_slider/slider9.png';
import slider10 from '../../../../../public/images/home_slider/slider10.png';
import slider11 from '../../../../../public/images/home_slider/slider11.png';
import slider12 from '../../../../../public/images/home_slider/slider12.png';
import Image from 'next/image';
import '../styles/slider.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} arrowNext`} onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} arrowPrev`} onClick={onClick}></div>;
}

function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,

    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container slide">
      <Slider {...settings}>
        <div>
          <Image alt="slider1" src={slider1} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider2" src={slider2} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider3" src={slider3} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider4" src={slider4} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider5" src={slider5} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider6" src={slider6} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider7" src={slider7} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider8" src={slider8} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider9" src={slider9} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider10" src={slider10} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider11" src={slider11} width={390} height={234} />
        </div>
        <div>
          <Image alt="slider12" src={slider12} width={390} height={234} />
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;

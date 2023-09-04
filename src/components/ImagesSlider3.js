import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/images/zimo-1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import img7 from '../assets/images/7.png'
import img8 from '../assets/images/8.png'


const images = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
    `${img4}`,
    `${img5}`,
    `${img6}`,
    `${img7}`,
    `${img8}`,
    // Add more image URLs as needed
  ];

// src/components/ImageSlider.js

const ImageSlider = () => {

    const PrevArrow = ({ onClick }) => (
        <button className="slick-arrow slick-prev" onClick={onClick}>
          Previous
        </button>
      );
    const NextArrow = ({ onClick }) => (
        <button className="slick-arrow slick-next" onClick={onClick}>
          Next
        </button>
      );


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Use custom PrevArrow component
    nextArrow: <NextArrow />, // Use custom NextArrow component
  };



  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Slider Item ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;



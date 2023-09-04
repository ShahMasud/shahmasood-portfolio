import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tiger1 from '../assets/images/tiger1.png'
import tiger2 from '../assets/images/tiger2.png'
import tiger3 from '../assets/images/tiger3.png'
import tiger4 from '../assets/images/tiger4.png'
import tiger5 from '../assets/images/tiger5.png'
import tiger6 from '../assets/images/tiger6.png'
import tiger7 from '../assets/images/tiger7.png'

const images = [
  `${tiger1}`,
  `${tiger2}`,
  `${tiger3}`,
  `${tiger4}`,
  `${tiger5}`,
  `${tiger6}`,
  `${tiger7}`,
    // Add more image URLs as needed
  ];

const ImageSlider2 = () => {

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

export default ImageSlider2;



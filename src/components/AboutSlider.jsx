import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/AboutSlider.css';

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";

import { EffectCoverflow, Pagination } from 'swiper/modules';

const AboutSlider = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
       centeredSlides={false} 
      slidesPerView={'auto'}
      initialSlide={1}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="about-swiper" // <--- özgün sınıf adı
    >
      <SwiperSlide><img src={slide1} alt="slide 1" /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="slide 2" /></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="slide 3" /></SwiperSlide>
      <SwiperSlide><img src={slide4} alt="slide 4" /></SwiperSlide>
      <SwiperSlide><img src={slide5} alt="slide 5" /></SwiperSlide>
      <SwiperSlide><img src={slide6} alt="slide 6" /></SwiperSlide>
      <SwiperSlide><img src={slide1} alt="slide 1" /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="slide 2" /></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="slide 3" /></SwiperSlide>
    </Swiper>
  );
};

export default AboutSlider;

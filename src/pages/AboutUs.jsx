import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutImage from "../assets/about-img.jpg";
import card1 from "../assets/michelangelo.jpg";
import card2 from "../assets/van-gogh.jpg";
import card3 from "../assets/da-vinci.jpg";

import "../styles/AboutUs.css";
import AboutSlider from "../components/AboutSlider";

const ArtistCard = ({ image, alt, description }) => (
  <div className="p-4 border rounded-lg shadow-md" data-aos="fade-up">
    <img src={image} alt={alt} className="w-full object-cover rounded-md" />
    <p className="text-gray-600 mt-3 text-sm">{description}</p>
  </div>
);

const StatBox = ({ number, label, delay }) => (
  <div className="stat-box" data-aos="flip-left" data-aos-delay={delay}>
    <p className="stat-number">{number}</p>
    <p className="stat-label">{label}</p>
  </div>
);

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="relative about-section mb-16 pb-6" data-aos="fade-in">
        <img
          src={aboutImage}
          alt="Firma hakkında tanıtım görseli"
          className="custom-about-img"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 py-8">
          <h1 className="text-3xl font-bold text-white transition-all transform hover:scale-105">
            HAKKIMIZDA
          </h1>
        </div>
      </div>

      {/* Biz Kimiz? */}
      <section
        className="flex flex-col mx-6 lg:mx-16 lg:gap-6 mb-16 py-6"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold" data-aos="fade-right">
          Biz Kimiz?
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <p className="text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            doloremque quibusdam deleniti vel omnis quas doloribus recusandae ea
            rerum porro odio eveniet architecto veniam magni exercitationem
            quasi inventore. Atque, ratione.
          </p>
          <p className="text-gray-600 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            eius repellendus pariatur, harum maxime corporis ducimus neque
            iusto? Repellat aperiam eveniet culpa aliquam quam quibusdam,
            consequuntur quasi exercitationem facilis dignissimos.
          </p>
        </div>
      </section>
      
      {/* İstatistik Kutuları */}
      <section
        className="flex flex-col md:flex-row justify-between gap-10 text-start stat-bg mb-24 mt-6 p-14"
        data-aos="fade-up"
      >
        <StatBox number="+100" label="Sanatçı" delay={0} />
        <StatBox number="+900" label="Eser" delay={100} />
        <StatBox number="+12.500" label="Ziyaretçi" delay={200} />
      </section>

      {/* Ünlü Ressamlar */}
      <section
        className="flex flex-col lg:flex-row items-start justify-between gap-8 mx-6 lg:mx-16 mb-16 py-6"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-1/4 pt-8" data-aos="fade-right">
          <h2 className="text-5xl font-bold mb-5">
            Sanata Yaklaşımımız: Ünlü Ressamlar Geliyor
          </h2>
          <p className="text-gray-600 mb-6 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero animi
            alias odit quo corrupti exercitationem,
          </p>
          <button className="left-buton text-white px-6 py-2 rounded-lg transition-all">
            Daha Fazla Keşfet
          </button>
        </div>

        <div
          className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-left"
        >
          <ArtistCard
            image={card2}
            alt="Van Gogh"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ArtistCard
            image={card1}
            alt="Michelangelo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ArtistCard
            image={card3}
            alt="Da Vinci"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </section>

      {/* Sanatın Kalbine Yolculuk */}
      <section className="flex flex-col lg:flex-row justify-between items-center mx-6 lg:mx-16 gap-8 lg:gap-12 mb-16 py-6 box-bg">
        <div
          className="left-content w-full lg:w-1/2 flex flex-col items-center text-center justify-center  p-4 lg:p-8  bg-transparent lg:bg-gray-100"
          data-aos="fade-right"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-8">
            Sanatın Kalbine Yolculuk
          </h2>
          <p className="text-base sm:text-lg mb-7 sm:mb-10 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            expedita commodi voluptatem accusantium ipsum? Quod molestiae vitae
            soluta excepturi iusto? Sapiente a quasi, dicta facilis commodi sint
            hic voluptatibus non.
          </p>
          <button className="left-buton text-white px-6 py-2 rounded-lg transition-all">
            Keşfet
          </button>
        </div>

        <div
          className="w-full lg:w-1/2 flex justify-center"
          data-aos="fade-left"
        >
          <img
            src={aboutImage}
            alt="Sanatsal görsel"
            className="w-full max-h-[320px] object-cover rounded-md"
          />
        </div>
      </section>

      {/* Slider */}
      <section>
        <div className="mb-16 py-6" data-aos="zoom-in-up">
          <AboutSlider />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

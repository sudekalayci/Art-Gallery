import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/ImageSlider.css";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";

import ImageSlider from "../components/ImageSlider";
import ArtCard from "../components/ArtCard";

const infoBoxes = [
  {
    title: "İlham",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate laboriosam tempora consequatur provident et, rem ratione veniam inventore aliquam facere placeat tempore dolorem magni nam totam animi iure temporibus.",
    delay: 300,
  },
  {
    title: "Yaratıcılık",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate laboriosam tempora consequatur provident et, rem ratione veniam inventore aliquam facere placeat tempore dolorem magni nam totam animi iure temporibus.",
    delay: 400,
  },
];

const cards = [
  {
    image: photo1,
    title: "Renklerin Dansı",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate laboriosam tempora consequatur provident ",
  },
  {
    image: photo2,
    title: "Sessizliğin İçinde",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate laboriosam tempora consequatur provident ",
  },
  {
    image: photo3,
    title: "Doğanın Kalbi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate laboriosam tempora consequatur provident ",
  },
  {
    image: photo5,
    title: "Zamanın Ötesi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate laboriosam tempora consequatur provident ",
  },
  {
    image: photo6,
    title: "İzler",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate laboriosam tempora consequatur provident ",
  },
  {
    image: photo7,
    title: "Hayal Gücü",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate laboriosam tempora consequatur provident ",
  },
];

const Home = () => {
  return (
    <main className="home-selection">
      {/* Slider */}
      <ImageSlider />

      {/* Giriş Başlığı */}
      <section
        className="flex flex-col items-center text-center gap-6 py-6 px-4  my-16 w-full max-w-screen-xl mx-auto"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          Sanatın Kalbine Yolculuk
        </h1>
        <p className="text-base md:text-lg max-w-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptate
          laboriosam tempora consequatur provident et, rem ratione veniam
          inventore aliquam facere placeat tempore dolorem magni nam totam animi
          iure temporibus.
        </p>
      </section>

      {/* Tanıtım Bölümü */}
      <section className="flex flex-col lg:flex-row justify-between mx-8 lg:mx-16 gap-6 lg:gap-12 py-6 mb-16">
        <div
          className="w-full lg:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={photo4}
            alt="Sanatsal görsel 1"
            className="w-full h-auto rounded-md"
          />
        </div>

        <div
          className="right-content w-full lg:w-1/2 flex flex-col items-center text-center justify-center bg-transparent lg:bg-gray-100 rounded-md"
          data-aos="fade-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Sanatın İzinde Yolculuk
          </h2>

          <img
            src={photo8}
            alt="Sanat galerisi görseli"
            className="w-full max-w-md my-6 sm:my-8 rounded-md"
          />

          <p className="text-base sm:text-md mb-6 sm:mb-10 px-4 max-w-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            voluptate laboriosam tempora consequatur provident et, rem ratione
            veniam inventore aliquam facere placeat tempore dolorem magni nam
            totam animi iure temporibus.
          </p>

          <button className="left-buton text-white px-6 py-2 rounded-lg transition-all">
            Keşfet
          </button>
        </div>
      </section>

      {/* Bilgilendirici Kutular */}
      <section
        className="info-box my-12 sm:my-16 p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        data-aos="fade-up"
      >
        {infoBoxes.map(({ title, description, delay }, idx) => (
          <div
            key={idx}
            className="w-full sm:w-1/2 p-6 text-center transition duration-300"
            data-aos="fade-up"
            data-aos-delay={delay}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </section>

      {/* Blog Kartları */}
      <section>
        <h2
          className="text-center mt-12 sm:mt-24 text-4xl font-bold"
          data-aos="zoom-in"
        >
          Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-6 mx-16 sm:my-12 pb-6">
          {cards.map((card, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Link to={`/blog#post-${index}`}>
                <ArtCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

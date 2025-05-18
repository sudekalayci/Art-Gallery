import { useEffect, useState } from "react";
import teamArtis1 from "../assets/teamArtis.jpg";
import teamArtis2 from "../assets/teamArtis2.jpg";

const slides = [
  {
    image: teamArtis1,
    title: "Lorem ipsum",
    description:
      " consectetur, adipisicing elit. Non sint amet nisi nesciunt quos tenetur reprehenderitasperiores possimus aut hic aliquam veritatis nostrum provident! Vero molestias sapiente iure quod earum?,",
  },
  {
    image: teamArtis2,
    title: " dolor sit amet",
    description:
      " asperiores possimus aut hic aliquam veritatis nostrum provident! Vero molestias sapiente iure quod earum? asperiores possimus aut hic aliquam veritatis nostrum provident! Vero molestias sapiente iure quod earum?",
  },
];

const TopArtistSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true); 
      }, 500);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const { image, title, description } = slides[index];

  return (
    <div
      className="flex flex-col md:flex-row justify-between  gap-8 text-start stat-bg py-12 px-16"
      data-aos="fade-up"
    >
      {/* Görsel */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className={`w-full h-80 object-cover rounded-xl shadow-lg transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Yazı */}
      <div
        className={`w-full md:w-1/2 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default TopArtistSlider;

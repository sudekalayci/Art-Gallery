import React, { useState } from "react";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";

import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo1,
  photo13,
  photo14,
  photo15,
  photo16,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const prev = () =>
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  const next = () => setSelectedIndex((selectedIndex + 1) % images.length);

  return (
    <div className="py-8 mx-16">
      <h1
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
        data-aos="fade-up"
      >
        Galeri
      </h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        data-aos="fade-up"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          <button className="absolute left-6 text-white" onClick={prev}>
            <ChevronLeft size={48} />
          </button>
          <img
            src={images[selectedIndex]}
            alt={`Modal ${selectedIndex}`}
            className="max-h-[80vh] max-w-[90vw] rounded-lg transition-opacity duration-500"
          />
          <button className="absolute right-6 text-white" onClick={next}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

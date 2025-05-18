import React from "react";
import "../styles/ArtCard.css";
const ArtCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 text-sm clamp-3-lines">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;

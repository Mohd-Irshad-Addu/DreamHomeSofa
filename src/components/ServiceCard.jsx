import React from "react";

function ServiceCard({ img, title, desc }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-contain rounded-md mb-4"
        loading="lazy"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default ServiceCard;

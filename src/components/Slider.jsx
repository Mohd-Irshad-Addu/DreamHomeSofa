import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {Link} from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const images = [
  "/src/assets/Home/slider/7.jpg",
  "/src/assets/Home/slider/2.jpg",
  "/src/assets/Home/slider/4.jpg",
  "/src/assets/Home/slider/6.jpg",
  "/src/assets/Home/slider/5.jpg",
  "/src/assets/Home/slider/8.jpg",
  "/src/assets/Home/slider/9.jpg",
  "/src/assets/Home/slider/10.jpg",
];

function Slider() {
  return (
    <div className="relative w-full h-[400px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {/* Image */}
              <img
                src={src}
                alt={`Sofa ${i + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Consultation overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Premium Sofa Designs
                </h2>
                <p className="text-lg md:text-xl mb-6 text-center">
                  Comfort & Elegance for Your Home
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md font-semibold transition">
                  <Link to="contact">Get Free Consultation</Link> 
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;

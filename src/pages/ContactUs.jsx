import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import ConsultationForm from "../components/ConsultationForm";
import { useState } from "react";
import SuccessMsg from "../components/SuccessMsg";

function ContactUs() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // DreamHomeSofa/Home/slider/7.jpg

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-stretch justify-center gap-6 p-6">
      {/* Left Side - Shop Info with Modern Background */}
      <div
        className="w-full md:w-1/2 rounded-lg shadow-xl p-6 flex flex-col justify-center
             relative overflow-hidden"
      >
        {/* Background Image with blur */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/DreamHomeSofa/Home/slider/7.jpg')",
            filter: "blur(1px)", // custom blur in pixels
          }}
        ></div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative text-white flex flex-col gap-5">
          <h2 className="text-3xl font-extrabold mb-6 drop-shadow-md">
            Contact Us
          </h2>

          {/* Address */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-xl mt-1 drop-shadow" />
            <a
              href="https://www.google.com/maps/place/Dream+home+sofa/@17.3295142,78.5174405,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcba38888a81a7d:0x1459606b8654dbcb!8m2!3d17.3295142!4d78.5200154!16s%2Fg%2F11jt8rp0nt?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col hover:underline cursor-pointer"
            >
              <p className="font-semibold drop-shadow">Dream Home Sofa</p>
              <p className="text-sm drop-shadow">
                H-No 4-190 Vijay Puri Colony Jilalguda, RCI Road, Balapur 'X'
                Road, 500097
              </p>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-xl mt-1 drop-shadow" />
            <a
              href="mailto:dreamhomesofa@gmail.com"
              className="text-sm drop-shadow hover:underline cursor-pointer"
            >
              dreamhomesofa1@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-xl mt-1 drop-shadow" />
            <a
              href="tel:+919999999999"
              className="text-sm drop-shadow hover:underline cursor-pointer"
            >
              +91 9182163522
            </a>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3">
            <FaClock className="text-xl mt-1 drop-shadow" />
            <div>
              <p className="text-sm drop-shadow">
                Mon - Sat: 10:00 AM to 8:00 PM
              </p>
              <p className="text-sm drop-shadow">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Consultation Form */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
        {/* 👇 Tum yahan form ka code likhna */}

        {/* {isFormSubmitted === true ? <div>hello</div> : null} */}

        {isFormSubmitted === true ? (
          <SuccessMsg />
        ) : (
          <ConsultationForm setIsFormSubmitted={setIsFormSubmitted} />
        )}
      </div>
    </div>
  );
}

export default ContactUs;

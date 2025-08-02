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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-stretch justify-center gap-6 p-6">
      {/* Left Side - Shop Info */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h2>

        {/* Address */}
        <div className="flex items-start gap-3 mb-4">
          <FaMapMarkerAlt className="text-blue-700 text-xl mt-1" />
          <div>
            <p className="text-gray-800 font-medium">Dream Home Sofa</p>
            <p className="text-sm text-gray-600">
              123 Sofa Street, Comfort City, India 456789
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3 mb-4">
          <FaEnvelope className="text-blue-700 text-xl mt-1" />
          <p className="text-sm text-gray-700">dreamhomesofa@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3 mb-4">
          <FaPhoneAlt className="text-blue-700 text-xl mt-1" />
          <p className="text-sm text-gray-700">+91 99999 99999</p>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3">
          <FaClock className="text-blue-700 text-xl mt-1" />
          <div>
            <p className="text-sm text-gray-700">
              Mon - Sat: 9:00 AM to 6:00 PM
            </p>
            <p className="text-sm text-gray-700">Sunday: Closed</p>
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

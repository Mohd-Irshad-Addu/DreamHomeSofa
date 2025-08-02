import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import gmail from "../assets/gmail (3).png";
import telephone from "../assets/telephone.png";
import whatsapp from "../assets/whatsapp.png";

function Footer() {
  return (
    <>
      <div className="bg-white shadow-md flex flex-col md:flex-row justify-around items-stretch gap-4 px-4 py-8">
        {/* Logo and tagline */}
        <div className="w-full md:w-1/3 p-6 min-h-[220px] rounded-lg flex justify-center flex-col bg-blue-200">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
            <div className="ml-4 text-start">
              <h3 className="text-xl font-bold">Dream Home Sofa</h3>
              <h4 className="text-sm text-gray-600">
                Custom Comforts • Sofa Repair & Design
              </h4>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="w-full md:w-1/3 bg-green-200 p-6 min-h-[220px] rounded-lg shadow-md flex flex-col justify-center items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-center w-full">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link
                to="/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-red-600 transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-red-600 transition-colors duration-200"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 bg-green-200 p-6 min-h-[220px] rounded-lg shadow-md flex flex-col justify-center items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4 text-center w-full">
            Contact-Us
          </h2>

          {/* Gmail */}
          <div className="flex justify-center w-full">
            <div className="flex items-center gap-3 w-[250px]">
              <img src={gmail} alt="Gmail" className="h-8 w-8 object-contain" />
             <a href="#"> <span className="text-sm text-gray-700">
                DreamHomeSofa@gmail.com
              </span></a>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex justify-center w-full mt-2">
            <div className="flex items-center gap-3 w-[250px]">
              <img
                src={telephone}
                alt="Telephone"
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm text-gray-700">999999999</span>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex justify-center w-full mt-2">
            <div className="flex items-center gap-3 w-[250px]">
              <img
                src={whatsapp}
                alt="Whatsapp"
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm text-gray-700">9999999999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-500 px-4 pb-4">
        <h3>© 2025 Dream Home Sofa. All rights reserved.</h3>
      </div>
    </>
  );
}

export default Footer;

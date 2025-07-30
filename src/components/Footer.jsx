import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-white shadow-md flex flex-col md:flex-row justify-around items-center gap-4">
        {/* logo and tagline */}
        <div className="flex items-center bg-blue-400">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <div className="ml-4 text-start">
            <h3 className="text-xl font-bold">Dream Home Sofa</h3>
            <h4 className="text-sm text-gray-600">
              Custom Comforts • Sofa Repair & Design{" "}
            </h4>
          </div>
        </div>

        {/* Quick links */}
        <div className="w-full md:w-1/3 bg-green-200 p-6 rounded-lg shadow-m flex justify-center items-center ">
          <ul >
            <li className="hover:text-red-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="services">Services</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* address       */}
        <div className="w-full md:w-1/3 bg-red-200 p-6 rounded-lg shadow-md flex justify-center items-center">
          <h2>Contact : 999999999</h2>
          <h2>Email : abc@gmail.com</h2>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-500">
        <h3> © 2025 Dream Home Sofa. All rights reserved.</h3>
      </div>
    </>
  );
}

export default Footer;

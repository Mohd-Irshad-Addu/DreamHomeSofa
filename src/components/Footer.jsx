import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import gmail from "../assets/gmail (3).png";
import telephone from "../assets/telephone.png";
import whatsapp from "../assets/whatsapp.png";

function Footer() {
  return (
    <>
      <footer className="bg-gray-100 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 gap-8">
          {/* Branding Section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 px-4">
            <div className="flex flex-col items-center md:items-start">
              {/* Brand Name */}
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-wide">
                Dream Home <span className="text-blue-500">Sofa</span>
              </h3>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-gray-500 italic mb-4  md:ml-3">
                 — Luxury sofas for every home —
              </p>

              {/* Divider Line */}
              {/* <div className="w-16 h-1 bg-blue-500 my-2 rounded-full"></div> */}

              {/* Services List */}
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Sofa Repair
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Sofa Manufacturing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Curtains
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Headboard Work
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Lining Works
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Mattress
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                 Sofa Cleaning
                </li>
              </ul>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left px-4 pt-6 md:pt-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 inline-block relative">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left px-4 pt-6 md:pt-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 inline-block relative">
              Contact Us
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
            </h3>

            {/* Centered container on mobile; fixed icon column so rows start same */}
            <div className="w-full max-w-xs mx-auto md:mx-0 space-y-3">
              {/* Gmail */}
              <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src={gmail}
                    alt="Gmail"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <a
                  href="mailto:DreamHomeSofa@gmail.com"
                  className="text-sm text-gray-600 hover:text-blue-600 leading-5 justify-self-start"
                >
                  DreamHomeSofa@gmail.com
                </a>
              </div>

              {/* Telephone */}
              <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src={telephone}
                    alt="Telephone"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <a
                  href="tel:+91999999999"
                  className="text-sm text-gray-600 hover:text-blue-600 leading-5 justify-self-start"
                >
                  +91 999999999
                </a>
              </div>

              {/* WhatsApp */}
              <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src={whatsapp}
                    alt="Whatsapp"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <a
                  href="https://wa.me/919999999999"
                  className="text-sm text-gray-600 hover:text-blue-600 leading-5 justify-self-start"
                >
                  +91 9999999999
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 border-t border-gray-300 text-sm text-gray-600">
          © 2025 Dream Home Sofa. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;

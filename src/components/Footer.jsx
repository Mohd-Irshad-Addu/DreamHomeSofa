import React from "react";
import { Link } from "react-router-dom";
import gmail from "../assets/gmail (3).png";
import telephone from "../assets/telephone.png";
import whatsapp from "../assets/whatsapp.png";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-700 px-4">
      <div
        className="
          max-w-7xl mx-auto px-6 py-12 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-10 sm:gap-6
          divide-y sm:divide-y-0 sm:divide-x divide-gray-300
        "
      >
        {/* Branding + Services */}
        <div className="pt-0 sm:pt-0 sm:pr-6">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-wide">
            Dream Home <span className="text-blue-500">Sofa</span>
          </h3>
          <p className="text-sm text-gray-500 italic mb-6 px-2">
            — Luxury sofas for every home —
          </p>

          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "Sofa Repair",
              "Sofa Manufacturing",
              "Curtains",
              "Headboard Work",
              "Lining Works",
              "Mattress",
              "Sofa Cleaning",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="pt-6 sm:pt-0 sm:px-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
          </h3>
          <ul className="space-y-2">
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
        <div className="pt-6 sm:pt-0 sm:pl-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
            Contact Us
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={gmail} alt="gmail" className="w-5 h-5 object-contain" />
              <a
                href="mailto:dreamhomesofa1@gmail.com"
                className="text-sm hover:text-blue-600"
              >
                dreamhomesofa1@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src={telephone} alt="phone" className="w-5 h-5 object-contain" />
              <a href="tel:+919182163522" className="text-sm hover:text-blue-600">
                +91 9182163522
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src={whatsapp} alt="whatsapp" className="w-5 h-5 object-contain" />
              <a
                href="https://wa.me/919182163522"
                className="text-sm hover:text-blue-600"
              >
                +91 9182163522
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Dream Home Sofa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

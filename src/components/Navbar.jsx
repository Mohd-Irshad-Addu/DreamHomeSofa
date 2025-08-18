import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-sm sticky top-0 z-50 mb-2">
      <div className="w-full px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Brand */}
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="logo"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <h1 className="text-[22px] sm:text-3xl md:text-4xl font-bold font-poppins italic text-gray-800 tracking-tight">
                Dream Home <span className="text-blue-500">Sofa</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-light italic text-gray-500 text-center ml-9">
              — Luxury sofas for every home —
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Gallery", "/gallery"],
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["Customer Reviews", "/reviewes"],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col space-y-4 pb-4 md:hidden border-t border-gray-200 pt-4">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Gallery", "/gallery"],
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["Customer Reviews", "/reviewes"],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

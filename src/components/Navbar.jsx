import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
            <h3 className="text-xl font-semibold font-serif text-gray-800">
              Dream Home Sofa
            </h3>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </Link>
            <Link
              to="gallery"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Gallery
            </Link>
            <Link
              to="about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About-Us
            </Link>
            <Link
              to="contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact-Us
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col space-y-4 pb-4 md:hidden">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

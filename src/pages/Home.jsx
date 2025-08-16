import React from "react";
import Slider from "../components/Slider";

function Home() {
  return (
    <div className="w-full">
      {/* 1. Slider Section */}
      {/* <div className="relative w-full h-[500px]">
        <img
          src="/src/assets/Home/slider/1.jpg"
          alt="Sofa"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Premium Sofa Repair & Design
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Bring your old sofa back to life with our expert services.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition">
            Get Free Consultation
          </button>
        </div>
      </div> */}
      <Slider />

      {/* 2. Short Intro Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/DreamHomeSofa/Home/sofa workshop.jpg"
          alt="About Us"
          className="w-full h-60 sm:h-72 md:h-80 object-cover object-right rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
            About Our Sofa Workshop
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-base lg:text-lg">
            At Dream Home Sofa, we specialize in premium sofa manufacturing and
            repair services. With 10+ years of experience, our mission is to
            bring comfort, style, and durability to your living spaces. Whether
            you want a brand new sofa or to restore an old one, we ensure
            top-quality craftsmanship at affordable prices.
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* 3. Why Choose Us */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/DreamHomeSofa/Home/high quality.jpeg"
                alt="Quality"
                className="w-full h-auto rounded-md mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600">
                We use the best materials and craftsmanship.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/DreamHomeSofa/Home/fast service.jpeg"
                alt="Fast Service"
                className="w-full h-auto rounded-md mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Quick turnaround without compromising quality.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/DreamHomeSofa/Home/affordable price.jpeg"
                alt="Affordable"
                className="w-full h-auto rounded-md mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-gray-600">
                Premium service at a reasonable cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Services Section Placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <img
              src="/DreamHomeSofa/Home/slider/repairing.jpg"
              alt="Sofa Repair"
              className="w-full h-auto rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Sofa Repair</h3>
            <p className="text-gray-600">
              Restore your old sofa with premium materials.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <img
              src="/DreamHomeSofa/Home/custom sofa.png"
              alt="Custom Sofa"
              className="w-full h-auto rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Custom Sofa</h3>
            <p className="text-gray-600">
              Get a sofa designed exactly the way you want.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <img
              src="/DreamHomeSofa/Home/fabric change.jpeg"
              alt="Fabric Change"
              className="w-full h-auto rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Fabric Change</h3>
            <p className="text-gray-600">
              Choose from hundreds of fabric styles and colors.
            </p>
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-8">
          <a
            href="/services"
            className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

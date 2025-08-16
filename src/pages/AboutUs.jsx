import React from "react";

function AboutUs() {
  const heroImage = "/DreamHomeSofa/Home/slider/sic.jpg";
  const storyImage = ""; // add if available
  const qualityIcon = "/DreamHomeSofa/Home/high quality.jpeg";
  const customIcon = "/DreamHomeSofa/Home/custom sofa.png";
  const priceIcon = "/DreamHomeSofa/Home/affordable price.jpeg";
  const deliveryIcon = "/DreamHomeSofa/Home/fast service.jpeg";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 rounded-b-3xl overflow-hidden flex items-center justify-center">
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dream Home Sofa
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Premium handcrafted sofas made with love, comfort, and style.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        {storyImage && (
          <img
            src={storyImage}
            alt="Our Story"
            className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 transition"
          />
        )}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 relative">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto md:mx-0 mb-6 rounded-full"></div>
          <p className="text-gray-600 mb-4">
            Our journey is driven by a passion for creating comfortable, stylish, and durable sofas. We always prioritize quality craftsmanship and attention to detail, ensuring that every piece we make meets the highest standards. Our dedicated team works tirelessly to combine elegance with functionality, creating sofas that not only look beautiful but also stand the test of time.
          </p>
          <p className="text-gray-600">
            Every piece we make is designed to bring warmth and sophistication to your living space, making your house feel like a true home. We believe in delivering more than just furniture — we deliver comfort, style, and lasting satisfaction for every customer.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 relative">
          Why Choose Us
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-4 gap-12 text-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center p-4 transform transition-all duration-300 hover:-translate-y-1">
            <img
              src={qualityIcon || "/Home/icons/quality.png"}
              alt="Premium Quality"
              className="w-100 h-100 mb-4 object-contain shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium Quality</h3>
            <p className="text-gray-600 text-center">
              Only the best materials for your comfort and durability.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center p-4 transform transition-all duration-300 hover:-translate-y-1">
            <img
              src={customIcon || "/Home/icons/custom.png"}
              alt="Custom Designs"
              className="w-100 h-100 mb-4 object-contain shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Custom Designs</h3>
            <p className="text-gray-600 text-center">
              Tailored sofas to match your style and space.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center p-4 transform transition-all duration-300 hover:-translate-y-1">
            <img
              src={priceIcon || "/Home/icons/price.png"}
              alt="Affordable Pricing"
              className="w-100 h-100 mb-4 object-contain shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Affordable Pricing</h3>
            <p className="text-gray-600 text-center">
              Luxury sofas without burning your wallet.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center p-4 transform transition-all duration-300 hover:-translate-y-1">
            <img
              src={deliveryIcon || "/Home/icons/delivery.png"}
              alt="Fast Delivery"
              className="w-100 h-100 mb-4 object-contain shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Service</h3>
            <p className="text-gray-600 text-center">
              Quick installation and delivery right to your home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

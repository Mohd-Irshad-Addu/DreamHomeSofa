import React from "react";

function AboutUs() {
  // Image URLs can be added later
  const heroImage = "/DreamHomeSofa/Home/slider/sic.jpg";
  const storyImage = "";
  const qualityIcon = "/DreamHomeSofa/Home/high quality.jpeg";
  const customIcon = "/DreamHomeSofa/Home/custom sofa.png";
  const priceIcon = "/DreamHomeSofa/Home/affordable price.jpeg";
  const deliveryIcon = "/DreamHomeSofa/Home/fast service.jpeg";

  return (
    <div className="w-full">
      <section className="relative w-full h-96 rounded-b-3xl overflow-hidden flex items-center justify-center">
        {/* Blurred background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: heroImage ? `url(${heroImage})` : "none",
            filter: "blur(0px)",
          }}
        ></div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dream Home Sofa
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Premium handcrafted sofas made with love, comfort, and style.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        {storyImage && (
          <img
            src={storyImage}
            alt="Our Story"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        )}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4">
            Our journey is driven by a passion for creating comfortable,
            stylish, and durable sofas. We always prioritize quality
            craftsmanship and attention to detail, ensuring that every piece we
            make meets the highest standards. Our dedicated team works
            tirelessly to combine elegance with functionality, creating sofas
            that not only look beautiful but also stand the test of time.
          </p>
          <p className="text-gray-600">
            Every piece we make is designed to bring warmth and sophistication
            to your living space, making your house feel like a true home. We
            believe in delivering more than just furniture — we deliver comfort,
            style, and lasting satisfaction for every customer.
          </p>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img
              src={qualityIcon || "/Home/icons/quality.png"} // placeholder, replace with your URL
              alt="Premium Quality"
              className="w-128 h-128 mb-4 object-contain"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Only the best materials for your comfort and durability.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img
              src={customIcon || "/Home/icons/custom.png"}
              alt="Custom Designs"
              className="w-128 h-128 mb-4 object-contain"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Custom Designs
            </h3>
            <p className="text-gray-600">
              Tailored sofas to match your style and space.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img
              src={priceIcon || "/Home/icons/price.png"}
              alt="Affordable Pricing"
              className="w-128 h-128 mb-4 object-contain"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Affordable Pricing
            </h3>
            <p className="text-gray-600">
              Luxury sofas without burning your wallet.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <img
              src={deliveryIcon || "/Home/icons/delivery.png"}
              alt="Fast Delivery"
              className="w-128 h-128 mb-4 object-contain"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Fast Serive
            </h3>
            <p className="text-gray-600">
              Quick installation and delivery right to your home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

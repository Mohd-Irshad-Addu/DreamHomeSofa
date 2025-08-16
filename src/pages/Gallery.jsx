import React, { useState } from "react";

// Example image URLs (replace with real ones)
const galleryImages = [
  { src: "/Gallery/sofa1.jpg", category: "Sofa" },
  { src: "/Gallery/sofa2.jpg", category: "Sofa" },
  { src: "/Gallery/headboard1.jpg", category: "Head Boards" },
  { src: "/Gallery/headboard2.jpg", category: "Head Boards" },
  { src: "/Gallery/curtain1.jpg", category: "Curtains" },
  { src: "/Gallery/curtain2.jpg", category: "Curtains" },
  { src: "/Gallery/mattress1.jpg", category: "Mattress" },
  { src: "/Gallery/mattress2.jpg", category: "Mattress" },
  { src: "/Gallery/lining1.jpg", category: "Lining Works" },
  { src: "/Gallery/lining2.jpg", category: "Lining Works" },
  { src: "/Gallery/sofa3.jpg", category: "Sofa" },
  { src: "/Gallery/headboard3.jpg", category: "Head Boards" },
  { src: "/Gallery/curtain3.jpg", category: "Curtains" },
  { src: "/Gallery/mattress3.jpg", category: "Mattress" },
  { src: "/Gallery/lining3.jpg", category: "Lining Works" },
  // Add more images here...
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12); // initially 12 images

  const categories = ["All", "Sofa", "Head Boards", "Curtains", "Mattress", "Lining Works"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12); // load next 12 images
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-64 flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
            Our Gallery
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Explore our handcrafted sofas, headboards, curtains, mattresses, and lining works.
          </p>
        </div>
      </section>

      {/* Filter / Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8 text-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(12); // reset visible count on filter change
            }}
            className={`mx-2 my-2 px-4 py-2 rounded-full font-medium transition 
              ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl transform transition duration-300 hover:scale-105 shadow-lg"
            >
              <img
                src={img.src}
                alt={`${img.category} ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Gallery;

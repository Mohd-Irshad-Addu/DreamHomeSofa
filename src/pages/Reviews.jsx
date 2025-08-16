import React from "react";
import ReviewCard from "../components/ReviewCard";

function Reviews() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-10 gap-8">
      {/* Left side - Existing Reviews (70%) */}
      <div className="md:col-span-7 space-y-6 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What Our Customers Say
        </h2>
        {/* Example review card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-yellow-500">★★★★★</p>
          <p className="text-gray-600 mt-2">
            Great service! My sofa looks brand new. Highly recommend.
          </p>
        </div>
      </div>

      {/* Right side - Feedback Form (30%) */}
      <ReviewCard />
    </div>
  );
}

export default Reviews;

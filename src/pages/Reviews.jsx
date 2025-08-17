import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

function Reviews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("feedback")) || [];
    setData(items);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-10 gap-8">
      {/* Left side - Existing Reviews (70%) */}
      <div className="md:col-span-7 space-y-6 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What Our Customers Say
        </h2>

        {data.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet. Be the first to leave feedback!</p>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-1">{item.userName}</h3>
              <p className="text-yellow-500 mb-2">{'★'.repeat(item.rating)}</p>
              <p className="text-gray-700">{item.feedback}</p>
            </div>
          ))
        )}
      </div>

      {/* Right side - Feedback Form (30%) */}
      <div className="md:col-span-3">
        <ReviewCard />
      </div>
    </div>
  );
}

export default Reviews;

import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

function Reviews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reviews from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((items) => {
        setData(items);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching reviews:", err);
        setLoading(false);
      });
  }, []);

  // Add new review
  const handleAddReview = async (newReview) => {
    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) throw new Error("Failed to save review");

      const savedReview = await response.json();
      setData((prev) => [...prev, savedReview]); // update state
    } catch (err) {
      console.log("Error saving review:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-10 gap-8">
      {/* Left side - reviews list */}
      <div className="md:col-span-7 space-y-6 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What Our Customers Say
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading reviews...</p>
        ) : data.length === 0 ? (
          <p className="text-center text-gray-500">
            No reviews yet. Be the first to leave feedback!
          </p>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
              <p className="text-yellow-500 mb-2">
                {"★".repeat(parseInt(item.rating) || 0)}
                <span className="text-gray-300">
                  {"★".repeat(5 - (parseInt(item.rating) || 0))}
                </span>
              </p>

              <p className="text-gray-700">{item.feedback}</p>
            </div>
          ))
        )}
      </div>

      {/* Right side - review form */}
      <div className="md:col-span-3">
        <ReviewCard onSubmit={handleAddReview} />
      </div>
    </div>
  );
}

export default Reviews;

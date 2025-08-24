import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeReviews() {
  const API_BASE = "https://dreamhomesofa.onrender.com/";
  const [reviews, setReviews] = useState([]); // ✅ array hona chahiye
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}api/reviews`)
      .then((res) => res.json())
      .then((items) => {
        // Sirf last 3 reviews dikhane ke liye
        const latest = items.slice(-3).reverse(); 
        setReviews(latest);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-gray-500">
            No reviews yet. Be the first to leave feedback!
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((item, index) => {
              const ratingNumber = Number(item.rating) || 0;

              return (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition text-left"
                >
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>

                  {/* Star rating */}
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className={
                          i <= ratingNumber ? "text-yellow-400" : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 italic">"{item.review}"</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Button */}
        <div className="mt-8">
          
          <Link
  to="/reviewes"
  className="inline-block px-6 py-2 bg-gray-800 text-white font-medium rounded-full shadow-md hover:bg-gray-700 transition duration-300"
>
  See All Reviews
</Link>
          
        </div>
      </div>
    </section>
  );
}

export default HomeReviews;

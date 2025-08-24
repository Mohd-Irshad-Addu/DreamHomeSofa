import React, { useState } from "react";

function ReviewCard({ onSubmit }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState();
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState(""); // ✅ success message

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !feedback) return;

    const newReview = { name, rating, review: feedback };
    onSubmit(newReview);

    // Reset form
    setName("");
    setRating("");
    setFeedback("");

    // ✅ Show success message
    setMessage("✅ Thank you! Your review has been submitted.");

    // Hide message automatically after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow border border-gray-200"
    >
      <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>

      {message && (
        <div className="mb-4 p-2 text-green-700 bg-green-100 border border-green-300 rounded">
          {message}
        </div>
      )}

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="">Select Rating</option>
        <option value={5}>⭐ 5</option>
        <option value={4}>⭐ 4</option>
        <option value={3}>⭐ 3</option>
        <option value={2}>⭐ 2</option>
        <option value={1}>⭐ 1</option>
      </select>

      <textarea
        placeholder="Your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewCard;

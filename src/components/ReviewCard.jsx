import React, { useState } from "react";

function ReviewCard({ onSubmit }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !feedback) return;

    // ---------- MongoDB POST ----------
    const newReview = { name, rating, review: feedback };
    onSubmit(newReview); // send data to backend
    // ---------- End MongoDB POST ----------

    setName("");
    setRating(5);
    setFeedback("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow border border-gray-200"
    >
      <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>

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

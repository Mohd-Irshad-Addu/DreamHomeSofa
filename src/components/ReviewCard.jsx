import React, { useState } from "react";

function ReviewCard() {
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedBack] = useState("");
  const [error, setError] = useState("")

  // localStorage.clear()

  const btnClicked = (e) => {
    e.preventDefault();

    // ✅ validation
    if (!userName || !rating || !feedback) {
      setError("⚠️ Please fill all fields before submitting!")
      return; // yahin ruk jayega agar koi field empty hai
    }

    // clear error if all fields filled
    setError("");

    const formData = { userName, rating, feedback };
    const storeFeedback = localStorage.getItem("reviews ");
    const parsedData = storeFeedback ? JSON.parse(storeFeedback) : [];
    parsedData.push(formData);
    localStorage.setItem("reviews", JSON.stringify(parsedData));

    // console.log(userName)

    setUserName("");
    setFeedBack("");
    setRating("");
  };

  return (
    <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-center">
        Leave Your Feedback
      </h2>

       {/* ✅ error message */}
      {error && (
        <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
      )}
      <form className="space-y-4" onSubmit={btnClicked}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <select
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select Rating</option>
          <option value="5">★★★★★ - Excellent</option>
          <option value="4">★★★★☆ - Good</option>
          <option value="3">★★★☆☆ - Average</option>
          <option value="2">★★☆☆☆ - Poor</option>
          <option value="1">★☆☆☆☆ - Bad</option>
        </select>
        <textarea
          placeholder="Write your feedback..."
          rows="4"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={feedback}
          onChange={(e) => setFeedBack(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReviewCard;

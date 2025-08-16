import React from 'react'

function ReviewCard() {
  return (
    <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-bold mb-4 text-center">Leave Your Feedback</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default ReviewCard

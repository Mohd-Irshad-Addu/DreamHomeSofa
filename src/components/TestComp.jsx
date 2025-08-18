import React, { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, review })
    })
    .then(res => res.json())
    .then(newReview => setReviews([...reviews, newReview]))
    .catch(err => console.log(err));

    setName("");
    setReview("");
  };

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(r => (
          <li key={r.id}>{r.name}: {r.review}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          value={review}
          onChange={e => setReview(e.target.value)}
          placeholder="Your review"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;

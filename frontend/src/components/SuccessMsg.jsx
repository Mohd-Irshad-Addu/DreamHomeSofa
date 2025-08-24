import React from "react";
import { Link } from "react-router-dom";

function SuccessMsg() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in">
      <div className="text-green-600 text-5xl mb-4">✅</div>
      <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
      <p className="text-gray-700 mb-6">
        Your consultation request has been submitted successfully. We’ll get
        back to you shortly.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-200"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default SuccessMsg;

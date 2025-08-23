import React, { useState, useEffect } from "react";
import ConsultationForm from "../components/ConsultationForm"; // tumhara existing form
import SuccessMsg from "./SuccessMsg";

function ConsultationModalWrapper() {
  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000); // 5 sec delay
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 relative shadow-xl">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          onClick={() => setShowModal(false)}
        >
          ✖
        </button>

        {isFormSubmitted ? (
          <SuccessMsg message="✅ Thank you! We’ll contact you shortly." />
        ) : (
          <ConsultationForm setIsFormSubmitted={setIsFormSubmitted} />
        )}
      </div>
    </div>
  );
}

export default ConsultationModalWrapper;

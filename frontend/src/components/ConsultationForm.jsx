import React, { useEffect, useState } from "react";

function ConsultationForm({ setIsFormSubmitted }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const phoneRegex = /^\d{10}$/;

  // 👇 async lagana zaroori hai
  const btnClicked = async (e) => {
    e.preventDefault();

    const formData = { name, phone, message };

    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setIsFormSubmitted(true);

        setName("");
        setPhone("");
        setMessage("");

        // hide success message after 3s
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.log("Failed to send email");
      }
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  useEffect(() => {
    const isPhoneValid = phoneRegex.test(phone);

    if (
      name.trim() !== "" &&
      phone.trim() !== "" &&
      message.trim() !== "" &&
      isPhoneValid
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [name, phone, message]);

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full mx-auto relative">
      {submitted && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md animate-fadeInOut">
          Message Sent Successfully!
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Get Your Free Sofa Consultation
      </h2>

      <form className="flex flex-col gap-4" onSubmit={btnClicked}>
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className={`border rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 transition ${
            phone !== "" && !phoneRegex.test(phone)
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phone !== "" && !phoneRegex.test(phone) && (
          <span className="text-red-500 text-sm">
            Enter a valid 10-digit phone
          </span>
        )}

        <textarea
          rows="4"
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition ${
            btnDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 shadow-md hover:shadow-lg"
          }`}
          disabled={btnDisabled}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ConsultationForm;

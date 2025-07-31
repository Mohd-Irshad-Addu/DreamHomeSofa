import React, { useState } from "react";

function ConsultationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const btnClicked = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(message);

    
  };

  const formData = {
    name,
    phone,
    email,
    message
  }
  localStorage.setItem('ConsultationData', JSON.stringify(formData))
  return (
    <form className="flex flex-col gap-4" onSubmit={btnClicked}>
      <input
        type="text"
        placeholder="Your Name"
        className="border border-gray-300 rounded px-4 py-2"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="email"
        placeholder="Your Email"
        className="border border-gray-300 rounded px-4 py-2"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="border border-gray-300 rounded px-4 py-2"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      <textarea
        rows="4"
        placeholder="Your Message"
        className="border border-gray-300 rounded px-4 py-2"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  );
}

export default ConsultationForm;

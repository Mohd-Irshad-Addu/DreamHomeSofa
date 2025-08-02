import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuccessMsg from "./SuccessMsg";
import ContactUs from "../pages/ContactUs";

function ConsultationForm({setIsFormSubmitted}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)

  // localStorage.clear()

   

  const btnClicked = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(phone);
    // console.log(email);
    // console.log(message);

    const formData = {
      name,
      phone,
      email,
      message,
    };



    const storeData = localStorage.getItem('ConsultationData')

    const parsedData = storeData ? JSON.parse(storeData): [];

    parsedData.push(formData)

    localStorage.setItem("ConsultationData", JSON.stringify(parsedData));

       
    
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")

    setSubmitted(true)

    setIsFormSubmitted(true)
    
  };

  useEffect(()=>{
    if(
      name.trim()!== "" &&
      email.trim()!=="" &&
      phone.trim()!= "" &&
      message.trim()!= "" 
  ) {
    setBtnDisabled(false)
  }else{
    setBtnDisabled(true)
  }
  

  // console.log(status)

  },[name, email, phone, message])

  const status = submitted;
  
  return (
    <ContactUs myprop={status}/>,
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
        disabled = {btnDisabled}
      >
        Send Message
      </button>

      {submitted ? (<div className="text-green-600 font-semibold mt-2 text-center">
                 {/* <div><Link to='/'>Back to Home Page </Link></div>    */}
                 {/* <SuccessMsg /> */}
      </div>
                    
    ) : null}
    </form>
    
    
  );
  
}

export default ConsultationForm;

'use client'
import React, { useState } from "react";


export const Contact = () => {
    const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eca8e4e4-b7cc-482d-9035-1c08326e2de7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] text-gray-800"
    >
      {/* Heading */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600">
        Connect with me
      </h4>
      <h2 className="text-center text-4xl md:text-5xl font-Ovo font-semibold mb-6">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto mt-10">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
            type="text"
            name='name'
            placeholder="Enter your name"
            required
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
            type="email"
            name='email'
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message */}
        <textarea
        name='message'
          rows="6"
          className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white mb-6"
          placeholder="Enter your message"
          required
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-900 hover:shadow-lg transition-all duration-300 items-center flex justify-between"
        >
          Submit now
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

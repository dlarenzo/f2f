"use client";
import React from "react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:f2fretirement@gmail.com`;
  };
  const handlePhoneClick = () => {
    window.location.href = `tel:+14352244888`;
  };
  return (
    <div id="contact" className="bg-blue-950 px-5 pt-25 pb-35">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl lg:text-6xl text-center text-white">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:mt-15">
          <div className="w-full lg:w-1/2 text-center py-10">
            <h1 className="font-light text-3xl lg:text-4xl text-center lg:text-left text-white">
              Have questions about your finances success contact us!
            </h1>
          </div>
          <div className="w-full lg:w-1/2 text-right">
            <div
              display="flex"
              className="flex justify-around align-center gap-5"
            >
              <button
                className="bg-[#F9C704] text-xl sm:text-4xl text-white font-semibold px-10 py-d5  shadow-lg shadow-gray-400/50 hover:bg-[#f9c804d1] transition duration-300 ease-in-out"
                onClick={handleEmailClick}
              >
                Email Us!
              </button>
              <button
                className="bg-[#F9C704] text-xl sm:text-4xl text-white font-semibold px-10 py-5  shadow-lg shadow-gray-400/50 hover:bg-[#f9c804d1] transition duration-300 ease-in-out"
                onClick={handlePhoneClick}
              >
                Call Us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

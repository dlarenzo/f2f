import React from "react";

const Contact = ({ heading }) => {
  return (
    <div id="contact" className="bg-blue-950 px-5 py-15">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl lg:text-6xl text-center text-white">
          {heading}
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mt-55">
          <div className="w-full lg:w-1/2 text-center">
            <h1 className="font-bold text-5xl lg:text-6xl text-center text-white">
              Have questions about your finances success <br /> contact us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

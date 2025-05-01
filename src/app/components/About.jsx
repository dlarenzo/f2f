import React from "react";
import Image from "next/image";

const About = ({ heading }) => {
  return (
    <div id="about" className="px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center py-15">
          <h2 className="font-bold text-6xl text-blue-950">{heading}</h2>
        </div>
        <div className="flex justify-center py-15">
          <Image
            src="/img/temp_about_pic.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg shadow-gray-400/50"
          />
        </div>

        <p className="text-2xl text-gray-700 font-semibold ">
          We are a team of dedicated professionals committed to providing
          exceptional financial services. Our mission is to empower our clients
          with the knowledge and tools they need to achieve their financial
          goals. <br /> <br />
          With years of experience in the industry, we understand the unique
          challenges that individuals and businesses face. We are here to
          support you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;

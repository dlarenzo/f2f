import React from "react";

const Hero = ({ heading, heading2 }) => {
  return (
    <div className="flex items-center justify-center mt-25 h-[55vh] lg:h-[95vh] mb-12 bg-[url('/img/hero_bg.jpg')] bg-fixed bg-center bg-cover">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 mt-25 h-[55vh] lg:h-[95vh]  bg-black/70 z-[2]" />
      {/* End Overlay */}

      <div className="py-5 pl-70 text-white z-[2]  mt-[-4rem] flex flex-col  items-end justify-center h-full w-7xl">
        <div className="flex flex-col pr-5">
          <h2 className="sm:text-5xl lg:text-7xl font-bold mb-5">{heading}</h2>
          <h2 className="sm:text-5xl lg:text-7xl font-bold">{heading2}</h2>
          <div>
            <button className="mt-15 px-10 py-5 text-3xl font-semibold bg-[#F9C704] hover:bg-[#f9c804d1] \ shadow-lg shadow-gray-400/50 transition duration-300 ease-in-out">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = ({ heading }) => {
  return (
    <div className="flex items-center justify-center h-[95vh] md:h-[95vh] mb-12 bg-[url('/img/hero_bg.jpg')] bg-fixed bg-center bg-cover">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[95vh]  bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[-4rem] flex flex-col items-center">
        <h2 className="text-5xl font-bold">{heading}</h2>
        {/* <p className="py-5 text-xl">{message}</p> */}
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;

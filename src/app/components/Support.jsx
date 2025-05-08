import React from "react";

const Support = () => {
  return (
    <div className="mt-40">
      <div className="relative flex items-center justify-center  h-[45vh] md:h-[45vh] mb-12  bg-[url('/img/banner2.png')] bg-fixed bg-center bg-cover">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0  h-[45vh]  bg-black/70 z-[2]"></div>
        {/* End Overlay */}
        <div className="pr-0 sm:pr-50  text-white z-[2]  mt-[-4rem] flex flex-col   justify-center h-full w-7xl items-start py-5">
          <div className="flex flex-col text-left pl-5 mt-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight mb-2 sm:mb-5 leading-14">
              We are here to support <br />
              you no matter the <br />
              financial occasion
            </h2>
            <div>
              <button className="mt-10 px-5 sm:px-10 py-2 sm:py-5 tex-md md:text-2xl font-semibold bg-[#F9C704] hover:bg-[#f9c804d1] \ shadow-lg shadow-gray-400/50 transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

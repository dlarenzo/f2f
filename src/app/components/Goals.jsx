import React from "react";

const Goals = ({
  heading,
  title1,
  title1a,
  title2,
  title3,
  title4,
  title4a,
  title5,
  title5a,
  title6,
  title7,
  title8,
  title9,
  title10,
  title10a,
  title11,
}) => {
  return (
    <div>
      <div>
        <div className="flex justify-center py-15">
          <h1 className="font-bold text-6xl text-blue-950">{heading}</h1>
        </div>
        <div className="mx-auto max-w-7xl mt-15">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 justify-center text-center ">
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title1} <br />
              {title1a}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title2}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title3}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title4} <br />
              {title4a}
            </li>
            <li className="border border-gray-100  text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title5} <br />
              {title5a}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title6}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title7}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title8}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title9}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title10} <br />
              {title10a}
            </li>
            <li className="border border-gray-100 text-4xl text-black font-bold py-40 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
              {title11}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Goals;

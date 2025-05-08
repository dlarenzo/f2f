import React from "react";
import {
  PiMoneyLight,
  PiSuitcaseSimpleLight,
  PiCarSimpleLight,
  PiBoatLight,
  PiStorefrontLight,
  PiGraduationCapLight,
  PiChurchLight,
  PiNewspaperLight,
} from "react-icons/pi";

import { TbRibbonHealth } from "react-icons/tb";
import { TfiHome } from "react-icons/tfi";
import { MdOutlineConstruction } from "react-icons/md";

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
  title11a,
}) => {
  return (
    <div id="goals">
      <div>
        <div className="flex justify-center py-15">
          <h1 className="font-bold text-5xl lg:text-6xl text-blue-950 text-center">
            {heading}
          </h1>
        </div>
        <div className="mx-auto max-w-7xl mt-15">
          <div className="flex justify-center items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 px-5 items-center">
              <li className="border border-gray-100 w-[170px] h-[170px]  md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold  shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <PiMoneyLight size={70} />
                  {title1} <br />
                  {title1a}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]  md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold  shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <PiSuitcaseSimpleLight size={70} />
                  {title2}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]   md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold  shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <PiCarSimpleLight size={70} />
                  {title3}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]   md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <PiBoatLight size={70} />
                  {title4} <br />
                  {title4a}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]   md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <PiStorefrontLight size={70} />
                  {title5} <br />
                  {title5a}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]   md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <TbRibbonHealth size={70} />
                  {title6}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]   md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <TfiHome size={70} />
                  {title7}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]   md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <PiGraduationCapLight size={70} />
                  {title8}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]   md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <PiChurchLight size={70} />
                  {title9}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]  md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className=" items-center flex flex-col">
                  <MdOutlineConstruction size={70} />
                  {title10} <br />
                  {title10a}
                </div>
              </li>
              <li className="border border-gray-100 w-[170px] h-[170px]   md:w-[275px] md:h-[275px] rounded-full flex justify-center items-center text-center text-[18px] md:text-4xl text-black font-bold shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                <div className="items-center flex flex-col">
                  <PiNewspaperLight size={70} />
                  {title11} <br />
                  {title11a}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;

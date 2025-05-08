import React from "react";
import Link from "next/link";
import Image from "next/image";

const Solutions = () => {
  return (
    <div id="investments" className="px-5 py-10 sm:py-15">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center py-15">
          <h2 className="font-bold text-5xl lg:text-6xl text-center text-blue-950">
            We offer several <br /> investment solutions
          </h2>
        </div>
        <div className="flex flex-col  lg:flex-row justify-between items-center gap-5">
          <div className="flex justify-center">
            <Image
              src="/img/handCoins.jpg"
              alt="About Us"
              width={650}
              height={400}
              className="rounded-lg shadow-lg shadow-gray-400/50 mb-10 lg:mb-0"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center">
            <h2 className="text-4xl font-bold"></h2>
            <div className="text-sm text-gray-700 font-semibold grid grid-cols-1 sm:grid-cols-2  gap-5">
              <p className="border border-black px-3 py-5  shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                Non-Load Mutual Funds
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                No-Load Annuities
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                Stocks
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                Bonds
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                ETFs
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                401(k) Roth or Traditional
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                IRA Roth or Traditional
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                College Savings
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                UTMA / UGMA Accounts
              </p>
              <p className="border border-black px-3 py-5 shadow-lg shadow-gray-400/50 hover:bg-[#F9C704] hover:bg-opacity-50 transition duration-300 ease-in-out hover:text-blue-950">
                Trust and Donor Accounts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

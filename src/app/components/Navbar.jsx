"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  // Navbar state
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full left-0 top-0 z-10 ease-in duration-300 bg-white shadow-md">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4 bg-white ">
        <Link href="/">
          <Image
            src="/img/logo.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="h-16 w-16"
            priority
          />
        </Link>

        <ul className="hidden sm:flex space-x-4">
          <li className="font-semibold text-lg hover:text-yellow-400">
            <Link href="#home">Home</Link>
          </li>
          <li className="font-semibold text-lg hover:text-yellow-400">
            <Link href="#about">About</Link>
          </li>
          <li className="font-semibold text-lg hover:text-yellow-400">
            <Link href="#contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "black" }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#12395B] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#12395B] text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white font-semibold hover:text-yellow-400"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white font-semibold hover:text-yellow-400"
            >
              <Link href="#about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white font-semibold hover:text-yellow-400"
            >
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

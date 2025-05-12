import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5  ">
          <p className="  ">
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
          </p>

          <p className="text-center">
            185 N. Main Street <br /> Suite 103 <br /> Tooele, UT *4074
          </p>
          <button className="">f2fretirement@gmail.com</button>
          <button className="">435-224-4888</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

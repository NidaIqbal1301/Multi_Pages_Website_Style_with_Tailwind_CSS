import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import IphoneImage from "../../../public/images/iphone.jpg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-10 py-6">
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {/* Left-Side Menu */}
        <div className="border-r-2 border-neutral-200 p-4 hidden md:block">
          <ul className="space-y-4">
            {[
              "Woman’s Fashion",
              "Man’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-800 leading-loose hover:underline
                         cursor-pointer hover:text-blue-500 transition-all duration-150"
              >
                <span>{item}</span>
                {index < 2 && (
                  <span className="text-lg ml-2">
                    <IoIosArrowForward />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right-Side */}
        <div className="flex flex-col md:flex-row items-center bg-black rounded-lg p-6 sm:p-8 md:p-10 flex-1">
          {/* Text Section */}
          <div className="text-white flex flex-col justify-center space-y-5 md:w-1/2">
            <div className="flex items-center gap-2">
              <div className="text-2xl md:text-4xl">
                <FaApple />
              </div>
              <span className="text-sm md:text-base font-semibold">
                iPhone 14 Series
              </span>
            </div>

            {/* Headings */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Up to 10%
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              off Voucher
            </h1>
            <Link
              href={"#products"}
              className="underline underline-offset-4 hover:font-semibold flex items-center gap-2"
            >
              Shop Now
              <FaArrowRight />
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-6 md:mt-0 md:ml-auto w-full md:w-1/2 flex justify-center">
            <Image
              src={IphoneImage}
              alt="iPhone"
              className="rounded-lg object-cover"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

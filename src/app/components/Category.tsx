import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";

export default function Category() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="sm:w-full md:w-[80%] pb-10">
        <div className="flex flex-col sm:pl[6%] md:pl-0">
          <h3 className="text-red-500 font-bold border-1-8 border-red-500 pl-3 ml-1">
            {" "}
            Categories
          </h3>
          <div className="flex">
            <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
              {" "}
              Browse By Category
            </h1>
          </div>
        </div>

        {/* Categories */}
        <div
          className="flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap
         lg:flex-nowrap gap-5 sm:gap-8"
        >
          {/* Box 1 */}
          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px]
            md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <div className="text-5xl font-bold">
              <CiMobile4 />
            </div>
            <p className="font-normal"> Phone</p>
          </div>

          {/* Box 2 */}
          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px]
            md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <div className="text-5xl font-bold">
              <HiOutlineDesktopComputer />
            </div>
            <p className="font-normal"> Computers </p>
          </div>

          {/* Box 3 */}
          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px]
            md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <div className="text-5xl font-bold">
              <BsSmartwatch />
            </div>
            <p className="font-normal"> SmartWatch </p>
          </div>

          {/* Box 4 */}
          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px]
            md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <div className="text-5xl font-bold">
              <CiCamera />
            </div>
            <p className="font-normal"> Camera </p>
          </div>

          {/* Box 5 */}
          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px]
            md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <div className="text-5xl font-bold">
              <CiHeadphones />
            </div>
            <p className="font-normal"> HeadPhones </p>
          </div>

          {/* Box 6 */}
          <div
            className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px]
            md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative"
          >
            <div className="text-5xl font-bold">
              <TbDeviceGamepad />
            </div>
            <p className="font-normal"> Gaming </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { bgHoverImg, aboutImg } from "@/assets";

const About = () => {
  return (
    <div className=" text-white md:w-[1440px] m-auto align-middle">
      <div
        className="hidden relative h-[682px] md:flex md:align-baseline md:gap-4 p-[40px] "
        id="aboutusbig"
      >
        <Image
          className="absolute w-full h-full z-1 top-0 bottom-0 left-0 right-0 opacity-0  hover:opacity-100 hover:blur-sm duration-400"
          src={bgHoverImg}
          alt="mainAboutusImage"
        />
        <Image
          className="absolute pointer-events-none w-[353px] h-[373px] top-[195px] -z-50 left-[235px] "
          src={aboutImg}
          alt="circleimgae"
        />
        <div className="z-10 ml-10 pointer-events-none  w-50 justify-start ">
          <div className=" font-extrabold text-[120px] text-shadow-md">
            <p>ABOUT</p>
            <p>US</p>
          </div>
          <div className=" ml-2 w-[58px] opacity-70">
            <p>LOREM</p>
            <p>LOREM</p>
          </div>
        </div>
        {/* right */}
        <p className="z-10 ml-[70px] mt-auto mb-auto pointer-events-none justify-end w-[575px] font-normal opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      {/* for small screen */}
      <div className=" md:hidden flex flex-col m-5">
        <h1 className="w-[301px] text-[40px] md:w-[903px] md:text-[120px] font-bold text-left mb-4">
          LOREM IPSUM
        </h1>
        <div className="w-[58px] opacity-70 mb-6">
          <p className="cursor-pointer">
            <a>Instagram</a>
          </p>
          <p className="cursor-pointer">
            <a>LinkedIn</a>
          </p>
        </div>
        <p className="font-normal opacity-70 mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default About;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logo, menuOpen, menuClose } from "@/assets";
import { navLinks } from "@/constants/navLinks";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleClick = () => {
    return setNavMenu(!navMenu);
  };

  return (
    <>
      <div className="flex justify-between align-baseline">
        <div className="flex gap-3 items-center lg:ml-4 lg:mt-4">
          <Image src={logo} alt="logo" width={30} height={18} />
          <h3 className="text-white text-[16px] font-medium leading-[22px] text-center ">
            {navMenu ? "Menu" : "Lorem"}
          </h3>
        </div>
        <div>
          <span>
            <button>
              {navMenu ? (
                <Image
                  className="block h-[24px] w-[24px] lg:hidden "
                  onClick={handleClick}
                  src={menuClose}
                  alt="ham-menu"
                />
              ) : (
                <Image
                  className="block h-[24px] w-[24px] lg:hidden"
                  onClick={handleClick}
                  src={menuOpen}
                  alt="ham-menu"
                />
              )}
            </button>
          </span>
        </div>
      </div>
      <>
        {navMenu && (
          <div className="text-white flex flex-col h-[570px] justify-between">
            <div className="mt-20">
              <ul className="">
                {navLinks.map((navLink) => (
                  <li
                    className="mt-5 text-[18px] font-bold leading-[16px]"
                    key={navLink.id}
                  >
                    <a href={`#${navLink.title}`}>{navLink.title}</a>
                  </li>
                ))}
                <li className="mt-5 text-[18px] font-bold leading-[16px] opacity-50">
                  LOREM IPSUM <span className="ml-16">COMING SOON</span>
                </li>
              </ul>
            </div>
            <div>
              <h3>SLIDER</h3>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;

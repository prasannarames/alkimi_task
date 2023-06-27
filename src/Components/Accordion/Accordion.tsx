"use client";
import React, { useState } from "react";
import { plusIcon, minusIcon } from "@/assets";
import Image from "next/image";
import { content } from "@/constants/content";

const Accordion = () => {
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const handleClick = (index: number) => {
    return setCurrentIdx((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="text-white md:flex md:flex-col justify-between md:w-[1290px]">
      {content.map((con, index) => (
        <div key={con.id}>
          <div className="flex justify-between mb-5 md:mb-6">
            <p className="text-[18px] font-semibold leading-[26px] md:text-[24px] md:font-bold md:leading-[28px] ml-5">
              {con.title}
            </p>
            <button>
              <span>
                {currentIdx === index ? (
                  <Image
                    src={plusIcon}
                    alt="sign"
                    onClick={() => handleClick(index)}
                  />
                ) : (
                  <Image
                    src={minusIcon}
                    alt="sign"
                    onClick={() => handleClick(index)}
                  />
                )}
              </span>
            </button>
          </div>
          <div>
            {currentIdx === index && (
              <div>
                <p className="font-normal opacity-70 mb-8">{con.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

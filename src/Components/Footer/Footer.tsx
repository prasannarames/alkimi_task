import React from "react";
import Accordion from "../Accordion/Accordion";

const Footer = () => {
  return (
    <div className="md:flex md:flex-col md:items-center m-5 ">
      <p className="text-white text-[40px] md:w-[1290px] md:text-[120px] font-bold mb-5 md:mb-6 md:leading-[80%] leading-[80%]  ">
        LOREM IPSUM DOLOR
      </p>
      <Accordion />
    </div>
  );
};

export default Footer;

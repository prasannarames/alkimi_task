import React from "react";
import Image from "next/image";
import { sheildIcon, person3, dataflowIcon, barChartIcon } from "@/assets";

const SectionThree = () => {
  return (
    <div className="text-white md:flex md:flex-col md:items-center md:justify-center md:w-[1290px] h-auto md:h-auto md:m-auto m-5">
      <h1 className="w-[301px] text-[40px] md:mt-20 md:w-[903px] md:text-[120px] font-bold text-left mb-4 md:mr-auto md:leading-[80%] leading-[80%]">
        LOREM IPSUM DOLOR SET
      </h1>
      <div className="md:flex md:justify-start md:gap-4 md:mr-auto md:mt-12">
        <div className="md:w-[410px]">
          <h3 className="font-bold">DOLOR SIT</h3>
          <p className="font-normal opacity-70 mb-8">
            {" "}
            Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
            Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
            faucibus aliquet quis sed sed. Phasellus non at lacus convallis
            elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
            cras leo.
          </p>
          <Image
            className="mb-10"
            src={sheildIcon}
            alt="sheild Icon"
            width={24}
            height={24}
          />
        </div>
        <div className="md:w-[410px] md:ml-auto">
          <h3 className="font-bold"> LOREM IPSUM DOLOR SIT</h3>
          <p className="font-normal opacity-70 mb-6">
            Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel
            nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra
            malesuada ultricies nunc vel diam posuere mauris sociis maecenas.
            Aenean dui et nec ultrices libero lacus.
          </p>
          <Image
            className="mb-5"
            src={dataflowIcon}
            alt="dataFlow Icon"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="md:flex  md:mt-5 md:gap-4 md:ml-auto">
        <div className="md:w-[410px] ">
          <Image
            className="mb-5"
            src={person3}
            alt="person with orange shirt"
            width={410}
            height={410}
          />
        </div>
        <div className="md:w-[410px]">
          <h3 className="font-bold">LOREM IPSUM DOLOR SIT</h3>
          <p className="font-normal opacity-70 mb-6">
            {" "}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <Image
            className="mb-5"
            src={barChartIcon}
            alt="barchart Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

import React from "react";
import { profileIcon, serverIcon, person1, targetIcon } from "@/assets";
import Image from "next/image";

const SectionOne = () => {
  return (
    <div>
      <div>
        <h1 className="w-[301px] text-[40px] md:w-[903px] md:text-[120px] font-bold text-left mb-4">
          LOREM IPSUM
        </h1>
        <div className="md:flex md:justify-between md:gap-4">
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
              className="mb-5"
              src={profileIcon}
              alt="profile Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="md:w-[410px]">
            <h3 className="font-bold"> LOREM IPSUM DOLOR SIT</h3>
            <p className="font-normal opacity-70 mb-6">
              Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel
              nisl. Dignissim molestie amet purus felis egestas amet eget.
              Viverra malesuada ultricies nunc vel diam posuere mauris sociis
              maecenas. Aenean dui et nec ultrices libero lacus.
            </p>
            <Image
              className="mb-5"
              src={serverIcon}
              alt="server Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="md:w-[410px]">
            <Image
              className="mb-5"
              src={person1}
              alt="person with red background"
              width={410}
              height={410}
            />
          </div>
        </div>

        <div className="md:flex md:w-[410px] md:flex-col md:ml-auto md:mt-5 ">
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
            src={targetIcon}
            alt="target Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

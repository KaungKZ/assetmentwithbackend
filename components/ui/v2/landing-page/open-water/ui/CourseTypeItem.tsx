import Image, { StaticImageData } from "next/image";
import React from "react";

interface props {
  title: string;
  desc: string;
  image: string | StaticImageData;
  index: number;
}

const CourseTypeItem = ({ title, desc, image, index }: props) => {
  return (
    <div className="flex flex-col gap-y-[5px] pb-[25px]">
      <div className="flex justify-start items-center gap-x-[10px]">
        <Image
          src={image}
          alt="icon"
          width={25}
          height={25}
          className={`${
            index === 2 ? "w-[23px] h-[23px]" : "w-[20px] h-[20px]"
          } object-contain`}
        />
        <h4
          className={`text-[#333333] text-[16px] font-semibold font-interNew ${
            index === 2 ? "-ml-1" : ""
          }`}
        >
          {title}
        </h4>
      </div>
      <p className="text-[#333333] text-[16px] font-normal font-interNew">
        {desc}
      </p>
    </div>
  );
};

export default CourseTypeItem;

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface props {
  id: number;
  mainTitle: string;
  title: string;
  text: string;
  tag: string[];
  tagText: string[];
  image: string | StaticImageData;
}

const HighlightCard = ({
  id,
  mainTitle,
  title,
  text,
  tag,
  tagText,
  image,
}: props) => {
  const [readmore, setReadmore] = useState<boolean>(false);
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-y-[20px] md:gap-x-[70px] pb-3 md:pb-0">
      <div className="flex justify-start items-center gap-x-[15px] flex-[4]">
        <div className="flex flex-col justify-center items-center bg-[#333333] w-[56px] h-[56px]">
          <p className="text-[14px] text-white font-barloNew font-normal">
            Step
          </p>
          <p className="text-[23px] text-white font-barloNew font-normal">
            0{id}
          </p>
        </div>
        <h4 className="text-[22px] md:text-[26px] text-[#333333] font-normal font-barloNew whitespace-nowrap">
          {mainTitle}
        </h4>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center md:items-start gap-y-[20px] md:gap-x-[20px] flex-[8] ">
        <Image
          src={image}
          width={250}
          height={165}
          alt="highImage"
          className="rounded-md object-contain max-w-[400px] w-full md:max-w-none md:w-[250px]"
        />
        <div>
          <h4 className="text-[20px] text-[#333333] font-semibold font-interNew">
            {title}
          </h4>
          <div className="w-full h-[2px] bg-[#CCCCCC] my-[12px]" />
          <p
            className={`text-[16px] md:text-[16px] text-[#666666] font-interNew font-normal leading-[25px] relative ${
              readmore ? "" : "line-clamp-3 md:line-clamp-none"
            }`}
          >
            {text}
            <span
              className={`underline underline-offset-2 md:hidden absolute right-0 ${
                readmore ? "-bottom-[70px] hidden" : "bottom-0"
              } text-[#1889B8] pl-[30px] bg-gradient-to-l from-white from-80% via-50% to-transparent to-100%`}
              onClick={() => setReadmore(!readmore)}
            >
              Read More
            </span>
          </p>
          {tag?.length === 0 ? (
            <></>
          ) : (
            <div
              className={`${
                readmore ? "flex md:flex" : "hidden md:flex"
              } justify-start items-start gap-x-[5px] mt-[17px] `}
            >
              <div className="">
                {tag.map((item, index) => (
                  <p
                    className={`text-[#666666] text-[16px] font-interNew font-semibold ${
                      index === 1 ? "mt-[20px] min-[440px]:mt-0" : ""
                    }`}
                    key={index}
                  >
                    {item}:
                  </p>
                ))}
              </div>
              <div>
                {tagText.map((item, index) => (
                  <p
                    className="text-[#666666] text-[16px] font-interNew font-normal"
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;

import React from "react";
import Carousel from "../ui/Carousel";
import Image from "next/image";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { reviews, googleExtraData } from "../data";
import { FaStar } from "react-icons/fa6";

const Testimonial = ({ google }) => {
  return (
    <section className="px-[17px] md:px-[20px] lg:px-[80px] w-full bg-[#F7F6F6] md:pt-[100px] md:pb-[100px] pt-[80px] pb-[0px] mt-[0px] md:mt-0">
      <h4 className="text-center text-[#333333] text-[38px] md:text-[48px] font-barloNew font-semibold uppercase">
        What Our Customers Say
      </h4>
      <p className="text-center text-[#666666] text-[14px] md:text-[16px] font-interNew font-normal mt-[30px] md:mt-[5px]">
        Discover the Stories of Those Who’ve Experienced the Adventure
      </p>

      <Carousel google={googleExtraData} />
      <div className="p-[10px] overflow-x-hidden flex-col justify-center items-center">
        <div className="hidden md:flex flex-row justify-center items-center gap-x-[5px] mt-[50px] -ml-[40px]">
          {googleExtraData.slice(0, 4)?.map((item, index) => {
            const previewText = item.text.slice(0, 100) + "...";
            return (
              <div key={index} className={`mx-2`}>
                <div className="md:max-w-[300px] md:w-full lg:w-[320px] shadow-sm relative p-[21px] rounded-md bg-white">
                  <BiSolidQuoteAltRight
                    className="absolute top-[8px] right-[20px]"
                    color="#F7F6F6"
                    size={50}
                  />
                  <div className="flex justify-start items-center gap-x-[5px]">
                    <Image
                      src={reviews[0]?.image}
                      alt="icon"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    <p className="text-[#666666] text-[12px] font-interNew font-normal italic">
                      {/* {item.sourceName} */} {reviews[0]?.sourceName}
                    </p>
                  </div>
                  <p className="text-[#666666] text-[14px] font-interNew font-normal pt-[20px]">
                    {previewText}
                  </p>
                  <div className="w-full h-[1px] bg-[#EFEFEF] my-[20px]" />
                  <div className="flex justify-start items-center gap-x-[12px]">
                    <Image
                      src={item.profile_photo_url}
                      alt="avator"
                      width={50}
                      height={50}
                      className="object-contain rounded-full"
                    />
                    <div className="space-y-[5px]">
                      <p className="text-[14px] text-[#333333] font-interNew font-normal">
                        {item.author_name}
                      </p>
                      <div className="flex gap-x-[7px]">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar
                            className="w-[13px] h-[13px]"
                            color="#FBBC05"
                            key={i}
                          />
                        ))}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden md:md:flex flex-row justify-center items-center gap-x-[5px] mt-[20px] ml-[40px]">
          {googleExtraData.slice(4, 8)?.map((item, index) => {
            const previewText = item.text.slice(0, 100) + "...";
            return (
              <div key={index} className={`mx-2`}>
                <div className="md:max-w-[300px] md:w-full lg:w-[320px] shadow-sm relative p-[21px] rounded-md bg-white">
                  <BiSolidQuoteAltRight
                    className="absolute top-[8px] right-[20px]"
                    color="#F7F6F6"
                    size={50}
                  />
                  <div className="flex justify-start items-center gap-x-[5px]">
                    <Image
                      src={reviews[0]?.image}
                      alt="icon"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    <p className="text-[#666666] text-[12px] font-interNew font-normal italic">
                      {/* {item.sourceName} */} {reviews[0]?.sourceName}
                    </p>
                  </div>
                  <p className="text-[#666666] text-[14px] font-interNew font-normal pt-[20px]">
                    {previewText}
                  </p>
                  <div className="w-full h-[1px] bg-[#EFEFEF] my-[20px]" />
                  <div className="flex justify-start items-center gap-x-[12px]">
                    <Image
                      src={item.profile_photo_url}
                      alt="avator"
                      width={50}
                      height={50}
                      className="object-contain rounded-full"
                    />
                    <div className="space-y-[5px]">
                      <p className="text-[14px] text-[#333333] font-interNew font-normal">
                        {item.author_name}
                      </p>
                      <div className="flex gap-x-[7px]">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar
                            className="w-[13px] h-[13px]"
                            color="#FBBC05"
                            key={i}
                          />
                        ))}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

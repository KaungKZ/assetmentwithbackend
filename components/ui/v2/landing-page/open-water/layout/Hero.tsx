import React, { useState } from "react";
import Button from "../../../buttons/Button";
import MarqueeSlide from "../ui/MarqueeSlide";
import VIdeoPLayer from "../ui/VideoPlayer";

const Hero = () => {
  const [readmore, setReadmore] = useState<boolean>(false);

  return (
    <section className="w-full h-full pt-[40px] md:pt-[100px]">
      <div className="flex flex-col justify-center items-center pb-[100px] px-[17px] mdmx:pb-[75px] xsmmx:pb-[60px]">
        <div className="max-w-[1100px] w-full ">
          <div className="flex justify-center items-center">
            <h4 className="md:text-[18px] text-[12px] w-auto bg-[#1888b835] text-[#1889B8] font-semibold font-interNew text-center rounded-full uppercase py-[4px] mb-[10px] px-[30px] whitespace-nowrap smmx:whitespace-normal">
              Become a Padi certified scuba diver  in just 4 days
            </h4>
          </div>
          <h4 className="text-[#333333] text-[16px] md:text-[45px] font-interNew font-bold text-center pb-[10px] md:pb-[30px] leading-[25px] md:leading-[65px]">
            Your first step to exploring shipwrecks starts with{" "}
            <br className="hidden md:block" /> The PADI Open Water Course 
          </h4>
          <div className="px-[20px]">
            <VIdeoPLayer />
          </div>

          <div className="md:px-[90px] pt-[10px] md:pt-[50px] flex flex-col justify-center items-center">
            <h4 className="text-[#333333] text-[18px] md:text-[45px] font-interNew font-bold text-center leading-[25px] md:leading-[60px]">
              Join 60,000 Certified Divers & <br /> 1,500 Young Explorers
            </h4>
            <p className="text-center py-[15px] md:py-[20px]">
              <span className="font-interNew text-[12px] md:text-[20px] text-[#1889B8] italic font-semibold">
                Summer Special:
              </span>
              <span className="text-[12px] md:text-[20px] text-[#333333] font-interNew font-semibold italic">
                {" "}
                Get Certified Now for Just
              </span>
              <span className="text-[14px] md:text-[20px] text-[#1889B8] font-interNew font-semibold italic">
                {" "}
                AED 1,499
              </span>
              <span className="text-[14px] md:text-[20px] text-[#D52A2A] font-interNew font-semibold line-through ml-2">
                {"     "}
                (was AED 2,499)
              </span>
            </p>

            <p
              className={`relative text-[14px] md:text-[16px] text-[#333333] font-interNew font-normal leading-[30px] text-center w-[90%] mb-[30px] ${
                readmore ? "" : "line-clamp-2 md:line-clamp-none"
              }`}
            >
              Discover the thrill of scuba diving with our Open Water Diver
              Course for beginners. Earn an international certification and
              unlock unforgettable underwater adventures!{" "}
              <span
                className={`underline underline-offset-2 md:hidden absolute right-0 ${
                  readmore ? "-bottom-[22px] hidden" : "bottom-0"
                } text-[#1889B8] pl-[30px] bg-gradient-to-l from-white from-80% via-50% to-transparent to-100%`}
                onClick={() => setReadmore(!readmore)}
              >
                Read More
              </span>
            </p>

            <Button
              href={"#package"}
              width="normal"
              className="text-[16px] md:text-[20px] font-normal font-interNew text-white bg-[#1889B8] cursor-pointer border-[1px] hover:opacity-80 transition-all duration-300"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
      <MarqueeSlide />
    </section>
  );
};

export default Hero;

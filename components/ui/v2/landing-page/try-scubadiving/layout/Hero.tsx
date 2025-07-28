import React, { useState } from "react";
import Button from "../../../buttons/Button";
import MarqueeSlide from "../../open-water/ui/MarqueeSlide";
import ScubaVIdeoPLayer from "../ui/ScubaVideoPlayer";

const Hero = () => {
  const [readmore, setReadmore] = useState<boolean>(false);

  return (
    <section className="w-full h-full pt-[40px] md:pt-[100px]">
      <div className="flex flex-col justify-center items-center pb-[70px] md:pb-[104px] px-[17px]">
        <div className="max-w-[1100px] w-full ">
          <div className="flex justify-center items-center">
            <h4 className="md:text-[18px] text-[10px] w-auto bg-[#1888b835] text-[#1889B8] font-semibold font-interNew text-center rounded-full uppercase py-[4px] mb-[10px] md:mb-[30px] px-[30px]">
              Try Scuba Diving for the First Time – No Swimming Skills Required!
            </h4>
          </div>

          <h4 className="text-[#333333] text-[16px] md:text-[45px] font-interNew font-bold text-center pb-[10px] md:pb-[30px] leading-[25px] md:leading-[65px]">
            Dive into your first underwater adventure with our{" "}
            <br className="hidden md:block" /> Try Scuba Diving experience.
          </h4>
          <div className="px-[20px]">
            {/* <VIdeoPLayer /> */}
            <ScubaVIdeoPLayer />
          </div>

          <div className="md:px-[90px] pt-[10px] md:pt-[50px] flex flex-col justify-center items-center">
            <h4 className="text-[#333333] text-[18px] leading-[25px] md:leading-[60px] md:text-[42px] font-interNew font-bold text-center">
              Join 60,000 Certified Divers & <br className="hidden md:block" />{" "}
              1,500 Young Explorers
            </h4>
            <p className="text-center py-[15px] md:py-[20px]">
              <span className="font-interNew text-[12px] md:text-[20px] text-[#1889B8] italic font-semibold">
                Eid Al-Adha Offer:
              </span>
              <span className="text-[12px] md:text-[20px] text-[#333333] font-interNew font-semibold italic">
                {" "}
                Get Started Now for Just
              </span>
              <span className="text-[14px] md:text-[20px] text-[#1889B8] font-interNew font-semibold italic">
                {" "}
                AED 395
              </span>
              <span className="text-[14px] md:text-[20px] text-[#D52A2A] font-interNew font-semibold line-through ml-2">
                {"     "}
                (was AED 500)
              </span>
            </p>

            <p
              className={`relative text-[14px] md:text-[16px] text-[#333333] font-interNew font-normal leading-[25px] md:leading-[30px] text-center w-[90%] mb-[30px] ${
                readmore ? "" : "line-clamp-2 md:line-clamp-none"
              }`}
            >
              Enjoy a fun, safe introduction to scuba diving, with professional
              instructors and all gear provided. Feel the thrill of breathing
              underwater and start your diving adventure today!
              <span
                className={`underline underline-offset-2 md:hidden absolute right-0 ${
                  readmore ? "-bottom-[22px] hidden" : "bottom-0"
                } text-[#1889B8] pl-[30px] bg-gradient-to-l from-white from-80% via-50% to-transparent to-100%`}
                onClick={() => setReadmore(!readmore)}
              >
                {readmore ? "Read Less" : "Read More"}
              </span>
            </p>

            <Button
              href={"#package"}
              width="normal"
              className="text-[16px] md:text-[20px] font-normal font-interNew text-white bg-[#1889B8] cursor-pointer border-[1px] hover:opacity-80 transition-all duration-300"
            >
              Book Your Dive Now
            </Button>
          </div>
        </div>
      </div>
      <MarqueeSlide />
    </section>
  );
};

export default Hero;

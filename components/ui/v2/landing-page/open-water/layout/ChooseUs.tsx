import Image from "next/image";
import React from "react";
import Button from "../../../buttons/Button";

const ChooseUs = () => {
  return (
    <section className="w-full h-full px-[17px] md:px-[80px] py-[80px] md:py-[100px]">
      <div className="flex flex-col [@media(min-width:1200px)]:flex-row justify-center [@media(min-width:1200px)]:justify-between items-center [@media(min-width:1200px)]:items-start gap-x-[30px]">
        <div className="max-w-[1000px] [@media(min-width:1200px)]:max-w-[600px]">
          <h4 className="text-[38px] md:text-[48px] text-[#333333] font-barloNew font-semibold pb-[10px] leading-[45px] md:leading-[60px]">
            Why Choose Bermuda Scuba <br className="hidden md:block" /> Diving
            Center?
          </h4>
          <p className="text-[14px] md:text-[20px] text-[#666666] font-interNew font-normal leading-[25px] md:leading-[35px]">
            Our team is made up of highly trained and certified professionals
            with in-depth knowledge of scuba diving.
          </p>
          <div className="grid grid-cols-2 gap-y-[50px] mt-[35px]">
            <div className="flex flex-col md:flex-row gap-y-[10px] md:gap-x-[15px] justify-start items-start md:items-center">
              <Image
                src={
                  "/images/landing-pages/padi-open-water-course/chooseIcon1.svg"
                }
                width={50}
                height={50}
                alt="icon1"
                className="object-contain w-[45px] h-[45px] md:w-[50px] md:h-[50px]"
              />
              <span className="text-[#333333] text-[16px] md:text-[20px] font-semibold font-interNew">
                <p>Certified</p>
                <p>PADI Instructors</p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-y-[10px] md:gap-x-[15px] justify-start items-start md:items-center">
              <Image
                src={
                  "/images/landing-pages/padi-open-water-course/chooseIcon2.svg"
                }
                width={50}
                height={50}
                alt="icon2"
                className="object-contain w-[45px] h-[45px] md:w-[50px] md:h-[50px]"
              />
              <span className="text-[#333333] text-[16px] md:text-[20px] font-semibold font-interNew">
                <p>Comprehensive</p>
                <p>Training</p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-y-[10px] md:gap-x-[15px] justify-start items-start md:items-center">
              <Image
                src={
                  "/images/landing-pages/padi-open-water-course/chooseIcon3.svg"
                }
                width={50}
                height={50}
                alt="icon3"
                className="object-contain w-[45px] h-[45px] md:w-[50px] md:h-[50px]"
              />
              <span className="text-[#333333] text-[16px] md:text-[20px] font-semibold font-interNew">
                <p>Full Equipment </p>
                <p>Provided</p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-y-[10px] md:gap-x-[15px] justify-start items-start md:items-center">
              <Image
                src={
                  "/images/landing-pages/padi-open-water-course/chooseIcon4.svg"
                }
                width={50}
                height={50}
                alt="icon4"
                className="object-contain w-[45px] h-[45px] md:w-[50px] md:h-[50px]"
              />
              <span className="text-[#333333] text-[16px] md:text-[20px] font-semibold font-interNew">
                <p>International</p>
                <p>Certification</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-[10px] md:gap-x-[40px] justify-center items-end pt-[50px] md:pt-[30px]">
          <div className="flex flex-col-reverse md:flex-col justify-center items-center gap-y-[10px] md:gap-y-[30px] min-w-[157px] md:min-w-none">
            <Image
              src={"/images/landing-pages/padi-open-water-course/choose1.webp"}
              width={305}
              height={347}
              alt="chooseOne"
              className="md:w-[305px] md:h-[347px] min-w-[157px] w-full md:max-w-none object-contain"
            />
            <Button
              href={"/contact"}
              width="normal"
              className="text-white font-interNew text-[16px] md:text-[20px] font-normal bg-[#1889B8] cursor-pointer border-[1px] hover:opacity-80 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
          <Image
            src={"/images/landing-pages/padi-open-water-course/choose2.webp"}
            alt="chooseTwo"
            width={303}
            height={405}
            className="md:w-[303px] md:h-[428px] max-w-[303px] min-w-[150px] md:max-w-none w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;

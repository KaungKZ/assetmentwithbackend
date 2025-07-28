import Image from "next/image";
import React, { useRef, useCallback, useState } from "react";
import packageBg from "../../../../../../public/images/landing-pages/padi-open-water-course/packageBg.webp";
import packageBgMobile from "../../../../../../public/images/landing-pages/padi-open-water-course/packageBgMobile.webp";
import PackageCard from "../ui/PackageCard";
import { newFeatures, packagesNew } from "../data";
import diverSvg from "../../../../../../public/images/landing-pages/padi-open-water-course/diverSvg.svg";
import { getPackageVatTotal } from "../../../../../../lib/func/money";
import { TbCircleCheckFilled } from "react-icons/tb";
import { IoCloseCircle } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageCardMobile from "../ui/PackageCardMobile";
import { Barlow_Condensed } from "next/font/google";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Course } from "../types";

const Barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
});

interface props {
  course?: Course;
}
const Package = ({ course }: props) => {
  const settings = {
    centerMode: true,
    slidesToShow: 1,
    centerPadding: "24px",
    infinite: false,
    arrows: false,
    initialSlide: 1,
  };

  const sliderRef = useRef<Slider | null>(null);

  return (
    <section
      id="package"
      className="w-full mdmx:mt-[80px] pt-0 md:pt-[100px] relative -scroll-mt-[450px]"
    >
      <div className="w-full h-full px-0 md:px-[20px] relative -z-30 rounded-lg">
        <Image
          src={"/images/landing-pages/padi-open-water-course/packageBg.webp"}
          width={1400}
          height={300}
          className="w-full h-[360px] rounded-3xl hidden md:block object-cover "
          alt="packageBg"
        />
      </div>
      <div className="px-0 lg:px-[80px] w-full">
        <div className="w-full pt-[70px] md:pt-[80px] px-[0px] md:px-[35px] rounded-none md:rounded-2xl bg-white -mt-[10px] md:-mt-[100px]">
          <h4 className="text-[#333333] text-[38px] md:text-[48px] font-barloNew font-semibold text-left md:text-center uppercase leading-[50px] px-[15px]">
            Padi Open water course packages
          </h4>
          <p className="text-[#333333] text-[14px] md:text-[16px] font-interNew font-normal pt-[15px] pb-[29px] text-center px-[15px] leading-[20px] md:leading-[35px]">
            Explore our course packages designed to guide you from beginner to
            advanced diver with expert training and flexible options.
          </p>
          <div className="w-full h-full pl-[10px] md:pl-[50px] pr-[10px] pt-[70px] md:pt-[0px] md:pr-[30px] bg-custom-gradient pb-[30px] mt-[30px] md:mt-[230px] md:rounded-lg relative">
            <div className="hidden grid-cols-3 gap-x-[3px] md:gap-x-[10px] md:grid lg:grid-cols-4">
              <div className="lgmx:hidden">
                <div className="relative w-full h-[70px] md:h-[150px] flex justify-start items-start md:items-end">
                  <Image
                    src={
                      "/images/landing-pages/padi-open-water-course/diverSvg.webp"
                    }
                    alt="diverSvg"
                    width={150}
                    height={150}
                    className="absolute w-[136px] h-[77px] md:w-[275px] md:h-[195px] object-contain -top-[150px] md:-top-[135px]"
                  />
                  <h4
                    className={`text-[21px] md:text-[40px] md:mb-[14px] text-white  font-normal uppercase ${Barlow.className}`}
                  >
                    features:
                  </h4>
                </div>
                <ul className="">
                  {newFeatures.map((item, index) => {
                    return (
                      <li
                        className="h-[50px] flex justify-start items-center md:text-center text-white text-[12px] md:text-[20px] font-semibold font-interNew tracking-[0.5px] md:whitespace-nowrap"
                        key={index}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {packagesNew.map((pkg, index) => (
                <PackageCard
                  key={index}
                  package={pkg}
                  course={course}
                  features={newFeatures}
                />
              ))}
            </div>
            <div className="relative w-full h-full block md:hidden">
              <div
                onClick={() => sliderRef.current?.slickPrev()}
                className="z-10 absolute top-[40%] -translate-y-[50%] left-[6px] p-[2.5px] bg-white rounded-full border border-[#333333]"
              >
                <MdOutlineKeyboardArrowLeft size={30} color="#333333" />
              </div>
              <div
                onClick={() => sliderRef.current?.slickNext()}
                className="z-10 absolute top-[40%] -translate-y-[50%] right-[6px] p-[2.5px] bg-white rounded-full border border-[#333333]"
              >
                <MdOutlineKeyboardArrowRight size={30} color="#333333" />
              </div>
              <Image
                src="/images/landing-pages/padi-open-water-course/diverSvg.webp"
                alt="open water course diver"
                width={150}
                height={150}
                className="absolute w-[186px] h-[127px] md:w-[275px] md:h-[195px] object-contain -top-[120px] md:-top-[130px]"
              />
              <Slider ref={sliderRef} {...settings} className="h-full px-0">
                {packagesNew.map((pkg, index) => (
                  <div key={index} className="pr-[4px] pl-[4px]">
                    <PackageCardMobile
                      key={index}
                      package={pkg}
                      course={course}
                      features={newFeatures}
                      // setUpdatePrice={setUpdatePrice}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="md:flex justify-center items-center absolute left-[50px] bottom-[20px] gap-x-[30px] hidden">
              <div className="flex justify-center items-center gap-x-[5px]">
                <TbCircleCheckFilled color="#34E0A1" size={22} />
                <p className="text-[16px] text-white font-interNew font-normal">
                  Included
                </p>
              </div>
              <div className="flex justify-center items-center gap-x-[5px]">
                <IoCloseCircle color="#EA4335" size={22} />
                <p className="text-[16px] text-white font-interNew font-normal">
                  Not Included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;

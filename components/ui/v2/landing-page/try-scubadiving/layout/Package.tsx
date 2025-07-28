import Image from "next/image";
import React, { useRef } from "react";

import { ScubanewFeatures, ScubapackagesNew } from "../data";

import { TbCircleCheckFilled } from "react-icons/tb";
import { IoCloseCircle } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Barlow_Condensed } from "next/font/google";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ScubaPackageCard from "../ui/ScubaPackageCard";
import ScubaPackageCardMobile from "../ui/ScubaPackageCardMobile";
const Barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
});

interface props {
  setUpdatePrice?: any;
  setUpdateId?: any;
  setPromoPrice?: any;
}
const Package = ({ setUpdatePrice, setUpdateId, setPromoPrice }: props) => {
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
      className="w-full pt-0 md:pt-[100px] relative -scroll-mt-[30px] md:-scroll-mt-[360px]"
    >
      <div className="w-full px-0 md:px-[20px] relative -z-30">
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 z-10 rounded-3xl hidden md:block" />
          <Image
            src={"/images/landing-pages/try-scubadiving/packageBgnew2.webp"}
            width={1400}
            height={500}
            className="w-full h-full rounded-md hidden md:block"
            alt="packageBg"
          />
        </div>
      </div>
      <div className="px-0 lg:px-[80px] w-full">
        <div className="w-full pt-[70px] pb-[0px] md:pb-[100px] md:pt-[80px] px-[0px] md:px-[35px] rounded-none md:rounded-2xl bg-white -mt-[10px] md:-mt-[100px]">
          <h4 className="text-[#333333] text-[38px] md:text-[48px] font-barloNew font-semibold text-center md:text-center uppercase leading-[50px] px-[15px]">
            Try Dive Packages
          </h4>
          <p className="text-[#333333] text-[14px] md:text-[16px] font-interNew font-normal pt-[12px] text-center px-[15px]">
            Choose the perfect dive experience to start your underwater
            adventure safely and enjoyably.
          </p>
          <div className="w-full h-full md:pl-[50px] pt-[20px] md:pt-[0px] md:pr-[30px] bg-custom-gradient pb-[70px] mt-[40px] md:mt-[230px] md:rounded-lg relative">
            <div className="hidden grid-cols-4 gap-x-[3px] md:gap-x-[10px] md:grid">
              <div>
                <div className="relative w-full h-[70px] md:h-[160px] flex justify-start items-start md:items-end">
                  <Image
                    src={
                      "/images/landing-pages/padi-open-water-course/diverSvg.webp"
                    }
                    width={150}
                    height={150}
                    alt="diverSvg"
                    className="absolute w-[136px] h-[77px] md:w-[275px] md:h-[195px] object-contain -top-[150px] md:-top-[130px]"
                  />
                  <h4
                    className={`text-[21px] md:text-[40px] md:mb-3 text-white font-normal uppercase ${Barlow.className}`}
                  >
                    features:
                  </h4>
                </div>
                <ul className="">
                  {ScubanewFeatures.map((item, index) => {
                    return (
                      <li
                        className="h-[50px] flex justify-start items-center md:text-center text-white text-[12px] md:text-[20px] font-semibold font-interNew md:whitespace-nowrap"
                        key={index}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {ScubapackagesNew.map((pkg, index) => (
                <ScubaPackageCard
                  key={index}
                  package={pkg}
                  features={ScubanewFeatures}
                  setUpdatePrice={setUpdatePrice}
                  setUpdateId={setUpdateId}
                  setPromoPrice={setPromoPrice}
                />
                // <PackageCard
                //   key={index}
                //   package={pkg}
                //   features={ScubanewFeatures}
                //   setUpdatePrice={setUpdatePrice}
                // />
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
              {/* <Image
                src={diverSvg}
                alt="diverSvg"
                className="absolute w-[186px] h-[127px] md:w-[275px] md:h-[195px] object-contain -top-[120px] md:-top-[130px]"
              /> */}
              <Slider
                ref={sliderRef}
                {...settings}
                className="w-full h-full px-0"
              >
                {ScubapackagesNew.map((pkg, index) => (
                  <div key={index} className="pl-[4px] pr-[4px]">
                    <ScubaPackageCardMobile
                      key={index}
                      package={pkg}
                      features={ScubanewFeatures}
                      setUpdatePrice={setUpdatePrice}
                      setUpdateId={setUpdateId}
                      setPromoPrice={setPromoPrice}
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

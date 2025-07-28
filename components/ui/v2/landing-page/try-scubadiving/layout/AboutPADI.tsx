import Image from "next/image";
import React from "react";
import CourseTypeItem from "../../open-water/ui/CourseTypeItem";
import { ScubacourseType, ScubapackageType } from "../data";
import PackageTypeItem from "../../open-water/ui/PackageTypeItem";
import Accordion from "../../../accordion/Accordion";

const AboutPADI = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[430px] md:h-[653px] relative">
        <Image
          src={"/images/landing-pages/try-scubadiving/aboutBg.webp"}
          // fill

          width={1200}
          height={700}
          alt="aboutbg"
          className="w-full h-[500px] object-cover absolute top-0 left-0 -z-10 hidden md:block"
        />
        <Image
          src={"/images/landing-pages/try-scubadiving/aboutBgMobile1.webp"}
          // fill
          width={1200}
          height={700}
          alt="aboutbg"
          className="w-full h-full object-cover absolute top-0 left-0 -z-10 block md:hidden"
        />
        <div className="flex flex-col md:flex-row justify-center items-center px-[17px] md:px-[20px] lg:px-[106px] w-full h-full gap-y-[30px] md:gap-x-[30px] lg:gap-x-[136px] pb-0 md:pb-[250px]">
          <div className="md:flex-[6]">
            <h4 className="md:text-[48px] text-[38px] text-white font-barloNew font-semibold pb-[30px] pt-[0px] md:py-[10px]">
              About Try Scuba Diving
            </h4>
            <p className="font-interNew font-normal text-[16px] md:text-[20px] text-white leading-[25px] md:leading-[35px] md:w-[97%]">
              Experience scuba diving at La mer South Beach in Jumeirah 3, Dubai
              with Bermuda Diving Centers Try Scuba Diving package. The session
              takes a maximum of 3 to 4 hours.
            </p>
          </div>
          <div className="hidden md:block md:flex-[6]">
            <Image
              src={"/images/landing-pages/padi-open-water-course/padi.webp"}
              width={500}
              height={200}
              alt="PADI"
              className="hidden"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full md:px-[20px] lg:px-[80px] px-0">
        <div className="w-full h-full p-0 md:p-[20px] lg:p-[47px] bg-white mt-0 md:-mt-[240px]">
          <div className="flex md:flex-row flex-col justify-between md:items-start items-center md:gap-x-[20px]">
            <div className="px-[17px] md:px-0">
              <div className="flex flex-col">
                <h4 className="text-[#333333] text-[26px] md:text-[36px] lg:text-[36px] font-semibold font-barloNew -mt-[10px] mb-[20px] md:mb-[30px] pt-[32px] md:pt-0">
                  No swimming skills required
                </h4>
                <p className="text-[#333333] text-[16px] font-normal font-interNew leading-[25px] pb-[17px] md:pb-[50px]">
                  Anyone aged 10 and above can experience scuba diving with us.{" "}
                  <br />
                  Dive to depths of 6–8 meters (20–26 feet), guided and
                  supported every step of the way by our experienced
                  instructors.
                </p>
                <h4 className="text-[#333333] text-[26px] md:text-[36px] lg:text-[36px] font-semibold font-barloNew pb-[30px] pt-[17px] md:pt-0">
                  What the Package Offers
                </h4>
                <div className="md:block hidden">
                  {ScubacourseType.map((item, index) => {
                    return (
                      <CourseTypeItem
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        image={item.image}
                        index={index}
                      />
                    );
                  })}
                </div>
                <div className="w-full block md:hidden">
                  {ScubacourseType.map((item, index) => {
                    return (
                      <Accordion
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        varentNew
                        image={item.image}
                        defaultOpen={index === 0}
                      />
                    );
                  })}
                </div>

                {/* <p className="text-[16px] md:text-[19px] text-[#333333] font-interNew italic pt-[15px] md:pt-[10px] md:hidden">
                  Your adventure begins here—dive in with confidence!
                </p> */}
              </div>
              <div className="pt-[20px] md:pt-[25px] mb-[10px] md:my-0">
                <h4 className="text-[#333333] text-[26px] md:text-[29px] lg:text-[36px] font-semibold font-barloNew pb-[24px] md:pb-[30px]">
                  Package Includes:
                </h4>
                {ScubapackageType.map((item) => {
                  return <PackageTypeItem key={item.id} title={item.title} />;
                })}
              </div>
              <p className="text-[16px] md:text-[19px] text-[#333333] font-interNew italic pt-[2px] pb-[40px] md:pb-0 md:pt-[10px]">
                Your adventure begins here—dive in with confidence!
              </p>
            </div>
            <div className="max-w-[330px] lg:max-w-[480px] w-full h-full hidden md:block">
              <Image
                src={"/images/landing-pages/try-scubadiving/courseImg.webp"}
                alt="courseImg"
                width={500}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="max-w-[480px] w-full h-full block md:hidden">
              <Image
                src={
                  "/images/landing-pages/try-scubadiving/courseImgmobile.webp"
                }
                alt="courseImg"
                width={500}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPADI;

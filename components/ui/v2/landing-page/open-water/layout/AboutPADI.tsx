import Image from "next/image";
import React from "react";
import CourseTypeItem from "../ui/CourseTypeItem";
import { courseType, packageType } from "../data";
import PackageTypeItem from "../ui/PackageTypeItem";
import Accordion from "../../../accordion/Accordion";

const AboutPADI = () => {
  return (
    <section className="w-full pt-[100px]">
      <div className="w-full h-[653px] relative">
        <Image
          src={"/images/landing-pages/padi-open-water-course/aboutBg.webp"}
          // fill

          width={1200}
          height={700}
          alt="aboutbg"
          className="w-full h-full object-cover absolute top-0 left-0 -z-10 hidden md:block"
        />
        <Image
          src={
            "/images/landing-pages/padi-open-water-course/aboutBgMobile.webp"
          }
          // fill
          width={1200}
          height={700}
          alt="aboutbg"
          className="w-full h-full object-cover absolute top-0 left-0 -z-10 block md:hidden"
        />
        <div className="flex flex-col md:flex-row justify-center items-center px-[17px] md:px-[20px] lg:px-[106px] w-full h-full gap-y-[30px] md:gap-x-[30px] lg:gap-x-[136px] pb-0 md:pb-[120px]">
          <div className="flex-[6]">
            <h4 className="md:text-[48px] text-[38px] text-white font-barloNew font-semibold pb-[30px] pt-[80px] md:pt-[50px] md:py-[30px]">
              About PADI
            </h4>
            <p className="font-interNew font-light text-[20px] text-white leading-[35px] md:w-[97%]">
              PADI is the world’s leading scuba diver training organization,
              with over 135,000 certified professionals and 25 million
              certifications issued globally. Its progressive education system
              builds skills, safety awareness, and environmental knowledge,
              emphasizing hands-on practice and real-world application.
            </p>
          </div>
          <div className="flex-[6] pb-[80px]">
            <Image
              src={"/images/landing-pages/padi-open-water-course/padi.webp"}
              width={500}
              height={200}
              alt="PADI"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full md:px-[20px] lg:px-[80px] px-0">
        <div className="w-full h-full p-0 md:px-[20px] md:pt-[20px] lg:px-[50px] lg:pt-[50px] bg-white mt-0 md:-mt-[100px]">
          <div className="flex md:flex-row flex-col justify-between md:items-start items-center md:gap-x-[20px]">
            <div className="px-[17px] md:px-0">
              <div className="flex flex-col">
                <h4 className="text-[#333333] text-[26px] md:text-[36px] lg:text-[36px] font-semibold font-barloNew pb-[30px] pt-[17px] md:pt-0">
                  What the Course Offers
                </h4>
                <div className="md:block hidden pb-[25px]">
                  {courseType.map((item, index) => {
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
                  {courseType.map((item, index) => {
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
              <div className="mt-[30px] mb-[10px] md:my-0">
                <h4 className="text-[#333333] text-[26px] md:text-[29px] lg:text-[36px] font-semibold font-barloNew pb-[30px]">
                  Package Includes:
                </h4>
                {packageType.map((item) => {
                  return <PackageTypeItem key={item.id} title={item.title} />;
                })}
              </div>
              <p className="text-[16px] md:text-[19px] text-[#333333] font-interNew italic pt-[15px] pb-[40px] md:pb-0 md:pt-[15px]">
                Your adventure begins here—dive in with confidence!
              </p>
            </div>
            <div className="max-w-[330px] lg:max-w-[480px] w-full h-full hidden md:block">
              <Image
                src={
                  "/images/landing-pages/padi-open-water-course/courseImg.webp"
                }
                alt="courseImg"
                width={500}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="max-w-[480px] w-full h-full block md:hidden">
              <Image
                src={
                  "/images/landing-pages/padi-open-water-course/courseImgMobile.webp"
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

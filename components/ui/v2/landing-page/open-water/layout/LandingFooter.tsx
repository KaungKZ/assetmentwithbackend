import Image from "next/image";
import React from "react";
import { contacts } from "../data";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import Link from "next/link";
import { BsTiktok } from "react-icons/bs";
const LandingFooter = () => {
  return (
    <section className="w-full h-full">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0 -z-10" />
        <Image
          src={"/images/landing-pages/padi-open-water-course/footerBg.webp"}
          alt="footerbg"
          width={1400}
          height={800}
          className="w-full h-full absolute top-0 left-0 -z-20 object-cover"
        />
        <div className="w-full h-full z-50">
          <div className="px-[17px] lg:px-[80px]">
            <div className="flex flex-col justify-center items-center ">
              <Image
                src={
                  "/images/landing-pages/padi-open-water-course/logoWhite.webp"
                }
                alt="logo"
                width={200}
                height={170}
                className="w-[148px] h-[110px] md:w-[200px] md:h-[153px] object-contain mt-[78px] mb-[30px]"
              />
              <h4 className="text-white text-[24px] md:text-[36px] font-barloNew font-normal text-center leading-[34px] md:leading-[45px] pb-[36px] md:pb-[14.8px]">
                Ready to Dive into an <br className="hidden md:block" />{" "}
                Underwater Adventure?
              </h4>
              <p className="text-white text-[14px] md:text-[16px] font-normal font-interNew text-center leading-[25px] md:leading-[34px]">
                At Bermuda Diving Center, we’re excited to connect with scuba
                <br className="hidden md:block" />
                enthusiasts and are here to answer any questions you may have.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-y-[50px] md:gap-x-[80px] pt-[50px]">
              {contacts.map((item) => {
                return (
                  <Link
                    href={item.contactLink}
                    target="_blank"
                    key={item.id}
                    className={`flex flex-col justify-center items-center gap-y-[15px] ${
                      item.id === 1 ? "w-full md:w-[20%]" : ""
                    }`}
                  >
                    <item.icon size={30} color="white" />
                    <p
                      className={`text-white font-normal font-interNew text-[16px] text-center flex justify-center items-center`}
                    >
                      {item.name}
                    </p>
                    <p className="text-normal text-white font-interNew text-[12px] -mt-[5px]">
                      {item.source}
                    </p>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-[50px] md:mt-[112px] md:border-t md:border-t-[#CCCCCC] py-[27px]">
              <div className="flex flex-col md:flex-row justify-center items-center gap-y-[10px] md:gap-x-[20px] pb-[48px] md:pb-0">
                <p className="text-white font-normal text-[14px] font-interNew ">
                  Share on:
                </p>
                <div className="flex flex-row justify-center items-center gap-x-[20px]">
                  <Link
                    href={"https://web.facebook.com/bermuda.ae?_rdc=1&_rdr#"}
                    target="_blank"
                  >
                    <BiLogoFacebook
                      size={22}
                      color="#333333"
                      className="rounded-full p-1 bg-white"
                    />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/scubadiving.ae/"}
                    target="_blank"
                  >
                    <BiLogoInstagram
                      size={22}
                      color="#333333"
                      className="rounded-full p-1 bg-white"
                    />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/company/scubadiving-ae/"}
                    target="_blank"
                  >
                    <BiLogoLinkedin
                      size={22}
                      color="#333333"
                      className="rounded-full p-1 bg-white"
                    />
                  </Link>
                  <Link
                    href={"https://www.tiktok.com/@scubadiving.ae"}
                    target="_blank"
                  >
                    <BsTiktok
                      size={22}
                      color="#333333"
                      className="rounded-full p-1 bg-white"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex md:hidden justify-center items-center gap-x-[10px]">
                <p className="text-[8px] md:text-[12px] text-white font-interNew font-normal">
                  Terms & Conditions
                </p>
                <div className="w-[1px] h-[20px] bg-white" />
                <p className="text-[8px] md:text-[12px] text-white font-interNew font-normal">
                  Privacy Policy
                </p>
              </div>
              <div className="md:hidden block w-full h-[1px] bg-[#CCCCCC] my-[10px]" />
              <p className="text-[11px] md:text-[14px] text-white font-interNew font-normal ">
                © 2025 Bermuda Diving Center. All rights reserved.
              </p>
              <div className="hidden md:flex justify-center items-center gap-x-[10px] ">
                <Link
                  href={"/terms-and-conditions"}
                  className="text-[8px] md:text-[12px] text-white font-interNew font-normal"
                >
                  Terms & Conditions
                </Link>
                <div className="w-[1px] h-[20px] bg-white" />
                <Link
                  href={"/privacy-policy"}
                  className="text-[8px] md:text-[12px] text-white font-interNew font-normal"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;

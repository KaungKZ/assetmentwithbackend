import Image from "next/image";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import phone from "../../../../../../public/images/landing-pages/padi-open-water-course/phone.webp";
import tabbyLogo from "../../../../../../public/images/landing-pages/padi-open-water-course/tabby-logo.svg";
import Button from "../../../buttons/Button";
import { shuffleArray } from "../../../../../../lib/func/array";
import { getPackageVatTotal } from "../../../../../../lib/func/money";
import { Course } from "../types";

interface props {
  course?: Course;
}
const PaymentInfo = ({ course }: props) => {
  const [updatePrice] = useState(1900);
  const router = useRouter();

  // const checkoutPrice = useCallback(() => {
  //   // if (pkg) {
  //     return Number(pkg.original_price.replace(/,/g, ""));
  //   // }
  // }, [course]);

  const packageVatTotal = getPackageVatTotal(updatePrice, 1);
  return (
    <section className="w-full h-auto lg:h-[659px] bg-gradient-to-b from-[#3AFEC6] from-0% to-[#19F4A0] to-100% overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-x-[50px]">
        <div className="max-w-[786px] flex flex-col justify-center items-center pt-[80px]">
          <div className="flex w-full justify-center items-center pt-[20px] pb-[12px] lg:py-[30px]">
            <Image
              src={
                "/images/landing-pages/padi-open-water-course/tabby-logo.webp"
              }
              alt="tabby"
              width={200}
              height={100}
              className="w-[71px] h-[30px] lg:w-[150px] lg:h-[63px] object-contain"
            />
          </div>
          <h4 className="text-[34px] lg:text-[64px] text-[#333333] font-interNew font-semibold lg:leading-[85px] text-center leading-[45px]">
            Split Your Purchase <br /> Into 4 Payments.
          </h4>
          <p className="text-[14px] lg:text-[20px] text-[#333333] font-interNew font-normal pt-[12px] lg:pt-[30px] text-center">
            No interest. No hidden fees. Debit or credit cards are accepted.
          </p>
          <div className="flex flex-row justify-center items-center gap-x-[15px] pt-[30px]">
            <Button
              href={"#package"}
              // onClick={() => {
              //                 // custom hardcode values
              //                 localStorage.setItem(
              //                   "reservation",
              //                   JSON.stringify({
              //                     heading: "PREMIUM",
              //                     id: course?.id,
              //                     price: updatePrice,
              //                     promoPrice: null,
              //                     from: course ? course.from : course?.type,
              //                     noOfPeople: 1,
              //                     addOnsTotal: 0,
              //                     subTotal: updatePrice * 1 + packageVatTotal,
              //                     packageVatTotal,
              //                     total: updatePrice * 1 + packageVatTotal,
              //                     addOns: shuffleArray(course?.add_ons),
              //                     registered_from: "public_web",
              //                     currentStep: 1,
              //                     paymentMethod: "",
              //                   })
              //                 );
              //                 router.push("/reservation");
              //               }}
              className="text-white font-interNew font-normal text-[16px] lg:text-[20px] bg-[#333333] cursor-pointer hover:bg-white hover:text-[#333333] transition-all duration-300"
            >
              {/* {tryscuba ? "Book Now" : "Enroll Now"} */}
              Enroll Now
            </Button>
            <Button
              href={"/contact"}
              className="text-[#333333] font-interNew font-normal text-[16px] lg:text-[20px] bg-white cursor-pointer hover:opacity-80 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="max-w-[550px] md:max-w-[350px] lg:max-w-[550px] w-full">
          <Image
            src={"/images/landing-pages/padi-open-water-course/phone.webp"}
            alt="phone"
            width={550}
            height={582}
            className=" w-full mt-[50px] md:mt-[70px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;

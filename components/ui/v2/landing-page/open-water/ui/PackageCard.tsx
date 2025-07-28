import Button from "../../../buttons/Button";
import React, { useState, useCallback } from "react";
import { getPackageVatTotal } from "../../../../../../lib/func/money";
import { NewFeature, Package } from "../types/index";
import { shuffleArray } from "../../../../../../lib/func/array";
import { useRouter } from "next/navigation";
import { TbCircleCheckFilled } from "react-icons/tb";
import { IoCloseCircle } from "react-icons/io5";

type Course = {
  id: number;
  short_name: string;
  price: number;
  promo_price: number;
  from?: string;
  type?: string;
  add_ons?: any[];
};
interface props {
  course: Course;
  package: Package;
  features: NewFeature[];
  // setUpdatePrice: Dispatch<SetStateAction<number>>;
}

const PackageCard = ({ course, package: pkg, features }: props) => {
  const [updatePrice] = useState(Number(pkg.original_price.replace(/,/g, "")));

  const checkoutPrice = useCallback(() => {
    // if (pkg) {
    return Number(pkg.original_price.replace(/,/g, ""));
    // }
  }, [course]);

  const packageVatTotal = getPackageVatTotal(checkoutPrice(), 1);

  const router = useRouter();

  const buildReservationPayload = (
    course: Course,
    price: number,
    promoPrice: number | null,
    vatTotal: number,
    getSubTotal: () => number
  ) => ({
    heading: course?.short_name,
    id: course?.id,
    price,
    promoPrice,
    from: course?.from || course?.type,
    noOfPeople: 1,
    addOnsTotal: 0,
    subTotal: getSubTotal(),
    packageVatTotal: vatTotal,
    total: getSubTotal(),
    addOns: shuffleArray(course?.add_ons),
    registered_from: "public_web",
    currentStep: 1,
    paymentMethod: "",
  });

  return (
    <div
      className={`bg-white w-full h-fit rounded-2xl -mt-[170px] relative z-20 ${
        pkg.id === 2 || pkg.id === 3 ? "border border-[#1889B8]" : ""
      }`}
    >
      {pkg.id === 2 && (
        <div className="w-[100.55%] bg-[#1889B8] rounded-2xl absolute -top-[35px] -z-[30] -left-[0.70px]">
          <p className="text-[18px] text-[#FFFFFF] font-interNew font-normal italic text-center pt-[4px] pb-[40px]">
            Most Popular
          </p>
        </div>
      )}

      <div className="w-full h-[70px] md:h-[310px] flex flex-col justify-start items-center pt-[0px]">
        <h4
          className={`text-[32px] ${
            pkg.id === 3 ? "text-[#F79F32]" : "text-[#1889B8]"
          } font-interNew font-semibold mb-[10px] bg-white w-full text-center pt-[20px] rounded-t-2xl`}
        >
          {pkg.name}
          {pkg.id === 3 || pkg.id === 2 ? "+" : ""}
        </h4>
        <p className="text-[#666666] text-[12px] font-interNew font-normal text-center px-[15px]">
          {pkg.desc}
        </p>

        <div className="relative hidden md:flex justify-start items-end gap-x-[9px] pt-[15px]">
          <span className="text-[#333333] text-[20px] font-interNew font-semibold mb-[5px]">
            AED
          </span>
          <p className="text-[#333333] text-[32px] font-semibold font-inter xlmx:text-[24px]">
            {pkg.price}
          </p>
          <span className="text-[#666666] text-[10px] font-interNew italic font-medium mb-[15px]">
            + VAT
          </span>
        </div>
        <p className="text-[#FFFFFF] text-[11px] font-semibold font-interNew bg-[#333333] rounded-md py-[4px] px-[10px] mt-1 mb-[20px]">
          {pkg.tag}
        </p>
        <div className="w-full bg-white px-[15px] py-[15px] rounded-b-2xl hidden md:block">
          <Button
            onClick={() => {
              const isCombo = pkg.name === "COMBO";
              const selectedCourse = isCombo
                ? { ...course, price: 1600, promo_price: null }
                : course;

              const finalPrice = isCombo ? 1600 : updatePrice;
              const promoPrice = null;
              const subTotal = () => checkoutPrice() + packageVatTotal;

              localStorage.setItem(
                "reservation",
                JSON.stringify(
                  buildReservationPayload(
                    selectedCourse,
                    finalPrice,
                    promoPrice,
                    packageVatTotal,
                    subTotal
                  )
                )
              );

              router.push(isCombo ? "/reservation?id=19" : "/reservation");
            }}
            className={`text-[16px] font-normal font-interNew  ${
              pkg.id === 2
                ? "bg-[#1889B8] text-white border-[1px] hover:opacity-80 transition-all duration-300"
                : "text-[#1889B8] border border-[#1889B8] hover:text-white hover:bg-[#1889B8] hover:border-[#1889B8] hover:border-[1px] transition-all duration-300"
            }`}
            width="full"
          >
            Enroll Now
          </Button>
        </div>
      </div>

      <ul className="px-[20px]">
        {features.map((feature, i) => {
          const value = pkg.features[feature];

          return (
            <li
              key={i}
              className={`h-[50px] flex justify-center items-center text-center border-b border-[#CCCCCC] ${
                value === "15% Discount"
                  ? "text-[#FF6659]"
                  : value === "20% Discount"
                  ? "text-[#34E0A1]"
                  : "text-[#333333]"
              } text-[11px] md:text-[16px] font-normal font-interNew tracking-[0.5px] whitespace-nowrap ${
                value === null ? "hidden" : ""
              }`}
            >
              {value === true && (
                <TbCircleCheckFilled color="#34E0A1" size={22} />
              )}
              {value === false && <IoCloseCircle color="#EA4335" size={22} />}
              {typeof value === "string" && value}
            </li>
          );
        })}
      </ul>
      <div className="bg-white py-[14px] px-[15px] rounded-b-2xl hidden md:block"></div>
    </div>
  );
};

export default PackageCard;

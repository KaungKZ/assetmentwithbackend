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
  package: Package;
  course: Course;

  features: NewFeature[];
  // setUpdatePrice: Dispatch<SetStateAction<number>>;
}
const PackageCardMobile = ({ course, package: pkg, features }: props) => {
  const [updatePrice] = useState(Number(pkg.original_price.replace(/,/g, "")));
  const router = useRouter();

  const checkoutPrice = useCallback(() => {
    return Number(pkg.original_price.replace(/,/g, ""));
  }, [course]);

  const packageVatTotal = getPackageVatTotal(checkoutPrice(), 1);

  return (
    <div
      className={`bg-white max-w-full max-h-[1300px] h-full rounded-2xl relative mt-[80px] z-20 ${
        pkg.id === 2 || pkg.id === 3 ? "border border-[#1889B8]" : ""
      }`}
    >
      {pkg.id === 2 && (
        <div className="w-[100.55%] bg-[#1889B8] rounded-2xl absolute -top-[30px] -z-[30] -left-[0.90px]">
          <p className="text-[14px] text-[#FFFFFF] font-interNew font-normal italic text-center pt-[4px] pb-[40px]">
            Most Popular
          </p>
        </div>
      )}

      <div className="w-full h-[270px] md:h-[320px] flex flex-col justify-start items-center pt-[0px]">
        <h4
          className={`text-[24px] ${
            pkg.id === 3 ? "text-[#F79F32]" : "text-[#1889B8]"
          } font-interNew font-semibold mb-[10px] bg-white w-full text-center pt-[20px] rounded-t-2xl`}
        >
          {pkg.name}
          {pkg.id === 3 || pkg.id === 2 ? "+" : ""}
        </h4>
        <p
          className={`text-[#666666] text-[13px] font-interNew font-normal px-[10px] text-center ${
            pkg.id === 3 ? "w-[100%]" : ""
          }`}
        >
          {pkg.desc}
        </p>

        <div className="relative flex justify-center items-end gap-x-[9px] pt-[15px]">
          <span className="text-[#333333] text-[15px] font-interNew font-semibold mb-[5px]">
            AED
          </span>
          <p className="text-[#333333] text-[24px] font-semibold font-interNew">
            {pkg.price}
          </p>
          <span className="text-[#666666] text-[9px] font-interNew italic font-medium mb-[13px]">
            + VAT
          </span>
        </div>
        <p className="text-[#FFFFFF] text-[11px] font-semibold font-interNew bg-[#333333] rounded-md py-[4px] px-[10px] mt-3 mb-[20px]">
          {pkg.tag}
        </p>
        <div className="w-full bg-white px-[15px] py-[5px] rounded-b-2xl">
          <Button
            onClick={() => {
              if (pkg.name === "COMBO") {
                const modifiedCourse = {
                  ...course,
                  price: 1600,
                  promo_price: null,
                };

                localStorage.setItem(
                  "reservation",
                  JSON.stringify({
                    heading: pkg?.name,
                    id: modifiedCourse?.id,
                    price: modifiedCourse?.price,
                    promoPrice: modifiedCourse?.promo_price,
                    from: modifiedCourse
                      ? modifiedCourse.from
                      : modifiedCourse?.type,
                    noOfPeople: 1,
                    addOnsTotal: 0,
                    subTotal: checkoutPrice() * 1 + packageVatTotal,
                    packageVatTotal,
                    total: checkoutPrice() * 1 + packageVatTotal,
                    addOns: shuffleArray(modifiedCourse?.add_ons),
                    registered_from: "public_web",
                    currentStep: 1,
                    paymentMethod: "",
                  })
                );
                return router.push("/reservation?id=19");
              } else {
                localStorage.setItem(
                  "reservation",
                  JSON.stringify({
                    heading: pkg?.name,
                    id: course?.id,
                    price: updatePrice,
                    promoPrice: null,
                    from: course ? course.from : course?.type,
                    noOfPeople: 1,
                    addOnsTotal: 0,
                    subTotal: checkoutPrice() * 1 + packageVatTotal,
                    packageVatTotal,
                    total: checkoutPrice() * 1 + packageVatTotal,
                    addOns: shuffleArray(course?.add_ons),
                    registered_from: "public_web",
                    currentStep: 1,
                    paymentMethod: "",
                  })
                );
                router.push("/reservation");
              }
            }}
            className={`text-[13px] font-normal font-interNew ${
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

      <div>
        {features.map((feature, i) => {
          const value = pkg.features[feature];

          return (
            <div
              key={i}
              className={`flex flex-row justify-center items-center px-[10px] py-[10px] border-b ${
                value === null ? "hidden" : ""
              }`}
            >
              <p
                className={`flex-[7] text-[#333333] text-[13px] font-semibold font-interNew ${
                  value === null ? "hidden" : ""
                }`}
              >
                {feature}
              </p>
              <p
                className={`flex-[5] ${
                  value === "15% Discount"
                    ? "text-[#FF6659]"
                    : value === "20% Discount"
                    ? "text-[#34E0A1]"
                    : "text-[#333333]"
                } text-[13px] font-normal font-interNew`}
              >
                {value === true && (
                  <TbCircleCheckFilled color="#34E0A1" size={22} />
                )}
                {value === false && <IoCloseCircle color="#EA4335" size={22} />}
                {typeof value === "string" && value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-white py-[10px] px-[15px] rounded-b-2xl"></div>
    </div>
  );
};

export default PackageCardMobile;

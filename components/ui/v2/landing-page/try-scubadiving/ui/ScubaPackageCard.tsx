import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Button from "../../../buttons/Button";
import { TbCircleCheckFilled } from "react-icons/tb";
import { IoCloseCircle } from "react-icons/io5";
import { ScubaNewFeature, ScubaPackage } from "../../try-scubadiving/types";
interface props {
  package: ScubaPackage;
  features: ScubaNewFeature[];
  setUpdatePrice: Dispatch<SetStateAction<number>>;
  setUpdateId: any;
  setPromoPrice: any;
}
const ScubaPackageCard = ({
  package: pkg,
  features,
  setUpdatePrice,
  setUpdateId,
  setPromoPrice,
}: props) => {
  const router = useRouter();
  const [firstWord, ...rest] = pkg.name.split(" ");
  return (
    <div
      className={`bg-white w-full h-fit rounded-2xl -mt-[170px] relative z-20 ${
        pkg.id === 2 || pkg.id === 3 ? "border border-[#1889B8]" : ""
      }`}
    >
      {pkg.id === 2 && (
        <div className="w-[100.55%] bg-[#1889B8] rounded-2xl absolute -top-[35px] -z-[30] -left-[0.70px]">
          <p className="text-[18px] text-[#FFFFFF] font-interNew font-normal italic text-center pt-[4px] pb-[40px]">
            Best Value
          </p>
        </div>
      )}

      <div className="w-full h-[70px] md:h-[330px] flex flex-col justify-start items-center pt-[0px] ">
        <h4
          className={` md:text-[25px] lg:text-[28px] ${
            pkg.id === 3 ? "text-[#F79F32]" : "text-[#1889B8]"
          } font-interNew font-semibold mb-[10px] bg-white w-full text-center pt-[20px] rounded-t-2xl leading-[35px]`}
        >
          {firstWord}
          <br />
          {rest.join(" ")}
        </h4>
        <p className="text-[#666666] text-[12px] font-interNew font-normal text-center px-[15px]">
          {pkg.desc}
        </p>

        <div className="relative hidden md:flex justify-start items-end gap-x-[9px] pt-[15px]">
          <span className="text-[#333333] text-[20px] font-interNew font-semibold mb-[5px]">
            AED
          </span>
          <p className="text-[#333333] text-[32px] font-semibold font-inter">
            {pkg.price}
          </p>
          <span className="text-[#666666] text-[10px] font-interNew italic font-medium mb-[15px]">
            + VAT
          </span>
        </div>
        <p className="text-[#FFFFFF] text-[11px] font-semibold font-interNew bg-[#333333] rounded-md py-[4px] px-[10px] mt-1 mb-[20px]">
          Before AED {pkg.tag}
        </p>
        <div className="w-full bg-white px-[15px] py-[15px] rounded-b-2xl hidden md:block">
          <Button
            onClick={() => {
              if (pkg.id === 2) {
                setUpdateId(10);
                setUpdatePrice(Number(pkg.tag.replace(/,/g, "")));
                setPromoPrice(Number(pkg.price.replace(/,/g, "")));

                router.push("/reservation");
              } else if (pkg.id === 3) {
                setUpdateId(10);
                setUpdatePrice(Number(pkg.tag.replace(/,/g, "")));
                setPromoPrice(480);
                router.push("/reservation?id=2&subid=3");
              } else {
                router.push("/reservation");
                setUpdatePrice(Number(pkg.tag.replace(/,/g, "")));
                setPromoPrice(Number(pkg.price.replace(/,/g, "")));
              }
            }}
            className={`text-[16px] font-normal font-interNew  ${
              pkg.id === 2
                ? "bg-[#1889B8] text-white border-[1px] hover:opacity-80 transition-all duration-300"
                : "text-[#1889B8] border border-[#1889B8] hover:text-white hover:bg-[#1889B8] hover:border-[#1889B8] hover:border-[1px] transition-all duration-300"
            }`}
            width="full"
          >
            Book Now
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

      {/* <div className="p-[20px] rounded-md bg-[#EEFAFF] flex flex-row justify-between items-center">
        <div className="flex flex-col gap-y-[5px]">
          <h4 className="text-[#333333] text-[20px] lg:text-[32px] font-interNew font-normal">
            {packageName}
          </h4>
          <p className="text-[#333333] text-[14px] md:text-[16px] font-interNew font-normal italic">
            {adventure}
          </p>
        </div>
        <p className="text-[#1889B8] text-[20px] lg:text-[32px] font-semibold font-inter">
          AED {price}
        </p>
      </div>
      <ul className="pt-[20px] px-[30px] md:px-[40px] list-disc pb-[20px]">
        {include.map((item, index) => {
          return (
            <li
              key={index}
              className="text-[#333333] text-[14px] md:text-[16px] font-interNew font-normal pb-[13px]"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <Button
        className="text-[16px] md:text-[20px] text-white font-kalnia font-normal bg-[#1889B8] cursor-pointer"
        width="full"
      >
        Book Now
      </Button> */}
    </div>
  );
};

export default ScubaPackageCard;

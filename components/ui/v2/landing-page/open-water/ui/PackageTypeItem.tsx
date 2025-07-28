import React from "react";
import Image from "next/image";

interface props {
  title: string;
}

const PackageTypeItem = ({ title }: props) => {
  return (
    <div className="flex justify-start items-center gap-x-[10px] pb-[15px]">
      <Image
        src={"/images/landing-pages/padi-open-water-course/scubaIcon.webp"}
        alt="icon"
        width={20}
        height={20}
        className="w-[18px] h-[18px] object-contain"
      />
      <p className="text-[#333333] text-[13px] md:text-[16px] font-interNew font-normal">
        {title}
      </p>
    </div>
  );
};

export default PackageTypeItem;

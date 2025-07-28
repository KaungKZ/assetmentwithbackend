import Image from "next/image";
import React from "react";
import Countdown from "../ui/Countdown";

const LandingHeader = () => {
  const targetDate = "2025-08-14T23:59:59";
  return (
    <header className="w-full px-[17px] md:px-[80px]">
      <div className="flex flex-col md:flex-row justify-between items-center pt-[35px] gap-x-[30px]">
        <Image
          src={"/images/landing-pages/padi-open-water-course/logo-color.webp"}
          width={200}
          height={148}
          alt="logoColor"
          className="object-contain w-[130px] h-auto md:w-[200px] md:h-auto"
        />
        <Countdown targetDate={targetDate} />
      </div>
    </header>
  );
};

export default LandingHeader;

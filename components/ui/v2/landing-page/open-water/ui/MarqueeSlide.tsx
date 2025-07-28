import React from "react";
import Marquee from "react-fast-marquee";
import { marqueeImage } from "../data";
import Image from "next/image";
const MarqueeSlide = () => {
  return (
    <Marquee className="mdmx:h-[100px]">
      {marqueeImage.map((item) => {
        return (
          <Image
            key={item.id}
            src={item.image}
            alt="mq"
            width={300}
            height={200}
            draggable={false}
            className="w-[300px] h-[125px] object-contain px-[70px] select-none"
          />
        );
      })}
    </Marquee>
  );
};

export default MarqueeSlide;

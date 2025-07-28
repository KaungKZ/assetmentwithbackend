import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";

interface props {
  ScubaserviceImgList: any[];
  direction: "left" | "right";
  setIndex: any;
  setOpen: any;
}

const ScubaImageMarquee = ({
  ScubaserviceImgList,
  direction,
  setIndex,
  setOpen,
}: props) => {
  const [onhover, setOnhover] = useState<boolean>(false);
  const [active, setActive] = useState(0);

  return (
    <Marquee direction={direction} speed={30}>
      {ScubaserviceImgList.map((item, index) => {
        return (
          <div
            onMouseOver={() => {
              setOnhover(true);
              setActive(item.id);
            }}
            onMouseOut={() => setOnhover(false)}
            key={item.id}
            className="w-[196px] h-[146px] md:w-[350px] md:h-[260px] mx-[7.5px] relative"
          >
            {onhover && active === item.id && (
              <CiCirclePlus
                onClick={() => {
                  setIndex(item.id - 1);
                  setOpen(true);
                }}
                className="text-white text-[50px] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-20 transition-all duration-300 cursor-pointer"
              />
            )}
            {onhover && active === item.id && (
              <div className="absolute inset-0 bg-black/30 z-10 rounded-md transition-all duration-300" />
            )}
            <Image
              src={item.src}
              alt="mq"
              width={350}
              height={260}
              draggable={false}
              className="w-full h-full object-contain select-none"
            />
          </div>
        );
      })}
    </Marquee>
  );
};

export default ScubaImageMarquee;

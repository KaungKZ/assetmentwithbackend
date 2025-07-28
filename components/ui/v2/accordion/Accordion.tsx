import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { FaMinus, FaPlus } from "react-icons/fa6";

type props = {
  title: string;
  desc: string;
  varentNew?: boolean;
  image?: string | StaticImageData;
  defaultOpen: boolean;
};

const Accordion = ({
  title,
  desc,
  varentNew = false,
  image,
  defaultOpen = false,
}: props) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [rotateDeg, setRotateDeg] = React.useState(0);

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all ${
        varentNew ? "" : "pl-[20px]"
      } pt-[10px] md:pt-[20px]  ${isOpen ? "shadow-bottom-only" : ""}`}
    >
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setRotateDeg((prev) => prev + 180);
        }}
        className={`w-full flex ${
          varentNew ? "justify-between" : "justify-start"
        } items-center pb-[16px] bg-muted/30 hover:bg-muted transition-colors`}
      >
        <div
          className={`flex justify-start items-center ${
            varentNew ? "gap-x-[10px]" : "gap-x-[25px]"
          } `}
        >
          {varentNew ? (
            <Image
              src={
                image
                  ? image
                  : "/images/landing-pages/padi-open-water-course/scubaIcon.webp"
              }
              alt="icon"
              width={25}
              height={25}
              className="w-[28px] h-[28px] object-contain"
            />
          ) : isOpen ? (
            <div className="w-[24px] h-[24px]">
              <MdKeyboardArrowUp
                color="#666666"
                className="w-[24px] h-[24px]"
              />
            </div>
          ) : (
            <div className="w-[24px] h-[24px]">
              <MdKeyboardArrowDown
                color="#666666"
                className="w-[24px] h-[24px]"
              />
            </div>
          )}
          <span className="text-[#333333] text-[17px] font-semibold font-inter text-left">
            {title}
          </span>
        </div>
        {/* {varentNew && <FaPlus color="#333333" className="h-[13px] w-[13px]" />} */}
        {varentNew && (
          <div
            className={`transition-transform duration-300 ease-in-out`}
            style={{ transform: `rotate(${rotateDeg}deg)` }}
          >
            {isOpen ? (
              <FaMinus color="#333333" className="h-[13px] w-[13px]" />
            ) : (
              <FaPlus color="#333333" className="h-[13px] w-[13px]" />
            )}
          </div>
        )}
      </button>

      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
          paddingTop: isOpen ? "0" : "0",
          // paddingBottom: isOpen ? "20px" : "0",
        }}
        className={`px-4 ${
          isOpen ? "mb-[20px]" : "mb-0"
        } overflow-hidden text-[16px] font-inter text-[#666666] text-muted-foreground transition-all duration-300 ease-in-out`}
      >
        {desc}
      </div>
    </div>
  );
};

export default Accordion;

import React, { ReactElement, useCallback, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Children } from "react";
import Image from "next/image";
import { reviews } from "../data";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";
const Carousel = ({ google }) => {
  const sliderRef = useRef<Slider | null>(null);

  const renderDots = useCallback(
    (dots: readonly ReactElement<{ className: string }>[]) => (
      <div>
        {Children.map(
          dots as ReactElement<{ className: string }>[],
          (child: ReactElement<{ className: string }>) => {
            const isActive = child.props.className.includes("active");

            return (
              <div
                onClick={() => {
                  sliderRef.current?.slickGoTo(Number(child.key));
                }}
                className={clsx("h-[8px] w-[8px] rounded-full cursor-pointer", {
                  "bg-[#CCCCCC]": isActive,
                  "bg-[#E3E3E3]": !isActive,
                })}
              />
            );
          }
        )}
      </div>
    ),
    []
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative pt-[10px] md:hidden">
      <Slider
        {...settings}
        ref={sliderRef}
        appendDots={renderDots}
        className="mt-4 rounded-lg overflow-hidden relative group pb-[70px] px-[8px]"
        dotsClass="h-[8px] flex items-center justify-center space-x-3 absolute bottom-[40px] left-4 right-4"
      >
        {google?.map((item, index) => {
          const previewText = item.text.slice(0, 100) + "...";
          return (
            <div key={index} className="px-[5px]">
              <div className="max-w-[340px] w-full shadow-sm relative p-[21px] rounded-md bg-white">
                <BiSolidQuoteAltRight
                  className="absolute top-[8px] right-[20px]"
                  color="#F7F6F6"
                  size={50}
                />
                <div className="flex justify-start items-center gap-x-[5px]">
                  <Image
                    src={reviews[0]?.image}
                    alt="icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <p className="text-[#666666] text-[12px] font-interNew font-normal italic">
                    {/* {item.sourceName} */} {reviews[0]?.sourceName}
                  </p>
                </div>
                <p className="text-[#666666] text-[14px] font-interNew font-normal pt-[20px]">
                  {previewText}
                </p>
                <div className="w-full h-[1px] bg-[#EFEFEF] my-[20px]" />
                <div className="flex justify-start items-center gap-x-[12px]">
                  <Image
                    src={item.profile_photo_url}
                    alt="avator"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <div className="space-y-[5px]">
                    <p className="text-[14px] text-[#333333] font-interNew font-normal">
                      {item.author_name}
                    </p>
                    <div className="flex gap-x-[7px]">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar
                          className="w-[13px] h-[13px]"
                          color="#FBBC05"
                          key={i}
                        />
                      ))}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

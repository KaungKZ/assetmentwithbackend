import React, { Children, ReactElement, useCallback, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScubaserviceImgList } from "../data";
import Image from "next/image";
import clsx from "clsx";

const ScubaImageCarousel = () => {
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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",

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
    <div className="pt-[50px]">
      <Slider
        {...settings}
        ref={sliderRef}
        appendDots={renderDots}
        className=""
        dotsClass="h-[8px] flex items-center justify-center space-x-3 absolute -bottom-[30px] left-4 right-4"
      >
        {ScubaserviceImgList.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[201px] h-[150px] md:w-[350px] md:h-[260px] px-[8px]"
            >
              <Image
                key={item.id}
                src={item.src}
                alt=""
                className="w-full h-full object-cover rounded-2xl bg-white"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ScubaImageCarousel;

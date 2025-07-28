import React from "react";
import HighlightCard from "../../open-water/ui/HighLightCard";
import { ScubacourseHighlights } from "../data";

const CourseHighlight = () => {
  return (
    <section className="w-full px-[17px] pt-[80px] md:pt-[100px] lg:px-[80px]">
      {/* <div className="w-full h-[1px] bg-[#CCCCCC] my-[100px]" /> */}
      <h4 className="text-[#333333] text-[38px] md:text-[48px] text-left font-barloNew font-semibold pb-[30px] md:pb-[50px] leading-[45px] md:leading-[30px]">
        Try Dive Experience Highlights
      </h4>
      <div className="flex flex-col gap-y-[30px] md:gap-y-[50px]">
        {ScubacourseHighlights.map((item) => {
          return (
            <HighlightCard
              key={item.id}
              id={item.id}
              mainTitle={item.mainTitle}
              title={item.title}
              image={item.image}
              tag={item.tag}
              tagText={item.tagText}
              text={item.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CourseHighlight;

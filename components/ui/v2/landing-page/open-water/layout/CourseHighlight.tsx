import React from "react";
import HighlightCard from "../ui/HighLightCard";
import { courseHighlights } from "../data";

const CourseHighlight = () => {
  return (
    <section className="w-full px-[17px] lg:px-[80px]">
      <div className="w-full h-[1px] bg-[#CCCCCC] my-[100px] mdmx:my-[75px] xsmmx:my-[60px]" />
      <h4 className="text-[#333333] text-[38px] md:text-[48px] text-left font-barloNew font-semibold pb-[30px] md:pb-[50px]">
        Course Highlight
      </h4>
      <div className="flex flex-col gap-y-[50px]">
        {courseHighlights.map((item) => {
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

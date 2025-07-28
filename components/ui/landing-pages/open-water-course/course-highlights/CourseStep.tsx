import React from 'react';

import Image from 'next/image';

interface CourseStepProps {
  step: CourseStepType;
  index: number;
}

const CourseStep = ({ step, index }: CourseStepProps) => {
  const { imageAlt, imageSrc, tagline, heading, descriptions, list } = step;

  return (
    <div className="grid grid-cols-3">
      <div>
        <div className="flex items-center gap-4">
          <div className="bg-[#333333] font-kalnia flex flex-col justify-center items-center py-7 px-3 w-14 h-14 text-white">
            <span>Step</span>
            <span>0{index + 1}</span>
          </div>

          <h3 className="text-2xl font-normal capitalize font-kalnia">
            {tagline}
          </h3>
        </div>
      </div>

      <div className="flex col-span-2 gap-5">
        <div className="w-[250px] h-[160px] relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover w-full h-full bg-center bg-no-repeat"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-normal font-kalnia">{heading}</h4>

          <div className="border-b border-b-[#cccccc] my-3" />

          <p className="mb-5 text-base">{descriptions[0]}</p>

          <ul>
            {list?.map((item) => (
              <li key={item.name} className="text-base">
                <span className="font-semibold">{item.name}</span>: {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseStep;

export type CourseStepType = {
  imageSrc: string;
  imageAlt: string;
  tagline: string;
  heading: string;
  descriptions?: string[];
  list?: { name: string; value: string }[];
};

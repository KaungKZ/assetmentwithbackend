import React from "react";
import { Icon } from "@iconify/react";
import { faqData } from "../data";
import Accordion from "../../../accordion/Accordion";
import Link from "next/link";

const FAQ = () => {
  return (
    <section className="px-[40px] lg:px-[80px] w-full h-full py-[100px] hidden md:block">
      <div className="flex justify-between items-start gap-x-[30px]">
        <div>
          <h4 className="text-[#333333] text-[36px] font-medium font-barloNew leading-[45px]">
            Frequently <br />
            Asked Questions
          </h4>
          <div className="flex pt-[25px] pb-[10px] gap-x-[15px]">
            <Icon
              icon="iconoir:chat-bubble"
              width="24"
              height="24"
              className="scale-x-[-1]"
            />
            <p className="text-[#666666] text-[20px] font-normal font-interNew">
              Still need help?{" "}
            </p>
          </div>
          <p className="text-[#666666] text-[20px] font-normal font-interNew">
            Our customer{" "}
            <Link
              href={"/contact"}
              className="text-[#1889B8] font-bold cursor-pointer"
            >
              support team{" "}
            </Link>{" "}
            <br />
            is here to assist you!
          </p>
        </div>
        <div className="max-w-[850px] w-full">
          {faqData.map((item) => {
            return (
              <Accordion
                key={item.id}
                title={item.question}
                desc={item.answer}
                defaultOpen={item.id === 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

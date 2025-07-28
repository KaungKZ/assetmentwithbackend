import React, { useState } from "react";
import Button from "../../../buttons/Button";
import ScubaImageMarquee from "../ui/ScubaImageMarquee";
import { ScubaserviceImgList } from "../data";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";

const DivingExp = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div className="px-[20px] md:px-[80px]">
      <div className="flex flex-col md:flex-row justify-between items-start pt-[80px] md:pt-[100px]">
        <div>
          <h4 className="text-[34px] md:text-[48px] text-[#333333] font-semibold font-barloNew leading-[45px] md:leading-[55px] uppercase">
            All-Inclusive Try Scuba <br className="hidden md:block" /> Diving
            Experience
          </h4>
          <p className="text-[18px] md:text-[24px] text-[#333333] font-normal font-interNew py-[20px] md:pt-[17px]">
            Get more than just a dive—get the full experience.
          </p>
        </div>
        <div className="space-y-[14px]">
          <p className="text-[14px] md:text-[20px] text-[#333333] font-interNew font-normal flex gap-x-[10px]">
            <span className="text-[#1889B8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                >
                  <path d="M20 17c0-4 2-7 2-13.5c0-.3-.2-.5-.5-.5C19 3 17 4 17 4s-2-1-4.5-1h-1C9 3 7 4 7 4S5 3 2.5 3c-.3 0-.5.2-.5.5C2 10 4 13 4 17"></path>
                  <path d="M12 3v.5C12 10 10 13 10 17"></path>
                  <rect width={6} height={7} x={4} y={14} rx={3}></rect>
                  <path d="M12 3.5C12 10 14 13 14 17"></path>
                  <rect width={6} height={7} x={14} y={14} rx={3}></rect>
                  <path d="M7 4v6m10-6v6"></path>
                </g>
              </svg>{" "}
            </span>
            All gear provided
          </p>
          <p className="text-[14px] md:text-[20px] text-[#333333] font-interNew font-normal flex items-center gap-x-[8px] -ml-[3px]">
            <span className="text-[#1889B8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.189 22.376v13.701c0 1.128.938 2.042 2.096 2.042h27.773c1.158 0 2.096-.914 2.096-2.042v-15.48c0-1.128-.938-2.042-2.096-2.042H17.063"
                  stroke-width="2"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m11.354 18.316l-5.508 6.409l6.749-3.65l.893 8.22l2.63-7.539l4.616 2.78l-3.672-5.984l6.302-3.676l-7.742 2.12l-.694-7.115l-2.085 6.786l-6.997-2.875zm22.186 7.092h8.31m-20.51 2.929a3.333 3.333 0 0 0 6.666.004v-.004a3.333 3.333 0 1 0-6.666 0"
                  stroke-width="2"
                />
                <circle
                  cx="24.673"
                  cy="28.337"
                  r="6.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>{" "}
            </span>
            Free underwater photography
          </p>
          <p className="text-[14px] md:text-[20px] text-[#333333] font-interNew font-normal flex gap-x-[10px] pb-[20px]">
            <span className="text-[#1889B8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6.5 5H15c1.886 0 2.828 0 3.414.586S19 7.114 19 9v3c0 1.886 0 2.828-.586 3.414S16.886 16 15 16h-3c-1.886 0-2.828 0-3.414-.586S8 13.886 8 12V8M6.5 5A1.5 1.5 0 0 0 5 6.5V8h3M6.5 5A1.5 1.5 0 0 1 8 6.5V8m9 8c0 1.886 0 2.828-.586 3.414S14.886 20 13 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16v-5m17-7v1c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 8 19.932 8 19 8M2 4v1c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 8 4.068 8 5 8"
                  color="currentColor"
                />
              </svg>{" "}
            </span>
            Towels, slush, popcorn, and coffee included
          </p>
          <Button
            href="#package"
            width="normal"
            className="bg-[#1889B8] border-[1px] text-white hover:opacity-80 transition-all duration-300 w-fit"
          >
            Book Your Dive Now
          </Button>
        </div>
      </div>
      {/* <div className="flex justify-center items-center gap-x-[16px] w-full h-[350px] md:h-[400px] overflow-x-hidden">
        {ScubaserviceImgList.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.image}
              alt=""
              className="w-[250px] h-[170px] md:w-[400px] md:h-[260px] object-cover rounded-lg"
            />
          );
        })}
      </div> */}

      <div className="pb-[80px] md:pb-[100px] overflow-x-hidden space-y-[15px] pt-[50px]">
        <ScubaImageMarquee
          setIndex={setIndex}
          ScubaserviceImgList={ScubaserviceImgList.slice(0, 6)}
          direction="left"
          setOpen={setOpen}
        />
        <ScubaImageMarquee
          setIndex={setIndex}
          ScubaserviceImgList={ScubaserviceImgList.slice(7, 14)}
          direction="right"
          setOpen={setOpen}
        />
        {/* <ScubaImageCarousel /> */}
      </div>
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={ScubaserviceImgList}
        plugins={[Zoom, Fullscreen, Slideshow]}
      />
    </div>
  );
};

export default DivingExp;

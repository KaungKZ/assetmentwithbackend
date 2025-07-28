import React, { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";
const VIdeoPLayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full h-full relative">
      {isPlaying ? (
        <div
          onClick={() => togglePlay()}
          className="w-full h-full absolute z-10"
        />
      ) : (
        <></>
      )}
      <div />
      <video
        className="w-full h-full object-cover rounded-3xl"
        poster={"/images/landing-pages/padi-open-water-course/thumbnail.webp"}
        ref={videoRef}
        loop
      >
        <source src="/video/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        onClick={() => togglePlay()}
        className={`bg-white p-[9px] md:p-[14px] rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer ${
          isPlaying ? "hidden" : "block"
        }`}
      >
        <IoPlay
          color="#333333"
          className="md:pl-[4px] pl-[3px] text-[25px] md:text-[40px]"
        />
      </div>
    </div>
  );
};

export default VIdeoPLayer;

import React, { useEffect, useState } from "react";

interface props {
  targetDate: string;
  text?: string;
}

const Countdown = ({ targetDate, text }: props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, targetDate]);
  if (!mounted) return null;

  const formatNumber = (num: number) => String(num).padStart(2, "0");
  return (
    <div className="flex flex-col justify-center items-center md:items-end gap-y-[15px] pt-[50px] md:pt-0">
      {text ? (
        <h4 className="text-[17px] md:text-[28px] text-[#333333] font-interNew font-medium italic">
          {text}
        </h4>
      ) : (
        <h4 className="text-[17px] md:text-[28px] text-[#333333] font-interNew font-medium italic">
          Get a free certified boat trip worth{" "}
          <span className="text-[#FF6659]">699 AED!</span>
        </h4>
      )}

      <div className={`flex border border-[#333333] pb-[19px] bg-[#333333]`}>
        <div className="flex flex-col justify-center items-center px-[15px] border-r border-[#666666] w-[90px] md:w-[120px]">
          <h4
            className={`text-[65px] md:text-[80px] text-[#ffffff] font-smoothsan font-normal`}
          >
            {formatNumber(timeLeft.days)}
            {/* {timeLeft.days} */}
          </h4>
          <p className="text-[8px] md:text-[12.5px] text-[#ffffff] font-interNew font-normal -mt-5">
            DAYS
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-[15px] border-r border-[#666666] w-[90px] md:w-[120px]">
          <h4
            className={`text-[65px] md:text-[80px] text-[#ffffff] font-smoothsan font-normal`}
          >
            {formatNumber(timeLeft.hours)}
            {/* {timeLeft.hours} */}
          </h4>
          <p className="text-[8px] md:text-[12.5px] text-[#ffffff] font-interNew font-normal -mt-5">
            HOURS
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-[15px] border-r border-[#666666] w-[90px] md:w-[120px]">
          <h4
            className={`text-[65px] md:text-[80px] text-[#ffffff] font-smoothsan font-normal`}
          >
            {formatNumber(timeLeft.minutes)}
            {/* {timeLeft.minutes} */}
          </h4>
          <p className="text-[8px] md:text-[12.5px] text-[#ffffff] font-interNew font-normal -mt-5">
            MINUTES
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-[15px] w-[90px] md:w-[120px]">
          <h4
            className={`text-[65px] md:text-[80px] text-[#ffffff] font-smoothsan font-normal`}
          >
            {formatNumber(timeLeft.seconds)}
            {/* {timeLeft.seconds} */}
          </h4>
          <p className="text-[8px] md:text-[12.5px] text-[#ffffff] font-interNew font-normal -mt-5">
            SECONDS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

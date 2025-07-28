/* eslint-disable @next/next/no-img-element */
import { HiArrowPath } from 'react-icons/hi2';
import { BiCalendar, BiCheckCircle, BiWrench } from 'react-icons/bi';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { logTypes } from '../../data/data';
import { getAssetsUrl } from '../../../../../../lib/func/image';

export const getColorForLogType = (logType) => {
  if (logType === logTypes.RENT.type) {
    return 'bg-yellow-500';
  } else if (
    logType === logTypes.TANK_REFILL.type ||
    logType === logTypes.TANK_REFILL_DETAIL.type ||
    logType === logTypes.WALLET.type
  ) {
    return 'bg-gray-100';
  } else if (logType === logTypes.MAINTENANCE.type) {
    return 'bg-green-600';
  } else if (logType === logTypes.BOOKING.type) {
    return 'bg-blue-800';
  } else if (logType === logTypes.COURSE.type) {
    return 'bg-blue-400';
  } else {
    return 'bg-blue-500';
  }
};

export const getIconForLogType = (logType, title) => {
  if (logType === logTypes.RENT.type) {
    return <HiArrowPath className="w-5 h-5 text-white" aria-hidden="true" />;
  } else if (
    logType === logTypes.TANK_REFILL.type ||
    logType === logTypes.TANK_REFILL_DETAIL.type
  ) {
    if (title.includes('nitrox')) {
      return (
        <span className="w-7 h-7">
          <img
            alt="tank"
            src={getAssetsUrl(
              `/svgs/icons/nitrox-tank-${
                title.includes('Added') ? 'plus' : 'minus'
              }.svg`
            )}
          />
        </span>
      );
    } else {
      return (
        <span className="w-7 h-7">
          <img
            alt="tank"
            src={`/svgs/icons/air-tank-${
              title.includes('Added') ? 'plus' : 'minus'
            }.svg`}
          />
        </span>
      );
    }
  } else if (logType === logTypes.WALLET.type) {
    return (
      <span className="block w-7 h-7 pl-0.5">
        <img
          alt="tank"
          src={`/svgs/icons/${
            title.includes('Spent') ? 'deduct' : 'topup'
          }.svg`}
        />
      </span>
    );
  } else if (logType === logTypes.MAINTENANCE.type) {
    return <BiWrench className="w-4 h-4 text-white" aria-hidden="true" />;
  } else if (logType === logTypes.BOOKING.type) {
    return <BiCalendar className="w-4 h-4 text-white" aria-hidden="true" />;
  } else if (logType === logTypes.COURSE.type) {
    return (
      <MdOutlinePlayLesson className="w-4 h-4 text-white" aria-hidden="true" />
    );
  } else {
    return <BiCheckCircle className="w-5 h-5 text-white" aria-hidden="true" />;
  }
};

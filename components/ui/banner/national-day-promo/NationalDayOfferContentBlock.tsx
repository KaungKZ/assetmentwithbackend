import React from 'react';
import useCountdownTimer from '../../../../lib/hooks/useCountdown';

import { Lora } from '@next/font/google';
import Link from 'next/link';

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const NationalDayOfferContentBlock = () => {
  const expiredDate = new Date('2023-12-04 11:59');

  const { days, hours, minutes, seconds } = useCountdownTimer(expiredDate);

  return (
    <div>
      <h2 className="flex items-center justify-center gap-1 uppercase">
        <span>🇦🇪</span>
        <span className="text-[16px] font-bold">
          UAE National Day <span className="text-red-700">Promotion</span>
        </span>
      </h2>

      <p className="my-1">
        <span className="py-1 text-sm font-bold text-red-600 uppercase border-b border-red-600">
          <span className="font-normal text-black">Up To </span> 38%
          <span className="font-normal text-black"> Off</span>
        </span>
      </p>

      <p className={`py-2 text-sm text-gray-800 ${lora.className}`}>
        {days} D | {hours} Hrs | {minutes} Mins | {seconds} Secs Remaining
      </p>

      <Link
        href="/landing-pages/try-scuba-diving/national-day"
        className="px-2 py-1 text-xs text-red-600 uppercase border border-red-600 rounded"
      >
        Explore Now
      </Link>
    </div>
  );
};

export default NationalDayOfferContentBlock;

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import useWidth from '../../../../lib/hooks/useWidth';
import useHeight from '../../../../lib/hooks/useHeight';
import NationalDayOfferContentBlock from './NationalDayOfferContentBlock';

const NationalDayOfferBanner = ({ isScrolled }) => {
  const router = useRouter();
  // Check Guest Layout & Home Page Hero when any changes here.
  // And ui/template/courses/index.js

  const urls = [
    '/discover-scuba-diving/try-dive/aquafun',
    '/discover-scuba-diving/try-dive/dhow-cruise',
    '/discover-scuba-diving/try-dive/basic',
    '/discover-scuba-diving/try-dive/packages',
  ];

  const includedUrls =
    urls.includes(router.pathname) || router.pathname === '/';

  const { width } = useWidth();
  const { height } = useHeight();

  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={twMerge(
        'h-[150px] text-center md:hidden md:h-0 px-8 py-4 bg-white duration-300',
        twMerge(isScrolled || !includedUrls ? 'hidden' : 'block')
      )}
    >
      <Confetti
        width={width <= 450 ? width : 450}
        height={height}
        recycle={confettiActive}
        numberOfPieces={500}
      />

      <NationalDayOfferContentBlock />
    </div>
  );
};

export default NationalDayOfferBanner;

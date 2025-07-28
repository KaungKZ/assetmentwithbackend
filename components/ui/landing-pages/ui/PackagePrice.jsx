import React, { useCallback } from 'react';
import AnimatedText from '../../animation/text/AnimatedText';
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  weight: ['500', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const PackagePrice = ({ price, promoPrice }) => {
  const calculatePercentage = useCallback(() => {
    if (promoPrice && promoPrice > 0) {
      const percent = ((price - promoPrice) / price) * 100;

      return Math.floor(percent);
    }
  }, [price, promoPrice]);

  return (
    <AnimatedText tag="div" className={`my-4 ${nunito.className}`}>
      {promoPrice ? (
        <div className="text-gray-400 hello-div">
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <div className="absolute left-0 right-0 flex justify-center top-4">
                <div className="border-b border-gray-500 w-[130px] -rotate-[4deg]"></div>
              </div>
              <span className={`${nunito.className} text-xs`}>AED </span>
              <span className={`text-2xl font-extrabold ${nunito.className}`}>
                {price}
              </span>
              <span className={`text-base ${nunito.className}`}> / person</span>
            </div>

            <div className="px-2 py-1 bg-red-700">
              <p className="text-[10px] text-white">
                {calculatePercentage()}% Off
              </p>
            </div>
          </div>

          <div className="text-red-700">
            <span className={`${nunito.className}`}>AED </span>
            <span className={`text-5xl font-extrabold ${nunito.className}`}>
              {promoPrice}
            </span>
            <span className={`text-xl ${nunito.className}`}> / person</span>
          </div>
        </div>
      ) : (
        <div className="text-red-700">
          <span className={`${nunito.className}`}>AED </span>
          <span className={`text-5xl font-extrabold ${nunito.className}`}>
            {price}
          </span>
          <span className={`text-xl ${nunito.className}`}> / person</span>
        </div>
      )}
    </AnimatedText>
  );
};

export default PackagePrice;

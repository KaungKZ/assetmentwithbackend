/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { ubuntu } from '../../../../lib/func/fonts';
import AffiliateRegistrationModal from './modals/AffiliateRegistrationModal';
import { twMerge } from 'tailwind-merge';

const AffiliateBanner = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative h-[350px]">
      <img
        src="/images/banner-affiliate.png"
        alt="Affiliate Banner - Bermuda"
        className="object-cover w-full h-full rounded-lg"
      />

      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <p className={`text-white mb-3 text-sm ${ubuntu.className}`}>
              Earn your commision for every recommendation
            </p>
            <h1 className={`text-white text-4xl ${ubuntu.className}`}>
              Recommend Us, Earn Commisions!
            </h1>
          </div>
          <button
            className={twMerge(
              'px-5 py-2 text-white hover:text-gray-800 hover:bg-white duration-200 border border-white rounded-lg',
              ubuntu.className
            )}
            onClick={() => setOpen(true)}
          >
            Register Now
          </button>
        </div>
      </div>

      <AffiliateRegistrationModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AffiliateBanner;

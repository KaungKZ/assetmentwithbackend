import React from 'react';

import Image from 'next/image';
import { getAssetsUrl } from '../../../../lib/func/image';
import LinkButton from '../../../layouts/others/LinkButton';

const Hero = () => {
  return (
    <section className="h-screen">
      <Image
        src="/images/landing-pages/open-water-course/hero-image.webp"
        alt="Open Water Course Landing Page Hero"
        fill
      />

      <div className="absolute inset-0 h-full bg-black/30">
        <div className="container relative h-full">
          <div className="flex justify-center py-5">
            <Image
              src={getAssetsUrl('/images/logo-white.png')}
              alt="Bermuda Logo"
              width={86}
              height={64}
            />
          </div>

          <div className="flex flex-col gap-4 justify-center h-[calc(100%-204px)]">
            <h1 className="text-6xl font-normal text-white font-kalnia">
              PADI Open Water Course
            </h1>

            <p className="max-w-xl text-xl font-light text-white">
              Start Your Scuba Diving Journey with Bermuda Diving Center&apos;s
              PADI Open Water License
            </p>

            <LinkButton href="/reservation" wrapperClassName="pt-8">
              Enroll Now
            </LinkButton>
          </div>

          <div className="absolute right-0 space-y-6 bottom-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-normal text-white font-kalnia">
                Limited-Time Offer!
              </h2>
              <p className="font-light text-white uppercase">
                Enjoy an exclusive Offer before the offer expires!
              </p>
            </div>

            <div className="flex justify-around font-normal border border-white/50 bg-white/20">
              <div className="py-4 px-[18px] flex justify-center flex-col items-center">
                <p className="text-[56px] font-kalnia text-white">120</p>
                <span className="text-sm font-light text-white">DAYS</span>
              </div>
              <div className="w-[1px] my-4 bg-white/50"></div>
              <div className="py-4 px-[18px] flex justify-center flex-col items-center">
                <p className="text-[56px] font-kalnia text-white">09</p>
                <span className="text-sm font-light text-white">HOURS</span>
              </div>
              <div className="w-[1px] my-4 bg-white/50"></div>
              <div className="py-4 px-[18px] flex justify-center flex-col items-center">
                <p className="text-[56px] font-kalnia text-white">45</p>
                <span className="text-sm font-light text-white">MINUTES</span>
              </div>
              <div className="w-[1px] my-4 bg-white/50"></div>
              <div className="py-4 px-[18px] flex justify-center flex-col items-center">
                <p className="text-[56px] font-kalnia text-white">20</p>
                <span className="text-sm font-light text-white">SECONDS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

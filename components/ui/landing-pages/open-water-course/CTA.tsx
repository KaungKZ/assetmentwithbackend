import React from 'react';
import { getAssetsUrl } from '../../../../lib/func/image';
import VideoPlayer from '../utils/VideoPlayer';
import LinkButton from '../../../layouts/others/LinkButton';

const CTA = () => {
  return (
    <section className="container mt-16">
      <div className="flex items-end justify-between pb-10">
        <h2 className="text-6xl font-normal leading-[78px] font-kalnia lg:max-w-lg">
          PADI Open Water Course
        </h2>
        <p className="lg:max-w-[560px] text-black text-[32px]">
          Discover the Ocean’s Wonders – Open Water Scuba Diving Course
        </p>
      </div>

      <div className="border-b border-b-[#cccccc] mb-28" />

      <div className="mb-24 space-y-12">
        <VideoPlayer
          src={getAssetsUrl('/images/landing-pages/scuba-diving.mp4')}
        />

        <div className="lg:max-w-[816px] text-center mx-auto space-y-[30px]">
          <h3 className="text-[40px] font-kalnia font-normal max-w-[619px] mx-auto">
            Join 60,000 Certified Divers & 1,500 Young Explorers
          </h3>

          <p>
            Experience the thrill of scuba diving with our Open Water Diver
            Course, designed for beginners eager to explore the beauty of the
            underwater world. Gain internationally recognized certification and
            embark on unforgettable diving adventures.
          </p>

          <LinkButton
            href="/reservation"
            className="font-normal bg-[#1889b8] hover:bg-primary"
          >
            Enroll Now
          </LinkButton>
        </div>
      </div>

      <div className="border-b border-b-[#cccccc]" />
    </section>
  );
};

export default CTA;

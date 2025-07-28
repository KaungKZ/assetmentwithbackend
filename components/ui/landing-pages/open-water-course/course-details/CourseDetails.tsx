import React from 'react';

import { TbScubaMask } from 'react-icons/tb';
import { includes, wants } from '../data';

const CourseDetails = () => {
  return (
    <section>
      <div className="h-[653px] bg-[url('/images/landing-pages/open-water-course/course-details.webp')] bg-cover bg-center bg-no-repeat w-full z-0" />

      <div className="container z-20 grid grid-cols-3 p-12 bg-white pb-28 -mt-28">
        <div className="col-span-2 space-y-8">
          <h2 className="text-4xl font-normal font-kalnia">
            Take This Course If You Want To:
          </h2>

          <div className="space-y-6">
            {wants.map((item) => (
              <div key={item.title}>
                <div className="flex gap-2.5 items-center">
                  <TbScubaMask className="text-primary" />
                  <h2 className="text-base font-normal">{item.title}</h2>
                </div>
                <div className="text-base">{item.value}</div>
              </div>
            ))}
          </div>

          <h2 className="pt-2 text-4xl font-normal font-kalnia">
            Package Inclusions:
          </h2>

          <div className="space-y-3.5">
            {includes.map((item) => (
              <div key={item}>
                <div className="flex gap-2.5 items-center">
                  <TbScubaMask className="text-primary" />
                  <h2 className="text-base">{item}</h2>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl italic">
            Your adventure begins here—dive in with confidence!
          </p>
        </div>

        <div className='bg-[url("/images/landing-pages/open-water-course/package-includes.webp")] bg-no-repeat bg-center object-cover'></div>
      </div>

      <div className="border-b border-b-[#cccccc] mb-20" />
    </section>
  );
};

export default CourseDetails;

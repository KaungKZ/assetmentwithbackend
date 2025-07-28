import React from 'react';

const WhyUs = () => {
  return (
    <section className="container pb-20">
      <div className="flex gap-7">
        <div className="flex-1 space-y-6">
          <h2 className="text-[40px] font-kalnia font-normal mr-4">
            Why Choose Bermuda Scuba Diving Center?
          </h2>
          <p className="text-xl">
            Our team is made up of highly trained and certified professionals
            with in-depth knowledge of scuba diving.
          </p>
          <p></p>
        </div>
        <div className="flex flex-1 gap-6">
          <div className='bg-[url("/images/landing-pages/open-water-course/course-details.webp")] bg-no-repeat bg-center bg-cover w-full'></div>
          <div className='bg-[url("/images/landing-pages/open-water-course/course-details.webp")] bg-no-repeat bg-center bg-cover w-full'></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

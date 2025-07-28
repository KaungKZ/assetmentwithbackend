import React from 'react';
import Hero from './Hero';
import Partners from '../../pages/home/partners';
import CTA from './CTA';
import CourseHighlights from './course-highlights/CourseHighlights';
import CourseDetails from './course-details/CourseDetails';
import TypedFeatured from '../../internals/sections/featured/TypedFeatured';
import MoreInfo from '../../templates/courses/parts/MoreInfo';
import Testimonials from '../../pages/home/testimonials';
import Link from 'next/link';
import Button from '../../../layouts/others/Button';
import WhyUs from './why-us/WhyUs';

const OpenWaterCourse = ({ google, content }) => {
  return (
    <React.Fragment>
      <Hero />

      <Partners
        hasHeading={false}
        hasGrayscale={false}
        slidesPerView={5}
        wrapperClassName="pt-12 pb-6 select-none md:pt-4 md:pb-4"
      />

      <CTA />

      <CourseHighlights />

      <CourseDetails />

      <WhyUs />

      <TypedFeatured
        imgUrl={content.featured?.image?.src || null}
        imgAlt={content.featured?.image?.alt || null}
        button={
          <Link href={content.featured.button.href}>
            <Button className="font-normal bg-gray-800 border-0 hover:bg-gray-600">
              {content.featured.button.text}
            </Button>
          </Link>
        }
        opposite={
          <Link href={content.featured.opposite.href}>
            <Button className="font-normal text-gray-800 bg-white border-0 hover:bg-white/90">
              {content.featured.opposite.text}
            </Button>
          </Link>
        }
      />

      <div className="py-5" />

      <MoreInfo
        heading={content.moreInfo.heading}
        items={content.moreInfo.items}
        description={''}
        wrapperClassName="container"
      />

      <div className="border-b border-b-[#cccccc] my-28" />

      <Testimonials data={google} />
    </React.Fragment>
  );
};

export default OpenWaterCourse;

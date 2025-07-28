/* eslint-disable @next/next/no-img-element */

import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper';
import TestiCard from './TestiCard';
import { affiliateTestis } from './data';

const AffiliateTestimonials = () => {
  return (
    <div className="h-[350px] mt-20">
      <Swiper
        slidesPerView={1}
        // spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        grabCursor={true}
        modules={[Autoplay, Navigation]}
        className="h-full rounded-lg affiliate-swiper"
      >
        {affiliateTestis.map((testi, i) => (
          <SwiperSlide key={i} className="relative">
            <TestiCard
              name={testi.name}
              description={testi.description}
              imgSrc={testi.imgSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AffiliateTestimonials;

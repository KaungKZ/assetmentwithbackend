// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper';
import { partnerData } from './data';
import useWidth from '../../../../../lib/hooks/useWidth';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const Partners = ({
  hasHeading = true,
  hasGrayscale = true,
  slidesPerView = 6,
  wrapperClassName = '',
}) => {
  const { width } = useWidth();

  return (
    <section
      className={twMerge(
        'container pt-12 pb-6 select-none md:pt-16 md:pb-14',
        wrapperClassName
      )}
    >
      {hasHeading && (
        <h2 className="mb-8 text-xl text-center text-bgray">
          Our Alliance Partnerships
        </h2>
      )}

      <Swiper
        slidesPerView={width < 450 ? 2 : width < 768 ? 3 : slidesPerView}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay]}
      >
        {partnerData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="h-[150px] flex items-center justify-center">
              <Image
                src={data.image_url}
                alt={data.title}
                width={150}
                height={150}
                className={twMerge(
                  'w-auto h-auto max-w-full',
                  hasGrayscale ? 'grayscale hover:grayscale-0' : ''
                )}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;

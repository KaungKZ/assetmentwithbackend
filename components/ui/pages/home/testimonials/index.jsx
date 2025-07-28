import { SwiperSlide, Swiper } from 'swiper/react';
import useWidth from '../../../../../lib/hooks/useWidth';
import Card from '../card/testimonial';
import { testimonialsData } from './data';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import GoogleReviews from './GoogleReviews';

const Testimonials = ({ data }) => {
  const { width } = useWidth();
  const [reviews, setReviews] = useState(testimonialsData);

  useEffect(() => {
    if (reviews.length <= testimonialsData.length) {
      setReviews((revs) =>
        [...revs, ...data.reviews].sort(() => Math.random() - 0.5)
      );
    }
  }, [data.reviews, reviews.length]);
  // console.log(data);

  return (
    <div className="container mt-14 mb-14 md:mt-16 md:mb-20">
      <div className="flex flex-col items-center justify-between gap-5 mb-10 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            <span className="text-bermuda-200">What</span> Our Customers Say
          </h2>
          <p className="mt-3">Hear from those who experienced the adventure</p>
        </div>

        <GoogleReviews data={data} />
      </div>

      <Swiper
        slidesPerView={width < 450 ? 1 : width < 768 ? 2 : 4}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        grabCursor={true}
        modules={[Autoplay, Navigation]}
      >
        {reviews.map((data, index) => (
          <SwiperSlide key={index}>
            <Card data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

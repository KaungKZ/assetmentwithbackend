import PackageCard from './PackageCard';

import { Lora, Nunito } from '@next/font/google';
import AnimatedText from '../../../animation/text/AnimatedText';
import { useEffect, useState } from 'react';
import axios from '../../../../../lib/axios';
import { promoDivePackages } from './data';

const lora = Lora({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const Packages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: packages } = await axios.get(
        `/api/web/landing-pages/packages`
      );

      const newData = packages.data.map((item) => ({
        ...item,
        ...promoDivePackages.find((p) => p.id === item.id),
      }));

      const sortedData = newData.sort((a, b) => a.order - b.order);

      setData(sortedData);
    };

    fetchData();
  }, []);

  return (
    <section id="packages" className="px-8 pb-16 pt-14">
      <div>
        <AnimatedText
          tag="h2"
          className={`text-2xl font-bold leading-9 ${lora.className}`}
        >
          Try Scuba Diving
        </AnimatedText>
        <AnimatedText
          tag="p"
          className={`mt-4 text-sm font-bold text-red-600 ${nunito.className}`}
        >
          NO SWIMMING SKILLS REQUIRED
        </AnimatedText>

        <div className={`mt-4 flex flex-col gap-2.5`}>
          <AnimatedText tag="p" className={`${nunito.className}`}>
            Welcome to Dubai&apos;s premier scuba diving center! Dive into a
            world of adventure with us. We pride ourselves on offering top-notch
            services, luxurious facilities, and unbeatable scuba packages.
            Whether you&apos;re a beginner or just looking for a unique
            experience in Dubai, try scuba diving.
          </AnimatedText>
          <AnimatedText tag="p" className={`${nunito.className}`}>
            Anyone above 10 years old can try scuba diving and no swimming
            skills required!
          </AnimatedText>

          <AnimatedText
            tag="p"
            className={`${nunito.className} font-bold text-black`}
          >
            1 Beach Dive (8 meters)
          </AnimatedText>

          <AnimatedText tag="div">
            <p className={`${nunito.className} font-bold my-2 text-black`}>
              Everyday at
            </p>

            <ul
              className={`flex flex-col gap-1 ml-5 list-disc ${nunito.className}`}
            >
              <li>9:00 AM to 12:00 PM</li>
              <li>12:00 PM to 3:00 PM</li>
              <li>3:00 PM to 6:00 PM</li>
            </ul>
          </AnimatedText>

          <AnimatedText
            tag="p"
            className={`mt-3 ${nunito.className} text-black`}
          >
            *Minimum age 10 years old
          </AnimatedText>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10 text-center">
        {data.length > 0
          ? data.map((item) => (
              <PackageCard
                key={item.id}
                id={item.id}
                title_1={item.title_1}
                title_2={item.title_2}
                promo
                price={item.price}
                promoPrice={item.promoPrice}
                description={item.description}
                tagline={item.tagline}
                img={item.thumbnail}
                learnMoreLink={item.learnMoreLink}
                trackingIds={item.trackingIds}
                hightlightOnImage={item.hightlightOnImage}
                related={item.related}
              />
            ))
          : null}
      </div>
    </section>
  );
};

export default Packages;

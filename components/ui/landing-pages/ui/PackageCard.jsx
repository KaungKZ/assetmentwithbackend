/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import { Lora, Nunito } from '@next/font/google';
import AnimatedText from '../../animation/text/AnimatedText';
import { useState } from 'react';
import axios from '../../../../lib/axios';
import Loader from '../../Loader';
import { shuffleArray } from '../../../../lib/func/array';
import { useRouter } from 'next/router';
import { getPackageVatTotal } from '../../../../lib/func/money';
import PackagePrice from './PackagePrice';

const lora = Lora({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  weight: ['500', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const PackageCard = ({
  id,
  title_1,
  title_2,
  promo,
  price,
  promoPrice,
  description,
  tagline,
  img,
  learnMoreLink,
  trackingIds, // 'details,booknow'
  hightlightOnImage,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const bookNowHandler = async () => {
    setIsLoading(true);

    try {
      await axios.get(`/api/web/cms/courses/${id}`).then((res) => {
        const pkg = res.data.data;
        let calculatedPrice = 0;

        if (pkg.promo_price > 0) {
          calculatedPrice = pkg.promo_price;
        } else {
          calculatedPrice = pkg.price;
        }

        const packageVatTotal = getPackageVatTotal(calculatedPrice, 1);

        localStorage.setItem(
          'reservation',
          JSON.stringify({
            heading: pkg.short_name,
            id: pkg.id,
            price: price,
            promoPrice: promoPrice,
            from: pkg ? pkg.from : pkg?.type,
            noOfPeople: 1,
            addOnsTotal: 0,
            subTotal: calculatedPrice * 1 + packageVatTotal,
            packageVatTotal,
            total: calculatedPrice * 1 + packageVatTotal,
            addOns: shuffleArray(pkg?.add_ons),
            registered_from: 'public_web',
            currentStep: 1,
            paymentMethod: '',
          })
        );

        router.push(`/reservation`);
      });
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg">
      {isLoading && <Loader />}
      <div className="relative">
        <img src={img} alt={title_1} className="rounded-t-lg" />

        {hightlightOnImage && (
          <div className="absolute left-0 right-0 bottom-4">
            <AnimatedText
              tag="span"
              className={`px-2 py-1 ${nunito.className} text-sm font-bold text-red-700 bg-white rounded-lg shadow-lg`}
            >
              {hightlightOnImage}
            </AnimatedText>
          </div>
        )}
      </div>
      <div tag="div" className="px-6 pt-8">
        <AnimatedText tag="h3" className="text-[26px] font-bold font-lora">
          <span className={`block ${lora.className}`}>
            {promo && (
              <span className={`text-red-700 ${lora.className}`}>Promo </span>
            )}
            {title_1}
          </span>
          <span className={`block ${lora.className}`}>{title_2}</span>
        </AnimatedText>

        <PackagePrice price={price} promoPrice={promoPrice} />

        <AnimatedText tag="p" className={`my-4 ${nunito.className}`}>
          {description}
        </AnimatedText>
        <AnimatedText
          tag="p"
          className={`font-bold text-black ${nunito.className}`}
        >
          {tagline}
        </AnimatedText>
      </div>

      <AnimatedText tag="div" className="flex mt-7">
        <Link
          id={trackingIds?.split(',')[0]}
          href={learnMoreLink || '/'}
          className={`w-full h-full hover:text-red-600 ${nunito.className} py-3 text-sm text-red-600 border border-red-600 rounded-bl-lg`}
        >
          VIEW DETAILS
        </Link>
        <button
          id={trackingIds?.split(',')[1]}
          onClick={bookNowHandler}
          className={`w-full h-full ${nunito.className} py-3 text-sm text-white bg-red-600 border border-red-600 rounded-br-lg`}
        >
          BOOK NOW
        </button>
      </AnimatedText>
    </div>
  );
};

export default PackageCard;

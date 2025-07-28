/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Overlay from '../../Overlay';

const Banner = () => {
  return (
    <div className="relative h-[250px]">
      <img
        src="/images/pages/faqs.jpeg"
        alt="FAQs Banner - Bermuda"
        width={1080}
        height={720}
        className="object-cover w-full h-[250px]"
      />

      <Overlay opacity="bg-bermuda-500/60" />

      <div className="absolute top-0 bottom-0 left-0 right-0 h-full">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-2xl lg:text-4xl">Frequently Asked Questions</h1>

            <p className="mt-2 mb-4">
              <Link href="/">Home</Link> / FAQs
            </p>

            <p className="px-5 lg:w-[600px]">
              Labore ea esse ipsum esse consequat commodo sunt id consequat
              dolor duis. Laborum dolor reprehenderit nostrud in duis eiusmod
              ipsum sint ullamco do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

/* eslint-disable @next/next/no-img-element */
import { twMerge } from 'tailwind-merge';
import SimpleButton from '../../../buttons/SiimpleButton';

import Image from 'next/image';

const Featured = ({ imgUrl, imgAlt, button, opposite, className }) => {
  return (
    <div
      className={twMerge(
        'relative md:h-[550px] bg-bermuda-200 h-[800px]',
        className
      )}
    >
      {imgUrl && imgAlt ? (
        <img
          src={imgUrl || '/images/pages/home/ocean.png'}
          alt={imgAlt || 'Bermuda Ocean'}
          width={1280}
          height={720}
          className="object-cover w-full h-[550px]"
        />
      ) : null}
      <div className="absolute inset-0 h-full bg-gradient-to-tr from-[#3afe9e] via-[#19f4a0] to-[#3afec6]">
        <div
          className={`container flex justify-center flex-col items-center w-full sm:mt-0 h-auto md:h-full md:justify-between md:flex-row`}
        >
          {/* Texts */}
          <div className="flex order-1 mt-[90px] md:-mt-4 items-center flex-col text-gray-800 gap-y-5 md:w-[750px]">
            <Image
              src="/images/tabby-logo.png"
              width={120}
              height={150}
              alt="Tabby Logo"
            />

            <h2
              className={twMerge(
                'text-3xl lg:text-5xl text-center flex flex-col space-y-3 leading-[45px] font-bold text-gray-800 lg:leading-[60px]'
              )}
            >
              {/* {heading || 'Ipsum eu ex laborum nisi irure anim pariatur'} */}
              <span className="text-3xl lg:text-6xl">Split Your Purchase</span>
              <span className="text-3xl lg:text-6xl">Into 4 Payments.</span>
            </h2>

            <div className="text-center text-gray-600">
              No interest. No hidden fees. Debit or credit cards are accepted.
            </div>
            <div className="flex justify-center gap-4 mt-8 sm:justify-start">
              {button || <SimpleButton>Button</SimpleButton>}
              {opposite}
            </div>
          </div>

          {/* Image */}

          <div className="relative flex mt-10 justify-center overflow-hidden flex-1 lg:flex-none sm:min-w-[400px] order-2 md:mb-10 md:mt-14 md:justify-end">
            <Image
              src="/images/tabby-steps.png"
              width={496}
              height={400}
              alt="Looking at Tabby"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

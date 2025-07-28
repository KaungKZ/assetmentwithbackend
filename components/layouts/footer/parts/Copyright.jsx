/* eslint-disable @next/next/no-img-element */
import { format } from 'date-fns';
import { siteConfig } from '../../../../lib/config';
import Image from 'next/image';

const Copyright = () => {
  return (
    <div className="py-8 mt-6 border-t border-gray-200 lg:mt-16">
      <div className="container flex flex-col items-start justify-between lg:flex-row gap-y-7">
        <p className="text-base text-gray-400 xl:text-center">
          &copy; {format(new Date(), 'yyyy')} {siteConfig.site.title}. All
          rights reserved.
        </p>

        <div className="flex gap-4 text-gray-600">
          We accept{' '}
          <Image
            src={`/images/payment/accepted-payment-methods.png`}
            alt="Payment - Bermuda"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Copyright;

import { Montserrat } from '@next/font/google';
import Link from 'next/link';
import useCountdownTimer from '../../../../../../lib/hooks/useCountdown';
import { getSeparatedNumber } from '../../../../../../lib/func/utils';
import Remaining from './Remaining';
import { getMoney } from '../../../../../../lib/func/money';
import { useRouter } from 'next/router';
const mont = Montserrat({ subsets: ['latin'] });

const Promotion = ({ link, price, promoPrice, expiredAt }) => {
  const { pathname } = useRouter();

  const { days, hours, minutes, seconds, expired } =
    useCountdownTimer(expiredAt);
  const day = getSeparatedNumber(days);
  const hour = getSeparatedNumber(hours);
  const minute = getSeparatedNumber(minutes);
  const second = getSeparatedNumber(seconds);

  const isOWPage =
    pathname.includes('/open-water-course') &&
    !pathname.includes('/open-water-course-lp');

  const isDivePage = pathname.includes('/discover-scuba-diving');

  if (expired) return;

  return (
    <div className={`relative bg-gradient-to-r from-bgray-100 to-bgray-200`}>
      <div className="grid items-center grid-cols-5 gap-2">
        <div className="relative col-span-5 lg:from-transparent lg:to-transparent lg:col-span-3 order-2 lg:order-1 flex-1 h-[330px] lg:h-[360px] overflow-y-hidden lg:overflow-x-auto">
          <div className="lg:h-[1200px] lg:w-[800px] h-[800px] w-[400px] rotate-[32deg] lg:rotate-[18deg] -ml-[200px] -mt-16 bg-gradient-to-r from-[#FFDE59] to-[#FFB000]" />
          <div className="absolute flex flex-col justify-between lg:left-[140px] 2xl:left-[70px] 3xl:left-[180px] top-14 bottom-14">
            <div className="pl-5 lg:pl-0">
              <h2
                className={`lg:text-4xl text-2xl font-extrabold ${mont.className} uppercase text-bgray`}
              >
                {isDivePage ? 'Eid Al-Adha Offer!' : 'Limited Time Offer!'}
              </h2>
              {isOWPage && (
                <p className="mt-1 text-base font-medium text-red-500 md:mt-2 md:text-lg">
                  <span className="text-gray-700">
                    Get{' '}
                    <span className="underline underline-offset-2">
                      free certified boat trip
                    </span>{' '}
                    worth
                  </span>{' '}
                  <span className="font-bold">699 AED!</span>
                </p>
              )}

              <div className="mt-8">
                <p className="text-lg font-bold uppercase lg:text-[22px]">
                  <span className={`text-bgray`}>Before At</span>{' '}
                  <span className="text-red-600 line-through">
                    {getMoney(price)}
                  </span>{' '}
                  <span className="text-xs text-bgray">(+vat)</span>
                </p>
                <p className="mt-2 text-lg font-bold uppercase lg:text-2xl">
                  <span className="text-bgray">Now At</span>{' '}
                  <span className="text-4xl text-red-600 lg:text-5xl">
                    {getMoney(promoPrice)}
                  </span>{' '}
                  <span className="text-xs text-bgray">(+vat)</span>
                </p>
              </div>
            </div>

            <div className="pl-5 mt-10 lg:pl-0">
              <Link
                href={link || '/'}
                className={`px-7 hover:from-bgray-200 hover:to-bgray-100 py-4 text-base text-white uppercase rounded-full bg-gradient-to-br from-bgray-100 to-bgray-200`}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 col-span-5 mt-10 mb-10 ml-5 lg:-ml-10 lg:order-2 lg:mb-0 lg:col-span-2 lg:mt-0">
          <h3
            className={`mb-6 text-2xl font-bold text-white uppercase ${mont.className}`}
          >
            Offer expires in
          </h3>
          <div className="flex gap-4">
            <Remaining front={day.front} back={day.back} label="Days" />
            <Remaining front={hour.front} back={hour.back} label="Hours" />
            <Remaining
              front={minute.front}
              back={minute.back}
              label="Minutes"
            />
            <Remaining
              front={second.front}
              back={second.back}
              label="Seconds"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;

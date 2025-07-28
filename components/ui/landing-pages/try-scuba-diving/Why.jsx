/* eslint-disable @next/next/no-img-element */

import { Lora, Nunito } from '@next/font/google';
import AnimatedText from '../../animation/text/AnimatedText';
import { getAssetsUrl } from '../../../../lib/func/image';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Why = () => {
  return (
    <section className="bg-white">
      <div className="container px-8 pb-10 mx-auto pt-14">
        <AnimatedText
          tag="h2"
          className={`text-lg font-bold ${lora.className}`}
        >
          Why Try Scuba Diving Package?
        </AnimatedText>

        <ul className="mt-6 flex flex-col text-[15px] gap-3">
          <AnimatedText tag="li" className="flex items-start">
            <img
              src={getAssetsUrl('/images/icons/check.png')}
              alt="Custom bullet point"
              className="w-4 h-4 mt-1.5 mr-3"
            />
            <div className={`${nunito.className} text-black text-[15px]`}>
              Perfect for beginners
            </div>
          </AnimatedText>
          <AnimatedText tag="li" className="flex items-start">
            <img
              src={getAssetsUrl('/images/icons/check.png')}
              alt="Custom bullet point"
              className="w-4 h-4 mt-1.5 mr-3"
            />
            <div className={`${nunito.className} text-black text-[15px]`}>
              No swimming skills required
            </div>
          </AnimatedText>
          <AnimatedText tag="li" className="flex items-start">
            <img
              src={getAssetsUrl('/images/icons/check.png')}
              alt="Custom bullet point"
              className="w-4 h-4 mt-1.5 mr-3"
            />
            <div className={`${nunito.className} text-black text-[15px]`}>
              Dive deep into a fun and safe introduction to scuba diving.
            </div>
          </AnimatedText>
          <AnimatedText tag="li" className="flex items-start">
            <img
              src={getAssetsUrl('/images/icons/check.png')}
              alt="Custom bullet point"
              className="w-4 h-4 mt-1.5 mr-3"
            />
            <div className={`${nunito.className} text-black text-[15px]`}>
              Capture unforgettable moments with FREE photos and videos.
            </div>
          </AnimatedText>
        </ul>
      </div>

      <div className="container px-8 mx-auto pb-14">
        <AnimatedText
          tag="h2"
          className={`text-lg font-bold ${lora.className}`}
        >
          The Process In Steps
        </AnimatedText>

        <ul className="mt-6 flex flex-col text-[15px] gap-3">
          <AnimatedText tag="li" className="flex items-start">
            <img
              src={getAssetsUrl('/images/icons/briefing.png')}
              alt="briefing"
              className="h-6 mt-2 mr-3"
            />
            <div className={`text-black text-[15px]`}>
              <div className={`${lora.className} font-bold`}>
                Classroom Briefing Session (30 mins)
              </div>
              <div className={`${nunito.className}`}>
                Learn the basics of scuba diving, safety guidelines, and what to
                expect.
              </div>
            </div>
          </AnimatedText>
          <AnimatedText tag="li" className="flex items-start">
            <img
              src={getAssetsUrl('/images/icons/training.png')}
              alt="briefing"
              className="h-6 mt-2 mr-3"
            />
            <div className={`${lora.className} text-black text-[15px]`}>
              <div className={`${lora.className} font-bold`}>
                Shallow Water Training (30 mins)
              </div>
              <div className={`${nunito.className}`}>
                Get comfortable with the equipment and practice essential
                skills.
              </div>
            </div>
          </AnimatedText>
          <AnimatedText tag="li" className="flex items-start">
            <img
              src={getAssetsUrl('/images/icons/scuba.png')}
              alt="the actual dive"
              className="h-6 mt-2 mr-3"
            />
            <div className={`${lora.className} text-black text-[15px]`}>
              <div className={`${lora.className} font-bold`}>
                The Actual Dive (30-45 mins)
              </div>
              <div className={`${nunito.className}`}>
                Dive up to 8 meters (26 feet) deep and explore the vibrant
                underwater world.
              </div>
            </div>
          </AnimatedText>
        </ul>
      </div>
    </section>
  );
};

export default Why;

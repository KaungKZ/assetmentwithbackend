/* eslint-disable @next/next/no-img-element */
import { Lora, Nunito } from '@next/font/google';
import AnimatedText from '../../../animation/text/AnimatedText';
import { getAssetsUrl } from '../../../../../lib/func/image';

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

const Included = () => {
  return (
    <section className="px-8 py-14">
      <AnimatedText tag="h2" className={`text-lg font-bold ${lora.className}`}>
        What&apos;s Included:
      </AnimatedText>

      <ul className="flex flex-col gap-2 mt-8">
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            45 minutes scuba diving in the sea up-to a depth of 8 meters (26
            feet)
          </div>
        </AnimatedText>
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            30 minutes training in a well facilitated classroom.
          </div>
        </AnimatedText>
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            30 minutes practical training in the water
          </div>
        </AnimatedText>
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            Free Pictures and videos underwater.
          </div>
        </AnimatedText>
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            Underwater Fish Interaction.
          </div>
        </AnimatedText>
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            Free full Scuba equipment for use
          </div>
        </AnimatedText>
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            Free to use of towels and slippers.
          </div>
        </AnimatedText>
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            Free water, juice, coffee, slushes and pop corn.
          </div>
        </AnimatedText>
        <AnimatedText tag="li" className="flex items-start">
          <img
            src={getAssetsUrl('/images/icons/check.png')}
            alt="Custom bullet point"
            className="mr-3 w-4 h-4 mt-0.5"
          />
          <div className={`-mt-1 ${nunito.className} text-black`}>
            Certification of completion
          </div>
        </AnimatedText>
      </ul>

      <AnimatedText tag="div" className={`mt-8 ${nunito.className}`}>
        With expert guidance, top-notch facilities, and a fun, friendly
        atmosphere, you&apos;ll be experiencing how it feels like to breath
        underwater. Book your dive today!
      </AnimatedText>
    </section>
  );
};

export default Included;

import { getAssetsUrl } from '../../../../../lib/func/image';
import useWidth from '../../../../../lib/hooks/useWidth';
import CustomImage from '../../../CustomImage';
import Card from './Card';

const StatsSection = () => {
  const { width } = useWidth();

  return (
    <div className="relative w-full mb-12 md:mb-20">
      <div className="h-[700px] md:h-[380px] overflow-hidden">
        <CustomImage
          src={getAssetsUrl('/images/pages/home/stats.png')}
          alt="Bermuda Diving Center - Statistics"
          wrapperClassName="h-full"
        />
        <div className="absolute inset-0 z-10 bg-black/80"></div>

        <div className="absolute inset-0 z-20 text-white">
          <div className="container flex flex-col justify-center h-full">
            <div className="flex flex-col md:space-x-10 md:justify-between md:flex-row md:col-span-3">
              <div className="flex-1">
                <h2 className="text-2xl leading-[40px] text-white">
                  Experience and Expertise in the Industry
                </h2>

                <p className="mt-5 text-base font-thin text-white sm:text-lg">
                  With a team of highly trained and experienced instructors and
                  staff from diverse backgrounds, Bermuda Diving Center have
                  created a welcoming and inclusive community of divers from all
                  over the world.
                </p>
                {width > 768 && (
                  <p className="mt-5 text-base font-thin text-white sm:text-lg">
                    Over the years, we have certified thousands of divers and
                    helped even more to experience the thrill of diving through
                    our try dive programs.
                  </p>
                )}
              </div>
              <div className="flex mt-10 md:space-x-10 md:justify-end md:flex-1 md:w-2/3 md:mt-0">
                <div className="grid w-full grid-cols-2 gap-5 md:w-auto md:gap-10">
                  <Card heading="14,000+" tagline="Certified Divers" />
                  <Card heading="25,000+" tagline="Try Divers" />
                  <Card heading="10+" tagline="In-house Instructors" />
                  <Card heading="6,000+" tagline="Active Members" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

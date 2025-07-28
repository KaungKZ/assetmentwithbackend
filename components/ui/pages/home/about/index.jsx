import { getAssetsUrl } from '../../../../../lib/func/image';
import TwoColumnWithImage from '../../../templates/TwoColumnWithImage';
import VisionMission from './vission-mission';

const AboutSection = () => {
  return (
    <div className="container mb-12 mt-14 md:mt-20 md:mb-20">
      <TwoColumnWithImage
        image_height="md:h-[410px]"
        image_url={getAssetsUrl('/images/pages/home/center.png')}
      >
        <h2 className="text-2xl font-bold text-bgray">
          <span className="text-bermuda-200">About</span> Bermuda Diving Center
        </h2>

        <div className="mt-5 font-thin leading-7">
          <p className="mb-3">
            It all began with a bunch of friends and family, inspired by passion
            for scuba diving and seeking to share it with the world.
          </p>
          <p>
            Bermuda Diving Center was established in the beginning of 2017,
            approaching divers and non-divers community to spread the soul of
            underwater feeling and experience.
          </p>
        </div>

        <VisionMission />
      </TwoColumnWithImage>
    </div>
  );
};

export default AboutSection;

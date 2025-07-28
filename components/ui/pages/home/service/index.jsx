import { getAssetsUrl } from '../../../../../lib/func/image';
import TwoColumnWithImage from '../../../templates/TwoColumnWithImage';

const ServiceSection = () => {
  return (
    <div className="container mt-16 mb-14 md:mt-20 md:mb-20">
      <TwoColumnWithImage
        image_height="md:h-[450px]"
        image_url={getAssetsUrl('/images/pages/home/like-no-other.png')}
      >
        <h2 className="text-2xl font-bold">
          <span className="text-bermuda-200">A Service</span> Like No Other
        </h2>

        <ul className="mt-5 ml-5 font-thin list-disc">
          <li>
            Our services are offered in a new and luxurious ways with a goal of
            creating an unforgettable experience
          </li>
          <li>
            We at Bermuda celebrate our customers special occasions such as
            birthdays, anniversaries, proposals as our own.
          </li>
          <li>
            FREE of charge popcorn, slush drink, coffee and juice for all
            customers.
          </li>
          <li>
            We offer a variety of packages and customizable options to meet your
            specific needs and desires.
          </li>
          <li>
            Our team of professionals is dedicated to providing you with the
            highest level of service and ensuring your safety.
          </li>
          <li>
            With a commitment to safety and quality, our scuba diving center
            provides unparalleled access to some of the most beautiful and
            vibrant underwater ecosystems in the world, ensuring an
            unforgettable experience every time.
          </li>
        </ul>
      </TwoColumnWithImage>
    </div>
  );
};

export default ServiceSection;

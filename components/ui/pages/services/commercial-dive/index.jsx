import Link from 'next/link';
import TwoColumnWithImage from '../../../templates/TwoColumnWithImage';
import { getAssetsUrl } from '../../../../../lib/func/image';

const CommercialDiveLayout = () => {
  return (
    <div className="container py-16">
      <TwoColumnWithImage
        image_height="md:h-[450px]"
        image_url={getAssetsUrl(
          '/images/pages/services/commercial-diving/commercial-diving-1.png'
        )}
      >
        <h2 className="text-2xl font-bold">
          <span className="text-bermuda-200">Commercial Dive</span> Support
          Services
        </h2>

        <div className="mt-5 font-thin leading-7">
          <p className="mb-3">
            Our commercial diving services are designed to meet a variety of
            needs, from inspecting and cleaning ships and boats to conducting
            underwater research.
          </p>
          <p>
            We, Bermuda Diving Center, specialize in inspecting and cleaning
            ships and boats of all sizes, ensuring that they are seaworthy and
            ready for their next voyage. We also have extensive experience in
            inspecting underwater wreckage, including sunken vessels and
            aircraft, and providing recovery services for crashed boats. Our
            team is also skilled in underwater platform maintenance, ensuring
            that structures such as oil rigs and wind turbines are kept in top
            condition. In addition, we offer services for recovering lost
            objects, such as equipment or cargo, that have been lost at sea.
            Finally, our expertise in collecting underwater samples used in
            research makes us an ideal partner for scientific expeditions and
            studies.
          </p>
        </div>
      </TwoColumnWithImage>

      <div className="mt-16 mb-12 md:mb-20">
        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
          <div className="p-6 border border-gray-100 rounded shadow">
            <h3>MARINE SERVICES</h3>
            <ul className="mt-2 ml-5 font-thin list-disc">
              <li>Inspect and clean ships and boats</li>
              <li>Inspect underwater wreckage</li>
              <li>Recovery of crashed boats</li>
              <li>Underwater platform maintenance</li>
              <li>Recovering lost objects</li>
              <li>Collecting underwater samples used in research</li>
            </ul>
          </div>

          <div className="p-6 border border-gray-100 rounded shadow">
            <h3>MEDIA SERVICES</h3>
            <ul className="mt-2 ml-5 font-thin list-disc">
              <li>Planning</li>
              <li>Researching</li>
              <li>Preparing Equipment</li>
              <li>Underwater Photography and Videography</li>
            </ul>
          </div>
        </div>
      </div>

      <TwoColumnWithImage
        image_height="md:h-[400px]"
        image_url={getAssetsUrl(
          '/images/pages/services/commercial-diving/commercial-diving-2.png'
        )}
        reverse
      >
        <h2 className="text-2xl font-bold">
          <span className="text-bermuda-200">Professional Team</span> With Years
          of Experience
        </h2>

        <div className="mt-5 font-thin leading-7">
          <p className="mb-3">
            At Bermuda Diving Center, our commercial diving services are
            provided by a team of highly trained and experienced divers who are
            passionate about what they do. Our team members have undergone
            rigorous training and certification to ensure that they can handle
            any task safely and efficiently.
          </p>
          <p>
            We take pride in our team&apos;s professionalism and commitment to
            delivering high-quality services to our clients. With years of
            experience in the field, our divers are well-equipped with the
            latest tools and technologies to handle any underwater challenge.
            Whether it&apos;s a ship inspection or underwater research, our team
            is dedicated to providing reliable and efficient services while
            maintaining the highest safety standards.
          </p>
        </div>
      </TwoColumnWithImage>
    </div>
  );
};

export default CommercialDiveLayout;

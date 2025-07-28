import TwoColumnWithImage from '../../../templates/TwoColumnWithImage';

const WhyUsSection = () => {
  return (
    <div className="container pb-12 md:pb-20">
      <div>
        <TwoColumnWithImage
          image_height="md:h-[430px]"
          reverse
          image_url="/images/pages/home/why.png"
        >
          <h2 className="text-2xl font-bold">
            <span className="text-bermuda-200">Why</span> Bermuda Diving Center?
          </h2>

          <div className="mt-5 font-thin leading-7">
            <p className="mb-3">
              At Bermuda Diving Center, we combine excitement, passion, and
              comfort to create the best scuba diving experience. Our lessons
              are fun, and our exceptional dive sites in Dubai offer captivating
              marine life and shipwrecks with intriguing history. Our
              experienced instructors are dedicated to your success and provide
              personalized attention to help build your confidence.
            </p>

            <div className="flex flex-col md:space-x-10 md:flex-row">
              <ul className="ml-5 list-disc">
                <li>PADI 5 star IDC dive center</li>
                <li>Experienced instructors</li>
                <li>Flexible Sessions</li>
                <li>We make learning fun</li>
              </ul>
              <ul className="ml-5 list-disc">
                <li>PADI green star award winner </li>
                <li>Luxurious Facility</li>
                <li>Customized Journey</li>
                <li>Wide range of diving sites</li>
              </ul>
            </div>
          </div>
        </TwoColumnWithImage>
      </div>
    </div>
  );
};

export default WhyUsSection;

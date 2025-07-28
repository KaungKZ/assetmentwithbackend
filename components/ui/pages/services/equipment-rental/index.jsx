import { getAssetsUrl } from '../../../../../lib/func/image';
import TwoColumnWithImage from '../../../templates/TwoColumnWithImage';
import ItemCard from './ItemCard';

const EquipmentRentalLayout = () => {
  return (
    <div className="container py-16">
      <TwoColumnWithImage
        image_height="md:h-[340px]"
        image_url={getAssetsUrl(
          '/images/pages/services/gear-rental/equipment-rental-1.png'
        )}
      >
        <h2 className="text-2xl font-bold">
          <span className="text-bermuda-200">Why</span> Rent with Us?
        </h2>

        <div className="mt-5 font-thin leading-7">
          <p className="mb-3">
            At Bermuda Diving Center, we understand the importance of having
            reliable and high-quality scuba gear to help you dive with
            confidence and make the most of your underwater adventure.
            That&apos;s why we offer a wide range of rental gear from various
            sizes and top brands to suit your diving needs. Whether you need a
            wetsuit, BCD, regulator, fins, even dive computer or any other
            diving gear, we&apos;ve got you covered.
          </p>
          <p>
            Additionally, we provide 24-hour gear rentals and tank refilling
            services to ensure that you can enjoy uninterrupted diving
            experiences when ever you decided.
          </p>
        </div>
      </TwoColumnWithImage>

      <div className="mt-12 mb-12 text-center md:mb-20">
        <h2 className="mt-10 text-2xl font-bold md:mt-16">
          Gear Rental <span className="text-bermuda-200">Choices</span>
        </h2>

        <div className="flex flex-col justify-center mt-12 gap-y-6 md:flex-row gap-x-20">
          <ItemCard
            image_url={getAssetsUrl(
              '/images/pages/services/gear-rental/bcd.png'
            )}
            title="BCD"
            price={35}
          />

          <ItemCard
            image_url={getAssetsUrl(
              '/images/pages/services/gear-rental/regulator.png'
            )}
            title="Regulator"
            price={45}
          />

          <ItemCard
            image_url={getAssetsUrl(
              '/images/pages/services/gear-rental/tanks.png'
            )}
            title="Tank"
            price={30}
          />

          <ItemCard
            image_url={getAssetsUrl(
              '/images/pages/services/gear-rental/weight.png'
            )}
            title="Weights"
            price={30}
          />
        </div>

        <div className="flex flex-col justify-center mt-6 md:mt-12 gap-y-6 md:flex-row gap-x-20">
          <ItemCard
            image_url={getAssetsUrl(
              '/images/pages/services/gear-rental/mask.png'
            )}
            title="Mask"
            price={20}
          />

          <ItemCard
            image_url={getAssetsUrl(
              '/images/pages/services/gear-rental/wetsuit.png'
            )}
            title="Wetsuit"
            price={20}
          />

          <ItemCard
            image_url={getAssetsUrl(
              '/images/pages/services/gear-rental/torch.png'
            )}
            title="Torch"
            price={40}
          />

          <ItemCard
            image_url={getAssetsUrl(
              '/images/pages/services/gear-rental/fins.png'
            )}
            title="Fins"
            price={20}
          />
        </div>
      </div>

      <TwoColumnWithImage
        image_height="md:h-[320px]"
        image_url={getAssetsUrl(
          '/images/pages/services/gear-rental/equipment-rental-2.png'
        )}
        reverse
      >
        <h2 className="text-2xl font-bold">
          Advanced Refilling <span className="text-bermuda-200">Station</span>
        </h2>

        <div className="mt-5 font-thin leading-7">
          <p className="mb-3">
            At Bermuda Diving Center, we take pride in providing advanced and
            safe scuba tank refilling services to our customers. Our Bauer®
            compressor, made in Germany, is one of the most advanced systems in
            UAE, capable of refilling 30 tanks in just 15 minutes. This is a
            significant improvement compared to the current industry standard of
            3-5 minutes per tank.
          </p>
          <p>
            Additionally, we are the first diving center in the Middle East to
            offer 24/7 tank rental and refilling services, ensuring that our
            customers can enjoy uninterrupted diving experiences.
          </p>
        </div>
      </TwoColumnWithImage>

      {/* <div className="md:w-[700px] py-6 mx-auto text-center duration-300 border border-gray-100 rounded-lg shadow cursor-default">
        <h3 className="">
          <span className="text-red-600">*33% Discount</span> For the
          Instructors
        </h3>

        <p className="mt-2 text-sm">
          <Link
            className="text-sm text-red-600 hover:text-bermuda-200"
            href="tel:+971501194050"
          >
            Call us now
          </Link>{' '}
          and we’ll deliver it to you anytime with no extra charge!
        </p>
      </div> */}
    </div>
  );
};

export default EquipmentRentalLayout;

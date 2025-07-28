import Link from 'next/link';
import LinkButton from '../../../buttons/LinkButton';
import Featured from '../../../internals/sections/featured';
import TwoColumnWithImage from '../../../templates/TwoColumnWithImage';
import ServiceCard from './ServiceCard';
import { getAssetsUrl } from '../../../../../lib/func/image';

const EquipmentMaintenanceLayout = () => {
  return (
    <>
      <div className="container py-16">
        <TwoColumnWithImage
          image_height="md:h-[490px]"
          image_url={getAssetsUrl(
            '/images/pages/services/equipment-maintenance/1.png'
          )}
        >
          <h2 className="text-2xl font-bold">
            <span className="text-bermuda-200">Expert care</span> for your
            diving equipment
          </h2>

          <div className="mt-5 font-thin leading-7">
            <p className="mb-3">
              Proper maintenance is crucial for protecting your investment in
              dive gear as a dedicated diver. By taking care of your equipment,
              you not only prolong its lifespan, but also ensure a safe and
              enjoyable diving experience. Regular upkeep involves visually
              inspecting, thoroughly cleaning, and carefully handling each piece
              in your setup. Following the specific steps outlined in this guide
              for pre- and post-dive care can help you maintain your gear in top
              condition for your next adventure.
            </p>
            <p>
              Before your next dive trip, it is important to follow the pre-dive
              steps in this guide to ensure that your gear is safe and ready to
              use. This includes inspecting your equipment for any damage or
              wear and tear, cleaning it thoroughly to remove any salt, sand or
              other debris, and making sure everything is properly assembled and
              in good working condition. By taking these steps, you can avoid
              any potential issues while diving and have peace of mind knowing
              that your gear is functioning as it should.
            </p>
          </div>
        </TwoColumnWithImage>
      </div>

      <div className="pt-10 pb-6">
        <Featured
          smHeight="h-[950px]"
          heading="Enroll Now, Pay Later"
          description="At Bermuda Diving Center, we understand the importance of maintaining scuba diving equipment to ensure safe and enjoyable dives. To make it accessible to as many divers as possible, we are pleased to offer interest-free installment payment options for scuba diving equipment maintenance services for up to three months. This helps spread the cost of maintaining your equipment over a longer period, without any financial burden. For FAQs contact us!"
          sideImg={{
            src: getAssetsUrl(
              '/images/pages/services/equipment-maintenance/installment.png'
            ),
            alt: 'Installment Plan',
          }}
          button={
            <LinkButton uppercase href="/contact">
              Contact Us
            </LinkButton>
          }
        />
      </div>

      <div className="container">
        <div className="mb-12 md:mb-20">
          <h2 className="mt-16 text-2xl font-bold leading-10 md:text-center">
            Our <span className="text-bermuda-200">Equipment Maintenance</span>{' '}
            Services
          </h2>

          <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
            <ServiceCard
              image_url={getAssetsUrl(
                '/images/pages/services/gear-rental/regulator.png'
              )}
              title="Regulator Servicing"
              tagline="Regulators require complete servicing periodically to prevent unsafe operation while you dive"
            />
            <ServiceCard
              image_url={getAssetsUrl(
                '/images/pages/services/gear-rental/bcd.png'
              )}
              title="BCD Maintenance"
              tagline="A BCD should be maintained routinely, but the exact schedule is highly dependent on your exact make and model of BCD."
            />
            <ServiceCard
              image_url={getAssetsUrl(
                '/images/pages/services/gear-rental/tanks.png'
              )}
              title="Tank Servicing and Inspection"
              tagline="A tank (scuba cylinder) has the most stable service schedule, so it’s easy to keep an eye on it."
            />
            <ServiceCard
              image_url={getAssetsUrl(
                '/images/pages/services/gear-rental/computer.png'
              )}
              title="Computer Battery Replacement"
              tagline="Battery change, leak and pressure testing services offered for dive equipment maintenance."
            />
          </div>
        </div>

        <TwoColumnWithImage
          reverse
          image_url={getAssetsUrl(
            '/images/pages/services/equipment-maintenance/equipment-maintenance-2.png'
          )}
        >
          <h2 className="text-2xl font-bold">
            <span className="text-bermuda-200">Pre-Dive</span> Equipment Care
          </h2>

          <div className="font-thin">
            <p className="mt-5 mb-4">
              Proper maintenance of dive gear is essential for a safe and
              enjoyable diving experience. Certain components of your equipment,
              such as your regulator and BC, require annual inspection and
              service by a qualified technician. It&apos;s important to note
              that even if you haven&apos;t used your equipment, it may still
              require service, and regularly used equipment may actually need
              service less frequently.
            </p>
            <p>
              To ensure that your gear is in top-notch condition, follow the
              manufacturer&apos;s recommendations and have your equipment
              checked annually. To book a maintenance appointment for your gear,
              please contact us at{' '}
              <Link
                className="text-base text-red-600 hover:text-bermuda-200"
                href="tel:+971501194050"
              >
                +971 50 119 4050
              </Link>
              . Our qualified technicians are ready to provide the necessary
              service and repairs to keep your gear in excellent shape.
            </p>
          </div>
        </TwoColumnWithImage>
      </div>
    </>
  );
};

export default EquipmentMaintenanceLayout;

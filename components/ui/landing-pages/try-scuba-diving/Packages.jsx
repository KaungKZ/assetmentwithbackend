import PackageCard from '../ui/PackageCard';

import { Lora, Nunito } from '@next/font/google';
import AnimatedText from '../../animation/text/AnimatedText';

const lora = Lora({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const Packages = () => {
  return (
    <section id="packages" className="px-8 pb-16 pt-14">
      <div>
        <AnimatedText
          tag="h2"
          className={`text-2xl font-bold leading-9 ${lora.className}`}
        >
          Try Scuba Diving
        </AnimatedText>
        <AnimatedText
          tag="p"
          className={`mt-4 text-sm font-bold text-red-600 ${nunito.className}`}
        >
          NO SWIMMING SKILLS REQUIRED
        </AnimatedText>

        <div className={`mt-4 flex flex-col gap-2.5`}>
          <AnimatedText tag="p" className={`${nunito.className}`}>
            Welcome to Dubai&apos;s premier scuba diving center! Dive into a
            world of adventure with us. We pride ourselves on offering top-notch
            services, luxurious facilities, and unbeatable scuba packages.
            Whether you&apos;re a beginner or just looking for a unique
            experience in Dubai, try scuba diving.
          </AnimatedText>
          <AnimatedText tag="p" className={`${nunito.className}`}>
            Anyone above 10 years old can try scuba diving and no swimming
            skills required!
          </AnimatedText>

          <AnimatedText
            tag="p"
            className={`${nunito.className} font-bold text-black`}
          >
            1 Beach Dive (8 meters)
          </AnimatedText>

          <AnimatedText tag="div">
            <p className={`${nunito.className} font-bold my-2 text-black`}>
              Everyday at
            </p>

            <ul
              className={`flex flex-col gap-1 ml-5 list-disc ${nunito.className}`}
            >
              <li>9:00 AM to 12:00 PM</li>
              <li>12:00 PM to 3:00 PM</li>
              <li>3:00 PM to 6:00 PM</li>
            </ul>
          </AnimatedText>

          <AnimatedText
            tag="p"
            className={`mt-3 ${nunito.className} text-black`}
          >
            *Minimum age 10 years old
          </AnimatedText>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10 text-center">
        <PackageCard
          id={42}
          title_1="Try Scuba"
          title_2="Diving + AquaFun"
          promo
          price={450}
          promoPrice={350}
          description="Experience the exciting sport of breathing underwater and get a FREE ticket to the largest floating water park in Dubai."
          tagline="The perfect combination of water sports!"
          img="https://d14xs7eaxawiao.cloudfront.net/images/pages/dsd/thumbnails/aquafun.png"
          learnMoreLink="/landing-pages/try-scuba-diving/aquafun"
          trackingIds="lp-aquafun-details,lp-aquafun-bn"
        />

        <PackageCard
          id={1}
          title_1="Try Scuba"
          title_2="Diving + Dhow Cruise"
          promo
          price={450}
          promoPrice={350}
          description="Experience the thrill of breathing underwater while exploring a new world and get a FREE ticket to a multicuisine dinner buffet in a cruise."
          tagline="Let's dive and dine!"
          img="https://d14xs7eaxawiao.cloudfront.net/images/pages/dsd/thumbnails/dhow-cruise.png"
          learnMoreLink="/landing-pages/try-scuba-diving/dhow-cruise"
          trackingIds="lp-dhow-details,lp-dhow-bn"
        />

        {/* <PackageCard
          id={2}
          title_1="Try Scuba"
          title_2="Diving + Drift Trike"
          promo
          price={299}
          description="Begin your aquatic journey with our all-encompassing try scuba dive, Plus:"
          tagline="FREE Drift Trike ticket!"
          img="https://d14xs7eaxawiao.cloudfront.net/images/pages/dsd/thumbnails/drift-trike.png"
          learnMoreLink="/landing-pages/try-scuba-diving/drift-trike"
        /> */}
      </div>
    </section>
  );
};

export default Packages;

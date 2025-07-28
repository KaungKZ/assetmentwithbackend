import Footer from '../../../../components/ui/landing-pages/app/Footer';
import HeroSection from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/Hero';
import Included from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/Included';
import Why from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/Why';
import Packages from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/Packages';
import Testimonials from '../../../../components/ui/landing-pages/ui/Testimonials';
import CallToAction from '../../../../components/ui/landing-pages/try-scuba-diving/national-day/CallToAction';
import googleService from '../../../../utils/services/GoogleService';
import cacheService from '../../../../utils/services/CacheService';

const TryScubaDivingLandingPage = ({ data }) => {
  return (
    <div className="flex justify-center h-full bg-black">
      <div className="max-w-[450px] w-full bg-[#edf5ff]">
        <HeroSection />

        <Packages />

        <Why />

        <Included />

        <CallToAction />

        <Testimonials data={data} />

        <Footer />
      </div>
    </div>
  );
};

export default TryScubaDivingLandingPage;

export const getServerSideProps = async () => {
  const cachedData = cacheService.get('landingPageDSD');

  if (cachedData) return { props: { data: cachedData } };

  const result = await googleService.getReviews();

  cacheService.set('landingPageDSD', result);

  return {
    props: {
      data: result,
    },
  };
};

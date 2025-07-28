import { NextSeo } from 'next-seo';
import GuestLayout from '../components/layouts/GuestLayout';
import HomeLayout from '../components/ui/pages/home';
import { siteConfig } from '../lib/config';
import axios from '../lib/axios';
import googleService from '../utils/services/GoogleService';
import cacheService from '../utils/services/CacheService';
import {
  betterDivesData,
  diveOffersData,
  getModifiedDives,
} from '../components/ui/pages/home/dive-offers/data';

const HomePage = ({ data }) => {
  return (
    <>
      <NextSeo
        title="Scuba Diving Dubai | Try Scuba Diving Tour | PADI Courses and More | Bermuda"
        description="Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={process.env.NEXT_PUBLIC_SELF_URL}
        openGraph={{
          type: 'website',
          url: process.env.NEXT_PUBLIC_SELF_URL,
          locale: 'en_gb',
          siteName: siteConfig.site.title,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SELF_URL}/images/pages/home/contact-banner.png`,
              width: 800,
              height: 600,
              alt: 'Bermuda Diving Center',
            },
          ],
        }}
      />
      <HomeLayout data={data} />
    </>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  // Check if cache exists and is not expired.
  const cachedData = cacheService.get('homePage');
  if (cachedData) {
    return { props: { data: cachedData } };
  }

  try {
    const cms = await axios.get('/api/web/cms/home');

    const google = await googleService.getReviews();

    const normalDSD = getModifiedDives(
      diveOffersData,
      cms.data.data.normal_dsd
    );

    const specialDSD = getModifiedDives(
      betterDivesData,
      cms.data.data.special_dsd
    );

    const newCache = {
      cms: {
        courses: cms?.data?.data?.courses || [],
        normal_dsd: normalDSD,
        special_dsd: specialDSD,
      },
      google,
    };

    cacheService.set('homePage', newCache);

    return {
      props: {
        data: newCache, // use cached data
      },
    };
  } catch (e) {
    return {
      props: {
        data: null,
        error: 'Failed to fetch data', // send an error prop if needed
      },
    };
  }
};

HomePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import CommercialDiveLayout from '../../components/ui/pages/services/commercial-dive';
import { useRouter } from 'next/router';
import { siteConfig } from '../../lib/config';
import { getAssetsUrl } from '../../lib/func/image';

const CommercialDivingPage = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Commercial Diving | Scuba Diving Dubai | Padi Courses and More"
        description="Commercial Diving | Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}${router.asPath}`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_SELF_URL}${router.asPath}`,
          locale: 'en_gb',
          siteName: siteConfig.site.title,
          images: [
            {
              url: getAssetsUrl(
                '/images/pages/services/banners/commercial-diving.png'
              ),
              width: 800,
              height: 600,
              alt: 'Bermuda Diving Center',
            },
          ],
        }}
      />

      <Banner
        image={{
          src: getAssetsUrl(
            '/images/pages/services/banners/commercial-diving.png'
          ),
          alt: 'FAQs Banner - Bermuda',
        }}
        heading="Commercial Diving"
        description="Experience excellens in underwater services with our team of skilled commercial divers. From inspections to repairs, we deliver safe, efficient, and quality solutions to meet your underwater needs."
        breadcrumb={
          <Breadcrumb lv1T="Services / " lv1L="/" lv2T="Commercial Diving" />
        }
        size="h-[400px]"
        txtBoxMT="mt-[90px]"
        tabbyPresent={false}
      />

      <CommercialDiveLayout />
    </>
  );
};

export default CommercialDivingPage;

CommercialDivingPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

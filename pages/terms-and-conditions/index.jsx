import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import TermsAndConditions from '../../components/ui/pages/terms-and-conditions/TermsAndConditions';
import { siteConfig } from '../../lib/config';
import { useRouter } from 'next/router';
import { getAssetsUrl } from '../../lib/func/image';

const TermsAndConditionsPage = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Terms & Conditions | Scuba Diving Dubai | Try Scuba Diving Tour | Padi Courses and More"
        description="Who are we? Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}${router.asPath}`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_SELF_URL}${router.asPath}`,
          locale: 'en_gb',
          siteName: siteConfig.site.title,
          images: [
            {
              url: getAssetsUrl('/images/pages/about/banner.png'),
              width: 800,
              height: 600,
              alt: 'Bermuda Diving Center',
            },
          ],
        }}
      />

      <Banner
        image={{
          src: getAssetsUrl('/images/pages/about/banner.png'),
          alt: 'Terms & Conditions - Bermuda',
        }}
        heading="Terms & Conditions"
        description="Participants are deemed to have read, understood and accepted the following Terms & Conditions of Bermuda Diving Center LLC (scubadiving.ae) shall be known as “The Company” in the TERMS & CONDITIONS:"
        breadcrumb={<Breadcrumb lv1T="Terms & Conditions" />}
        size="h-[350px]"
        tabbyPresent={false}
      />

      <TermsAndConditions />
    </>
  );
};

export default TermsAndConditionsPage;

TermsAndConditionsPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

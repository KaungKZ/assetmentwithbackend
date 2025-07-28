import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import PrivacyPolicy from '../../components/ui/pages/privacy-policy/PrivacyPolicy';
import { getAssetsUrl } from '../../lib/func/image';

const PrivacyPolicyPage = () => {
  return (
    <>
      <NextSeo
        title="Privacy Policy | Scuba Diving Dubai | Try Scuba Diving Tour | Padi Courses and More"
        description="Who are we? Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/privacy-policy`}
      />

      <Banner
        image={{
          src: getAssetsUrl('/images/pages/about/banner.png'),
          alt: 'Privacy Policy - Bermuda',
        }}
        heading="Privacy Policy"
        breadcrumb={<Breadcrumb lv1T="Privacy Policy" />}
        size="h-[350px]"
        tabbyPresent={false}
      />

      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;

PrivacyPolicyPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import Featured from '../../components/ui/internals/sections/featured';
import PADI from '../../components/ui/pages/about/PADI';
import WhoWeAre from '../../components/ui/pages/about/WhoWeAre';
import LinkButton from '../../components/ui/buttons/LinkButton';
import { getAssetsUrl } from '../../lib/func/image';

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="About Us | Scuba Diving Dubai | Try Scuba Diving Tour | Padi Courses and More"
        description="Who are we? Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/about`}
      />

      <Banner
        image={{
          src: getAssetsUrl('/images/pages/about/banner.png'),
          alt: 'About Banner - Bermuda',
        }}
        heading="About Us"
        description="Start on a journey to the depths of the ocean and unlock a world of endless possibilities with Bermuda Diving Center"
        breadcrumb={<Breadcrumb lv1T="About" />}
        size="h-[400px]"
        txtBoxMT="mt-[90px]"
        tabbyPresent={false}
      />

      {/* <CompanyProfile /> */}

      <WhoWeAre />

      <Featured
        heading="Our Passion for Scuba Diving"
        description="We are a team of passionate scuba diving enthusiasts with years of experience in exploring the underwater world. Our mission is to provide a safe and enjoyable scuba diving experience for divers of all levels while promoting the importance of environmental conservation and sustainability."
        sideImg={{
          src: getAssetsUrl('/images/pages/about/company-profile-preview.png'),
          alt: 'Company Profile - Bermuda',
        }}
        className="h-[800px] md:h-[650px]"
        button={
          <LinkButton
            href="https://d14xs7eaxawiao.cloudfront.net/pdf/bermuda-company-profile.pdf"
            lg
          >
            Download Company Profile
          </LinkButton>
        }
      />

      <PADI />
    </>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

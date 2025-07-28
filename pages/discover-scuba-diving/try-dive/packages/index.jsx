import { NextSeo } from 'next-seo';
import Banner from '../../../../components/ui/internals/sections/banner';
import Breadcrumb from '../../../../components/ui/internals/sections/banner/Breadcrumb';
import LandingPageCoursesSection from '../../../../components/ui/pages/courses/landing-page';
import axios from '../../../../lib/axios';
import GuestLayout from '../../../../components/layouts/GuestLayout';
import { siteConfig } from '../../../../lib/config';
import Link from 'next/link';
import SimpleButton from '../../../../components/ui/buttons/SiimpleButton';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { getAssetsUrl } from '../../../../lib/func/image';

const TryDivesPage = ({ packages }) => {
  return (
    <>
      <NextSeo
        title={`Try Scuba Dive Packages in Dubai, UAE | Bermuda Diving Center`}
        description="Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/discover-scuba-diving/try-dive`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_SELF_URL}/discover-scuba-diving/try-dive`,
          locale: 'en_gb',
          siteName: siteConfig.site.title,
        }}
      />

      <Banner
        image={{
          src: getAssetsUrl('/images/cms/try-dive-banner.png', 'aws-web'),
          alt: 'Try Dive Packages',
        }}
        heading="Try Scuba Diving"
        breadcrumb={<Breadcrumb lv1T={'Try Scuba Diving'} />}
        description="Every bit of knowledge, beginner to professionals – your diving dreams start and continuous with us forever at Bermuda Diving Center"
        size="h-[550px]"
        tabbyPresent={false}
        buttonWrapperClassName="mt-8"
        button={
          <Link
            className="inline-block"
            href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Hello%2C+%0D%0AI+would+like+to+inquire+about+%27Try+Scuba+Diving%27+packages.`}
          >
            <SimpleButton lg className="flex items-center gap-x-2">
              Need Help? WhatsApp Us! <IoLogoWhatsapp size={30} />
            </SimpleButton>
          </Link>
        }
      />

      <LandingPageCoursesSection collections={packages} type="try-dive" />
    </>
  );
};

export default TryDivesPage;

export const getServerSideProps = async () => {
  let packages = null;

  try {
    const res = await axios.get('/api/web/cms/try-dives');

    packages = res.data.data;
    packages.map((pkg) => pkg.children.sort((a, b) => a.order - b.order));
  } catch (e) {
    console.log(e.response);
  }

  return {
    props: {
      packages,
    },
  };
};

TryDivesPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

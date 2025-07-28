import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import GoogleMaps from '../../components/ui/internals/sections/maps/Google';
import { getAssetsUrl } from '../../lib/func/image';

const ContactSection = dynamic(() =>
  import('../../components/ui/pages/contact')
);

const ContactPage = () => {
  return (
    <>
      <NextSeo
        title="Contact Us | Scuba Diving Dubai | Try Scuba Diving Tour | Padi Courses and More"
        description="Contact Us | Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/contact`}
      />

      <Banner
        image={{
          src: getAssetsUrl('/images/pages/contact/banner.png'),
          alt: 'Contact Banner - Bermuda',
        }}
        heading="Contact Us"
        description="Ready to dive into a world of underwater excitement? At Bermuda Diving Center, we are eager to connect with scuba enthusiasts and answer any inquiries."
        breadcrumb={<Breadcrumb lv1T="Contact" />}
        size="h-[400px]"
        txtBoxMT="mt-[90px]"
        tabbyPresent={false}
      />

      <ContactSection />

      <div className="container py-16 lg:px-8 max-w-7xl">
        <GoogleMaps />
      </div>
    </>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

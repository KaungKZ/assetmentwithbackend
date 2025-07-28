import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import FAQs from '../../components/ui/pages/faqs/FAQs';
import { getAssetsUrl } from '../../lib/func/image';

const FAQsPage = () => {
  return (
    <>
      <NextSeo
        title="Frequently Asked Questions | Scuba Diving Dubai | Padi Courses and More"
        description="Frequently Asked Questions | Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/faqs`}
      />

      <Banner
        image={{
          src: getAssetsUrl('/images/pages/faqs/banner.png'),
          alt: 'FAQs Banner - Bermuda',
        }}
        heading="Frequently Asked Questions"
        description="Got a question? Here are some frequently asked questions and answers for your reference.  If you don't find your answer here, please feel free to contact us!"
        breadcrumb={<Breadcrumb lv1T="FAQs" />}
        size="h-[400px]"
        txtBoxMT="mt-[90px]"
        tabbyPresent={false}
      />

      <FAQs />
    </>
  );
};

export default FAQsPage;

FAQsPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import Gallery from '../../components/ui/pages/gallery/Gallery';
import { getAssetsUrl } from '../../lib/func/image';

const GalleryPage = () => {
  return (
    <>
      <NextSeo
        title="Gallery | Scuba Diving Dubai | Padi Courses and More"
        description="Our gallery | Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/gallery`}
      />

      <Banner
        image={{
          src: getAssetsUrl('/images/pages/gallery/banner.png'),
          alt: 'Gallery Banner - Bermuda',
        }}
        heading="Gallery"
        description="Get a glimpse before your experience with us at Bermuda Diving Center."
        breadcrumb={<Breadcrumb lv1T="Gallery" />}
        size="h-[400px]"
        txtBoxMT="mt-[90px]"
        tabbyPresent={false}
      />

      <Gallery />
    </>
  );
};

export default GalleryPage;

GalleryPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

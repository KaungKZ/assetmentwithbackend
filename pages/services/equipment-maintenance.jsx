import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import EquipmentMaintenanceLayout from '../../components/ui/pages/services/equipment-maintenance';
import { useRouter } from 'next/router';
import { siteConfig } from '../../lib/config';
import { getAssetsUrl } from '../../lib/func/image';

const EquipmentRentalPage = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Equipment Maintenance | Scuba Diving Dubai | Padi Courses and More"
        description="Equipment Maintenance | Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}${router.asPath}`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_SELF_URL}${router.asPath}`,
          locale: 'en_gb',
          siteName: siteConfig.site.title,
          images: [
            {
              url: getAssetsUrl(
                '/images/pages/services/banners/equipment-maintenance.png'
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
            '/images/pages/services/banners/equipment-maintenance.png'
          ),
          alt: 'FAQs Banner - Bermuda',
        }}
        heading="Equipment Maintenance"
        description="Keep your diving gear in top condition and enjoy your underwater adventures to the fullest with the help of our trusted and reliable equipment maintenance services."
        breadcrumb={
          <Breadcrumb
            lv1T="Services / "
            lv1L="/"
            lv2T="Equipment Maintenance"
          />
        }
        size="h-[400px]"
        txtBoxMT="mt-[90px]"
        tabbyPresent={false}
      />

      <EquipmentMaintenanceLayout />
    </>
  );
};

export default EquipmentRentalPage;

EquipmentRentalPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

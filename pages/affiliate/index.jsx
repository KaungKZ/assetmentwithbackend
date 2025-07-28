import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import AffiliateBanner from '../../components/ui/pages/affiliate/Banner';
import ProgramDetails from '../../components/ui/pages/affiliate/ProgramDetails';
import AffiliateTestimonials from '../../components/ui/pages/affiliate/Testimonials';

const AffiliatePage = () => {
  return (
    <>
      <NextSeo
        title="Affiliate | Scuba Diving Dubai | Try Scuba Diving Tour | Padi Courses and More"
        description="Who are we? Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/affiliate`}
      />

      <div className="container py-10">
        <AffiliateBanner />

        <ProgramDetails />

        <AffiliateTestimonials />
      </div>
    </>
  );
};

export default AffiliatePage;

AffiliatePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

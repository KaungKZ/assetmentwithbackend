import GuestLayout from '../../components/layouts/GuestLayout';
import { content } from '../../components/ui/pages/dsd/diveTrip';
import CourseTemplate from '../../components/ui/templates/courses';
import axios from '../../lib/axios';
import GoogleServiceInstance from '../../utils/services/GoogleService';
import { NextSeo } from 'next-seo';

const BoatDivePage = ({ dive, google }) => {
  const modifiedDive = { ...dive, price: 699, promo_price: 399 };

  return (
    <>
      <NextSeo noindex={true} />

      <CourseTemplate
        pageData={content}
        course={modifiedDive}
        google={google}
        hasSEO={false}
      />
    </>
  );
};

export default BoatDivePage;

export const getServerSideProps = async () => {
  let dive = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/8');
    google = await GoogleServiceInstance.getReviews();

    dive = res.data.data;
  } catch (e) {
    console.log(e.response);
  }

  return {
    props: {
      dive,
      google,
    },
  };
};

BoatDivePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

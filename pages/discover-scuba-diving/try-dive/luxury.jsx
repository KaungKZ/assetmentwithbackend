import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/dsd/luxury';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const LuxuryTryDivePage = ({ dive, google }) => {
  return <CourseTemplate pageData={content} course={dive} google={google} />;
};

export default LuxuryTryDivePage;

export const getServerSideProps = async () => {
  let dive = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/4');
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

LuxuryTryDivePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

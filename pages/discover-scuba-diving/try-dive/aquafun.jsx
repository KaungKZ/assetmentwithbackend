import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/dsd/aquafun';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const YachtCruisePage = ({ dive, google }) => {
  return <CourseTemplate pageData={content} course={dive} google={google} />;
};

export default YachtCruisePage;

export const getServerSideProps = async () => {
  let dive = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/42');
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

YachtCruisePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

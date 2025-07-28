import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/dsd/bubblemaker';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const BasicDSDPage = ({ dive, google }) => {
  return <CourseTemplate pageData={content} course={dive} google={google} />;
};

export default BasicDSDPage;

export const getServerSideProps = async () => {
  let dive = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/49');
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

BasicDSDPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

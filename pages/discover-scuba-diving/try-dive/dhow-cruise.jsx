import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/dsd/dhowCruise';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const DhowCruisePage = ({ dive, google }) => {
  return <CourseTemplate pageData={content} course={dive} google={google} />;
};

export default DhowCruisePage;

export const getServerSideProps = async () => {
  let dive = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/1');
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

DhowCruisePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

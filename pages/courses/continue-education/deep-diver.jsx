import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/courses/continue-education/deepDiver';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const DeepDiverPage = ({ course, google }) => {
  return <CourseTemplate pageData={content} course={course} google={google} />;
};

export default DeepDiverPage;

export const getServerSideProps = async () => {
  let course = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/26');
    google = await GoogleServiceInstance.getReviews();

    course = res.data.data;
  } catch (e) {
    console.log(e.response);
  }

  return {
    props: {
      course,
      google,
    },
  };
};

DeepDiverPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

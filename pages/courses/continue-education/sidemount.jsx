import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/courses/continue-education/sidemount';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const SidemountPage = ({ course, google }) => {
  return <CourseTemplate pageData={content} course={course} google={google} />;
};

export default SidemountPage;

export const getServerSideProps = async () => {
  let course = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/28');
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

SidemountPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

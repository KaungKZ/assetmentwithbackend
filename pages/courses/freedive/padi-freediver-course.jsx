import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/courses/start-learning/padiFreeDiverCourse';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const PADIFreeDiverCoursePage = ({ course, google }) => {
  return <CourseTemplate pageData={content} course={course} google={google} />;
};

export default PADIFreeDiverCoursePage;

export const getServerSideProps = async () => {
  let course = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/18');
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

PADIFreeDiverCoursePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

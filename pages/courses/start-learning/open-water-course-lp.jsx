import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/courses/start-learning/openWaterCourse';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const OpenWaterCoursePage = ({ course, google }) => {
  const modifiedCourse = { ...course, price: 2499, promo_price: 1299 };

  return (
    <CourseTemplate
      pageData={content}
      course={modifiedCourse}
      google={google}
      featuredText={'Limited slots available!'}
    />
  );
};

export default OpenWaterCoursePage;

export const getServerSideProps = async () => {
  let course = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/15');
    google = await GoogleServiceInstance.getReviews();

    course = res.data.data;
  } catch (e) {
    console.log(e.response.data);
  }

  return {
    props: {
      course,
      google,
    },
  };
};

OpenWaterCoursePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

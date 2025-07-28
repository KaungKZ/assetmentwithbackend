import GuestLayout from '../../../components/layouts/GuestLayout';
import { content } from '../../../components/ui/pages/courses/become-a-pro/diveMaster';
import CourseTemplate from '../../../components/ui/templates/courses';
import axios from '../../../lib/axios';
import GoogleServiceInstance from '../../../utils/services/GoogleService';

const DiveMasterPagePage = ({ course, google }) => {
  return <CourseTemplate pageData={content} course={course} google={google} />;
};

export default DiveMasterPagePage;

export const getServerSideProps = async () => {
  let course = null;
  let google = null;

  try {
    const res = await axios.get('/api/web/cms/courses/29');
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

DiveMasterPagePage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

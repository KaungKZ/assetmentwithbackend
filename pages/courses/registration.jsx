// import GuestLayout from '../../components/layouts/GuestLayout';
import CourseRegistrationForm from '../../components/ui/pages/registration-form/course';
import InvalidRequest from '../../components/ui/pages/registration-form/course/InvalidRequest';
import axios from '../../lib/axios';
import CourseProvider from '../../lib/store/medical-form/CourseProvider';

const CourseRegistrationPage = ({ status, countries }) => {
  return status === false ? (
    <InvalidRequest />
  ) : (
    <CourseProvider>
      <CourseRegistrationForm countries={countries} />
    </CourseProvider>
  );
};

export const getServerSideProps = async ({ query }) => {
  let status = false;
  let countries = [];

  try {
    await axios
      .post('/api/web/courses/validation', query)
      .then((res) => {
        status = res.data.data.status;
        countries = res.data.data.countries;
      })
      .catch((err) => console.log(err));

    return {
      props: {
        status,
        countries,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default CourseRegistrationPage;

// CourseRegistrationPage.getLayout = function getLayout(page) {
//   return <GuestLayout>{page}</GuestLayout>;
// };

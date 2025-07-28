// import GuestLayout from '../../components/layouts/GuestLayout';
import CourseProvider from '../../../lib/store/medical-form/CourseProvider';
import DSDMedicalForm from '../../../components/ui/pages/registration-form/booking/dsd';
import InvalidRequest from '../../../components/ui/pages/registration-form/course/InvalidRequest';
import axios from '../../../lib/axios';
import { typeFromActivityIds } from '../../../lib/func/book';

const BookingPage = ({ status, countries, type }) => {
  return status === false ? (
    <InvalidRequest />
  ) : (
    <CourseProvider>
      <DSDMedicalForm countries={countries} type={type} />
    </CourseProvider>
  );
};

export default BookingPage;

export const getServerSideProps = async ({ query }) => {
  let status = false;
  let countries = [];
  let type = '';

  try {
    await axios
      .post(`/api/web/booking/registration/data`, query)
      .then((res) => {
        status = res.data.data.status;
        countries = res.data.data.countries;

        type = typeFromActivityIds(res.data.data.booking.activity.id);
      })
      .catch((err) => console.log(err.response.data));

    return {
      props: {
        status,
        countries,
        type,
      },
    };
  } catch (error) {
    console.log(error.response);
  }
};

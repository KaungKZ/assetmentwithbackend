import CourseProvider from '../../../lib/store/medical-form/CourseProvider';
import InvalidRequest from '../../../components/ui/pages/registration-form/course/InvalidRequest';
import axios from '../../../lib/axios';
import BoatDiveRegistration from '../../../components/ui/pages/registration-form/booking/boat';

const BookingPage = ({ status, countries, activityId }) => {
  return status === false ? (
    <InvalidRequest />
  ) : (
    <CourseProvider>
      <BoatDiveRegistration countries={countries} activityId={activityId} />
    </CourseProvider>
  );
};

export default BookingPage;

export const getServerSideProps = async ({ query }) => {
  let status = false;
  let countries = [];
  let activityId = query?.aid;

  try {
    await axios
      .post(`/api/web/booking/registration/data`, query)
      .then((res) => {
        status = res.data.data.status;
        countries = res.data.data.countries;
      })
      .catch((err) => console.log(err));

    return {
      props: {
        status,
        countries,
        activityId,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

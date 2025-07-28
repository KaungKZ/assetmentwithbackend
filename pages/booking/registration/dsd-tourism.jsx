import CourseProvider from '../../../lib/store/medical-form/CourseProvider';
import DSDMedicalForm from '../../../components/ui/pages/registration-form/booking/dsd';
import axios from '../../../lib/axios';

const BookingPage = ({ countries }) => {
  return (
    <CourseProvider>
      <DSDMedicalForm
        countries={countries}
        type="dsd-tourism"
        from="dsd-tourism"
      />
    </CourseProvider>
  );
};

export default BookingPage;

export const getServerSideProps = async () => {
  let countries = [];

  try {
    await axios
      .post(`/api/web/booking/registration/data`)
      .then((res) => {
        countries = res.data.data.countries;
      })
      .catch((err) => console.log(err));

    return {
      props: {
        countries,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

// BookingPage.getLayout = function getLayout(page) {
//   return <GuestLayout>{page}</GuestLayout>;
// };

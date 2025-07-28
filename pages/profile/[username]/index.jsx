import Head from 'next/head';
import AppLayout from '../../../components/layouts/AppLayout';
import ProfileTab from '../../../components/ui/pages/profile/tabs/profile';
import MainProfileTemplate from '../../../components/ui/pages/profile/template/main';

const CustomerAreaPage = () => {
  return (
    <MainProfileTemplate>
      <Head>
        <title>Profile - Customer Area || Bermuda Diving Center</title>
      </Head>

      <ProfileTab />
    </MainProfileTemplate>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  if (!req.cookies.user_token && !req.cookies.user_id) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default CustomerAreaPage;

CustomerAreaPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

import Head from 'next/head';
import AppLayout from '../../../components/layouts/AppLayout';
import PasswordReset from '../../../components/ui/pages/profile/tabs/password-reset';
import MainProfileTemplate from '../../../components/ui/pages/profile/template/main';

const ActivityLogPage = () => {
  return (
    <MainProfileTemplate>
      <Head>
        <title>Update Password - Customer Area || Bermuda Diving Center</title>
      </Head>

      <PasswordReset />
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

export default ActivityLogPage;

ActivityLogPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

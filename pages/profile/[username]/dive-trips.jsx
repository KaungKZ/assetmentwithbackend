import { useContext } from 'react';
import AppLayout from '../../../components/layouts/AppLayout';
import ProfileContext from '../../../components/ui/pages/profile/state/ProfileContext';
import DiveTripTab from '../../../components/ui/pages/profile/tabs/dive-trip';
import MainProfileTemplate from '../../../components/ui/pages/profile/template/main';
import DiveTripController from '../../../lib/store/profile/dive-trip/DiveTripController';
import Head from 'next/head';

const DiveTripPage = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <DiveTripController profileId={profile.id}>
      <MainProfileTemplate>
        <Head>
          <title>Dive Trips - Customer Area || Bermuda Diving Center</title>
        </Head>

        <DiveTripTab />
      </MainProfileTemplate>
    </DiveTripController>
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

export default DiveTripPage;

DiveTripPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

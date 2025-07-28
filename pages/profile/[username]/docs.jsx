import Head from 'next/head';
import AppLayout from '../../../components/layouts/AppLayout';
import MainProfileTemplate from '../../../components/ui/pages/profile/template/main';
import Documents from '../../../components/ui/pages/profile/tabs/documents';

const DocumentPage = () => {
  return (
    <MainProfileTemplate>
      <Head>
        <title>Profile - Documents || Bermuda Diving Center</title>
      </Head>

      <Documents />
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

export default DocumentPage;

DocumentPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

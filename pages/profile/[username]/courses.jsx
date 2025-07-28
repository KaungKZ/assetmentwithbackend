import { useContext } from 'react';
import AppLayout from '../../../components/layouts/AppLayout';
import ProfileContext from '../../../components/ui/pages/profile/state/ProfileContext';
import CoursesTab from '../../../components/ui/pages/profile/tabs/courses';
import MainProfileTemplate from '../../../components/ui/pages/profile/template/main';
import CourseProvider from '../../../lib/store/profile/courses/CourseProvider';
import Head from 'next/head';

const CoursesPage = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <CourseProvider profileId={profile.id}>
      <MainProfileTemplate>
        <Head>
          <title>Courses - Customer Area || Bermuda Diving Center</title>
        </Head>

        <CoursesTab />
      </MainProfileTemplate>
    </CourseProvider>
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

export default CoursesPage;

CoursesPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

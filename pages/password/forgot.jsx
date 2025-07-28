import GuestLayout from '../../components/layouts/GuestLayout';
import WrapWithBg from '../../components/ui/internals/wrapper/WrapWithBg';
import ForgotPassword from '../../components/ui/pages/auth/forgot-password';

const PasswordForgotPage = () => {
  return (
    <WrapWithBg>
      <ForgotPassword />
    </WrapWithBg>
  );
};

export default PasswordForgotPage;

export const getServerSideProps = async ({ req, res }) => {
  if (req.cookies.user_token && req.cookies.user_id) {
    return {
      redirect: {
        destination: '/profile/' + req.cookies.user_id,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

PasswordForgotPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

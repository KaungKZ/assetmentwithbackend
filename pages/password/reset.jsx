import WrapWithBg from '../../components/ui/internals/wrapper/WrapWithBg';
import ResetPassword from '../../components/ui/pages/auth/reset-password';

const ResetPasswordPage = () => {
  return (
    <WrapWithBg minHeight="h-screen">
      <ResetPassword />
    </WrapWithBg>
  );
};

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

export default ResetPasswordPage;

import GuestLayout from '../../components/layouts/GuestLayout';
import WrapWithBg from '../../components/ui/internals/wrapper/WrapWithBg';
import MemberRegister from '../../components/ui/pages/member/register';

const LoginPage = () => {
  return (
    <WrapWithBg width="lg:w-[550px]">
      <MemberRegister />
    </WrapWithBg>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

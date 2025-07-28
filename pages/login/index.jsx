import { NextSeo } from 'next-seo';
import GuestLayout from '../../components/layouts/GuestLayout';
import WrapWithBg from '../../components/ui/internals/wrapper/WrapWithBg';
import LoginSection from '../../components/ui/pages/login';
import { useRouter } from 'next/router';
import { siteConfig } from '../../lib/config';

const LoginPage = () => {
  const router = useRouter();

  return (
    <WrapWithBg>
      <NextSeo
        title="Login"
        description="Who are we? Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}${router.asPath}`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_SELF_URL}${router.asPath}`,
          locale: 'en_gb',
          siteName: siteConfig.site.title,
        }}
      />

      <LoginSection />
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

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};

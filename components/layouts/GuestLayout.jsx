import Head from 'next/head';
import { siteConfig } from '../../lib/config';
import FixedItems from './FixedItems';
import Footer from './footer';
import Header from './header';
import { useRouter } from 'next/router';

const GuestLayout = ({ children }) => {
  const router = useRouter();
  const urls = [
    '/discover-scuba-diving/try-dive/aquafun',
    '/discover-scuba-diving/try-dive/dhow-cruise',
    '/discover-scuba-diving/try-dive/basic',
    '/discover-scuba-diving/try-dive/packages',
  ];

  const includedUrls =
    urls.includes(router.pathname) || router.pathname === '/';

  return (
    <>
      <Head>
        <title>{siteConfig.site.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <Header />

      {/* <main className={twMerge(!includedUrls ? '' : 'mt-[150px] md:mt-0')}> */}
      <main>{children}</main>

      <Footer />

      <FixedItems />
    </>
  );
};

export default GuestLayout;

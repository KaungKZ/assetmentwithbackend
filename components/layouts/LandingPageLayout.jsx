import Head from 'next/head';
import { siteConfig } from '../../lib/config';

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{siteConfig.site.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default LandingPageLayout;

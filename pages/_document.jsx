import { Html, Head, Main, NextScript } from 'next/document';
import Meta from '../components/layouts/header/Meta';
import FacebookPixel from '../lib/scripts/FacebookPixel';
import GoogleTag from '../lib/scripts/GoogleTag';
import AhrefsVerification from '../lib/scripts/AhrefsVerification';
import MSClarity from '../lib/scripts/MSClarity';
import Script from 'next/script';
import SnapPixel from '../lib/scripts/SnapchatPixel';

export default function Document() {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <Html lang="en">
      <Head>
        <Meta />
        {isProduction && (
          <>
            <SnapPixel />
            <AhrefsVerification />

            <FacebookPixel />

            <MSClarity />

            <GoogleTag />
          </>
        )}

        <Script
          src="https://checkout.tabby.ai/tabby-promo.js"
          strategy="beforeInteractive"
        ></Script>

        <Script
          src="https://checkout.tabby.ai/tabby-card.js"
          strategy="beforeInteractive"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

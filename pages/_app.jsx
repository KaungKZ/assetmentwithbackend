import { DefaultSeo } from "next-seo";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ToastContainer } from "react-toastify";
import { siteConfig } from "../lib/config";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

import "react-toastify/dist/ReactToastify.css";
import ProfileProvider from "../components/ui/pages/profile/state/ProfileProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import localFont from "next/font/local";
import { Inter, Barlow_Condensed, Smooch_Sans } from "next/font/google";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    if (window !== undefined) {
      if (!!router.query.bdcs) {
        localStorage.setItem("bdcs", router.query.bdcs);
      }
    }
  }, [router.query]);

  return (
    <ProfileProvider>
      <ToastContainer
        autoClose={5000}
        theme="colored"
        toastClassName="text-sm"
      />

      {getLayout(
        <GoogleReCaptchaProvider
          reCaptchaKey="6Le01q0jAAAAACgsDE2VtLEDuzumVaOrgwC_zRzk"
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          <DefaultSeo
            title="Scuba Diving Dubai | Try Scuba Diving Tour | PADI Courses and More | Bermuda"
            description="Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
            canonical={process.env.NEXT_PUBLIC_SELF_URL}
            openGraph={{
              type: "website",
              url: process.env.NEXT_PUBLIC_SELF_URL,
              locale: "en_gb",
              siteName: siteConfig.site.title,
              images: [
                {
                  url: `${process.env.NEXT_PUBLIC_SELF_URL}/images/pages/home/contact-banner.png`,
                  width: 800,
                  height: 600,
                  alt: "Bermuda Diving Center",
                },
              ],
            }}
          />

          <NextNProgress />

          <div
            className={`${kalnia.variable} ${inter.variable} ${barlo.variable} ${interNew.variable} ${SmoochSans.variable} text-[#6b7280] text-base md:text-[18px] leading-[1.5] font-poppins`}
          >
            <Component {...pageProps} />
          </div>
        </GoogleReCaptchaProvider>
      )}
    </ProfileProvider>
  );
}

const SmoochSans = Smooch_Sans({
  variable: "--font-SmoochSans",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interNew = Inter({
  variable: "--font-InterNew",
  subsets: ["latin"],
});

const barlo = Barlow_Condensed({
  variable: "--font-BarloNew",
  subsets: ["latin"],
  weight: ["400"],
});

const kalnia = localFont({
  src: [
    {
      path: "../fonts/kalnia/kalnia-v5-latin-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/kalnia/kalnia-v5-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/kalnia/kalnia-v5-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/kalnia/kalnia-v5-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-kalnia",
});

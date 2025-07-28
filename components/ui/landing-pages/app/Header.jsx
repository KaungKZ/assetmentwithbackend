import Link from 'next/link';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { getAssetsUrl } from '../../../../lib/func/image';
import { siteConfig } from '../../../../lib/config';

/* eslint-disable @next/next/no-img-element */
const Header = ({ nationalDay = false }) => {
  return (
    <header className="absolute z-50 top-5 left-8 right-8">
      <div className="flex items-center justify-between md:container">
        <Link
          href={`/landing-pages/try-scuba-diving${
            nationalDay ? '/national-day' : ''
          }`}
        >
          <img
            src={getAssetsUrl('/images/icons/back.png')}
            alt="Back"
            className="w-5"
          />
        </Link>

        <Link href="/">
          <img
            src={getAssetsUrl('/images/logo-white.png')}
            alt="Bermuda Logo"
            className="w-[84px]"
          />
        </Link>

        <Link
          href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Promo+Scuba+Diving+Inquiry`}
          className="text-white hover:text-white"
        >
          <BiLogoWhatsapp size={30} />
        </Link>
      </div>
    </header>
  );
};

export default Header;

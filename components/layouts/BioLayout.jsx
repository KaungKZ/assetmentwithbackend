import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import useSWR from 'swr';
import useFetcher from '../../lib/axios/fetcher';

import { siteConfig } from '../../lib/config';
import { bioMenuItems } from '../ui/pages/profile/data/data';
import { BioContext } from '../ui/pages/public/store/BioContext';
import Copyright from './footer/parts/Copyright';
import FooterWrapper from './footer/parts/FooterWrapper';
import { menuItems } from './header/menuItems';
import BigHeader from './header/parts/BigHeader';
import HeaderWrapper from './header/parts/HeaderWrapper';
import MobileHeadBar from './header/parts/MobileHeadBar';
import MobileMenu from './header/parts/MobileMenu';

const BioLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  const { fetcher } = useFetcher();

  const { data: bios, error } = useSWR(
    slug ? `/api/web/bio?id=${slug}` : null,
    fetcher
  );

  const bioValues = {
    bio: bios?.data,
  };

  if (!bios) return;

  return (
    <>
      <Head>
        <title>{siteConfig.site.title}</title>
      </Head>

      <div>
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={bioMenuItems(bios.data.member_no)}
        />

        {/* <div className="lg:hidden"> */}
        <div>
          <HeaderWrapper
            setMenuOpen={setMenuOpen}
            bigHeader={<BigHeader menuItems={menuItems} />}
            mobileHeadBar={<MobileHeadBar setMenuOpen={setMenuOpen} />}
          />
        </div>
      </div>

      <BioContext.Provider value={bioValues}>
        <main>{children}</main>
      </BioContext.Provider>

      <FooterWrapper copyright={<Copyright />} />
    </>
  );
};

export default BioLayout;

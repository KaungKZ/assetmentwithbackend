import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import axios from '../../lib/axios/authenticated';
import { siteConfig } from '../../lib/config';
import useAuth from '../../lib/hooks/useAuth';
import { authMenuItems } from '../ui/pages/profile/data/data';
import ProfileContext from '../ui/pages/profile/state/ProfileContext';
import Copyright from './footer/parts/Copyright';
import FooterWrapper from './footer/parts/FooterWrapper';
import { menuItems } from './header/menuItems';
import BigHeader from './header/parts/BigHeader';
import HeaderWrapper from './header/parts/HeaderWrapper';
import MobileHeadBar from './header/parts/MobileHeadBar';
import MobileMenu from './header/parts/MobileMenu';

const AppLayout = ({ children }) => {
  const { profile, setProfile } = useContext(ProfileContext);
  const user_id = getCookie('user_id');

  const { clearAuth } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      await axios
        .get(`/api/web/profile/${user_id}`)
        .then((response) => {
          setProfile(response.data.data);
          // console.log(response.data.data);
        })
        .catch((error) => {
          // console.log(error.response);
          clearAuth();
        });
    };

    if (Object.keys(profile).length === 0) {
      getProfile();
    }
  }, [clearAuth, profile, setProfile, user_id]);

  if (Object.keys(profile).length === 0) return;

  return (
    <>
      <Head>
        <title>{siteConfig.site.title}</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <div>
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={authMenuItems(profile.member_no)}
        />

        <div>
          <HeaderWrapper
            setMenuOpen={setMenuOpen}
            bigHeader={<BigHeader menuItems={menuItems} />}
            mobileHeadBar={<MobileHeadBar setMenuOpen={setMenuOpen} />}
          />
        </div>
      </div>

      <main>{children}</main>

      <FooterWrapper copyright={<Copyright />} />
    </>
  );
};

export default AppLayout;

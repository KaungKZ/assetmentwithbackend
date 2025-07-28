/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { BiLogInCircle, BiLogOut, BiUser } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import useAuth from '../../../../lib/hooks/useAuth';
import usePage from '../../../../lib/hooks/usePage';
import useScroll from '../../../../lib/hooks/useScroll';
import SimpleButton from '../../../ui/buttons/SiimpleButton';
import ProfileContext from '../../../ui/pages/profile/state/ProfileContext';
import ButtonGroup from './ButtonGroup';
import CustomImage from '../../../ui/CustomImage';
import { getAssetsUrl } from '../../../../lib/func/image';

const MobileHeadBar = ({ setMenuOpen }) => {
  const router = useRouter();
  const { logout } = useAuth();
  const { isScrolled } = useScroll();
  const { navNormal } = usePage();
  const normalLogo = isScrolled || navNormal();

  const { profile } = useContext(ProfileContext);

  return (
    <>
      {/* Mobile menu and search (lg-) */}
      <div className="flex items-center flex-1 lg:hidden">
        <button
          type="button"
          className={`p-2 -ml-2 ${
            normalLogo ? 'text-gray-400' : 'text-white'
          } rounded-md`}
          onClick={() => setMenuOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <HiMenu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      {/* Logo (lg-) */}
      <Link href="/" className="lg:hidden">
        <span className="sr-only">Bermuda Diving Center</span>

        <CustomImage
          src={getAssetsUrl(
            normalLogo ? '/images/logo.png' : '/images/logo-white.png'
          )}
          alt="Bermuda Logo"
          wrapperClassName="h-[64px] w-[86px]"
          priority
        />
      </Link>

      <div className="flex items-center justify-end flex-1">
        <div className="flex items-center lg:ml-8">
          <div className="flex space-x-8">
            <div className="flex">
              {Object.keys(profile).length === 0 ? (
                <>
                  <ButtonGroup />

                  <BiLogInCircle
                    onClick={() => router.push('/login')}
                    size={28}
                    className={`${
                      normalLogo ? 'text-gray-400' : 'text-white'
                    } lg:hidden`}
                  />
                </>
              ) : router.pathname.includes('/profile') ? (
                <>
                  <SimpleButton
                    onClick={() => logout()}
                    display="hidden lg:block"
                  >
                    Log Out
                  </SimpleButton>
                  <BiLogOut
                    onClick={() => logout()}
                    size={24}
                    className="text-red-500 lg:hidden"
                  />
                </>
              ) : (
                <>
                  <SimpleButton
                    onClick={() => router.push('/login')}
                    display="hidden lg:block"
                  >
                    My Account
                  </SimpleButton>
                  <BiUser
                    onClick={() => router.push('/login')}
                    size={28}
                    className={`${
                      normalLogo ? 'text-gray-400' : 'text-white'
                    } lg:hidden`}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeadBar;

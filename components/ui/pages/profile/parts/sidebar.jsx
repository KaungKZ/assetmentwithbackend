/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAssetsUrl } from '../../../../../lib/func/image';
import { toReadableDate } from '../../../../../lib/func/time';
import useAuth from '../../../../../lib/hooks/useAuth';
import { getMoney } from '../../../../../lib/func/money';

const Sidebar = ({ profile, tabs }) => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className="pb-0 border-b border-gray-300 md:pb-10 lg:border-b-0 lg:border-r lg:col-span-2">
      <div className="flex gap-x-3 lg:block">
        <div>
          <div className="relative inline-block overflow-hidden border border-gray-200 rounded">
            <img
              src={getAssetsUrl(profile.profile_picture)}
              alt={profile.full_name || 'Default Profile Picture'}
              width={100}
              height={100}
              className="cursor-pointer w-[150px]"
            />
          </div>
        </div>

        <div className="mt-2">
          <h1 className="text-lg md:text-xl">{profile.full_name}</h1>
          <p className="mt-2 text-sm">
            Member: <span className="text-black">{profile.member_no}</span>
          </p>
          <p className="mt-1 text-sm">
            Member Since:{' '}
            <span className="text-black">
              {toReadableDate(profile.created_at)}
            </span>
          </p>

          {profile.wallet ? (
            <p className="mt-1 text-sm">
              Wallet:{' '}
              <span
                className={`${
                  profile.wallet.balance === 0 ? 'text-red-600' : 'text-black'
                }`}
              >
                {getMoney(profile.wallet.balance)}
              </span>
            </p>
          ) : null}
        </div>
      </div>

      <hr className="lg:my-6 my-3 w-0 lg:w-[30%]" />

      <div className="hidden md:block">
        <ul className="flex-col hidden gap-3 lg:flex">
          {tabs(profile.member_no).map((tab, index) => (
            <li key={index} className="text-base">
              {tab.borderTop && <hr className="w-[70%] pt-2 my-2" />}
              {tab.href ? (
                <Link
                  className={`transition-all text-base duration-300 border-l-2 cursor-pointer hover:text-bermuda-200 hover:pl-2 hover:border-l-bermuda-200 ${
                    router.asPath === tab.href
                      ? `pl-2 ${
                          tab.color
                            ? 'border-l-red-500 text-red-500'
                            : 'border-l-bermuda-200 text-bermuda-200'
                        }`
                      : 'text-gray-500 border-l-transparent'
                  } ${tab.color || ''}`}
                  href={tab.href}
                >
                  {tab.title}
                </Link>
              ) : (
                <div
                  className={`transition-all font-poppins text-base duration-300 border-l-2 cursor-pointer hover:text-bermuda-200 hover:pl-2 hover:border-l-bermuda-200 ${
                    tab.color || ''
                  } border-l-transparent`}
                  onClick={() => tab.onClick(logout)}
                >
                  {tab.title}
                </div>
              )}
            </li>
          ))}
        </ul>

        <select
          defaultValue={router.asPath}
          onChange={(event) => router.push(event.target.value)}
          className="w-full rounded lg:hidden focus:outline-none focus:ring-0 focus:text-bermuda-100 focus:border-bermuda-200"
        >
          {tabs(profile.member_no).map((tab, index) => (
            <option key={index} value={tab.href}>
              {tab.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;

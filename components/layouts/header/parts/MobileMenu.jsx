/* eslint-disable @next/next/no-img-element */
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { HiChevronDown, HiOutlineX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { getAssetsUrl } from '../../../../lib/func/image';

const MobileMenu = ({ menuItems, setMenuOpen, menuOpen }) => {
  const router = useRouter();

  return (
    <Transition.Root show={menuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setMenuOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
              <div className="flex justify-between px-4 pt-5 pb-2 mb-5">
                <Link
                  href="/"
                  className="lg:hidden focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="sr-only">Bermuda Diving Center</span>
                  <img
                    className="w-auto h-14"
                    alt="Bermuda Logo"
                    src={getAssetsUrl('/images/logo.png')}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </Link>

                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <HiOutlineX className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {menuItems.map((menu, index) =>
                menu.children ? (
                  <Disclosure key={index}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-base text-left focus:outline-none">
                          <span
                            className={
                              router.pathname.includes(menu.href)
                                ? 'text-bermuda-200'
                                : ''
                            }
                          >
                            <span className="inline-block my-underline">
                              {menu.name}
                            </span>
                          </span>
                          <HiChevronDown
                            className={`${
                              open
                                ? 'rotate-180 text-bermuda-200'
                                : router.pathname.includes(menu.href)
                                ? 'text-bermuda-200'
                                : 'rotate-0'
                            } h-5 w-5 transition-all duration-300`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          <div className="px-4 pb-6 space-y-12">
                            <div className="grid items-start grid-cols-1 gap-y-10 gap-x-6">
                              <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                {menu.children?.map((item, itIndex) => (
                                  <div
                                    key={itIndex}
                                    className={item.children ? '' : '-mb-5'}
                                    onClick={() =>
                                      item.href !== '#' && setMenuOpen(false)
                                    }
                                  >
                                    <Link
                                      href={item.href}
                                      id={`mobile-featured-heading-${itIndex}`}
                                      className={`relative text-base text-gray-500`}
                                    >
                                      {item.highlight && (
                                        <span
                                          className={`absolute -top-5 -right-12 bg-red-500 text-white text-[10px] px-2.5 rounded-xl font-light tracking-wide`}
                                        >
                                          {item.highlight}
                                        </span>
                                      )}

                                      <span className="inline-block my-underline">
                                        {item.name}
                                      </span>
                                    </Link>
                                    {item.children ? (
                                      <ul
                                        role="list"
                                        aria-labelledby={`mobile-featured-heading-${itIndex}`}
                                        className="mt-6 space-y-6"
                                      >
                                        {item?.children?.map(
                                          (child, chIndex) => (
                                            <li key={chIndex} className="flex">
                                              <Link
                                                href={child.href}
                                                className={twMerge(
                                                  `relative flex gap-2 items-center font-sfpro text-sm`,
                                                  router.pathname.includes(
                                                    child.href
                                                  ) && !child.heading
                                                    ? 'text-bermuda-200'
                                                    : 'text-gray-800'
                                                )}
                                                onClick={() =>
                                                  setMenuOpen(false)
                                                }
                                              >
                                                {child.heading ? (
                                                  <span className="inline-block mt-6 text-base text-gray-500 my-underline">
                                                    {child.name}
                                                  </span>
                                                ) : (
                                                  child.name
                                                )}

                                                {child.highlight && (
                                                  <span
                                                    className={twMerge(
                                                      `text-[9px] px-2 rounded-xl font-light tracking-wide`,
                                                      child.highlightColor ||
                                                        'bg-red-500 text-white'
                                                    )}
                                                  >
                                                    {child.highlight}
                                                  </span>
                                                )}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <div key={index} className="px-4 my-3">
                    <Link
                      href={menu.href}
                      className={twMerge(
                        `block p-2 -m-2 text-base font-sfpro`,
                        menu.color,
                        menu.href == router.asPath
                          ? 'text-bermuda-200'
                          : 'text-gray-900'
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="inline-block my-underline">
                        {menu.name}
                      </span>
                    </Link>
                  </div>
                )
              )}

              {/* <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div> */}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;

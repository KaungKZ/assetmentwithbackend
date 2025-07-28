/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import usePage from '../../../../lib/hooks/usePage';
import useScroll from '../../../../lib/hooks/useScroll';
import { gridColNo } from '../menuItems';
import { twMerge } from 'tailwind-merge';
import { getAssetsUrl } from '../../../../lib/func/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BigHeader = ({ menuItems }) => {
  const router = useRouter();
  const { isScrolled } = useScroll();
  const { navNormal } = usePage();

  return (
    <>
      {/* Logo (lg+) */}
      <div className="hidden lg:flex lg:items-center">
        <Link href="/">
          <span className="sr-only">Bermuda Diving Center</span>
          <img
            className="w-auto h-16 transition-all duration-300"
            alt="Bermuda Logo"
            src={
              isScrolled || navNormal()
                ? getAssetsUrl('/images/logo.png')
                : getAssetsUrl('/images/logo-white.png')
            }
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="hidden h-full lg:flex font-sfpro">
        {/* Mega menus */}
        <Popover.Group className="ml-10">
          <div className="flex justify-center h-full space-x-8">
            {menuItems.map((menu, index) =>
              menu.children ? (
                <Popover key={index} className="flex">
                  {({ open, close }) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          className={classNames(
                            open || router.pathname.includes(menu.href)
                              ? isScrolled || navNormal()
                                ? 'border-bermuda-100 text-bermuda-100 hover:text-bermuda-200'
                                : 'text-gray-200 border-transparent'
                              : isScrolled || navNormal()
                              ? 'border-transparent text-gray-700 hover:border-bermuda-100 hover:text-bermuda-200'
                              : 'hover:text-gray-200 text-white border-transparent',
                            'relative -mb-px text-[15px] flex items-center border-b-2 pt-px transition-colors duration-200 ease-out focus:outline-none'
                          )}
                        >
                          {menu.name}
                          <HiChevronDown
                            className={`ml-1 -mr-2 duration-300 ${
                              open ? 'rotate-90 transition-all' : 'rotate-0'
                            }`}
                          />
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Panel className="absolute inset-x-0 z-30 text-gray-500 top-full sm:text-sm">
                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                          <div
                            className="absolute inset-0 shadow top-1/2"
                            aria-hidden="true"
                          />
                          <div className="relative bg-white opacity-[0.99]">
                            <div className="container mx-auto">
                              <div
                                className={`grid items-start ${gridColNo(
                                  menu.children.length
                                )} pt-10 pb-10 gap-y-10 gap-x-8`}
                              >
                                {menu.children?.map((item, itIndex) => (
                                  <div key={itIndex}>
                                    {item.image && (
                                      <Link
                                        href={item.href}
                                        className={twMerge(
                                          'block mb-5 overflow-hidden rounded shadow',
                                          item.featured &&
                                            'border border-gray-200 sm:-ml-[75px] sm:w-[350px]'
                                        )}
                                      >
                                        <img
                                          src={item.image.src}
                                          alt={item.image.alt}
                                          width={330}
                                          height={250}
                                          className={twMerge(
                                            'w-full duration-300 hover:scale-105',
                                            item.image.className
                                          )}
                                        />
                                      </Link>
                                    )}
                                    {item.href !== '#' ? (
                                      <Link
                                        href={item.href}
                                        onClick={() =>
                                          item.href !== '#' && close()
                                        }
                                        id={`desktop-featured-heading-${itIndex}`}
                                        className="relative inline-block text-base text-gray-800 hover:text-black my-underline"
                                      >
                                        {item.highlight && (
                                          <span
                                            className={twMerge(
                                              `absolute -top-5 -right-12 text-[10px] px-2 rounded-xl tracking-wide`,
                                              item.highlightColor ||
                                                'bg-red-500 text-white'
                                            )}
                                          >
                                            {item.highlight}
                                          </span>
                                        )}
                                        {item.name}
                                      </Link>
                                    ) : (
                                      <span
                                        id={`desktop-featured-heading-${itIndex}`}
                                        className="relative text-base text-gray-400 select-none"
                                      >
                                        {item.highlight && (
                                          <span
                                            className={twMerge(
                                              `absolute -top-5 -right-12 text-[10px] px-2 rounded-xl tracking-wide`,
                                              item.highlightColor ||
                                                'bg-red-500 text-white'
                                            )}
                                          >
                                            {item.highlight}
                                          </span>
                                        )}
                                        {item.name}
                                      </span>
                                    )}

                                    {item.children ? (
                                      <ul
                                        role="list"
                                        aria-labelledby={`desktop-featured-heading-${itIndex}`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {item?.children?.map(
                                          (child, chIndex) => (
                                            <li
                                              key={chIndex}
                                              className={twMerge(
                                                `flex gap-1`,
                                                router.pathname.includes(
                                                  child.href
                                                ) && 'text-bermuda-200'
                                              )}
                                            >
                                              <Link
                                                href={child.href}
                                                className={twMerge(
                                                  `relative text-sm`,
                                                  child.href ===
                                                    router.asPath &&
                                                    !child.heading
                                                    ? 'text-bermuda-200 hover:text-bermuda-300'
                                                    : 'text-gray-800 hover:text-bermuda-200',
                                                  child.heading &&
                                                    'my-underline text-base hover:text-black mt-4'
                                                )}
                                                onClick={() => close()}
                                              >
                                                {child.name}
                                              </Link>
                                              {child.highlight && (
                                                <span
                                                  className={twMerge(
                                                    `py-1 text-[9px] px-2 rounded-xl tracking-wide`,
                                                    child.highlightColor ||
                                                      'bg-red-500 text-white'
                                                  )}
                                                >
                                                  {child.highlight}
                                                </span>
                                              )}
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
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ) : (
                <React.Fragment key={index}>
                  {menu.name === 'Shop' ? (
                    <div className="h-6 mr-6 border-l-2 mt-9 border-l-gray-300"></div>
                  ) : null}

                  <Link
                    key={index}
                    href={menu.href}
                    className={twMerge(
                      'flex -m-[1px] items-center border-b-2 text-[15px] font-normal',
                      isScrolled || navNormal()
                        ? 'hover:text-bermuda-200 hover:border-bermuda-100'
                        : 'hover:text-gray-200',
                      router.pathname === menu.href
                        ? isScrolled || navNormal()
                          ? 'text-bermuda-100 border-bermuda-100'
                          : 'text-gray-200 border-transparent'
                        : isScrolled || navNormal()
                        ? 'text-gray-700 border-transparent'
                        : 'text-white border-transparent'
                    )}
                  >
                    {menu.name}
                  </Link>
                </React.Fragment>
              )
            )}
          </div>
        </Popover.Group>
      </div>
    </>
  );
};

export default BigHeader;

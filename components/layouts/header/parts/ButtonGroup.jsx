import Link from 'next/link';
import React from 'react';
import useScroll from '../../../../lib/hooks/useScroll';
import { twMerge } from 'tailwind-merge';
import usePage from '../../../../lib/hooks/usePage';

const ButtonGroup = () => {
  const { isScrolled } = useScroll();
  const { navNormal } = usePage();

  return (
    <div className="items-center hidden rounded-full lg:flex">
      <Link
        href="/contact"
        className="text-[15px] block py-2 px-5 border border-bermuda-200 hover:text-white hover:bg-bermuda-100 hover:border-bermuda-100 duration-300 text-white bg-bermuda-200 rounded-l-full"
      >
        Contact Us
      </Link>
      <Link
        href="/login"
        className={twMerge(
          'text-[15px] bg-white border hover:border-gray-100 hover:bg-gray-100 duration-300 rounded-r-full block py-2 px-6',
          isScrolled || navNormal() ? 'border-bermuda-200' : 'border-white'
        )}
      >
        Sign In
      </Link>
    </div>
  );
};

export default ButtonGroup;

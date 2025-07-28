import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const LinkButton = ({
  href = '/',
  opposite = false,
  lg = false,
  children,
  uppercase,
  display,
  width,
  trackingId,
  className,
}) => {
  return trackingId ? (
    <Link
      id={trackingId}
      href={href}
      className={twMerge(
        opposite
          ? 'bg-white hover:bg-gray-200 text-bermuda-200'
          : 'bg-bermuda-100 text-white hover:text-white hover:bg-bermuda-200 focus:border-bermuda-200 focus:ring-bermuda-200',
        'rounded-full cursor-pointer focus:z-10 focus:outline-none transition-all duration-300 focus:ring-1',
        width || 'w-auto',
        lg ? 'sm:px-6 px-4 py-2.5 sm:text-base text-sm' : 'px-4 py-2 text-sm',
        display || '',
        uppercase ? 'uppercase' : '',
        className || ''
      )}
    >
      {children}
    </Link>
  ) : (
    <Link
      href={href}
      className={twMerge(
        'rounded-full focus:z-10 focus:outline-none transition-all duration-300 focus:ring-1',
        width || 'w-auto',
        lg ? 'sm:px-6 px-4 py-2.5 sm:text-base text-sm' : 'px-4 py-2 text-sm',
        opposite
          ? 'bg-white hover:bg-gray-200 text-bermuda-200'
          : 'bg-bermuda-100 text-white hover:text-white hover:bg-bermuda-200 focus:border-bermuda-200 focus:ring-bermuda-200',
        uppercase && 'uppercase',
        display || '',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default LinkButton;

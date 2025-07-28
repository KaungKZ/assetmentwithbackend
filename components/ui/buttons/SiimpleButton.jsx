import { twMerge } from 'tailwind-merge';

const SimpleButton = ({
  type,
  opposite = false,
  lg = false,
  sm = false,
  children,
  uppercase,
  width,
  display,
  className,
  color,
  ...props
}) => {
  return (
    <button
      type={type || 'submit'}
      className={twMerge(
        `shadow rounded-full duration-300 hover:bg-bermuda-200 focus:z-10 focus:outline-none focus:ring-1 after-left-to-right-bg`,
        width || 'w-auto',
        display ?? '',
        uppercase && 'uppercase',
        lg
          ? 'px-5 py-2.5 text-base'
          : sm
          ? 'px-3 py-1.5 text-xs'
          : 'px-4 py-2 text-sm',
        color ||
          'bg-bermuda-100 text-white focus:border-bermuda-200 focus:ring-bermuda-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SimpleButton;

const OutlinedButton = ({
  type,
  opposite = false,
  lg = false,
  sm = false,
  children,
  uppercase,
  width,
  display,
  outline,
  color,
  ...props
}) => {
  return (
    <button
      type={type || 'submit'}
      className={`${
        width || 'w-auto'
      } shadow rounded-full transition-all border duration-300 focus:z-10 focus:outline-none focus:ring-1 ${
        lg
          ? 'px-5 py-2.5 text-base'
          : sm
          ? 'px-3 py-1.5 text-xs'
          : 'px-4 py-2 text-sm'
      } ${
        color
          ? color
          : 'bg-transparent text-bermuda-100 hover:bg-gray-100 border-bermuda-100'
      } ${display ?? ''}
        ${uppercase && 'uppercase'}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;

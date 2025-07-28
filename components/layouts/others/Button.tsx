import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

const Button = ({ children, className, wrapperClassName }: ButtonProps) => {
  return (
    <div className={twMerge(wrapperClassName)}>
      <BaseButton className={twMerge(className)}>{children}</BaseButton>
    </div>
  );
};

export default Button;

export const BaseButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={twMerge(
        'py-3 text-xl font-normal duration-300 text-white border bg-white/10 hover:bg-white/20 border-white rounded-full px-7 font-kalnia',
        className
      )}
    >
      {children}
    </button>
  );
};

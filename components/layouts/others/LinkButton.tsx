import React from 'react';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { BaseButton } from './Button';

interface LinkButtonProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  href: string;
}

const LinkButton = ({
  children,
  className,
  wrapperClassName,
  href,
}: LinkButtonProps) => {
  return (
    <div className={twMerge(wrapperClassName)}>
      <Link href={href}>
        <BaseButton className={twMerge(className)}>{children}</BaseButton>
      </Link>
    </div>
  );
};

export default LinkButton;

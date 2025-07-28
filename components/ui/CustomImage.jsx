import Image from 'next/image';

import { forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';

const CustomImage = forwardRef(
  ({ src, alt, className, wrapperClassName, sizes, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          'rounded relative w-full h-40 overflow-hidden',
          wrapperClassName
        )}
      >
        <Image
          ref={ref}
          src={src}
          alt={alt}
          fill
          sizes={
            sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          }
          className={twMerge(
            'rounded object-cover size-full duration-300 hover:scale-105',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

CustomImage.displayName = 'CustomImage';

export default CustomImage;

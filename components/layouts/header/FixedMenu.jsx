import Link from 'next/link';
import useScroll from '../../../lib/hooks/useScroll';
import useWidth from '../../../lib/hooks/useWidth';
import LinkButton from '../../ui/buttons/LinkButton';
import { getMoney } from '../../../lib/func/money';
import CustomImage from '../../ui/CustomImage';
import { getAssetsUrl } from '../../../lib/func/image';

const FixedMenu = ({
  imageSrc,
  imageAlt,
  heading,
  price,
  vat = false,
  btnHref,
  btnText,
}) => {
  const { width } = useWidth();
  const { isScrolled } = useScroll();

  return (
    <div
      className={`${
        isScrolled ? 'top-0' : '-top-96'
      } inset-0 h-24 z-0 fixed duration-500 shadow-md bg-white`}
    >
      <div className="container h-full mx-auto sm:px-5">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <span className="sr-only">
              {imageAlt || 'Bermuda Diving Center'}
            </span>
            <CustomImage
              className="w-auto h-16"
              alt={imageAlt || 'Bermuda Diving Center'}
              src={imageSrc || getAssetsUrl('/images/logo.png')}
            />
          </Link>

          <div className="flex flex-col items-end gap-y-3">
            <div className="flex gap-1 text-sm text-right lg:text-base">
              <h6>{heading}</h6>
              {vat ? (
                <p className="text-base text-bgray">
                  - {getMoney(price)}{' '}
                  <span className="text-[10px]">(+VAT)</span>
                </p>
              ) : (
                <p className="text-base">({getMoney(price)})</p>
              )}
            </div>
            <div>
              <LinkButton href={btnHref} lg={width > 786}>
                {btnText}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedMenu;

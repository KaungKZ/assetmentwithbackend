import usePage from '../../../../lib/hooks/usePage';
import useScroll from '../../../../lib/hooks/useScroll';
import NationalDayOfferBanner from '../../../ui/banner/national-day-promo';

const HeaderWrapper = ({ mobileHeadBar, bigHeader }) => {
  const { isScrolled } = useScroll();
  const { navNormal } = usePage();

  return (
    <header className="relative">
      <nav aria-label="Top">
        {/* Secondary navigation */}
        <div
          className={`${
            isScrolled || navNormal()
              ? 'bg-white border-gray-200'
              : 'bg-transparent border-transparent'
          } border-b transition-all duration-300 ${
            navNormal() ? '' : 'fixed'
          } z-50 top-0 right-0 left-0`}
        >
          {/* <NationalDayOfferBanner isScrolled={isScrolled} /> */}

          <div className="container flex items-center justify-between h-24">
            {bigHeader || null}

            {mobileHeadBar}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderWrapper;

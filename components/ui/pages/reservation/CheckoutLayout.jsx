import { getAssetsUrl } from '../../../../lib/func/image';
import CheckoutProvider from '../../../../lib/store/checkout/CheckoutProvider';
import CheckoutBanner from './CheckoutBanner';
import CheckoutBody from './CheckoutBody';
import CheckoutModals from './CheckoutModals';

const CheckoutLayout = () => {
  return (
    <CheckoutProvider>
      <CheckoutBanner
        bgSrc={getAssetsUrl('/images/pages/dsd/drift-trike/banner.png')}
        bgAlt="Booking Banner"
      />

      <CheckoutBody />

      <CheckoutModals />
    </CheckoutProvider>
  );
};

export default CheckoutLayout;

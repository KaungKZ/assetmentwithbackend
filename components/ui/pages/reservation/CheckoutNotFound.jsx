import Link from 'next/link';
import CheckoutBanner from './CheckoutBanner';
import { getAssetsUrl } from '../../../../lib/func/image';

const CheckoutNotFound = ({ state }) => {
  return (
    <div className="relative">
      <CheckoutBanner
        bgSrc={getAssetsUrl('/images/pages/dsd/drift-trike/banner.png')}
        bgAlt="Booking Banner"
      />

      <div className="container grid gap-8 py-16 sm:grid-cols-3">
        <div className="flex flex-col col-span-2 gap-4 sm:gap-6">
          <h1 className="text-xl sm:text-2xl">
            {state.paid ? 'Reservation Paid!' : 'No reservation found!'}
          </h1>

          {state.paid ? (
            <p>
              Check your email for the confirmation. If you have any questions,
              please <Link href="/contact">contact</Link> us.
            </p>
          ) : (
            <div>
              <p className="max-w-[500px]">
                Please go back to <Link href="/">home page</Link> or try{' '}
                <span className="text-black">refreshing </span>
                the page. <Link href="/contact">Contact</Link> us if you think
                this is an error.
              </p>

              <button
                onClick={() => window.location.reload()}
                className="mt-6 primary-outline-btn"
              >
                Refresh Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutNotFound;

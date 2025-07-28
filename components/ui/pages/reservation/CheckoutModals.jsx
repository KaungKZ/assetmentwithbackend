import React, { useContext } from 'react';
import CheckoutTabbyModal from './CheckoutTabbyModal';
import CheckoutContext from '../../../../lib/store/checkout/CheckoutContext';

const CheckoutModals = () => {
  const { reservation, actions } = useContext(CheckoutContext);

  return (
    <div>
      <CheckoutTabbyModal
        open={reservation.modals.tabby}
        setOpen={actions.toggleTabbyModal}
      />
    </div>
  );
};

export default CheckoutModals;

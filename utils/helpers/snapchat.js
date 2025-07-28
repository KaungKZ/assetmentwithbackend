import { getCookie } from 'cookies-next';
import { hashValue } from './hash';

const uuid_c1 = getCookie('_scid');

export const sendAddToCartEventToSnapchat = async (reservation) => {
  if (reservation.currentStep === 1) {
    snaptr('track', 'ADD_CART', {
      price: reservation.total,
      currency: 'AED',
      item_ids: [`${reservation.package_id}`],
      item_category: 'scuba-diving',
      number_items: 1,
      uuid_c1,
    });
  }
};

export const sendPurchasedEventToSnapChat = async (data) => {
  snaptr('track', 'PURCHASE', {
    price: data.paid_amount,
    currency: 'AED',
    transaction_id: data.reference_id,
    item_ids: [`${data.package_id}`],
    item_category: 'scuba-diving',
    number_items: 1,
    uuid_c1,
    user_email: data.email,
    user_phone_number: data.phone_no,
    user_hashed_email: await hashValue(data.email),
    user_hashed_phone_number: await hashValue(data.phone_no),
  });
};

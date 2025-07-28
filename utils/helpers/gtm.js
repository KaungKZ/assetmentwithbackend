import axios from '../../lib/axios';

export const sendCheckoutEventToGTM = async (reservation) => {
  const res = await axios.get(`/api/web/cms/courses/${reservation.id}`);

  let dataLayerObject = {
    event: 'Checkout',
    step: reservation.currentStep,
    activity: res.data.data.slug,
  };

  if (reservation.reference_id && reservation.currentStep === 2) {
    dataLayerObject.transactionId = reservation.reference_id;
    dataLayerObject.email = reservation.email;
    dataLayerObject.phoneNo = reservation.phone_no;
  }

  // fire checkout event to GTM
  window.dataLayer.push(dataLayerObject);
};

export const sendPurchasedEventToGTM = (data) => {
  window.dataLayer.push({
    event: 'Purchased',
    activity: data.activity_slug,
    transactionId: data.reference_id,
    transactionTotal: data.paid_amount,
    currencyCode: data.currency,
    noOfPeople: data.no_of_people,
    phoneNo: data.phone_no,
    email: data.email,
  });
};

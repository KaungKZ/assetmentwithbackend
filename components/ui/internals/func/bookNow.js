export const bookNow = (router, details) => {
  localStorage.setItem(
    'booking',
    JSON.stringify({
      actId: details.actId,
      actName: details.actName,
      price: details.price,
      from: details.from,
    })
  );

  router.push('/booking/courses');
};

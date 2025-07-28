import { getAssetsUrl } from '../../../../../lib/func/image';

export const diveOffersData = [
  {
    id: 42,
    image_url: getAssetsUrl('/images/pages/dsd/thumbnails/aquafun.png'),
    titlePrefix: 'Promo',
    title: 'Try Scuba',
    title2: 'Diving + AquaFun',
    price: '450',
    promoPrice: '350',
    tagline:
      'Explore our comprehensive and thorough scuba diving adventure. Plus:',
    tagline2: 'FREE AquaFun Ticket!',
    twoInOne: true,
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/discover-scuba-diving/try-dive/aquafun',
  },
  {
    id: 1,
    image_url: getAssetsUrl('/images/pages/dsd/thumbnails/dhow-cruise.png'),
    titlePrefix: 'Promo',
    title: 'Try Scuba',
    title2: 'Diving + Dhow Cruise',
    price: '450',
    promoPrice: '350',
    tagline:
      'Dive into our extensive and complete try scuba diving package, Plus:',
    tagline2: 'FREE Buffet Dhow Cruise Ticket!',
    twoInOne: true,
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/discover-scuba-diving/try-dive/dhow-cruise',
  },
  {
    id: 36,
    image_url: getAssetsUrl('/images/pages/dsd/thumbnails/basic-dsd.png'),
    titlePrefix: 'Basic',
    title: 'Try',
    title2: 'Scuba Diving Package',
    price: '400',
    // promoPrice: '300',
    tagline: `Explore the underwater world with Basic Try Scuba Diving training package.`,
    // tagline2: 'FREE 1-Hour Yacht Cruise Ticket!',
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/discover-scuba-diving/try-dive/basic',
  },
];

export const betterDivesData = [
  {
    id: 4,
    image_url: getAssetsUrl('/images/pages/dsd/thumbnails/luxury-dive.png'),
    bgImg: getAssetsUrl('/images/pages/dsd/thumbnails/luxury.png'),
    title: 'Luxury Try Scuba',
    title2: 'Diving',
    price: '499',
    tagline:
      'Elevate your scuba diving adventure with <strong>pick-up</strong> & <strong>drop-off</strong> from your place of stay in Dubai.',
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/discover-scuba-diving/try-dive/luxury',
  },
  {
    id: 5,
    image_url: getAssetsUrl('/images/pages/dsd/thumbnails/vip-dive.png'),
    bgImg: getAssetsUrl('/images/pages/dsd/thumbnails/vip.png'),
    title: 'VIP Try Scuba',
    title2: 'Diving',
    price: '599',
    tagline:
      'Elevate your scuba diving experience with <strong>private transportation</strong> & <strong>one-on-one instructor</strong>',
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/discover-scuba-diving/try-dive/vip',
  },
  {
    id: 10,
    image_url: getAssetsUrl('/images/pages/dsd/thumbnails/boat-dive.png'),
    bgImg: getAssetsUrl('/images/pages/dsd/thumbnails/boat-thumb.png'),
    title: 'Try Scuba Boat',
    title2: 'Dive Trip',
    price: '1199',
    promoPrice: '699',
    tagline:
      'Explore the Depths Like a Pro with Our Discover Scuba Diving Boat Dive Package',
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/discover-scuba-diving/try-dive/boat',
  },
];

export const getModifiedDives = (localDives, apiDives) => {
  return localDives.map((data) => {
    const relatedData = apiDives.find((d) => d.id === data.id);

    if (!!relatedData) {
      return {
        ...data,
        price: relatedData.price,
        promoPrice: relatedData.promo_price,
      };
    }
  });
};

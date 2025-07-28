import { getAssetsUrl } from '../../../lib/func/image';

export const menuItems = [
  { name: 'Home', href: '/', children: false },
  {
    // try scuba diving
    name: 'Try Scuba Diving',
    href: '/discover-scuba-diving/',
    children: [
      {
        image: {
          src: getAssetsUrl('/images/menus/try-dive.png'),
          alt: 'Try Scuba Diving Promotion | DSD Packages Dubai, UAE',
        },
        // highlight: 'PROMO',
        name: '2 in 1 Try Dive',
        href: '/discover-scuba-diving/try-dive/packages',
        children: [
          {
            highlight: 'NEW',
            name: 'Try Dive + AquaFun Ticket',
            href: '/discover-scuba-diving/try-dive/aquafun',
          },
          {
            // highlight: 'PROMO',
            name: 'Try Dive + Dhow Cruise Ticket',
            href: '/discover-scuba-diving/try-dive/dhow-cruise',
          },
        ],
      },
      {
        image: {
          src: getAssetsUrl('/images/menus/vip.png'),
          alt: 'Try Scuba Diving | DSD Packages Dubai, UAE',
        },
        name: 'Try Scuba Diving',
        href: '/discover-scuba-diving/try-dive/packages#try-scuba-diving',
        children: [
          {
            name: 'Basic Try Dive',
            href: '/discover-scuba-diving/try-dive/basic',
          },
          {
            name: 'Luxury Try Dive',
            href: '/discover-scuba-diving/try-dive/luxury',
          },
          {
            highlight: '1-ON-1',
            name: 'VIP Try Dive',
            href: '/discover-scuba-diving/try-dive/vip',
          },
        ],
      },
      {
        image: {
          src: getAssetsUrl('/images/menus/boat-dive.png'),
          alt: 'Try Scuba Diving | Boat Dive Trip Packages Dubai, UAE',
        },
        name: 'Dive Trips',
        href: '/discover-scuba-diving/try-dive/packages#dive-trips',
        children: [
          {
            name: 'Boat Try Dive',
            href: '/discover-scuba-diving/try-dive/boat',
          },
        ],
      },
      {
        image: {
          src: getAssetsUrl('/images/menus/kids.png'),
          alt: 'Try Scuba Diving For Kids | DSD Packages Dubai, UAE',
        },
        name: 'For Kids',
        href: '/discover-scuba-diving/try-dive/packages#for-kids',
        children: [
          {
            highlight: '(8 to 10 years)',
            highlightColor:
              'text-gray-800 text-xs sm:-mt-[2px] -ml-1 bg-transparent border-0',
            name: 'Bubblemaker',
            href: '/discover-scuba-diving/try-dive/bubblemaker',
          },
        ],
      },
    ],
  },
  {
    name: 'Courses',
    href: '/courses/',
    children: [
      {
        name: 'Start Learning',
        href: '/courses',
        children: [
          {
            highlight: '(8 to 10 years)',
            highlightColor:
              'text-gray-800 text-xs -mt-[2px] -ml-1 bg-transparent border-0',
            name: 'Seal Team',
            href: '/courses/start-learning/padi-seal-team',
          },
          {
            name: 'Open Water Course',
            href: '/courses/start-learning/open-water-course',
          },
          {
            heading: true,
            name: 'Continue Education',
            href: '/courses#continue-learning',
          },
          {
            name: 'Advanced Open Water Course',
            href: '/courses/continue-education/advanced-open-water-course',
          },
          {
            name: 'Rescue Diver + EFR Course',
            href: '/courses/continue-education/rescue-diver-course',
          },
          {
            heading: true,
            name: 'Refresher',
            href: '/courses#refresher',
          },
          {
            name: 'ReActivate',
            href: '/courses/refresher/reactivate',
          },
        ],
      },
      {
        name: 'Speciality',
        href: '/courses#speciality',
        children: [
          {
            name: 'Enriched Air Diver (Nitrox)',
            href: '/courses/continue-education/enriched-air-diver',
          },
          {
            name: 'Emergency Oxygen Provider',
            href: '/courses/continue-education/emergency-oxygen-provider',
          },
          {
            name: 'Peak Performance Buoyancy',
            href: '/courses/continue-education/peak-performance-buoyancy',
          },
          {
            name: 'Underwater Navigation',
            href: '/courses/continue-education/underwater-navigation',
          },
          {
            name: 'Night Diver',
            href: '/courses/continue-education/night-diver',
          },
          {
            name: 'Wreck Diver',
            href: '/courses/continue-education/wreck-diver',
          },
          {
            name: 'Deep Diver',
            href: '/courses/continue-education/deep-diver',
          },
          {
            name: 'Search And Recovery',
            href: '/courses/continue-education/search-and-recovery',
          },
          {
            name: 'Sidemount',
            href: '/courses/continue-education/sidemount',
          },
        ],
      },
      {
        name: 'Become A Pro',
        href: '/courses#become-a-pro',
        children: [
          {
            name: 'Divemaster',
            href: '/courses/become-a-pro/dive-master',
          },
          {
            name: 'Assistant Instructor',
            href: '/courses/become-a-pro/assistant-instructor',
          },
          {
            name: 'OW Scuba Instructor',
            href: '/courses/become-a-pro/ow-scuba-instructor',
          },
          {
            name: 'IDC Staff Instructor',
            href: '/courses/become-a-pro/idc-staff-instructor',
          },
        ],
      },
      {
        image: {
          src: getAssetsUrl('/images/menus/5-star-rated-diving-center.png'),
          alt: 'PADI 5-Star Rated Diving Center in Dubai, UAE',
          className: 'hover:scale-100',
        },
        href: '#',
        featured: true,
      },
      // {
      //   name: 'Freedive',
      //   href: '/courses#freediver',
      //   children: [
      //     {
      //       name: 'PADI Freediver Course',
      //       href: '/courses/freedive/padi-freediver-course',
      //     },
      //   ],
      // },
    ],
  },
  {
    name: 'Certified Dive Trip',
    href: '/certified-dive-trip',
    children: false,
  },
  {
    // about
    name: 'About',
    href: '/about',
    children: [
      {
        name: 'Who We Are',
        href: '/about',
      },
      {
        name: 'Gallery',
        href: '/gallery',
      },
      {
        name: 'FAQs',
        href: '/faqs',
      },
      {
        name: 'Contact',
        href: '/contact',
      },
    ],
  },
  {
    // services
    name: 'Services',
    href: '/services',
    children: [
      {
        name: 'Equipment Rental',
        href: '/services/equipment-rental',
      },
      {
        name: 'Equipment Maintenance',
        href: '/services/equipment-maintenance',
      },
      {
        name: 'Commercial Diving',
        href: '/services/commercial-diving',
      },
    ],
  },
  { name: 'Blog', href: 'https://blog.scubadiving.ae', children: false },
  { name: 'Shop', href: 'https://shop.scubadiving.ae', children: false },
];

export const gridColNo = (no) => {
  if (no < 5) {
    return 'grid-cols-4';
  } else if (no == 5) {
    return 'grid-cols-5';
  } else if (no == 6) {
    return 'grid-cols-6';
  } else {
    return 'grid-cols-7';
  }
};

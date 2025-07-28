import { getAssetsUrl } from '../../../../lib/func/image';
import InstallmentPlan from './InstallmentPlan';

export const content = {
  details: {
    id: 8,
    heading: 'Certified Dive Trips',
    price: 700,
    from: 'boat-dive',
  },
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/dsd/dive-trip/banner.png'),
      alt: 'Certified Dive Trips Banner - Bermuda',
    },
    heading: 'Certified Dive Trips',
    breadcrumb: {
      lv1T: 'Try Dives / ',
      lv1L: '#',
      lv2T: 'Certified Dive Trips',
      lv2L: '#',
    },
    description:
      "Discover the Wonders of the Arabian Gulf with Dubai's Premier Scuba Diving Center",
    button: {
      href: '/reservation',
      text: 'Book Now',
    },
  },
  how: {
    heading: 'Certified Dive Trips',
    description: [
      <p key={1}>
        Bermuda Diving Center focuses on the ultimate diving experience,
        combining luxury, professionalism, specialized in catering to the needs
        of certified divers and offer weekly dive trips to some of the most
        breathtaking sites in the region.
      </p>,
      <p key={2}>
        Our team of certified instructors and guides are dedicated to ensuring
        your safety and enjoyment as you explore the wonders of the underwater
        world. From colorful reefs to shipwrecks, our dive sites are home to an
        incredible variety of marine life and shipwrecks with histories.
      </p>,
    ],
    steps: {
      two: {
        imageSrc: getAssetsUrl('/images/pages/dsd/steps/dive-trip/2.png'),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Administration',
        heading: 'Fill up the forms',
        paragraphs: [
          <p key={1}>
            Before participating in the dive trips, you need to fill out forms
            and submit your diving license to ensure that you meet the necessary
            requirements for the trip.
          </p>,
          <p key={2}>
            Then, you can request the booking at any time for your spot on the
            boat.
          </p>,
        ],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/dsd/steps/dive-trip/3.png'),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Experience',
        heading: 'Enjoy the dive trip',
        paragraphs: [
          <p key={1}>
            The dive trip sets off from Port Rashid, where upon arrival,
            you&apos;ll meet with the dive instructors and fellow divers for the
            adventure ahead.
          </p>,
          <p key={2}>Each dive trip consist with 2 dives.</p>,
        ],
        list: [{ name: 'Duration', value: '4 - 5 Hours' }],
      },
    },
  },
  about: {
    heading: 'About Dive Trips',
    description: [
      <p key={1}>
        Our dive trips are exclusively for certified divers, so you can rest
        assured that you&apos;ll be diving alongside fellow experienced
        enthusiasts.
      </p>,
      <p key={2}>
        Each week, we&apos;ll be updating our Instagram page with the dive
        location and all the exciting details about the upcoming weekend trip.
        Gathering point will be Port Rashid. Follow us @scubadiving.ae Instagram
        and don&apos;t miss out a chance to explore the incredible dive sites in
        Dubai.
      </p>,
    ],
    cols: [
      {
        heading: 'Take This If You Want to',
        items: [
          'Explore stunning dive sites in Dubai with certified diving professionals.',
          'Enjoy hassle-free diving experiences with organized boat trips and logistics.',
          "Dive in clear waters and discover vibrant marine life in Dubai's seas.",
          'Expand your diving skills and gain confidence in boat diving.',
          'Connect with fellow divers and create unforgettable memories on board.',
        ],
      },
    ],
    includes: [
      '2 Boat Dives',
      'Free use of poncho towels',
      'Full scuba diving gear',
      'Refreshments - fruits, juices, coffee, water',
      'Lunch (Full Meal)',
      'Certified Divemaster or Instructor local guide',
      'FREE underwater pictures and videos',
    ],
    video: {
      poster: getAssetsUrl('/images/pages/dsd/dive-trip/poster.png'),
      posterPortrait: getAssetsUrl(
        '/images/pages/dsd/dive-trip/poster-portrait.png'
      ),
      src: getAssetsUrl('/videos/dsd/certified-dive-trip.mp4'),
    },
  },
  featured: {
    heading: 'Enroll Now, Pay Later',
    description: <InstallmentPlan course={false} />,
    smHeight: 'h-[1050px]',
    sideImage: {
      src: getAssetsUrl('/images/cashew-installment.png'),
      alt: 'Cashew Installment Payment Plan',
    },
    button: {
      href: '/reservation',
      text: 'Book Now',
    },
    opposite: {
      href: '/contact',
      text: 'Contact Us',
    },
  },
  moreInfo: {
    heading: 'FAQs',
    items: [
      {
        question: 'Time Commitment?',
        answer: (
          <div className="wrapper">
            <p>Entire program: 3 - 4 hours</p>
          </div>
        ),
      },
      {
        question: 'What we can see underwater?',
        answer: (
          <div className="wrapper">
            <p>
              There is different kinds of sea creatures to see underwater in our
              diving sit: Angel fish, Goby fish, Pistol shrimp, shells, hermit
              crabs, sea urchins, sea horsesand if you&apos;re lucky Turtles.
            </p>
          </div>
        ),
      },
      {
        question: 'Is it possible to dive with contact lens or glasses?',
        answer: (
          <div className="wrapper">
            <p>
              Underwater everything looks 33% visually larger than outside of
              the water. Using soft contact lenses are fine. Anyway we will
              provide you pre-powered masks upon your requests, free of charge.
            </p>
          </div>
        ),
      },
      {
        question: 'Should i buy scuba gear?',
        answer: (
          <div className="wrapper">
            <p>
              No, we will provide all the equipments needed for the dive. All
              you have to bring is your swim wear.
            </p>
          </div>
        ),
      },
    ],
  },
  relatedData: {
    heading: 'More Dive Adventures',
    data: [
      {
        image_url: getAssetsUrl('/images/pages/dsd/thumbnails/aquafun.png'),
        title: 'Try Scuba',
        title2: 'Diving + AquaFun',
        price: '400',
        tagline: `Explore our comprehensive and thorough scuba diving adventure. Plus:`,
        tagline2: 'FREE AquaFun Ticket!',
        twoInOne: true,
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/discover-scuba-diving/try-dive/aquafun',
      },
      {
        image_url: getAssetsUrl('/images/pages/dsd/thumbnails/luxury-dive.png'),
        bgImg: getAssetsUrl('/images/pages/dsd/thumbnails/luxury.png'),
        title: 'Luxury Try',
        title2: 'Scuba Diving',
        price: '500',
        tagline:
          'Indulge in a premium scuba diving experience with our Luxury Dive Package.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/discover-scuba-diving/try-dive/luxury',
      },
      {
        image_url: getAssetsUrl('/images/pages/dsd/thumbnails/dhow-cruise.png'),
        title: 'Try Scuba',
        title2: 'Diving + Dhow Cruise',
        price: '400',
        tagline:
          'Dive into our extensive and complete try scuba diving package, Plus:',
        tagline2: 'FREE Buffet Dhow Cruise Ticket!',
        twoInOne: true,
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/discover-scuba-diving/try-dive/dhow-cruise',
      },
    ],
  },
  fixedMenu: {
    button: {
      href: '/reservation',
      text: 'Book Now',
    },
  },
};

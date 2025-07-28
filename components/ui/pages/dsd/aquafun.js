import { getAssetsUrl } from '../../../../lib/func/image';
import InstallmentPlan from './InstallmentPlan';

export const content = {
  details: {
    id: 42,
    heading: 'Try Dive + Aquafun Ticket',
    price: 350,
    from: 'try-dive',
  },
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/dsd/aquafun/banner.png'),
      alt: 'Try Dive + Aquafun Ticket Banner - Bermuda',
    },
    heading: 'Try Dive + Aquafun Ticket',
    breadcrumb: {
      lv1T: 'Try Dives / ',
      lv1L: '#',
      lv2T: 'Aquafun Ticket',
      lv2L: '#',
    },
    description:
      "Explore Dubai's mesmerizing underwater realm through Bermuda Diving Center's 'Try Scuba Diving' deal, and receive a bonus luxury Aquafun ticket!",
    button: {
      href: '/reservation',
      text: 'Book Now',
    },
  },
  how: {
    heading: 'Try Scuba Diving + Aquafun Ticket',
    description: [
      <p key={1}>
        Discover the stunning underwater world of Dubai with our &quot;Discover
        Scuba Diving&quot; package, Our expert instructors provide safe and
        enjoyable diving experiences. We pride ourselves on delivering
        professional service with a friendly attitude, making your experience
        unforgettable.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/dsd/steps/promo/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'Basic Knowledge',
        heading: 'Classroom Briefing',
        paragraphs: [
          <p key={1}>
            At Bermuda Diving Center, we prioritize proper education and
            training for a great scuba diving experience. Providing a
            comprehensive classroom briefing in our luxurious facilities.
          </p>,
          <p key={2}>
            How to use the scuba gear, basic hand signals, and diving safety. We
            take the time to answer any questions or concerns, ensuring you feel
            confident before entering the water.
          </p>,
        ],
        list: [{ name: 'Duration', value: '30 mins' }],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/dsd/steps/promo/2.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'Practical  Knowledge',
        heading: 'Shallow Water Training',
        paragraphs: [
          <p key={1}>
            Apply scuba diving knowledge with our expert instructors in shallow
            waters. Learn practical gear application from highly trained and
            experienced instructors, ensuring safety and confidence throughout
            the complete dive.
          </p>,
          <p key={2}>
            With Bermuda Diving Center, you can rest assured that you&apos;re in
            safe and capable hands as you begin your scuba diving journey.
          </p>,
        ],
        list: [{ name: 'Duration', value: '30 mins' }],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/dsd/steps/promo/3.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'DISCOVER UNDERWATER',
        heading: 'Scuba Diving Experience',
        paragraphs: [
          <p key={1}>
            The moment you&apos;ve been waiting for has arrived!. Begin your
            scuba diving adventure with expert instructors, diving deeper from
            shallow waters to explore the underwater world up to 6 - 8 meters
            (20 - 26 feet).
          </p>,
          <p key={2}>
            As you swim alongside stunning marine life, you&apos;ll have the
            opportunity to interact with them up close and personal. And to
            ensure that your memories last a lifetime, we&apos;ll capture your
            experience with photos and videos.
          </p>,
        ],
        list: [{ name: 'Duration', value: '30 - 45 mins' }],
      },
    },
  },
  about: {
    heading: 'About Try Scuba Diving',
    description: [
      <p key={1}>
        Experience scuba diving at Lamer South Beach in Jumeirah 3, Dubai with
        Bermuda Diving Center&apos;s &apos;Try Scuba Diving&apos; package. The
        session takes a maximum of 3 to 4 hours.
      </p>,
    ],
    heading2: 'No swimming skills required',
    description2: [
      <p key={1}>
        Anyone above the age of 10 can try scuba diving with us. You will dive
        up to 6 - 8 meters (20 - 26 feet) while being accompanied by our
        experienced instructors
      </p>,
    ],
    cols: [
      {
        heading: 'Take This If You Want to',
        items: [
          'Discover if scuba diving is for you',
          'Realize what it feels like to be a human who can breath underwater',
          'Discover the beauty of underwater world',
          'Use scuba gear and get a basic understanding',
          'Gain confidence and learn valuable skills that will prepare you for future scuba diving adventures.',
        ],
      },
    ],
    includes: [
      'Transportation from dive center to the dive site',
      'Scuba gear for use',
      'Towels and slippers for use',
      'Popcorn, juices, coffee, slush, water',
      'Underwater pictures and videos',
      'Aquafun ticket',
      'Certification of completion',
    ],
    video: {
      poster: getAssetsUrl('/images/pages/dsd/aquafun/poster.png'),
      posterPortrait: getAssetsUrl(
        '/images/pages/dsd/aquafun/poster-portrait.png'
      ),
      src: getAssetsUrl('/videos/dsd/aquafun.mp4'),
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
        question: 'Available Languages?',
        answer: (
          <div className="wrapper">
            <p>English, Arabic, Hindi, Tagalog, Urdu, Malayalam </p>
          </div>
        ),
      },
      {
        question: 'Time Commitment?',
        answer: (
          <div className="wrapper">
            <p>Entire program: 3 - 4 hours</p>
          </div>
        ),
      },
      {
        question: 'Swimming skills are required?',
        answer: (
          <div className="wrapper">
            <p>
              Having knowledge of swimming skills are not required to try scuba
              diving.
            </p>
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
        question: "What's the minimum age?",
        answer: (
          <div className="wrapper">
            <p>Minimum 10 years and above</p>
          </div>
        ),
      },
      {
        question: 'Can we celebrate our special occasions?',
        answer: (
          <div className="wrapper">
            <p>
              Underwater proposals, birthday surprises and anniversary
              celebrations are done as a complimentary based on prior requests.
            </p>
          </div>
        ),
      },
      {
        question: 'Should i buy scuba gear?',
        answer: (
          <div className="wrapper">
            <p>
              No, We will provide all the equipments needed for the dive. All
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
        image_url: getAssetsUrl('/images/pages/dsd/thumbnails/luxury-dive.png'),
        bgImg: getAssetsUrl('/images/pages/dsd/thumbnails/luxury.png'),
        title: 'Luxury Try',
        title2: 'Scuba Diving',
        price: 499,
        tagline:
          'Indulge in a premium scuba diving experience with our Luxury Dive Package.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/discover-scuba-diving/try-dive/luxury',
      },
      {
        image_url: getAssetsUrl('/images/pages/dsd/thumbnails/vip-dive.png'),
        bgImg: getAssetsUrl('/images/pages/dsd/thumbnails/vip.png'),
        title: 'VIP Try',
        title2: 'Scuba Diving',
        price: 599,
        tagline:
          'Experience the ultimate personalized scuba diving adventure with our VIP Package, a one-on-one instructor.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/discover-scuba-diving/try-dive/vip',
      },
      {
        image_url: getAssetsUrl('/images/pages/dsd/thumbnails/dhow-cruise.png'),
        title: 'Try Scuba',
        title2: 'Diving + Dhow Cruise',
        price: 400,
        promoPrice: 350,
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

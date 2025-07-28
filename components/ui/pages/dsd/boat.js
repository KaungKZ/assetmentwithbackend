import { getAssetsUrl } from '../../../../lib/func/image';
import InstallmentPlan from './InstallmentPlan';

export const content = {
  details: {
    id: 10,
    heading: 'Try Scuba Diving - Boat Dive',
    price: 700,
    from: 'boat-dive',
  },
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/dsd/boat-dive/banner.png'),
      alt: 'Try Scuba Diving - Boat Dive Banner - Bermuda',
    },
    heading: 'Try Scuba Diving - Boat Dive',
    breadcrumb: {
      lv1T: 'Try Dives / ',
      lv1L: '#',
      lv2T: 'Boat Dive',
      lv2L: '#',
    },
    description:
      'Explore the Depths Like a Pro with Our Discover Scuba Diving Boat Dive Package',
    button: {
      href: '/reservation',
      text: 'Book Now',
    },
  },
  how: {
    heading: 'Discover Scuba Diving - Boat Dive',
    description: [
      <p key={1}>
        Are you ready for a once-in-a-lifetime experience in Dubai? Try our
        &apos;Discover Scuba Diving - Boat dive&apos; package offers a complete
        and immersive scuba diving experience same as an experienced diver,
        offered by Bermuda Diving Center. Our expert instructors will provide
        you with a safe and enjoyable introduction to scuba diving, allowing you
        to explore the stunning underwater world of Dubai.
      </p>,
      <p key={2}>
        You&apos;ll get to explore deeper waters with our expert instructors on
        a boat dive and have the opportunity to see a wide variety of marine
        life up close and personal, while experiencing the thrill and freedom of
        being underwater. With our boat dive package, you&apos;ll make
        unforgettable memories and discover a new passion for scuba diving that
        will last a lifetime.
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
            training for a great scuba diving experience. As the VIP Scuba
            diver, you&apos;ll be guided by a private instructor and private
            briefing in our luxurious facilities. Our professional and friendly
            staff will guide you through an introduction to scuba diving, teach
            you about scuba gear and basic hand signals, and help you develop
            the skills you need to dive safely and confidently.
          </p>,
          <p key={2}>
            We understand that everyone learns differently, so our private
            instructor will customize the briefing to your specific needs and
            preferences.
          </p>,
        ],
        list: [{ name: 'Duration', value: '30 mins' }],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/dsd/steps/boat/2.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'Practical  Knowledge',
        heading: 'Pool Training',
        paragraphs: [
          <p key={1}>
            Before heading out to the open sea for your boat dive experience,
            our professional instructors will provide you with thorough training
            in our pool.
          </p>,
          <p key={2}>
            You&apos;ll learn essential skills such as breathing underwater,
            communicating with hand signals, and equalizing ear pressure. In
            addition, you&apos;ll have the opportunity to practice basic
            techniques like clearing water from your mask, recovering a
            regulator, and ascending and descending safely.
          </p>,
        ],
        list: [{ name: 'Duration', value: '30 mins' }],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/dsd/thumbnails/boat-dive.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'DISCOVER UNDERWATER',
        heading: 'Scuba Diving Experience',
        paragraphs: [
          <p key={1}>
            The moment you&apos;ve been waiting for has arrived! Once
            you&apos;re comfortable with the basics, it&apos;s time to climb
            aboard our luxurious boat and head out to explore the stunning
            underwater world of Dubai. With our expert instructors, you&apos;ll
            dive up to 10 - 12 meters (33 - 39 feet).
          </p>,
          <p key={2}>
            Our priority is your safety and enjoyment, and our experienced
            instructors will guide and assist you throughout the dive, making
            your experience fun, safe, and memorable.
          </p>,
        ],
        list: [
          { name: 'Total Duration', value: '3 hours' },
          { name: 'Underwater Duration', value: '30 - 45 mins' },
        ],
      },
    },
  },
  about: {
    heading: 'About Discover Scuba Diving',
    description: [
      <p key={1}>
        Experience scuba diving at a premium dive site in an island in Dubai
        with Bermuda Diving Center&apos;s &apos;Discover Scuba Diving&apos;
        package. Our expert instructors will guide you on an actual dive up to
        10 - 12 meters (33 - 39 ft) deep.
      </p>,
      <p key={2}>
        With a basic knowledge of swimming, and anyone above 10 years old can
        join. The session takes 5 - 6 hours. Join us for an unforgettable
        adventure!
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
          'Dive deeper up to 12 meters (39 feet)',
        ],
      },
    ],
    includes: [
      'Transportation from dive center to the dive site',
      'Free use of full scuba gear',
      'Free use of towels and slippers',
      'Refreshments - popcorn, juices, coffee, slush, water',
      'Underwater pictures and videos',
    ],
    video: {
      poster: getAssetsUrl('/images/pages/dsd/boat-dive/poster.png'),
      posterPortrait: getAssetsUrl(
        '/images/pages/dsd/boat-dive/poster-portrait.png'
      ),
      src: getAssetsUrl('/videos/dsd/boat-try-dive.mp4'),
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
        image_url: getAssetsUrl('/images/pages/dsd/thumbnails/aquafun.png'),
        title: 'Try Scuba',
        title2: 'Diving + AquaFun',
        price: 400,
        promoPrice: 350,
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
        price: 499,
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

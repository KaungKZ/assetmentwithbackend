import { getAssetsUrl } from '../../../../lib/func/image';
import InstallmentPlan from './InstallmentPlan';

export const content = {
  details: {
    id: 36,
    heading: 'Bubblemaker',
    price: 450,
    from: 'try-dive',
  },
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/dsd/bubble-maker/banner.png'),
      alt: 'Bubblemaker Banner - Bermuda',
    },
    heading: 'Bubblemaker',
    breadcrumb: {
      lv1T: 'Try Dives / ',
      lv1L: '#',
      lv2T: 'Bubblemaker',
      lv2L: '#',
    },
    description:
      'Bubblemaker is as fun as it sounds - a chance for kids to make bubbles by scuba diving. ',
    button: {
      href: '/reservation',
      text: 'Book Now',
    },
  },
  how: {
    heading: 'Try Bubblemaker',
    description: [
      <p key={1}>
        The &quot;Bubblemaker&quot; program is more than just child&quot;s play
        – it&quot;s a chance to discover an underwater adventure. Designed for
        kids aged 8 and up, this unique program allows kids to get a taste of
        scuba diving in a safe and controlled environment. Beyond the fun and
        excitement, children also get to learn essential skills, gain confidence
        underwater, and discover a passion that could last a lifetime. With
        expert guidance and top-of-the-line equipment, every child can discover
        the enchantment of the underwater realm, all while blowing bubbles!.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/padi-seal-team/1.png'
        ),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'Basic Knowledge',
        heading: 'Introduction',
        paragraphs: [
          <p key={1}>
            In this introductory session it&apos;s important to understand the
            basics of scuba diving. Child will learn about the equipment, its
            functionality, and the fundamental safety guidelines.
          </p>,
          <p key={2}>
            Our trained instructors will provide an engaging briefing, ensuring
            that children understand the importance of communication signs and
            how to use their gear properly.
          </p>,
        ],
        list: [{ name: 'Total time commitment', value: '3 hours' }],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/padi-seal-team/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'ENJOY THE DIVE',
        heading: 'Pool Experience',
        paragraphs: [
          <p key={1}>
            With a firm understanding of the basics, it&apos;s time for the
            underwater experience! Under the close supervision of our certified
            instructors, children will enter a shallow pool with their scuba
            gear, and start their underwater adventure.
          </p>,
          <p key={2}>
            This is ideal for building confidence and mastering key skills. kids
            will practice breathing underwater, regulating buoyancy, and moving
            around with fins.
          </p>,
        ],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/dsd/steps/bubblemaker/3.png'),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'COMPLETE',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Completion of the &quot;Bubblemaker&quot; program is a moment of
            achievement. To remember this special experience, kid will receive a
            certification of experience.
          </p>,
          <p key={2}>
            This certification not only serves as a memento of their underwater
            journey but also lays the groundwork for further scuba diving
            courses in the future.
          </p>,
        ],
      },
    },
  },
  about: {
    heading: 'About Try Scuba Diving',
    description: [
      <p key={1}>
        Experience scuba diving at Lamer South Beach in Jumeirah 3, Dubai with
        Bermuda Diving Center&apos;s &apos;Discover Scuba Diving&apos; package.
        The session takes a maximum of 3 to 4 hours.
      </p>,
    ],
    heading2: 'No swimming skills required',
    description2: [
      <p key={1}>
        Anyone between the age of 8 - 10 can try bubblemaker with us. The kid
        will dive in a pool up to 2 - 3 meters while being accompanied by our
        experienced instructors.
      </p>,
    ],
    cols: [
      {
        heading: 'Take This If You Want to',
        items: [
          "Take Your Child's Love for the Water to the Next Level",
          "Develop Your Child's Confidence in the Water",
          'Discover the Joy of Scuba Diving with Your Kids',
        ],
      },
    ],
    includes: [
      'Scuba gear for use',
      'Towels and slippers for use',
      'Popcorn, juices, coffee, slush, water',
      'Underwater pictures and videos',
      'Certification of completion',
    ],
    video: {
      poster: getAssetsUrl('/images/pages/dsd/bubble-maker/poster.png'),
      posterPortrait: getAssetsUrl(
        '/images/pages/dsd/bubble-maker/poster-portrait.png'
      ),
      src: getAssetsUrl('/videos/dsd/bubblemaker.mp4'),
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
            <p>Between 8 and 10 years old</p>
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
        image_url: getAssetsUrl('/images/pages/dsd/thumbnails/vip-dive.png'),
        bgImg: getAssetsUrl('/images/pages/dsd/thumbnails/vip.png'),
        title: 'VIP Try',
        title2: 'Scuba Diving',
        price: '600',
        tagline:
          'Experience the ultimate personalized scuba diving adventure with our VIP Package, a one-on-one instructor.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/discover-scuba-diving/try-dive/vip',
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

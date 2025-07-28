import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/wreck-diver.png'),
      alt: 'PADI Wreck Diver Speciality Banner - Bermuda',
    },
    heading: 'PADI Wreck Diver Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Wreck Diver Speciality',
    },
    description:
      'Explore sunken histories with PADI Wreck Diver Speciality at Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Wreck Diver Speciality',
    description: [
      <p key={1}>
        The PADI Wreck Diver Speciality at Bermuda Diving Center is designed for
        divers who want to explore sunken history and learn how to safely
        penetrate wrecks.
      </p>,
      <p key={2}>
        Bermuda Diving Center has access to many wrecks sites in Dubai. Our
        experienced instructors will guide you through the process of exploring
        these underwater time capsules and teach you how to do it safely.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/open-water/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'eLearning',
        paragraphs: [
          <p key={1}>
            You will start with studying the basics of wreck diving and learn
            about the different types of wrecks, hazards, and how to plan your
            dives.
          </p>,
          <p key={2}>
            Our experienced instructors will teach you how to properly research
            and prepare for a wreck dive.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value: 'PADI Advanced Open Water Diver or qualifying certification',
          },
          { name: 'Minimum age', value: '15 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/wreck-diver/2.png'),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool & Open Water Sessions',
        paragraphs: [
          <p key={1}>
            In this step, you will practice the techniques learned in the
            knowledge development phase in confined and open water dives.
          </p>,
          <p key={2}>
            You will learn how to properly navigate inside the wreck, how to
            safely enter and exit, and how to use lines and reels to explore the
            wreck.
          </p>,
        ],
        list: [{ name: 'Duration', value: '2 - 3 days' }],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/wreck-diver/3.png'),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Once you have successfully completed the knowledge development and
            confined and open water dives, you will be awarded the PADI Wreck
            Diver certification from Bermuda Diving Center.
          </p>,
          <p key={2}>
            With this certification, you can explore and penetrate many exciting
            wrecks in Dubai and around the world.
          </p>,
        ],
      },
    },
  },
  about: {
    heading: 'About PADI',
    description: [
      <p key={1}>
        PADI is the world’s leading scuba diver training organization.
      </p>,
      <p key={2}>
        PADI is a worldwide organization with 135,000+ certified PADI
        Professionals who have issued over 25 million certifications globally.
        The PADI System of diver education is based on progressive training that
        introduces skills, safety information, and local environmental knowledge
        in stages. PADI courses are student-centered, emphasizing practice and
        real-world application.
      </p>,
    ],
    cols: [
      {
        heading: 'Take This Course If You Want to',
        items: [
          'Explore fascinating wreck sites and uncover hidden underwater history.',
          'Develop specialized skills for safe wreck diving and navigation techniques.',
          'Learn to plan, measure, and map wrecks for efficient exploration.',
          'Gain confidence in penetrating inside wrecks and safely navigating confined spaces.',
          'Enhance your buoyancy control and finesse while diving wreck sites.',
        ],
      },
    ],
    includes: [
      'PADI Wreck Diver eLearning',
      'DAN insurance',
      'Free use of full scuba gear including underwater slate and pencil',
      'Free use of towels and slippers',
      'Refreshments - popcorn, juices, coffee, slush, water',
      'Certification of Completion',
      '15% discounts for all equipments and services',
      'Privileged Dive trips every weekend at a discounted price',
    ],
  },
  featured: {
    heading: 'Enroll Now, Pay Later',
    description: <InstallmentPlan />,
    smHeight: 'h-[1050px]',
    sideImage: {
      src: getAssetsUrl('/images/cashew-installment.png'),
      alt: 'Cashew Installment Payment Plan',
    },
    button: {
      href: '/reservation',
      text: 'Enroll Now',
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
        question: 'What is the PADI Wreck Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Wreck Diver course is a specialty scuba diving course
              that teaches you how to explore and safely navigate through
              shipwrecks and other underwater wrecks.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the Requirements for taking the PADI Wreck Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Wreck Diver course, you must be a certified
              PADI Advanced Open Water Diver or have a qualifying certification
              from another training organization. You must also be at least 15
              years old and have logged at least 20 dives.
            </p>
          </div>
        ),
      },
      {
        question: 'What will I learn during the PADI Wreck Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              During the course, you&apos;ll learn techniques for exploring
              wrecks, including how to properly plan and execute a wreck dive,
              how to navigate through overhead environments, and how to avoid
              potential hazards. You&apos;ll also learn about the history and
              preservation of wrecks and how to document and map them.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI Wreck Diver course take?',
        answer: (
          <div className="wrapper">
            <p>
              The course typically takes 2 - 3 days to complete, with a
              combination of eLearning, pool or confined water dives, and open
              water wreck dives.
            </p>
          </div>
        ),
      },
      {
        question:
          'Do I need special equipment for the PADI Wreck Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              It is recommended to have scuba gear, a dive light and a wreck
              reel or spool for navigation during the dives. However, Bermuda
              Diving Center provide full gear as part of the course fee. You may
              also need a dive computer and a surface marker buoy (SMB).
            </p>
          </div>
        ),
      },
      {
        question: 'Available Languages',
        answer: (
          <div className="wrapper">
            <p>English</p>
            <p>Arabic*</p>
            <p>Hindi*</p>
            <p>Tagalog*</p>
            <p>Urdu*</p>
            <p>Malayalam*</p>

            <p className="text-black">
              * Need to select 1-on-1 add-on at checkout
            </p>
          </div>
        ),
      },
    ],
  },
  relatedData: {
    heading: 'Recommended Courses',
    data: [
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/deep-diver.png'
        ),
        title: 'PADI Deep Diver',
        title2: 'Speciality',
        price: '1,499',
        vat: true,
        tagline:
          'Unlock the mysteries of the deep and push your limits with PADI Deep Diver Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/deep-diver',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/search-and-recovery.png'
        ),
        title: 'PADI Search And',
        title2: 'Recovery Speciality',
        price: '1,899',
        vat: true,
        tagline:
          "Be the hero and find what's lost beneath the waves with PADI Search and Recovery Course.",
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/search-and-recovery',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/sidemount.png'
        ),
        title: 'PADI Sidemount',
        title2: 'Speciality',
        price: '2,499',
        vat: true,
        tagline:
          'Discover a new way to dive and experience the freedom of movement with PADI Sidemount Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/sidemount',
      },
    ],
  },
  fixedMenu: {
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
};

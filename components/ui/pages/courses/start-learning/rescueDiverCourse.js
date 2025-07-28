import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/rescue-diver.png'),
      alt: 'PADI Rescue Diver Course Banner - Bermuda',
    },
    heading: 'PADI Rescue Diver + EFR Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Rescue Diver Course',
    },
    description:
      "Be Prepared for the Unexpected with Bermuda Diving Center's PADI Rescue Diver Course",
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Rescue Diver Course',
    description: [
      <p key={1}>
        Are you ready to take your scuba diving skills to the next level and
        become a more responsible and confident diver?
      </p>,
      <p key={2}>
        The PADI Rescue Diver course at Bermuda Diving Center s designed to
        equip you with the knowledge and skills necessary to prevent and manage
        diving emergencies. This course is both challenging and rewarding, and
        it will give you the confidence to act effectively in a variety of
        emergency situations.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/open-water/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'eLearning + Classroom',
        paragraphs: [
          <p key={1}>
            The PADI Rescue Diver course, including the Emergency First Response
            (EFR) Course, starts with online eLearning, followed by a classroom
            session. This combination provides the theoretical background
            necessary to understand the rescue techniques, skills, and first aid
            you&apos;ll learn in the course. You&apos;ll gain knowledge about
            dive-related problems, as well as how to respond to emergency
            situations.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value: 'Advanced Open Water Diver',
          },
          { name: 'Minimum age', value: '12 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/rescue-diver/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Confined and Open Water Training',
        paragraphs: [
          <p key={1}>
            In this step, you&apos;ll practice and develop your rescue skills in
            both confined and open water environments. You&apos;ll learn
            techniques for rescuing panicked and unresponsive divers, managing
            underwater problems, and responding to diving emergencies.
          </p>,
          <p key={2}>
            You&apos;ll also learn about self-rescue and diver stress, and
            you&apos;ll develop the skills and confidence to handle emergency
            situations.
          </p>,
        ],
        list: [{ name: 'Duration', value: '4 - 5 days' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/rescue-diver/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completion of the course, including the PADI Rescue Diver
            certification, you&apos;ll earn the EFR Certification. This
            comprehensive certification is an essential step for those who wish
            to pursue professional diving or leadership roles, but it is also a
            valuable skill set for any diver who wants to be prepared for the
            unexpected.
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
          'Learn crucial lifesaving skills in both diving and emergency response.',
          'Gain the confidence to handle diving emergencies and assist others.',
          'Expand your knowledge and become a safer and more capable diver.',
          'Enhance your problem-solving abilities and quick decision-making underwater.',
          'Prepare yourself for leadership roles and professional diving certifications.',
        ],
      },
    ],
    includes: [
      'PADI Rescue Diver eLearning + EFR eLearning',
      'DAN insurance',
      'Free use of full scuba gear',
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
        question: 'What is the PADI Rescue Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Rescue Diver course is designed to teach divers how to
              prevent and manage dive-related emergencies. It focuses on
              developing skills and knowledge needed to manage stress, recognize
              and respond to emergencies, and rescue divers in distress.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the Requirements for the PADI Rescue Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Rescue Diver course, you must be at least 12
              years old, have a PADI Advanced Open Water certification (or
              equivalent), have completed EFR Primary and Secondary Care
              training within the past 24 months, and have at least 20 logged
              dives.
            </p>
          </div>
        ),
      },
      {
        question:
          'How long does the PADI Rescue Diver course take to complete?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Rescue Diver course typically takes 4 to 5 days to
              complete, and includes Emergency First Response (EFR) eLearning &
              classroom, knowledge development, confined water skill practice,
              and open water scenarios.
            </p>
          </div>
        ),
      },
      {
        question: 'What will I learn during the PADI Rescue Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              During the PADI Rescue Diver course, you will learn how to prevent
              and manage dive-related emergencies, including how to recognize
              and respond to panicked and unresponsive divers, how to provide
              rescue breathing and first aid, and how to manage dive accidents.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the benefits of taking the PADI Rescue Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Rescue Diver course is a great way to improve your diving
              skills and confidence, and to learn how to help others in case of
              an emergency. It is also a prerequisite for many professional
              level dive courses.
            </p>
          </div>
        ),
      },
      {
        question:
          'Do I need my own equipment for the PADI Rescue Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              It is recommended to have basic scuba gear. However, Bermuda
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
          '/images/pages/courses/thumbnails/enriched-air-diver.png'
        ),
        title: 'PADI Enriched Air Diver',
        title2: '(Nitrox) Course',
        price: '799',
        vat: true,
        tagline:
          'Explore the vast ocean and sail in luxury with our Scuba Dive + Yacht Cruise Ticket package!',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/enriched-air-diver',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/emergency-oxygen-provider.png'
        ),
        title: 'PADI Emergency Oxygen',
        title2: 'Provider Course',
        price: '799',
        vat: true,
        tagline:
          'Be the life-saving hero, learn PADI Emergency Oxygen Provider course today!',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/emergency-oxygen-provider',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/peak-performance-buoyancy.png'
        ),
        title: 'PADI Peak Performance',
        title2: 'Buoyancy Course',
        price: '899',
        vat: true,
        tagline:
          'Unlock your potential, perfect your dive skills with PADI Peak Performance Buoyancy course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/peak-performance-buoyancy',
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

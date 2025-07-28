import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/enriched-air-diver.png'),
      alt: 'Enriched Air Diver Banner - Bermuda',
    },
    heading: 'PADI Enriched Air (Nitrox) Diver Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'Enriched Air Diver',
    },
    description:
      "Dive Longer and Safer with Bermuda Diving Center's PADI Enriched Air Diver Speciality",
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Enriched Air (Nitrox) Diver Speciality',
    description: [
      <p key={1}>
        Are you looking to maximize your dive time and stay underwater longer?
        Do you want to reduce the risk of decompression sickness?
      </p>,
      <p key={2}>
        Then the PADI Enriched Air Diver course at Bermuda Diving Center is for
        you. Also known as &quot;Nitrox,&quot; enriched air contains a higher
        percentage of oxygen than normal air, which can increase your dive time
        and allow you to spend more time exploring the underwater world.
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
            The PADI Enriched Air Diver course starts with online eLearning,
            which provides the theoretical background necessary to understand
            the benefits and risks of diving with enriched air.
          </p>,
          <p key={2}>
            You&apos;ll learn about the physiology of diving with oxygen-rich
            gases, how to analyze the oxygen content of your tank, and how to
            plan and execute enriched air dives.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value: 'PADI Open Water Diver (or qualifying certification)',
          },
          { name: 'Minimum age', value: '12 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/enriched-air-diver/2.png'
        ),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Classroom Session',
        paragraphs: [
          <p key={1}>
            In this step, you&apos;ll apply the knowledge gained from the online
            eLearning to practical scenarios.
          </p>,
          <p key={2}>
            You&apos;ll learn how to analyze the oxygen content of your tank,
            how to plan and execute enriched air dives, and how to safely handle
            enriched air equipment.
          </p>,
        ],
        list: [{ name: 'Duration', value: '1 hour' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/enriched-air-diver/3.png'
        ),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            After completing the online eLearning and practical application
            portions of the course, you&apos;ll receive the PADI Enriched Air
            Diver certification.
          </p>,
          <p key={2}>
            This globally recognized certification enables you to dive with
            enriched air anywhere in the world, giving you more bottom time and
            a safer diving experience.
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
          'Extend your bottom time and maximize your diving experience.',
          'Dive with reduced nitrogen levels, leading to shorter surface intervals.',
          'Increase your safety margins and reduce the risk of decompression sickness.',
          'Explore a wider range of dive sites and dive profiles.',
          'Improve your energy levels and feel less fatigued after dives.',
        ],
      },
    ],
    includes: [
      'PADI Enriched Air (Nitrox) eLearning',
      'Use of O2 analyzer and Nitrox tank',
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
        question: 'What is Enriched Air Nitrox?',
        answer: (
          <div className="wrapper">
            <p>
              Enriched Air Nitrox is a type of breathing gas that has a higher
              oxygen content than air. Most Nitrox mixes contain anywhere from
              28% to 36% oxygen and only 64% to 72% nitrogen. This makes Nitrox
              a desired gas to dive with as there is a lesser build up of
              nitrogen in your body, allowing you to dive longer.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the benefits of diving with Enriched Air Nitrox?',
        answer: (
          <div className="wrapper">
            <p>
              Diving with Enriched Air Nitrox can provide longer bottom times,
              shorter surface intervals, and reduce fatigue during repetitive
              dives.
            </p>
          </div>
        ),
      },
      {
        question: 'Can I dive deeper with Nitrox?',
        answer: (
          <div className="wrapper">
            <p>
              No, Enriched Air Nitrox does not provide any significant safety
              advantage when diving deeper. In fact, diving with enriched air
              nitrox has specific depth limitations and considerations due to
              the higher oxygen content. It is primarily used to extend bottom
              time and reduce the risk of decompression sickness for
              recreational dives within certain depth limits.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the requirements to enroll in the PADI Enriched Air Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Enriched Air Diver course, you must be at
              least 12 years old and have a PADI Open Water Diver certification
              or equivalent.
            </p>
          </div>
        ),
      },
      {
        question: 'What does the course involve?',
        answer: (
          <div className="wrapper">
            <p>
              The course involves learning the procedures for diving with
              Enriched Air Nitrox, analyzing oxygen content in scuba tanks, and
              planning Enriched Air Nitrox dives.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does it take to complete the course?',
        answer: (
          <div className="wrapper">
            <p>
              The course takes 2 hours to complete, which includes classroom
              instruction and using analyzer to analyze the Nitrox tanks.
            </p>
          </div>
        ),
      },
      {
        question:
          'Is the PADI Enriched Air Diver certification recognized worldwide?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, all PADI certifications are recognized worldwide and is the
              most widely recognized scuba certification.
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
          '/images/pages/courses/thumbnails/emergency-oxygen-provider.png'
        ),
        title: 'PADI Emergency Oxygen',
        title2: 'Provider Speciality',
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
        title2: 'Buoyancy Speciality',
        price: '899',
        vat: true,
        tagline:
          'Unlock your potential, perfect your dive skills with PADI Peak Performance Buoyancy course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/peak-performance-buoyancy',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/underwater-navigation.png'
        ),
        title: 'PADI Underwater Navigation',
        title2: 'Speciality',
        price: '1,099',
        vat: true,
        tagline:
          "Find your way with confidence - PADI's Underwater Navigation course. Navigate, explore, and discover.",
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/underwater-navigation',
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

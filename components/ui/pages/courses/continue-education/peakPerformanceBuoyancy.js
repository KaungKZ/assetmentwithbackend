import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/peak-performance-buoyancy.png'),
      alt: 'PADI Peak Performance Buoyancy Speciality Banner - Bermuda',
    },
    heading: 'PADI Peak Performance Buoyancy Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Peak Performance Buoyancy Speciality',
    },
    description:
      'Achieve Weightless Perfection: PADI Peak Performance Buoyancy Course with Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Peak Performance Buoyancy Speciality',
    description: [
      <p key={1}>
        Buoyancy control is an essential skill for every scuba diver, as it
        enables them to conserve energy, reduce air consumption, and avoid
        damaging the underwater environment.
      </p>,
      <p key={2}>
        The PADI Peak Performance Buoyancy course at Bermuda Diving Center is
        designed to help divers refine their buoyancy skills and achieve greater
        control and comfort in the water. Our experienced instructors ensure
        that you&apos;ll receive the highest quality training.
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
            As the initial stage. Once you get registered with Bermuda Diving
            Center for your course, you&apos;ll recieve access to PADI eLearning
            portal.
          </p>,
          <p key={2}>
            You&apos;ll start by reviewing the basic principles of buoyancy,
            including how to establish neutral buoyancy, proper weighting, and
            proper breathing techniques.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value:
              'PADI Open Water Diver or qualifying entry-level certification',
          },
          { name: 'Minimum age', value: '10 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/peak-performance-buoyancy/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool & Open Water Sessions',
        paragraphs: [
          <p key={1}>
            In our on-site training pool, you&apos;ll practice various buoyancy
            control techniques, such as hovering, backward finning, and proper
            body positioning.
          </p>,
          <p key={2}>
            You&apos;ll then take your newly acquired skills to the open water.
            During your two open water dives, you&apos;ll work with your
            instructor to fine-tune your buoyancy skills and achieve peak
            performance buoyancy.
          </p>,
        ],
        list: [{ name: 'Duration', value: '2 days ' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/peak-performance-buoyancy/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completing the eLearning and dive components of the course,
            you&apos;ll earn the PADI Peak Performance Buoyancy certification.
          </p>,
          <p key={2}>
            This certification allows you to master buoyancy control, enhancing
            your diving experience. Glide effortlessly, conserve energy, and
            minimize your impact underwater. Improve trim, reduce air
            consumption, and optimize your dives.
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
          'Improve your buoyancy control and achieve effortless movement underwater.',
          'Conserve energy and reduce air consumption for longer dives.',
          'Minimize your impact on the marine environment and protect delicate ecosystems.',
          'Enhance your diving skills and become a more confident and competent diver.',
          'Optimize your trim and achieve a streamlined and comfortable diving position.',
        ],
      },
    ],
    includes: [
      'PADI Peak Performance Buoyancy eLearning',
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
        question: 'What is PADI Peak Performance Buoyancy course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Peak Performance Buoyancy course focuses on mastering
              buoyancy control. It teaches techniques to achieve precise control
              and maintain neutral buoyancy. Enhance your diving experience and
              minimize your impact on the environment.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the Requirements for the PADI Peak Performance Buoyancy course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Peak Performance Buoyancy course, you need
              to be at least 10 years old and hold a PADI Open Water Diver
              certification or an equivalent.
            </p>
          </div>
        ),
      },
      {
        question:
          'How long does the PADI Peak Performance Buoyancy course take to complete?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Peak Performance Buoyancy course typically takes one to
              two days to complete. The duration may vary based on individual
              progress and class size. It includes both theory and practical
              sessions to refine your buoyancy skills.
            </p>
          </div>
        ),
      },
      {
        question:
          'Can I complete the PADI Peak Performance Buoyancy course while on vacation?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, you can complete the PADI Peak Performance Buoyancy course
              while on vacation. The course consists of eLearning modules and
              practical dives, which can be scheduled to fit your vacation
              itinerary. Enjoy improving your buoyancy skills while exploring
              new dive destinations.
            </p>
          </div>
        ),
      },
      {
        question:
          'What equipment do I need for the PADI Peak Performance Buoyancy course?',
        answer: (
          <div className="wrapper">
            <p>
              It is recommended to have your own scuba diving gear while
              mastering your buoyancy. However, Bermuda Diving Center provide
              full gear as part of the course fee. You may also need a dive
              computer.
            </p>
          </div>
        ),
      },
      {
        question:
          'Is the PADI Peak Performance Buoyancy certification recognized worldwide?',
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
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/night-diver.png'
        ),
        title: 'PADI Night Diver',
        title2: 'Speciality',
        price: '1,199',
        vat: true,
        tagline:
          "Experience the thrill of diving after dark - PADI's Night Diver course. Explore a new world at night.",
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/night-diver',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/wreck-diver.png'
        ),
        title: 'PADI Wreck Diver',
        title2: 'Speciality',
        price: '1,499',
        vat: true,
        tagline:
          'Experience the thrill of diving into history and uncovering hidden treasures with PADI Wreck Diver Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/continue-education/wreck-diver',
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

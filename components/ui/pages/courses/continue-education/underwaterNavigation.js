import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/underwater-navigation.png'),
      alt: 'PADI Underwater Navigation Diver Speciality Banner - Bermuda',
    },
    heading: 'PADI Underwater Navigation Diver Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Underwater Navigation Diver Speciality',
    },
    description:
      'Explore the Depths with Confidence: PADI Underwater Navigator Course with Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Underwater Navigation Diver Speciality',
    description: [
      <p key={1}>
        Bermuda Diving Center is proud to offer the PADI Underwater Navigator
        course, designed to enhance your underwater navigation skills and give
        you the confidence to explore the depths with ease.
      </p>,
      <p key={2}>
        With our experienced instructors and world-class facilities, we provide
        the perfect setting for you to learn the techniques necessary to
        navigate underwater with accuracy and safety.
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
            First, you will learn the principles of underwater navigation,
            including the use of natural navigation and navigation using
            compasses.
          </p>,
          <p key={2}>
            Our experienced instructors will guide you through this process in a
            classroom setting, with engaging presentations and interactive
            discussions.
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
          '/images/pages/courses/steps/underwater-navigation/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool & Open Water Sessions',
        paragraphs: [
          <p key={1}>
            Next, you will put your newly acquired knowledge to the test in our
            pool and move on with the open water training.
          </p>,
          <p key={2}>
            You will practice navigation techniques, including estimating
            distances and navigating using a compass, in a controlled
            environment with the guidance of our skilled instructors.
          </p>,
        ],
        list: [{ name: 'Duration', value: '2 - 3 days' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/underwater-navigation/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completion of the course, you will receive your PADI Underwater
            Navigator certification from Bermuda Diving Center, a valuable
            credential that will enhance your diving experiences for years to
            come.
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
          'Master essential navigation skills to explore dive sites confidently.',
          'Improve your ability to navigate underwater and maintain direction.',
          'Enhance safety by learning how to navigate back to the entry point.',
          'Unlock new dive sites and enjoy more independent underwater adventures.',
          'Gain the skills to navigate challenging conditions and low visibility dives.',
        ],
      },
    ],
    includes: [
      'PADI Underwater Navigation eLearning',
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
        question:
          'Do I need any prior experience before taking the PADI Underwater Navigation course?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, you must be a certified Open Water Diver or equivalent and
              have logged at least 12 dives to take the PADI Underwater
              Navigation course.
            </p>
          </div>
        ),
      },
      {
        question:
          'What will I learn during the PADI Underwater Navigation course?',
        answer: (
          <div className="wrapper">
            <p>
              During the course, you will learn how to use a compass and natural
              navigation techniques to navigate underwater, estimate distance
              and time, and orient yourself in different dive environments.
            </p>
          </div>
        ),
      },
      {
        question:
          'Do I need to own a compass to take the PADI Underwater Navigation course?',
        answer: (
          <div className="wrapper">
            <p>
              It is recommended that you own a compass, but if you don&apos;t
              have one, it can be provided by the dive center for the duration
              of the course.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI Underwater Navigation course take?',
        answer: (
          <div className="wrapper">
            <p>
              The course usually takes 2 - 3 days to complete, depending on your
              pace and schedule.
            </p>
          </div>
        ),
      },
      {
        question:
          'What is the minimum age requirement for the PADI Underwater Navigation course?',
        answer: (
          <div className="wrapper">
            <p>The minimum age requirement for the course is 10 years old.</p>
          </div>
        ),
      },
      {
        question:
          'Will I need any special equipment for the PADI Underwater Navigation course?',
        answer: (
          <div className="wrapper">
            <p>
              Besides a compass, you will also need a dive computer or a timing
              device to keep track of your time and depth during the dives.
            </p>
          </div>
        ),
      },
      {
        question:
          'Can I take the PADI Underwater Navigation course as a part of the PADI Advanced Open Water course?',
        answer: (
          <div className="wrapper">
            <p>
              Yes, Underwater Navigation is one of the required dives for the
              PADI Advanced Open Water course, so you can take it as part of the
              program.
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
    ],
  },
  fixedMenu: {
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
};

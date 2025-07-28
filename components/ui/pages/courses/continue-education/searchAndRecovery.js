import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/search-and-recovery.png'),
      alt: 'PADI Search And Recovery Speciality Banner - Bermuda',
    },
    heading: 'PADI Search And Recovery Speciality',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Search And Recovery Speciality',
    },
    description:
      'Explore the depths and recover lost items with PADI Search and Recovery Diver course at Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Search And Recovery Speciality',
    description: [
      <p key={1}>
        If you&apos;re interested in finding and retrieving lost items
        underwater, the PADI Search and Recovery Diver course is for you.
      </p>,
      <p key={2}>
        This course teaches you effective techniques to search for and recover
        small to medium-sized objects, such as cameras, jewelry, and even boats.
        With the Bermuda Diving Center&apos;s experienced instructors and
        facilities, you&apos;ll receive top-notch training to become a skilled
        Search and Recovery Diver.
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
            You&apos;ll start with self-study eLearning to learn the
            fundamentals of search and recovery diving, including the equipment
            needed, planning and organizing search patterns, and effective
            techniques for locating and recovering objects underwater.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value: 'PADI Advanced Open Water Diver or qualifying certification',
          },
          { name: 'Minimum age', value: '12 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/search-and-recovery/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool & Open Water Sessions',
        paragraphs: [
          <p key={1}>
            Once you&apos;ve gained the necessary knowledge, you&apos;ll put it
            into practice with confined water dives to practice search
            techniques and perfect your buoyancy control.
          </p>,
          <p key={2}>
            You&apos;ll then move on to open water dives to apply what
            you&apos;ve learned in real-life search and recovery situations,
            under the guidance of your instructor.
          </p>,
        ],
        list: [{ name: 'Duration', value: '2 - 3 days' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/search-and-recovery/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            After completing the knowledge development and open water
            requirements, you&apos;ll earn the PADI Search and Recovery Diver
            certification from Bermuda Diving Center.
          </p>,
          <p key={2}>
            With this certification, you&apos;ll have the skills and knowledge
            to safely and effectively search for and recover lost items
            underwater, giving you a unique and valuable skillset as a diver.
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
          'Learn techniques to locate and retrieve lost objects underwater.',
          'Enhance your problem-solving and critical thinking skills in diving.',
          'Expand your knowledge in search patterns, knots, and lift techniques.',
          'Become a valuable asset in assisting with underwater recoveries.',
          'Gain confidence and be prepared to handle challenging diving situations.',
        ],
      },
    ],
    includes: [
      'PADI Search And Recovery eLearning',
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
        question: 'What is the PADI Search and Recovery Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Search and Recovery Diver course is designed to teach
              divers the knowledge and skills needed to conduct safe and
              effective search and recovery dives.
            </p>
          </div>
        ),
      },
      {
        question:
          'What will I learn in the PADI Search and Recovery Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              You will learn various search and recovery techniques, including
              search patterns, recovery methods, and specialized equipment use.
              You will also learn how to plan and execute a search and recovery
              dive while ensuring safety and proper communication with your dive
              team.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the Requirements for the PADI Search and Recovery Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Search and Recovery Diver course, you must
              be at least 12 years old and hold a PADI Advanced Open Water Diver
              certification or equivalent.
            </p>
          </div>
        ),
      },
      {
        question:
          'What equipment do I need for the PADI Search and Recovery Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              It is recommended to have basic scuba gear. However, Bermuda
              Diving Center provide full gear as part of the course fee. You may
              also need a dive computer, a surface marker buoy (SMB), compass
              and dive lines.
            </p>
          </div>
        ),
      },
      {
        question:
          'How long does the PADI Search and Recovery Diver course take to complete?',
        answer: (
          <div className="wrapper">
            <p>
              The course typically takes 2 - 3 days to complete, including
              eLearning, confined water practice, and open water dives.
            </p>
          </div>
        ),
      },
      {
        question:
          'What is the certification process for the PADI Search and Recovery Diver course?',
        answer: (
          <div className="wrapper">
            <p>
              To become a certified PADI Search and Recovery Diver, you must
              complete all course requirements and demonstrate mastery of the
              necessary skills.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the benefits of becoming a PADI Search and Recovery Diver?',
        answer: (
          <div className="wrapper">
            <p>
              As a certified PADI Search and Recovery Diver, you will have the
              skills and knowledge needed to conduct safe and effective search
              and recovery dives, which can be valuable for both recreational
              and professional diving applications. You will also have the
              opportunity to explore new dive sites and participate in exciting
              underwater adventures.
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
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/dive-master.png'
        ),
        title: 'PADI Divemaster',
        title2: 'Speciality',
        price: '4,499',
        vat: true,
        tagline:
          'Transform your passion for diving into a fulfilling career with the PADI Divemaster Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/dive-master',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/assistant-instructor.png'
        ),
        title: 'PADI Assistant',
        title2: 'Instructor Speciality',
        price: '4,499',
        vat: true,
        tagline:
          'Elevate your diving career and share your love for the underwater world with PADI Assistant Instructor Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/assistant-instructor',
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

import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/idc-staff-instructor.png'),
      alt: 'PADI IDC Staff Instructor Course Banner - Bermuda',
    },
    heading: 'PADI IDC Staff Instructor Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI IDC Staff Instructor Course',
    },
    description:
      'Join the Elite Team of Dive Professionals as a PADI IDC Staff Instructor With Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI IDC Staff Instructor Course',
    description: [
      <p key={1}>
        The PADI IDC Staff Instructor course is designed to train experienced
        instructors to teach the PADI Instructor Development Course (IDC) and
        assist with instructor-level training.
      </p>,
      <p key={2}>
        If you are passionate about diving and teaching, and have a desire to
        take your teaching skills to the next level, the IDC Staff Instructor
        course with Bermuda Diving Center is the perfect choice for you. Our
        highly experienced course directors, who are well-respected in the
        industry, will provide you with step-by-step guidance to ensure that you
        acquire a thorough understanding of the commitment.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/dive-master/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'Complete the Requirements:',
        paragraphs: [
          <p key={1}>
            To enroll in the IDC Staff Instructor course, you must be a PADI
            Master Scuba Diver Trainer with current teaching status, have at
            least 150 logged dives. Additionally, you must have completed the
            EFR Instructor Training Course as a minimum eligibility.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value:
              'PADI Open Water Scuba Instructor; 100 logged dives; CPR and First Aid certification within 24 months; medical clearance to dive',
          },
          { name: 'Minimum age', value: '18 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/ow-scuba-instructor/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Attend the IDC Staff Instructor course',
        paragraphs: [
          <p key={1}>
            During the IDC Staff Instructor course, you will learn how to
            conduct the PADI IDC and assist with instructor-level training. You
            will also learn how to evaluate and critique instructor candidates,
            as well as develop teaching materials.
          </p>,
          <p key={2}>
            At Bermuda Diving Center, we understand the level of commitment
            required to become an IDC Staff Instructor. Our experienced course
            directors ensure that all of our students meet the industry
            standards for similar positions.
          </p>,
        ],
        list: [{ name: 'Duration', value: 'Approximately a week' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/idc-staff-instructor/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Instructor',
        heading: 'Examination and certification',
        paragraphs: [
          <p key={1}>
            Upon completion of the IDC Staff Instructor course, you will receive
            certification as a PADI IDC Staff Instructor by Bermuda Diving
            Center.
          </p>,
          <p key={2}>
            As an IDC Staff Instructor, you will have the opportunity to teach
            PADI Instructor Development Courses and assist with instructor-level
            training.
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
          'Gain the ability to teach and certify new divers at all levels',
          'Expand your career opportunities in the scuba diving industry',
          'Become a role model and inspire other divers',
          'Join a community of passionate scuba diving professionals',
        ],
      },
    ],
    includes: [
      'DAN insurance only for students',
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
        question: 'What is the PADI IDC Staff Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI IDC Staff Instructor course is designed for experienced
              and certified PADI Open Water Scuba Instructors who are looking to
              further their professional dive career by teaching and certifying
              new scuba diving instructors.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the Requirements for taking the PADI IDC Staff Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              Being a certified PADI Open Water Scuba Instructor, having been an
              instructor for at least six months, having at least 100 logged
              dives, having proof of CPR and First Aid training within the last
              24 months, and being fit for diving.
            </p>
          </div>
        ),
      },
      {
        question:
          'What will I learn during the PADI IDC Staff Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              During the PADI IDC Staff Instructor course, you will learn how to
              teach and evaluate PADI Assistant Instructors, and how to assist
              Course Directors during instructor-level training. You will also
              learn how to teach and evaluate Instructor Development programs
              and how to mentor and develop new PADI Open Water Scuba
              Instructors.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI IDC Staff Instructor course take?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI IDC Staff Instructor course can take anywhere from 2 to 5
              days, depending on the instructor trainer and the
              individual&apos;s performance.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the benefits of becoming a PADI IDC Staff Instructor?',
        answer: (
          <div className="wrapper">
            <p>
              Becoming a PADI IDC Staff Instructor opens up many opportunities
              for professional dive careers. You will be able to assist in
              teaching instructor-level courses, which can help you gain more
              experience and credibility in the industry. You will also be able
              to participate in the Instructor Development program and mentor
              new instructors. Additionally, you will have access to more
              training and networking opportunities within the PADI community.
            </p>
          </div>
        ),
      },
      {
        question: 'Available Languages',
        answer: (
          <div className="wrapper">
            <p>English</p>
            <p>Arabic</p>
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
          '/images/pages/courses/thumbnails/ow-scuba-instructor.png'
        ),
        title: 'PADI OW Scuba',
        title2: 'Instructor Course',
        price: '10,999',
        vat: true,
        tagline:
          'Teach others to explore the amazing world beneath the waves with the PADI Open Water Scuba Instructor Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/ow-scuba-instructor',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/padi-free-diver.png'
        ),
        title: 'PADI Free Diver',
        title2: 'Course',
        price: '1,999',
        vat: true,
        tagline:
          'Elevate your diving career and share your love for the underwater world with PADI Assistant Instructor Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/freedive/padi-freediver-course',
      },
      {
        image_url: getAssetsUrl(
          '/images/pages/courses/thumbnails/reactivate.png'
        ),
        title: 'PADI Refresher',
        title2: 'Course',
        price: '499',
        vat: true,
        tagline:
          'Refresh your skills and regain your confidence to dive with the PADI Refresher Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/refresher/reactivate',
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

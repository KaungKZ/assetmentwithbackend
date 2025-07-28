import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/ow-scuba-instructor.png'),
      alt: 'PADI OW Scuba Instructor Course Banner - Bermuda',
    },
    heading: 'PADI OW Scuba Instructor Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI OW Scuba Instructor Course',
    },
    description:
      'Join the ranks of the dedicated professionals who teach the world’s most progressive and popular scuba diver education programs with Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI OW Scuba Instructor Course',
    description: [
      <p key={1}>
        If you&apos;re passionate about scuba diving and want to share your love
        for the underwater world with others, then becoming a PADI Open Water
        Scuba Instructor with Bermuda Diving Center is the perfect next step in
        your scuba diving career.
      </p>,
      <p key={2}>
        As a certified PADI Open Water Scuba Instructor at Bermuda Diving
        Center, you&apos;ll have the knowledge and skills to teach others how to
        scuba dive and experience the thrill of exploring the ocean. Also
        additionally an introduction towards a largest professional scuba diving
        community in Dubai.
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
            To become a PADI Open Water Scuba Instructor, you must be a
            certified PADI Divemaster or have an equivalent certification.
          </p>,
          <p key={2}>
            You&apos;ll also need to have completed the Emergency First Response
            Instructor course and have at least 100 logged dives.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value:
              'PADI Divemaster; 100 logged dives; CPR and First Aid certification within 24 months; medical clearance to dive',
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
        heading: 'Attend the Instructor Development Course',
        paragraphs: [
          <p key={1}>
            The IDC is a comprehensive training program that will prepare you to
            become a confident and competent scuba diving instructor.
          </p>,
          <p key={2}>
            The course includes classroom sessions, pool training, and open
            water dives. You&apos;ll learn how to teach the PADI System of diver
            education and gain valuable experience teaching in a controlled
            environment. Our experienced and industry ranked course directors
            will guide you through each and every step making sure you gain the
            complete knowledge with understanding.
          </p>,
        ],
        list: [{ name: 'Duration', value: 'Approximately 20 days' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/ow-scuba-instructor/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified OW Instructor',
        heading: 'Examination and certification',
        paragraphs: [
          <p key={1}>
            The Instructor examination is a two-day evaluation that tests your
            knowledge and teaching ability. It includes a written exam,
            classroom presentations, and confined and open water teaching
            evaluations.
          </p>,
          <p key={2}>
            At Bermuda Diving Center, our course directors will make sure you
            attend enough and more sample examination and study materials to
            face the examination confidently.
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
          'Gain comprehensive knowledge on scuba diving',
          'Develop teaching skills and expand your career opportunities',
          'Join a community of diving professionals who share your passion for scuba diving',
          'Help and guide passionate new divers',
        ],
      },
    ],
    includes: [
      'PADI eLearning',
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
        question: 'What is the PADI Open Water Scuba Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Open Water Scuba Instructor course is the final step in
              becoming a PADI scuba diving instructor. This course teaches you
              how to effectively teach and evaluate scuba diving skills, and
              covers topics such as risk management, marketing and sales, and
              dive theory.
            </p>
          </div>
        ),
      },
      {
        question: 'Medical Requirements',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Open Water Scuba Instructor course, you must
              have a current PADI Divemaster certification, be at least 18 years
              old, have completed the EFR Primary and Secondary Care course
              within the past 24 months, and have at least 100 logged dives.
            </p>
          </div>
        ),
      },
      {
        question:
          'How long does the PADI Open Water Scuba Instructor course take?',
        answer: (
          <div className="wrapper">
            <p>
              The course typically takes around 10-20 days to complete,
              depending on the schedule and pace of the course and individual.
            </p>
          </div>
        ),
      },
      {
        question:
          'What skills will I learn during the PADI Open Water Scuba Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              During the course, you will learn how to effectively teach and
              evaluate scuba diving skills, including open water skills,
              confined water skills, and rescue skills. You will also learn
              about risk management, dive theory, marketing and sales, and how
              to create a positive learning environment for your students.
            </p>
          </div>
        ),
      },
      {
        question:
          'What materials are required for the PADI Open Water Scuba Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              The required materials for the course include the PADI Instructor
              Manual, PADI&apos;s Guide to Teaching, the PADI Open Water Diver
              Course Prescriptive Lesson Guides, and the PADI Open Water Diver
              Quizzes and Exams.
            </p>
          </div>
        ),
      },
      {
        question:
          'How is the PADI Open Water Scuba Instructor course assessed?',
        answer: (
          <div className="wrapper">
            <p>
              The course is assessed through a combination of classroom
              presentations, confined water teaching presentations, open water
              teaching presentations, and written exams.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the benefits of becoming a PADI Open Water Scuba Instructor?',
        answer: (
          <div className="wrapper">
            <p>
              Becoming a PADI Open Water Scuba Instructor allows you to teach
              scuba diving to students all over the world, work in dive centers
              and resorts, and potentially earn a living doing what you love. It
              is also a great way to share your passion for scuba diving with
              others and help them discover the amazing world underwater.
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
            <p>Hindi</p>
            <p>Tagalog</p>
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
          '/images/pages/courses/thumbnails/idc-staff-instructor.png'
        ),
        title: 'PADI IDC STAFF',
        title2: 'Instructor Course',
        price: '4,499',
        vat: true,
        tagline:
          'Take your diving career to the next level and shape future instructors with the PADI IDC Staff Instructor Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/idc-staff-instructor',
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

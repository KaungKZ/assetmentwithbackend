import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/assistant-instructor.png'),
      alt: 'PADI Assistant Instructor Course Banner - Bermuda',
    },
    heading: 'PADI Assistant Instructor Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Assistant Instructor Course',
    },
    description:
      'Enhance your teaching abilities and gain valuable experience with PADI Assistant Instructor course at Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Assistant Instructor Course',
    description: [
      <p key={1}>
        The PADI Assistant Instructor course is the first step towards a career
        in diving. If you&apos;re passionate about diving and want to share your
        knowledge and skills with others, this course is for you.
      </p>,
      <p key={2}>
        Bermuda Diving Center offers this course with experienced course
        directors to guide you through their experience and top-notch facilities
        to help you develop the necessary skills and knowledge to become an
        effective Assistant Instructor. Also additionally an introduction
        towards a largest professional scuba diving community in Dubai.
      </p>,
    ],
    steps: {
      one: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/dive-master/1.png'),
        imageAlt: 'Step 1 - Bermuda',
        tagline: 'INITIAL KNOWLEDGE',
        heading: 'eLearning and Classroom learning',
        paragraphs: [
          <p key={1}>
            You will learn about the role and characteristics of an Assistant
            Instructor, teaching techniques and evaluation, and risk management
            and safety procedures.
          </p>,
          <p key={2}>
            Through multiple theory sessions conducted by experienced course
            directors, you will also develop your knowledge of dive theory and
            the PADI system.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value:
              'PADI Divemaster; 60 logged dives; CPR and First Aid certification within 24 months; medical clearance to dive',
          },
          { name: 'Minimum age', value: '18 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/assistant-instructor/2.png'
        ),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Confined and Open Water Training',
        paragraphs: [
          <p key={1}>
            You will develop your skills and learn to demonstrate and evaluate
            skills in confined and open water. You will also learn how to lead
            and control groups of divers.
          </p>,
          <p key={2}>
            You will also refine your diving skills to demonstration quality
            under the supervision of an instructor.
          </p>,
        ],
        list: [{ name: 'Duration', value: 'Approximately a week' }],
      },
      three: {
        imageSrc: getAssetsUrl(
          '/images/pages/courses/steps/assistant-instructor/3.png'
        ),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completion of the course, you will be certified as a PADI
            Assistant Instructor, which is the first step towards becoming a
            PADI Open Water Scuba Instructor.
          </p>,
          <p key={2}>
            With this certification, you can teach and evaluate skills under the
            supervision of a PADI course director and assist in the training of
            divers.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value: 'PADI Open Water License, Knowledge from eLearning',
          },
          { name: 'Duration', value: '5 - 6 Hours' },
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
          'Teach PADI dive courses and gain teaching experience',
          'Develop leadership skills and gain a deeper understanding  of scuba diving',
          'Conduct certain PADI programs independently',
          'Assist in dive center operations',
          'Work towards becoming a PADI Open Water Scuba Instructor',
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
        question: 'What is the PADI Assistant Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Assistant Instructor course is the first step in becoming
              a PADI Instructor. It is a comprehensive program designed to teach
              aspiring instructors how to assist with the training of open water
              divers, conduct certain PADI programs independently, and
              contribute to teaching PADI courses.
            </p>
          </div>
        ),
      },
      {
        question:
          'What are the Requirements for the PADI Assistant Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Assistant Instructor course, you must be at
              least 18 years old, have a current PADI Divemaster certification
              (or qualifying certification from another organization), have been
              a certified diver for at least six months, and have completed
              Emergency First Response Primary and Secondary Care (CPR and First
              Aid) training within the past 24 months.
            </p>
          </div>
        ),
      },
      {
        question: 'What will I learn in the PADI Assistant Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              In the PADI Assistant Instructor course, you will learn how to
              conduct certain PADI programs independently, such as the Discover
              Scuba Diving program, Peak Performance Buoyancy Specialty, and
              Project AWARE Specialty. You will also learn how to assist with
              teaching PADI courses, including confined water and open water
              training sessions. Additionally, you will develop your
              instructional skills and knowledge of PADI standards and
              procedures.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI Assistant Instructor course take?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Assistant Instructor course can be completed in a week,
              depending on the individual’s schedule and pace of learning. The
              course includes knowledge development sessions, confined water and
              open water workshops, and practical application sessions.
            </p>
          </div>
        ),
      },
      {
        question:
          'What is the difference between a PADI Assistant Instructor and a PADI Instructor?',
        answer: (
          <div className="wrapper">
            <p>
              A PADI Assistant Instructor is not yet a full-fledged PADI
              Instructor but has completed the first step in the process of
              becoming one. Assistant Instructors can teach certain PADI
              programs independently and assist with teaching other courses.
              PADI Instructors, on the other hand, have completed additional
              training and have the authority to teach all PADI courses
              independently.
            </p>
          </div>
        ),
      },
      {
        question:
          'Can I work as a dive instructor after completing the PADI Assistant Instructor course?',
        answer: (
          <div className="wrapper">
            <p>
              No, you cannot work as a dive instructor after completing the PADI
              Assistant Instructor course alone. To work as a dive instructor,
              you must complete the PADI Instructor Development Course (IDC) and
              pass the Instructor Examination (IE). The PADI Assistant
              Instructor course is the first step in this process.
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
    ],
  },
  fixedMenu: {
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
};

import { getAssetsUrl } from '../../../../../lib/func/image';
import InstallmentPlan from '../../dsd/InstallmentPlan';

export const content = {
  banner: {
    image: {
      src: getAssetsUrl('/images/pages/courses/dive-master.png'),
      alt: 'PADI Divemaster Course Banner - Bermuda',
    },
    heading: 'PADI Divemaster Course',
    breadcrumb: {
      lv1T: 'Courses / ',
      lv1L: '#',
      lv2T: 'Start Learning / ',
      lv2L: '/courses/start-learning/',
      lv3T: 'PADI Divemaster Course',
    },
    description:
      'Unlock the Door to a Career in Diving: PADI Divemaster with Bermuda Diving Center.',
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
  how: {
    heading: 'PADI Divemaster Course',
    description: [
      <p key={1}>
        Take your passion for diving to the next level and become a PADI
        Divemaster with Bermuda Diving Center.
      </p>,
      <p key={2}>
        This course is designed to transform you into a professional diver with
        skills and knowledge to lead and supervise diving activities. At Bermuda
        Diving Center, you will learn from experienced instructors and have
        access to top-notch facilities that will make your learning experience
        exceptional.
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
            You will learn about dive leadership, supervision, risk management,
            dive physics, physiology, equipment, and environment.
          </p>,
          <p key={2}>
            You will attend classroom sessions, practical workshops, and
            independent study assignments.
          </p>,
        ],
        list: [
          {
            name: 'Requirements',
            value:
              'Rescue Diver; 40 logged dives; CPR and First Aid certification within 24 months; medical clearance to dive',
          },

          { name: 'Minimum age', value: '18 years or older' },
        ],
      },
      two: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/dive-master/2.png'),
        imageAlt: 'Step 2 - Bermuda',
        tagline: 'Practical KNOWLEDGE',
        heading: 'Pool & Open Water Sessions',
        paragraphs: [
          <p key={1}>
            You will put your knowledge into practice through hands-on
            activities, including leading dives, assisting instructors,
            supervising dive activities, and conducting dive briefings and
            debriefings.
          </p>,
          <p key={2}>
            You will also refine your diving skills to demonstration quality
            under the supervision of an instructor.
          </p>,
        ],
        list: [{ name: 'Duration', value: 'Approximately 50 hours ' }],
      },
      three: {
        imageSrc: getAssetsUrl('/images/pages/courses/steps/dive-master/3.png'),
        imageAlt: 'Step 3 - Bermuda',
        tagline: 'Certified Diver',
        heading: 'Certification',
        paragraphs: [
          <p key={1}>
            Upon completion of the course, you will be a certified PADI
            Divemaster by Bermuda Diving Center, which qualifies you to work in
            the diving industry as an instructional assistant, lead dives, and
            supervise dive activities.
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
          'Become a professional in the diving industry',
          'Develop your diving knowledge and skills to a higher level',
          'Gain more experience in leading and supervising diving activities',
        ],
      },
    ],
    includes: [
      'PADI Divemaster eLearning',
      'DAN insurance',
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
        question: 'What is the PADI Divemaster Course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Divemaster Course is the first professional level in the
              PADI system of diving education. It is designed to train
              experienced and knowledgeable divers to become leaders and mentors
              to other divers.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the Requirements for the PADI Divemaster Course?',
        answer: (
          <div className="wrapper">
            <p>
              To enroll in the PADI Divemaster Course, you must be at least 18
              years old, have a minimum of 40 logged dives, and be certified as
              a PADI Rescue Diver or equivalent from another recognized training
              organization. You must also have completed Emergency First
              Response Primary and Secondary Care training within the past 24
              months, and have a medical statement signed by a physician within
              the last 12 months.
            </p>
          </div>
        ),
      },
      {
        question: 'What skills will I learn during the PADI Divemaster Course?',
        answer: (
          <div className="wrapper">
            <p>
              The PADI Divemaster Course will teach you leadership skills, dive
              theory, risk management, and how to supervise dive activities and
              assist with student divers. You will also learn how to conduct and
              lead various PADI programs, such as Discover Scuba Diving and PADI
              Skin Diver courses.
            </p>
          </div>
        ),
      },
      {
        question: 'How long does the PADI Divemaster Course take to complete?',
        answer: (
          <div className="wrapper">
            <p>
              The length of the PADI Divemaster Course varies depending on the
              individual’s schedule and pace of learning. It typically takes
              several weeks to several months to complete.
            </p>
          </div>
        ),
      },
      {
        question: 'What are the benefits of becoming a PADI Divemaster?',
        answer: (
          <div className="wrapper">
            <p>
              Becoming a PADI Divemaster is a significant accomplishment in the
              diving community. It allows you to work in the diving industry and
              lead dive trips, assist instructors with courses, and mentor other
              divers. It is also a step towards becoming a PADI Open Water Scuba
              Instructor, the next level of professional diving education.
            </p>
          </div>
        ),
      },
      {
        question:
          'What equipment do I need for the PADI Advanced Open Water course?',
        answer: (
          <div className="wrapper">
            <p>
              You must have full diving gear, a dive computer and a surface
              marker buoy (SMB).
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
          '/images/pages/courses/thumbnails/assistant-instructor.png'
        ),
        title: 'PADI Assistant',
        title2: 'Instructor Course',
        price: '4,499',
        vat: true,
        tagline:
          'Elevate your diving career and share your love for the underwater world with PADI Assistant Instructor Course.',
        cta_text: 'Learn more',
        cta_icon: '>',
        cta_link: '/courses/become-a-pro/assistant-instructor',
      },
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
    ],
  },
  fixedMenu: {
    button: {
      href: '/reservation',
      text: 'Enroll Now',
    },
  },
};

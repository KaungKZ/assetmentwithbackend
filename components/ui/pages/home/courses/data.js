import { getAssetsUrl } from '../../../../../lib/func/image';

export const coursesData = [
  {
    image_url: getAssetsUrl('/images/pages/courses/thumbnails/open-water.png'),
    title: 'PADI Open Water',
    title2: 'Course',
    price: '1,499',
    vat: true,
    tagline:
      'Dive into a new world with our Open Water Course and explore the depths like never before!',
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/courses/start-learning/open-water-course',
    twoInOne: false,
  },
  {
    image_url: getAssetsUrl(
      '/images/pages/courses/thumbnails/advanced-open-water.png'
    ),
    title: 'PADI Advanced Open',
    title2: 'Water Course',
    price: '1,299',
    vat: true,
    tagline:
      'Take your diving skills to the next level with our Advanced Open Water Course and explore the underwater world!',
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/courses/continue-education/advanced-open-water-course',
    twoInOne: false,
  },
  {
    image_url: getAssetsUrl(
      '/images/pages/courses/thumbnails/enriched-air-diver.png'
    ),
    title: 'PADI Enriched Air Diver',
    title2: 'Course (Nitrox)',
    price: '799',
    vat: true,
    tagline:
      'Extend your bottom time and increase your diving duration with our Enriched Air Diver (Nitrox) course!',
    cta_text: 'Learn more',
    cta_icon: '>',
    cta_link: '/courses/continue-education/enriched-air-diver',
    twoInOne: false,
  },
];

import Link from 'next/link';
import GCard from '../../../internals/sections/content-group/Card';
import LinkButton from '../../../buttons/LinkButton';

const CoursesSection = ({ data }) => {
  return (
    <div className="container pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-bold">
            Dive with Confidence:{' '}
            <span className="text-bermuda-200">PADI Certification Courses</span>
          </h2>
          <p>Join the thousands of divers who have taken these courses!</p>
        </div>

        <div className="hidden lg:block">
          <LinkButton href="/courses" lg>
            View All Courses
          </LinkButton>
        </div>
      </div>
      <div className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 gap-8 font-thin lg:grid-cols-3">
          {data.map((course, index) => (
            <GCard key={index} data={course} />
          ))}
        </div>

        <div className="flex justify-center mt-12 lg:hidden">
          <LinkButton href="/courses" lg>
            View All Courses
          </LinkButton>
        </div>
      </div>

      <div className="mt-8 text-center md:mt-12">
        <Link className="text-base" href="/courses/refresher/reactivate">
          Reactivate
        </Link>{' '}
        your skills and dive back into the blue if your last dive was 6 months
        ago.
      </div>
    </div>
  );
};

export default CoursesSection;

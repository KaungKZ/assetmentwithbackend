import LinkButton from '../../../buttons/LinkButton';
import Card from '../../../pages/home/card';
import GCard from './Card';

const ContentGroup = ({
  heading,
  description,
  data,
  btnText,
  btnLink,
  courses = null,
}) => {
  return (
    <div className="text-center">
      <h2 className="mb-4 text-2xl lg:text-3xl">
        {heading || 'Find Your Next Favourite'}
      </h2>
      {description && <p className="text-gray-600">{description}</p>}

      {courses?.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3">
          {courses.map((course, index) => (
            <GCard key={index} data={course} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3">
          {data.map((item, index) => (
            <Card key={index} data={item} priceClassName="text-gray-800" />
          ))}
        </div>
      )}

      {btnLink && btnText && (
        <div className="mt-12">
          <LinkButton href={btnLink}>{btnText}</LinkButton>
        </div>
      )}
    </div>
  );
};

export default ContentGroup;

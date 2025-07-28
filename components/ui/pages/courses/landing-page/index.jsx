import { ubuntu } from '../../../../../lib/func/fonts';
import GCard from '../../../internals/sections/content-group/Card';

const LandingPageCoursesSection = ({ collections }) => {
  return (
    <div className="container py-16">
      <div className="space-y-10">
        {collections?.map((collection, index) => {
          const getCollectionHTMLId = (name) => {
            if (index === 0) return;

            return name.toLowerCase().replaceAll(' ', '-');
          };

          return (
            <div
              id={getCollectionHTMLId(collection.name)}
              key={collection.id}
              className="pb-16 mb-16 border-b border-gray-300 scroll-mt-[135px] last:border-b-0 last:pb-0 last:mb-0"
            >
              <div>
                <h2
                  className={`text-2xl border-l-4 border-l-bermuda-200 text-bermuda-200 pl-2 font-semibold ${ubuntu.className}`}
                >
                  {collection.name}
                </h2>
                <p className={`${ubuntu.className} mt-2`}>
                  {collection.tagline}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                {collection.children.map((course) => {
                  return <GCard key={course.id} data={course} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPageCoursesSection;

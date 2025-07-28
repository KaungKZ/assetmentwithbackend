import PackageCard from './PackageCard';

const RelatedPackages = ({ data }) => {
  return (
    <section className="container -mt-8 border-t border-gray-200 sm:mt-0 py-14">
      <h2 className="mb-4 text-2xl lg:text-3xl">More Packages</h2>

      <div className="grid gap-10 mt-8 text-center sm:grid-cols-3">
        {data.length > 0 &&
          data.map((pkg) => {
            return (
              <PackageCard
                key={pkg.id}
                id={pkg.id}
                title_1={pkg.title_1}
                title_2={pkg.title_2}
                promo={pkg.promo}
                price={pkg.price}
                promoPrice={pkg.promoPrice}
                description={pkg.description}
                tagline={pkg.tagline}
                img={pkg.thumbnail}
                learnMoreLink={pkg.learnMoreLink}
                trackingIds={pkg.trackingIds}
                hightlightOnImage={pkg.hightlightOnImage}
              />
            );
          })}
      </div>
    </section>
  );
};

export default RelatedPackages;

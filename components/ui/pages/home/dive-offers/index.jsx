import Card from '../card';

const DiveOffersSection = ({ data }) => {
  const { normal_dsd, special_dsd } = data;

  return (
    <div className="container mt-12 mb-14 md:mt-20 md:mb-20">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-bgray">
          <span className="text-red-700">Promo</span> Try Scuba Diving{' '}
          <span className="text-bermuda-200">
            Without Even Knowing How To Swim
          </span>
        </h2>
        <p>
          Three Exciting Try Scuba Diving Packages with Unique Bonus Activities.
        </p>
      </div>

      <div className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 gap-8 font-thin lg:grid-cols-3">
          {normal_dsd.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 gap-8 font-thin lg:grid-cols-3">
          {special_dsd.map((data, index) => (
            <Card
              key={index}
              data={data}
              priceClassName="text-black"
              promoPriceClassName="text-gray-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiveOffersSection;

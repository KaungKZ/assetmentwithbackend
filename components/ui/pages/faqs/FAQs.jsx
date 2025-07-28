import Column from './Column';
import { faqData } from './data';

const FAQs = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 select-none lg:gap-x-10 lg:gap-y-4 md:grid-cols-2">
        <div className="col-span-1">
          <Column column={faqData.firstCol} />
        </div>

        <div className="col-span-1">
          <Column column={faqData.secondCol} last={true} />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

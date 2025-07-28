import Link from 'next/link';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const Column = ({ column, last = false }) => {
  const [faqs, setFaqs] = useState(column);

  const toggleFaqs = (index) => {
    setFaqs(
      faqs.map((faq, faqIndex) => {
        if (faqIndex === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div
          className={`border-b border-gray-200 pb-[13px] pt-3 ${
            last ? 'last:border-b-0' : 'lg:last:border-b-0'
          } cursor-pointer`}
          key={index}
          onClick={() => toggleFaqs(index)}
        >
          <div className="z-0 flex items-center justify-between text-gray-700">
            <span className="mr-2">{faq.question} </span>
            <BiChevronDown
              size={22}
              className={`${
                faq.open ? 'rotate-180 text-bermuda-200' : 'rotate-0'
              } duration-300`}
            />
          </div>

          <div
            className={`${
              faq.open ? 'max-h-24' : 'max-h-0'
            } text-gray-500 text-sm mt-1 mr-4 duration-500 transition-height overflow-hidden`}
          >
            {faq.answer}

            {faq.link && (
              <Link className="block mt-1 text-black" href={faq.link}>
                {faq.linkText}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Column;

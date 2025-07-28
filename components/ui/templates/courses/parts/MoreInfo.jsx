import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MoreInfo = ({ heading, description, items, wrapperClassName }) => {
  return (
    <div className={twMerge('bg-white', wrapperClassName)}>
      <div className="mx-auto mt-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="mb-4 text-3xl font-medium tracking-tight sm:mb-0 text-bgray">
              {heading}
            </h2>
            {description || (
              <p className="hidden mt-4 mb-5 text-gray-500 sm:block lg:mb-0">
                Can’t find the answer you’re looking for? Reach out to our{' '}
                <Link
                  href="/contact"
                  className="font-medium text-bermuda-100 hover:text-bermuda-200"
                >
                  customer support
                </Link>{' '}
                team.
              </p>
            )}
          </div>
          <div className="lg:col-span-2 lg:mt-0">
            <dl className="space-y-3">
              {items.map((faq) => (
                <Disclosure as="div" key={faq.question}>
                  {({ open }) => (
                    <>
                      <dt className="p-4 text-lg border border-gray-200">
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                          <span className="font-normal text-gray-900">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            <BiChevronDown
                              className={classNames(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform duration-300'
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel
                        as="dd"
                        className="p-4 border border-t-0 border-gray-200"
                      >
                        {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
          {description || (
            <p className="mt-4 mb-5 text-gray-500 sm:hidden lg:mb-0">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <Link
                href="/contact"
                className="font-medium text-bermuda-100 hover:text-bermuda-200"
              >
                customer support
              </Link>{' '}
              team.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

import { twMerge } from 'tailwind-merge';
import { calculateContributionAmount } from '../../../../lib/func/donation';
import { getMoney } from '../../../../lib/func/money';
import { useCheckoutContext } from '../../../../lib/store/checkout/CheckoutContext';
import { contributionAmountOptions, contributionReasonOptions } from './data';
import Image from 'next/image';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import SimpleModal from '../../modals/SimpleModal';
import { useState } from 'react';

const CheckoutDonation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { actions, reservation } = useCheckoutContext();
  const { option, amount, reason, isNamePrivate } = reservation.contribution;
  const noContribution = option === 'no_contribution';
  const contributeCustomAmount = option === 'contribute_custom_amount';
  const contributeTheChange = option === 'contribute_the_change';

  const optionHandler = (option) => {
    let contributionAmount = 0;

    if (option === 'contribute_custom_amount') {
      contributionAmount = 30;
    } else if (option === 'contribute_the_change') {
      contributionAmount = calculateContributionAmount(reservation.subTotal);
    }

    actions.setContribution({
      option,
      amount: contributionAmount,
      reason: option === 'no_contribution' ? '' : 'beach_cleanup',
      isNamePrivate: option === 'no_contribution' ? false : isNamePrivate,
    });
  };

  const amountHandler = (option, amount) => {
    if (!contributeCustomAmount) return;

    actions.setContribution({
      option,
      amount,
      reason: 'beach_cleanup',
      isNamePrivate,
    });
  };

  const reasonHandler = (reason) => {
    if (noContribution) return;

    actions.setContribution({
      option,
      amount,
      reason,
      isNamePrivate,
    });
  };

  return (
    <div className="p-6 mt-8 bg-white shadow-md rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base">Scuba Community Contribution</h4>

        <span title="Click to see more details">
          <AiOutlineQuestionCircle
            size={22}
            className="cursor-pointer"
            onClick={() => setModalOpen(true)}
          />
        </span>
      </div>

      <ul>
        <li>
          <ul className="space-y-1">
            <li className="flex items-center justify-between gap-2 text-sm text-black">
              <div className="flex items-center gap-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={option === 'no_contribution'}
                    onChange={() => optionHandler('no_contribution')}
                    className="primary-checkbox"
                  />
                  <span>No, thanks.</span>
                </label>
              </div>

              {option === 'no_contribution' && (
                <div>
                  <span className="font-bold text-red-600">{getMoney(0)}</span>
                </div>
              )}
            </li>
            <li className="flex items-center justify-between gap-2 text-sm text-black">
              <div className="flex items-center gap-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={option === 'contribute_the_change'}
                    onChange={() => optionHandler('contribute_the_change')}
                    className="primary-checkbox"
                  />
                  <span>Contribute the change</span>
                </label>
              </div>

              {option === 'contribute_the_change' && (
                <div>
                  <span className="font-bold text-green-600">
                    {getMoney(
                      calculateContributionAmount(reservation.subTotal)
                    )}
                  </span>
                </div>
              )}
            </li>
            <li className="text-sm text-black">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={option === 'contribute_custom_amount'}
                      onChange={() => optionHandler('contribute_custom_amount')}
                      className="primary-checkbox"
                    />
                    <span>Contribute custom amount</span>
                  </label>
                </div>

                {option === 'contribute_custom_amount' && (
                  <div>
                    <span className="font-bold text-green-600">
                      {getMoney(amount)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center mt-2.5 space-x-2 font-bold">
                {contributionAmountOptions.map((option) => (
                  <div
                    className={twMerge(
                      'px-2 py-1 font-medium duration-300 border text-xs border-gray-600 rounded cursor-pointer hover:bg-gray-100',
                      amount === option.amount && contributeCustomAmount
                        ? 'bg-gray-800 text-white hover:bg-gray-600'
                        : null,
                      contributeCustomAmount
                        ? ''
                        : 'border-gray-400 text-gray-400 cursor-default hover:bg-white'
                    )}
                    key={option.label}
                    onClick={() =>
                      amountHandler('contribute_custom_amount', option.amount)
                    }
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </li>

            <li className="text-sm text-black">
              <div className="pt-4">
                <div className="flex space-x-2">
                  {contributionReasonOptions.map((option) => {
                    const active = reason === option.reason;

                    return (
                      <div
                        key={option.label}
                        className={twMerge(
                          'flex-1 duration-300 border rounded group',
                          !noContribution && 'cursor-pointer hover:bg-gray-100',
                          contributeCustomAmount
                            ? 'border-gray-600'
                            : 'border-gray-400'
                        )}
                        onClick={() => reasonHandler(option.reason)}
                      >
                        <div
                          className={twMerge(
                            'overflow-hidden',
                            active && 'bg-gray-800 text-white hover:bg-gray-600'
                          )}
                        >
                          <Image
                            src={option.src}
                            alt={option.label}
                            width={300}
                            height={200}
                            className={twMerge(
                              'object-cover w-full h-full duration-300',
                              noContribution
                                ? 'grayscale'
                                : 'grayscale-0 group-hover:scale-105'
                            )}
                          />
                        </div>

                        <div
                          className={twMerge(
                            'flex items-center justify-center duration-300 h-[45px] text-center',
                            active && 'bg-gray-800 text-white hover:bg-gray-600'
                          )}
                        >
                          <span
                            className={twMerge(
                              'text-[10px] leading-4',
                              contributeCustomAmount || contributeTheChange
                                ? ''
                                : 'text-gray-400'
                            )}
                          >
                            {option.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>

            {option !== 'no_contribution' ? (
              <li className="pt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isNamePrivate}
                    onChange={() =>
                      actions.setContribution({
                        option,
                        reason,
                        amount,
                        isNamePrivate: !isNamePrivate,
                      })
                    }
                    className="primary-checkbox"
                  />
                  <span className="text-xs">
                    Do not include my name in public announcements!
                  </span>
                </label>
              </li>
            ) : null}
          </ul>
        </li>
      </ul>

      <SimpleModal
        width="sm:w-[530px] w-full"
        open={modalOpen}
        setOpen={setModalOpen}
      >
        <h6 className="py-2 text-lg text-center">
          Scuba Community Contribution
        </h6>

        <div className="my-4">
          <p className="text-sm text-center">
            At Bermuda Diving Center, we&apos;re not just passionate about scuba
            diving; we&apos;re committed to making a positive impact on our
            oceans and communities. From beach cleanups to inclusive diving
            experiences, we invite you to join us in taking meaningful action.
          </p>

          <div className="flex flex-col items-start mt-8 space-y-4 sm:space-y-0 sm:space-x-2 sm:flex-row">
            {contributionReasonOptions.map((option) => (
              <div key={option.label} className="flex-1">
                <Image
                  src={option.src}
                  alt={option.label}
                  width={300}
                  height={200}
                  className="w-full rounded"
                />

                <h5 className="mt-2 mb-1 text-sm text-gray-800">
                  {option.label}
                </h5>

                <p className="text-sm">{option.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-center">
            We assure you that every dirham contributed will be used exclusively
            for the above-stated purposes.{' '}
            <span className="font-semibold text-black">
              The Bermuda Diving Center does not retain any profits or benefits
              from these charity projects.
            </span>{' '}
            We believe in transparency, and as such, regular updates on the
            progress and impact of these initiatives will be available on our
            website and social media channels. Join us in our mission, be a part
            of our journey to safeguard our oceans and extend its wonders to
            all.
          </p>

          {/* <p className="mt-4 text-sm text-center">
            Bermuda Diving Center with ❤️
          </p> */}
        </div>
      </SimpleModal>
    </div>
  );
};

export default CheckoutDonation;

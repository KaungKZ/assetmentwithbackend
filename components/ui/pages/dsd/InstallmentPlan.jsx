const InstallmentPlan = ({ course = true }) => {
  return (
    <div>
      <p className="text-base text-white">
        We are pleased to offer interest-free installment payment option for up
        to three months. Zero Interest. To avail:
      </p>

      <ul className="my-3 ml-4 list-disc">
        <li className="text-base text-white">
          Simply click the {course ? '"Enroll Now"' : '"Book Now"'} button.
        </li>
        <li className="text-base text-white">
          Proceed payment with an option called &apos;Cashew&apos;.
        </li>
        <li className="text-base text-white">
          Complete the payment process as usual using any UAE debit or credit
          card.
        </li>
      </ul>

      <p className="text-base text-white">
        Once the payment is confirmed, you will receive an email confirming the
        payment details and the payment schedule.
      </p>
    </div>
  );
};

export default InstallmentPlan;

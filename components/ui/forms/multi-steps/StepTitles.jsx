const StepTitles = ({
  heading,
  rightHead,
  subHeading,
  titles,
  activeStepIndex,
}) => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center mb-5 text-center">
        <h1 className="lg:w-[350px] text-lg font-bold lg:text-xl">
          {heading}{' '}
          {rightHead && (
            <span
              className={
                heading.length <= 18 ? '' : 'block text-gray-900 font-normal'
              }
            >
              {rightHead}
            </span>
          )}
        </h1>

        {subHeading && <p>{subHeading}</p>}
      </div>

      <p className="mt-3 mb-5 text-black">
        {titles.map((title, index) => (
          <span key={index}>{index === activeStepIndex && title}</span>
        ))}
      </p>
    </div>
  );
};

export default StepTitles;

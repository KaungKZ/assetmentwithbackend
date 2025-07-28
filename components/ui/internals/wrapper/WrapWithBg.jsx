const WrapWithBg = ({ width, children, minHeight }) => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className={` ${minHeight || 'min-h-[calc(100vh-97px)]'} w-full`}>
        <div
          className={`container flex flex-col items-center justify-center w-full ${
            minHeight || 'min-h-[calc(100vh-97px)]'
          } lg:py-16`}
        >
          <div
            className={`bg-[#fff] ${
              width || 'lg:w-[400px]'
            } w-full rounded-xl px-6 lg:px-12 py-11 shadow-lg my-10 lg:my-0`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapWithBg;

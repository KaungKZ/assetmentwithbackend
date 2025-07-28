const Loader = () => {
  return (
    <div className={`fixed z-50 inset-0 bg-black/60`}>
      <div className="flex items-center justify-center h-full">
        <svg
          className="loader-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="loader-path" cx="50" cy="50" r="40" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;

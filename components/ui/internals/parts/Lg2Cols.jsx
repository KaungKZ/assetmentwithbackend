const Lg2Cols = ({ col1, col2 }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="lg:col-span-1">{col1}</div>
      <div className="lg:col-span-1">{col2}</div>
    </div>
  );
};

export default Lg2Cols;

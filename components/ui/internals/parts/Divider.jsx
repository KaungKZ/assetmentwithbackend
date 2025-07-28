const Divider = ({ width, margin, style }) => {
  return (
    <div className="flex justify-center">
      <span
        className={`${margin || 'm-auto'} ${
          width || 'w-full'
        } border border-gray-100 ${style || ''}`}
      />
    </div>
  );
};

export default Divider;

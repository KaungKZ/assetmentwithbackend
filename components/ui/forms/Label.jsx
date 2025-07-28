const Label = ({ htmlFor, children, isRequired = true, w }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block items-center justify-between text-sm font-medium text-gray-700 ${
        w || ''
      }`}
    >
      <span>
        {children} {isRequired && <span className="text-red-500">*</span>}
      </span>
    </label>
  );
};

export default Label;

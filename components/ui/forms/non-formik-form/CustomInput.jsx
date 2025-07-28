import React from 'react';

const CustomInput = ({ label, isRequired = true, ...props }) => {
  return (
    <div className="flex-1">
      {label && (
        <div className="space-x-1">
          <label className="text-xs">{label}</label>

          {isRequired && <span className="text-red-500">*</span>}
        </div>
      )}

      <input
        {...props}
        className="w-full px-2 py-1.5 text-xs border border-gray-400 rounded focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

export default CustomInput;

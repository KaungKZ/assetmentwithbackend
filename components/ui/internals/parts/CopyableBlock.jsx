import { useState } from 'react';
import { copyLink } from '../../../../lib/func/text';

const CopyableBlock = ({ label, value, ...props }) => {
  const [copyText, setCopyText] = useState('Copy');

  const clickHandler = () => {
    copyLink(value);
    setCopyText('Copied');

    setTimeout(
      () => {
        setCopyText('Copy');
      },
      2000,
      clearTimeout
    );
  };

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div>
        <div className={`mt-1 rounded-md shadow-sm relative`}>
          <input
            {...props}
            className={`block w-full focus:outline-none sm:text-sm focus:ring-bermuda-100 hover:border-bermuda-100 border-gray-300 rounded`}
            disabled
            type="text"
            value={value || 'N/A'}
          />

          {value && (
            <span
              onClick={clickHandler}
              className="absolute top-0 right-0 h-[80%] rounded cursor-pointer px-2 hover:bg-gray-300 pt-[8px] md:pt-[7px] my-1 mr-1 text-xs bg-gray-200"
            >
              {copyText}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CopyableBlock;

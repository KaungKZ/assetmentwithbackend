import { HiX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

const ModalCloseButton = ({ setOpen, className }) => {
  return (
    <div className="absolute top-0 right-0 pt-4 pr-4 sm:pt-3">
      <button
        type="button"
        className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none"
        onClick={() => setOpen(false)}
      >
        <span className="sr-only">Close</span>
        <HiX
          className={twMerge('w-4 h-4 sm:h-6 sm:w-6', className)}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default ModalCloseButton;

import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ModalCloseButton from '../buttons/ModalCloseButton';

const SimpleModal = ({
  open,
  setOpen,
  title,
  children,
  width,
  bodyMT,
  mainPadding,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment} className="z-50">
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative overflow-hidden text-left w-full transition-all transform bg-white rounded-lg shadow-xl sm:my-8 ${
                  width || 'sm:max-w-lg'
                }`}
              >
                <ModalCloseButton setOpen={setOpen} />

                <div className={mainPadding || 'px-4 py-3'}>
                  {title && (
                    <h3 className="pb-2 border-b sm:text-lg border-b-gray-200">
                      {title}
                    </h3>
                  )}

                  <div className={bodyMT || ''}>{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SimpleModal;

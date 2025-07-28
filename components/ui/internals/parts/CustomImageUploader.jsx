import { useRef, useState } from 'react';
import { HiOutlineEye, HiX } from 'react-icons/hi';
import SimpleModal from '../../modals/SimpleModal';

const CustomImageUploader = ({
  title,
  src,
  height,
  field,
  setFieldValue,
  requirement,
  showImage = true,
}) => {
  const ref = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);

  const clickHandler = (imgClick) => {
    if ((previewUrl && !imgClick) || src) return;

    ref.current.click();
  };

  const inputChangeHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setFieldValue(field, file);
    }
  };

  const removeImageHandler = () => {
    setPreviewUrl(null);
    setSelectedFile(null);
    setFieldValue(field, null);
  };

  return (
    <div>
      {title && <h3 className="mb-2 text-sm text-gray-500">{title}</h3>}

      <div
        onClick={() => clickHandler(false)}
        className={`relative flex overflow-hidden items-center justify-center w-full border ${
          height || 'h-48'
        } ${
          previewUrl || src
            ? 'border-gray-200'
            : 'border-gray-300 border-dashed'
        } rounded-md`}
      >
        {selectedFile && (
          <>
            <span className="absolute bg-gray-100 px-2 py-0.5 rounded-md z-10 text-[10px] text-gray-500 top-2 left-2">
              {(selectedFile.size / 1000000).toFixed(2)} MB
            </span>

            <span
              onClick={removeImageHandler}
              title="Cancel"
              className="absolute z-10 px-1 p-1 text-[12px] hover:bg-gray-200 text-gray-500 bg-gray-100 rounded-full cursor-pointer right-2 top-2"
            >
              <HiX />
            </span>

            <span
              onClick={() => setViewOpen(true)}
              title="View"
              className="absolute z-10 p-1 text-[12px] hover:bg-gray-200 text-gray-500 bg-gray-100 rounded-full cursor-pointer right-2 top-[34px]"
            >
              <HiOutlineEye />
            </span>
          </>
        )}

        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewUrl}
            alt="preview"
            className="w-full bg-cover rounded-md"
            onClick={() => clickHandler(true)}
          />
        ) : !previewUrl && src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="preview" className="w-full bg-cover rounded-md" />
        ) : (
          <span className="text-sm text-gray-400">Click here to upload</span>
        )}
      </div>

      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={ref}
        onChange={inputChangeHandler}
      />

      <span className="text-xs text-gray-500">
        {requirement || '1280px by 960px Or 4:3 | Max 5 MB'}
      </span>

      {showImage && (
        <SimpleModal open={viewOpen} setOpen={setViewOpen} mainPadding="p-0">
          {previewUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={previewUrl} className="w-full" alt="preview" />
          )}
        </SimpleModal>
      )}
    </div>
  );
};

export default CustomImageUploader;

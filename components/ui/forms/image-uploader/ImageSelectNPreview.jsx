/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';

import { RxCross2 } from 'react-icons/rx';

import { CiEdit } from 'react-icons/ci';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useFormikContext } from 'formik';
import { formatBytesToMB, nofChars } from '../../../../lib/func/text';

const ImageSelectNPreview = ({
  fileType,
  aspectRatio,
  isRequired = false,
  label = 'Upload Image',
  name,
  setModelOpen,
  maxSize,
}) => {
  const fileInputRef = useRef(null);
  const { setFieldValue, values, errors, touched } = useFormikContext();

  const image = values[name];
  const imgUrl = !!image ? URL.createObjectURL(image) : null;

  const errMsg = errors[name] && touched[name];

  const fileRemoveHandler = () => {
    setFieldValue(name, null);
  };

  const fileChangeHandler = (e) => {
    const imageFile = e.target.files[0];
    const sizeIsValid = imageFile.size < maxSize;

    if (imageFile && sizeIsValid) {
      setFieldValue(name, imageFile);

      setTimeout(() => {
        setModelOpen(true);
      }, 300);
    } else {
      setFieldValue(name, null);
    }
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-sm">
          {label} {isRequired ? <span className="text-red-500">*</span> : null}
        </label>

        {values[name] && !errMsg ? (
          <button
            className="px-1 py-0.5 text-[10px] border flex hover:bg-gray-100 duration-300 items-start gap-0.5 border-gray-800 rounded"
            onClick={() => setModelOpen(true)}
          >
            EDIT <CiEdit size={14} />
          </button>
        ) : null}
      </div>

      <div
        className={`border ${
          image && !errMsg
            ? 'bg-gray-100 rounded-lg border-gray-200'
            : errMsg
            ? 'border-red-500 rounded'
            : 'rounded border-gray-200'
        }`}
      >
        <div className="relative flex items-center justify-center">
          {image && !errMsg ? (
            <div
              className="relative m-3 overflow-hidden rounded-lg"
              style={{ aspectRatio }}
            >
              <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>

              <div className="absolute right-0 top-1 left-2">
                <p className="text-xs text-white">{nofChars(image.name, 27)}</p>
                <p className="text-[10px] text-white">
                  {formatBytesToMB(image.size)}
                </p>
              </div>

              <img
                src={imgUrl}
                alt={`tempo-${name}-img`}
                className="object-cover w-full h-full"
              />

              <div
                className="absolute p-1 duration-300 bg-black border border-transparent rounded-full cursor-pointer hover:border-white hover:bg-black/50 top-2 right-2"
                onClick={fileRemoveHandler}
              >
                <RxCross2 color="white" size={12} className="font-bold" />
              </div>
            </div>
          ) : (
            <div
              onClick={() => {
                fileInputRef.current.click();
              }}
              className="flex items-center justify-center w-full py-5 cursor-pointer"
            >
              <div className="text-center">
                <p className="text-xs text-gray-600">
                  Click To <span className="text-xs underline">Select</span>
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                name={name}
                onChange={fileChangeHandler}
                className="hidden"
                accept={fileType.join(',')}
              />
            </div>
          )}
        </div>
      </div>

      <p className={`text-[11px] ${errMsg ? 'text-red-500' : 'text-gray-500'}`}>
        Max Size: 5 MB | Type: PNG, JPEG
      </p>
    </div>
  );
};

export default ImageSelectNPreview;

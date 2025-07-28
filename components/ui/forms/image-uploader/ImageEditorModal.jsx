import React, { useMemo, useState } from 'react';
import SimpleModal from '../../../../components/ui/modals/SimpleModal';
import Cropper from 'react-easy-crop';
import { AiOutlineRotateLeft, AiOutlineRotateRight } from 'react-icons/ai';
import OutlinedButton from '../../../../components/ui/buttons/OutlinedButton';
import SimpleButton from '../../../../components/ui/buttons/SiimpleButton';
import getCroppedImg from './cropImage';
import { useFormikContext } from 'formik';

const ImageEditorModal = ({ name, modelOpen, setModelOpen, aspectRatio }) => {
  const { values, setFieldValue } = useFormikContext();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [rangeValue, setRangeValue] = useState(0);

  const generateImageUrl = useMemo(() => {
    if (values[name]) {
      return URL.createObjectURL(values[name]);
    }

    return null;
  }, [name, values]);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const croppedImageHandler = async () => {
    if (!values[name]) return;

    const url = URL.createObjectURL(values[name]);

    try {
      const croppedImage = await getCroppedImg(
        name,
        url,
        croppedAreaPixels,
        rotation
      );
      // console.log('done', { croppedImage });
      setFieldValue(name, croppedImage);
      setCrop({ x: 0, y: 0 });
      setRotation(0);
      setZoom(1);
      setRangeValue(0);
      setModelOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const rangeChangeHandler = (e) => {
    const value = parseInt(e.target.value);
    setRangeValue(value);

    // Map the slider value (1-100) to the zoom range (1-3)
    const zoomLevel = 1 + (value - 1) * (2 / 99);
    setZoom(zoomLevel);
  };

  const zoomChangeHandler = (result) => {
    setZoom(result);

    setRangeValue(parseInt(((result - 1) * 99) / 2 + 1));
  };

  const rotationChangeHandler = (direction) => {
    if (rotation === 0 && direction === 'left') {
      setRotation(270);
    } else if (rotation === 360 && direction === 'right') {
      setRotation(90);
    } else if (direction === 'left') {
      setRotation((rotation) => rotation - 90);
    } else if (direction === 'right') {
      setRotation((rotation) => rotation + 90);
    }
  };

  return (
    <SimpleModal title="Modify Image" open={modelOpen} setOpen={setModelOpen}>
      <div className="space-y-2">
        <div className="relative w-full overflow-hidden rounded h-[250px]">
          <Cropper
            image={generateImageUrl}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={aspectRatio}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={zoomChangeHandler}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 py-2">
          <div className="flex flex-col space-y-4">
            <label className="text-xs">Zoom ({rangeValue}%)</label>

            <input
              type="range"
              className="accent-bermuda-100"
              min="0"
              max="100"
              step="1"
              value={rangeValue}
              onChange={rangeChangeHandler}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs">Rotate</label>

            <div className="flex space-x-1">
              <button
                className="px-2 py-1 duration-300 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => rotationChangeHandler('left')}
              >
                <AiOutlineRotateLeft size={20} />
              </button>

              <button
                className="px-2 py-1 duration-300 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => rotationChangeHandler('right')}
              >
                <AiOutlineRotateRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <OutlinedButton width="w-full" onClick={() => setModelOpen(false)}>
            Cancel
          </OutlinedButton>
          <SimpleButton width="w-full" onClick={croppedImageHandler}>
            Done
          </SimpleButton>
        </div>
      </div>
    </SimpleModal>
  );
};

export default ImageEditorModal;

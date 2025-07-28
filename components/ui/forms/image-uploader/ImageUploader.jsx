import { useState } from 'react';
import ImageEditorModal from './ImageEditorModal';
import ImageSelectNPreview from './ImageSelectNPreview';

const ImageUploader = ({
  name,
  isRequired,
  aspectRatio = 1 / 1,
  fileType = ['image/png', 'image/jpeg'],
  maxSize = 5 * 1024 * 1024,
  label,
}) => {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <div>
      <ImageSelectNPreview
        name={name}
        setModelOpen={setModelOpen}
        isRequired={isRequired}
        aspectRatio={aspectRatio}
        fileType={fileType}
        maxSize={maxSize}
        label={label}
      />

      <ImageEditorModal
        name={name}
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        aspectRatio={aspectRatio}
      />
    </div>
  );
};

export default ImageUploader;

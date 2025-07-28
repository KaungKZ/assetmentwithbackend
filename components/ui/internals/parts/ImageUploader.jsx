import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { ErrorMessage } from 'formik';

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);

function ImageUploader({
  maxSize = '5MB',
  fileType = ['image/png', 'image/jpeg'],
  aspectRatio = '4:3',
  field,
  lang = 'en',
  setFieldValue,
  label,
}) {
  const updateFilesHandler = (files) => {
    if (files[0]) {
      setFieldValue(field, files[0].file);
    } else {
      setFieldValue(field, null);
    }
  };

  return (
    <div dir={lang === 'en' ? 'ltr' : 'rtl'}>
      <label className="block mb-1 text-sm">
        {label} <span className="text-red-500">*</span>
      </label>

      <FilePond
        imageCropAspectRatio={aspectRatio}
        labelIdle='Drag & Drop or <span class="filepond--label-action"> Browse </span>'
        styleButtonRemoveItemPosition="right"
        onupdatefiles={updateFilesHandler}
        maxFileSize={maxSize}
        acceptedFileTypes={fileType}
      />

      <span className="block -mt-2.5 text-xs text-red-500">
        <ErrorMessage name={field} />
      </span>
    </div>
  );
}

export default ImageUploader;

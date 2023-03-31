import {imgUploadPreview} from './consts.js';

const fileInput = document.querySelector('#upload-file');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgUploadPreview.src = URL.createObjectURL(file);
  }
});

import {imgUploadPreview} from './consts.js';

const fileInput = document.querySelector('#upload-file');
fileInput.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    imgUploadPreview.src = reader.result;
  });

  reader.readAsDataURL(file);
});

import {isEscapeKey} from './data.js';
import {body} from './consts.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const inputUploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');
const textHashtags = imgUploadOverlay.querySelector('.text__hashtags');
const textDescription = imgUploadOverlay.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text__error'
});

const onDocumentKeydown = (evt) => {
  if (evt.target === textHashtags || evt.target === textDescription) {
    evt.stopPropagation();
  } else {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUploadOverlay();
    }
  }
};
const onUploadFile = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeUploadOverlay() {
  imgUploadForm.reset();
  pristine.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

inputUploadFile.addEventListener('change', onUploadFile);
uploadCancel.addEventListener('click', closeUploadOverlay);

const validateComment = (value) => value.length <= 10;

pristine.addValidator(
  textDescription,
  validateComment,
  'Длина комментария не может составлять больше 140 символов'
);

const countHashTags = (value) => value.length <= 5;
const validateHashTags = (value) => {
  const hashTags = value.replace(/ +/g, ' ').trim().split(' ');
  return countHashTags(hashTags);
};

pristine.addValidator(
  textHashtags,
  validateHashTags,
  'Нельзя добавить больше 5 хэштегов'
);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
